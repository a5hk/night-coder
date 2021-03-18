import { tokenColorCode as color } from "../common/colors.js";
export const textmateRules = [
    {
        name: "variable",
        scope: [
            "variable.graphql",
            "variable.object.property",
            "variable.other.assignment",
            "variable.other.block.crystal",
            "variable.other.block",
            "variable.other.bracket.shell",
            "variable.other.declaration",
            "variable.other.normal.shell",
            "variable.other.object.js.jsx",
            "variable.other.object.tsx",
            "variable.other.object",
            "variable.other.php",
            "variable.other.positional.shell",
            "variable.other.readwrite.instance.crystal",
            "variable.other.readwrite",
            "variable.other.ruby",
            "variable.other",
            "variable.scss",
        ],
        settings: {
            foreground: color.FrenchGray,
        },
    },
    {
        name: "special variables",
        scope: [
            "variable.language.self",
            "variable.language.special.self",
            "variable.language.super",
            "variable.language.this",
            "variable.other.alias.yaml",
            "variable.other.class.php",
            "variable.other.constant",
            "variable.other.global.safer.php",
            "variable.other.readwrite.class.ruby",
            "variable.other.readwrite.instance.ruby",
            "variable.parameter.function.language.special.self",
            "variable.other.readwrite.instance.crystal",
            "variable.other.readwrite.module",
        ],
        settings: {
            foreground: color.Bittersweet,
            __italic: true,
        },
    },
    {
        scope: ["entity.alias.import"],
        settings: {
            foreground: color.Bittersweet,
        },
    },
    {
        name: "default library",
        scope: [
            "support.variable",
            "support.constant.color.w3c-standard-color-name",
            "support.type",
            "support.class",
            "support.other.namespace",
        ],
        settings: {
            foreground: color.PinkSalmon,
            __italic: true,
        },
    },
    {
        name: "default library functions and methods",
        scope: ["meta.method.declaration.js storage.type.js", "support.function"],
        settings: {
            foreground: color.Bermuda,
            __italic: true,
        },
    },
    {
        name: "undecided",
        scope: [
            "meta.generic-where-clause.swift",
            "meta.arguments.attribute.swift",
            "storage.type.annotation",
            "meta.attribute.rust",
        ],
        settings: {
            foreground: color.IndianKhaki,
        },
    },
    {
        name: "non variable constant",
        scope: ["constant", "support.constant", "keyword.other.unit"],
        settings: {
            foreground: color.PaleCornflowerBlue,
        },
    },
    {
        name: "property, key",
        scope: [
            "meta.object-literal.key",
            "support.type.property-name.json",
            "variable.other.property.js.jsx",
            "variable.other.property.tsx",
            "variable.other.object.property",
            "variable.other.property",
            "support.type.property-name",
        ],
        settings: {
            foreground: color.DarkSalmon,
            __italic: true,
        },
    },
    {
        name: "parameter",
        scope: ["meta.function-call.arguments", "variable.parameter"],
        settings: {
            foreground: color.Iron,
            __italic: true,
        },
    },
    {
        name: "function, method",
        scope: ["entity.name.function"],
        settings: {
            foreground: color.MonteCarlo,
        },
    },
    {
        name: "function call",
        scope: [
            "entity.name.function-call",
            "entity.name.function.call",
            "meta.function-call",
            "meta.method-call entity.name.function",
            "meta.function-call entity.name.function",
            "meta.function.call entity.name.function",
        ],
        settings: {
            foreground: color.Flax,
            __italic: true,
        },
    },
    {
        name: "keyword",
        scope: [
            "keyword.control.module",
            "keyword.control",
            "keyword.operator.expression.of",
            "keyword.operator.new",
            "keyword.other.special-method",
            "keyword.type.go",
            "keyword",
            "storage.modifier",
            "storage.type.class",
            "storage.type.function",
        ],
        settings: {
            foreground: color.Viola,
        },
    },
    {
        name: "namespace, type, struct, class, module",
        scope: [
            "entity.name.package",
            "entity.name.type",
            "entity.name.class",
            "entity.name.namespace",
            "entity.name.scope-resolution",
            "storage.modifier.package.java",
            "storage.type.class.po",
            "meta.inheritance-clause",
            "entity.other.inherited-class",
        ],
        settings: {
            foreground: color.PoloBlue,
            __italic: true,
        },
    },
    {
        name: "logical and comparison operators",
        scope: ["keyword.operator.comparison", "keyword.operator.logical"],
        settings: {
            foreground: color.MagicMint,
        },
    },
    {
        name: "types",
        scope: ["storage.type", "keyword.type"],
        settings: {
            foreground: color.DarkTurquoise,
        },
    },
    {
        name: "operators",
        scope: ["keyword.operator"],
        settings: {
            foreground: color.Jonquil,
        },
    },
    {
        name: "String",
        scope: ["source.elixir.embedded.source", "storage.modifier.import.java", "string.quoted.double", "string"],
        settings: {
            foreground: color.SwampGreen,
        },
    },
    {
        name: "embedded punctuation",
        scope: ["punctuation.definition.template-expression", "punctuation.section.embedded"],
        settings: {
            foreground: color.Bittersweet,
            __italic: true,
        },
    },
    {
        name: "punctuation",
        scope: ["meta.brace", "punctuation"],
        settings: {
            foreground: color.Mischka,
        },
    },
    {
        name: "documentation comments",
        scope: [
            "comment.documentation",
            "comment.block.documentation",
            "string.quoted.docstring.multi.python",
            "comment.block.documentation punctuation.definition.comment",
        ],
        settings: {
            foreground: color.Mischka,
        },
    },
    {
        scope: ["comment", "punctuation.definition.comment", "punctuation.whitespace.comment.leading.graphql"],
        settings: {
            foreground: color.Mako,
            fontStyle: "italic",
        },
    },
    {
        scope: [
            "comment.wildcard",
            "meta.jsx.children",
        ],
        settings: {
            foreground: color.FrenchGray,
        },
    },
    {
        name: "l2 json",
        scope: ["meta.structure.dictionary.value support.type.property-name.json"],
        settings: {
            foreground: color.Viola,
            __italic: true,
        },
    },
    {
        name: "l3 json",
        scope: ["meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json"],
        settings: {
            foreground: color.DarkTurquoise,
            __italic: true,
        },
    },
    {
        name: "l4 json",
        scope: [
            "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
        ],
        settings: {
            foreground: color.Flax,
            __italic: true,
        },
    },
    {
        name: "l5 json",
        scope: [
            "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
        ],
        settings: {
            foreground: color.PinkSalmon,
            __italic: true,
        },
    },
    {
        name: "l6 json",
        scope: [
            "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
        ],
        settings: {
            foreground: color.Bermuda,
            __italic: true,
        },
    },
    {
        name: "l7 json",
        scope: [
            "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
        ],
        settings: {
            foreground: color.PoloBlue,
            __italic: true,
        },
    },
    {
        name: "l8 json",
        scope: [
            "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
        ],
        settings: {
            foreground: color.Bittersweet,
            __italic: true,
        },
    },
    {
        name: "l9 json",
        scope: [
            "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
        ],
        settings: {
            foreground: color.IndianKhaki,
            __italic: true,
        },
    },
    {
        name: "l10 json",
        scope: [
            "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
        ],
        settings: {
            foreground: color.Sunflower,
            __italic: true,
        },
    },
    {
        name: "l11 json",
        scope: [
            "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
        ],
        settings: {
            foreground: color.DarkSalmon,
            __italic: true,
        },
    },
    {
        scope: ["meta.tag.metadata", "markup.underline.link"],
        settings: {
            foreground: color.Viola,
        },
    },
    {
        scope: ["meta.tag.metadata.link", "string.other.link.title.markdown"],
        settings: {
            foreground: color.MonteCarlo,
        },
    },
    {
        scope: ["markup.italic"],
        settings: {
            foreground: color.MagicMint,
        },
    },
    {
        scope: ["punctuation.definition.tag"],
        settings: {
            foreground: color.StormGrey,
        },
    },
    {
        scope: ["meta.tag.inline", "entity.name.tag.js.jsx", "entity.name.tag.tsx"],
        settings: {
            foreground: color.Bermuda,
        },
    },
    {
        scope: ["meta.tag.object"],
        settings: {
            foreground: color.PinkSalmon,
        },
    },
    {
        scope: [
            "meta.tag.metadata.style",
            "source.vue entity.name.tag.style.html",
            "string.other.link.description.markdown",
        ],
        settings: {
            foreground: color.PoloBlue,
        },
    },
    {
        scope: ["meta.tag.metadata.script", "source.vue entity.name.tag.script.html"],
        settings: {
            foreground: color.Sunflower,
        },
    },
    {
        scope: ["meta.tag.custom"],
        settings: {
            foreground: color.PaleCornflowerBlue,
        },
    },
    {
        scope: [
            "meta.tag.structure",
            "meta.tag",
            "entity.name.tag.yaml",
            "keyword.key.toml",
            "markup.fenced_code.block",
            "markup.inline.raw.string",
            "fenced_code.block.language",
            "markup.raw.block",
        ],
        settings: {
            foreground: color.DarkSalmon,
        },
    },
    {
        scope: ["entity.other.attribute-name", "meta.selector.css", "source.css.scss entity.name.tag.css"],
        settings: {
            foreground: color.Flax,
            __italic: true,
        },
    },
    {
        scope: ["heading"],
        settings: {
            foreground: color.Flax,
        },
    },
    {
        scope: [
            "invalid.illegal.tag-handle.yaml",
            "text.html.markdown entity.name.tag.html",
            "text.html.markdown punctuation.definition.tag",
            "meta.tag.other.unrecognized",
            "source.vue entity.name.tag.template.html",
        ],
        settings: {
            foreground: color.Bittersweet,
        },
    },
    {
        scope: ["markup.bold", "punctuation.definition.bold"],
        settings: {
            fontStyle: "bold",
        },
    },
    {
        scope: ["markup.italic", "punctuation.definition.italic", "markup.quote.markdown"],
        settings: {
            fontStyle: "italic",
        },
    },
];
