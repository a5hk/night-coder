import { colorPaletteFactory, Palette, Color } from "../common/colors.js";

export function warmVariant(): Palette {
  const p = new (colorPaletteFactory("#0f1317"))("Night Coder Warm", "Warm variant");
  p.contrastBackground = new Color("#0a0d0f");

  // token colors
  p.constantColor = new Color("#57c79c", "Constant");
  p.defaultLibraryClassTypeColor = new Color("#ffbe1a");
  p.defaultLibraryFunctionColor = new Color("#e9de63");
  p.functionCallColor = new Color("#e9de63", "Function call");
  p.functionDeclarationColor = new Color("#ff7566", "Function declaration");
  p.importColor = new Color("#99c270", "Import/Require/Use");
  p.keywordColor = new Color("#fb905b", "Keyword");
  p.literalConstantColor = new Color("#b999fa", "Literal constant");
  p.namespaceClassStructColor = new Color("#ffbe1a", "Namespace/Class/Struct");
  p.propertyColor = new Color("#f4b271", "Property");
  p.stringColor = new Color("#99c270", "String");
  p.typeColor = new Color("#ff8595", "Type");

  // markup
  p.attributeNameColor = new Color("#e9de63", "Attribute name");
  p.customTagColor = new Color("#b999fa", "HTML custom tag");
  p.headingColor = new Color("#e9de63", "Heading");
  p.inlineTagColor = new Color("#57c79c", "HTML inline tag");
  // p.italicColor=new Color("#93ecb8", "Italic")
  p.linkTagColor = new Color("#57c79c", "HTML link tag");
  p.metaTagColor = new Color("#fb905b", "HTML meta tag");
  p.objectTagColor = new Color("#fb905b", "HTML object tag");
  p.tagColor = new Color("#f4b271", "Tag");
  p.unrecognizedTagColor = new Color("#f4b271", "HTML unrecognized tag");

  // json
  p.jsonLevel01Color = new Color("#f4b271", "Level 1 JSON key");
  p.jsonLevel02Color = new Color("#57c79c", "Level 2 JSON key");
  p.jsonLevel03Color = new Color("#e9de63", "Level 3 JSON key");
  p.jsonLevel04Color = new Color("#ff7566", "Level 4 JSON key");
  p.jsonLevel05Color = new Color("#ffbe1a", "Level 5 JSON key");
  p.jsonLevel06Color = new Color("#ff8595", "Level 6 JSON key");
  p.jsonLevel07Color = new Color("#c3ab85", "Level 7 JSON key");
  p.jsonLevel08Color = new Color("#57c79c", "Level 8 JSON key");
  p.jsonLevel09Color = new Color("#e9de63", "Level 9 JSON key");
  p.jsonLevel10Color = new Color("#ff7566", "Level 10 JSON key");
  p.jsonLevel11Color = new Color("#f4b271", "Level > 10 JSON key");
  return p;
}
