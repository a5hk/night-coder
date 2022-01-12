import { exec } from "child_process";
import { dirname } from "path";
import { promisify } from "util";

const pExec = promisify(exec);

async function getCommitID() {
  const { stdout, stderr } = await pExec('git log --format="%H" -n 1');
  console.log(`Commit ID is: ${stdout.trim()}`, stderr.trim());
  return stdout.trim();
}

const githubRepo = "https://github.com/a5hk/night-coder";
const commitID = await getCommitID();
const baseContentUrl = `${githubRepo}/blob/${commitID}`;
const baseImagesUrl = `${githubRepo}/raw/${commitID}`;
const cdCommand = `cd ${dirname(process.argv[1])}/../color-themes/vscode`;
const vsceCommand = `vsce package --baseContentUrl=${baseContentUrl} --baseImagesUrl=${baseImagesUrl}`;

exec(`${cdCommand} && ${vsceCommand}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`An error occurred while packaging: ${error}`);
    return;
  }
  console.log(stdout.trim(), stderr.trim());
});
