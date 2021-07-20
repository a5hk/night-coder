var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TextmateTheme_instances, _TextmateTheme_italic;
import { TokenColorPalette } from "../common/colors.js";
export class TextmateTheme {
    constructor(palette = "") {
        _TextmateTheme_instances.add(this);
        this.palette = new TokenColorPalette(palette);
    }
    getRules(style) {
        const rules = [
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
                    foreground: this.palette.Color03.code,
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
                    foreground: this.palette.Color04.code,
                    __italic: true,
                },
            },
            {
                scope: ["entity.alias.import"],
                settings: {
                    foreground: this.palette.Color04.code,
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
                    foreground: this.palette.Color14.code,
                    __italic: true,
                },
            },
            {
                name: "default library functions and methods",
                scope: ["meta.method.declaration.js storage.type.js", "support.function"],
                settings: {
                    foreground: this.palette.Color01.code,
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
                    foreground: this.palette.Color05.code,
                },
            },
            {
                name: "non variable constant",
                scope: ["constant", "support.constant", "keyword.other.unit"],
                settings: {
                    foreground: this.palette.Color13.code,
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
                    foreground: this.palette.Color19.code,
                    __italic: true,
                },
            },
            {
                name: "parameter",
                scope: ["meta.function-call.arguments", "variable.parameter"],
                settings: {
                    foreground: this.palette.Color07.code,
                    __italic: true,
                },
            },
            {
                name: "function, method",
                scope: ["entity.name.function"],
                settings: {
                    foreground: this.palette.Color12.code,
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
                    foreground: this.palette.Color02.code,
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
                    "keyword storage.type",
                    "storage.modifier",
                    "storage.type.class",
                    "storage.type.function",
                ],
                settings: {
                    foreground: this.palette.Color20.code,
                },
            },
            {
                name: "namespace, type, struct, class, module",
                scope: [
                    "entity.name.package",
                    "entity.name.type",
                    "entity.name.class",
                    "entity.name.namespace",
                    "entity.name.module",
                    "entity.name.scope-resolution",
                    "storage.modifier.package.java",
                    "storage.type.class.po",
                    "meta.inheritance-clause",
                    "entity.other.inherited-class",
                ],
                settings: {
                    foreground: this.palette.Color15.code,
                    __italic: true,
                },
            },
            {
                name: "logical and comparison operators",
                scope: ["keyword.operator.comparison", "keyword.operator.logical"],
                settings: {
                    foreground: this.palette.Color09.code,
                },
            },
            {
                name: "types",
                scope: ["storage.type", "keyword.type"],
                settings: {
                    foreground: this.palette.Color06.code,
                },
            },
            {
                name: "operators",
                scope: ["keyword.operator"],
                settings: {
                    foreground: this.palette.Color08.code,
                },
            },
            {
                name: "String",
                scope: ["source.elixir.embedded.source", "storage.modifier.import.java", "string.quoted.double", "string"],
                settings: {
                    foreground: this.palette.Color18.code,
                },
            },
            {
                name: "embedded punctuation",
                scope: ["punctuation.definition.template-expression", "punctuation.section.embedded"],
                settings: {
                    foreground: this.palette.Color04.code,
                    __italic: true,
                },
            },
            {
                name: "punctuation",
                scope: ["meta.brace", "punctuation"],
                settings: {
                    foreground: this.palette.Color11.code,
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
                    foreground: this.palette.Color11.code,
                },
            },
            {
                scope: ["comment", "punctuation.definition.comment", "punctuation.whitespace.comment.leading.graphql"],
                settings: {
                    foreground: this.palette.Color10.code,
                    fontStyle: "italic",
                },
            },
            {
                scope: [
                    "comment.wildcard",
                    "meta.jsx.children",
                ],
                settings: {
                    foreground: this.palette.Color03.code,
                },
            },
            {
                name: "l2 json",
                scope: ["meta.structure.dictionary.value support.type.property-name.json"],
                settings: {
                    foreground: this.palette.Color20.code,
                    __italic: true,
                },
            },
            {
                name: "l3 json",
                scope: ["meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json"],
                settings: {
                    foreground: this.palette.Color06.code,
                    __italic: true,
                },
            },
            {
                name: "l4 json",
                scope: [
                    "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
                ],
                settings: {
                    foreground: this.palette.Color02.code,
                    __italic: true,
                },
            },
            {
                name: "l5 json",
                scope: [
                    "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
                ],
                settings: {
                    foreground: this.palette.Color14.code,
                    __italic: true,
                },
            },
            {
                name: "l6 json",
                scope: [
                    "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
                ],
                settings: {
                    foreground: this.palette.Color01.code,
                    __italic: true,
                },
            },
            {
                name: "l7 json",
                scope: [
                    "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
                ],
                settings: {
                    foreground: this.palette.Color15.code,
                    __italic: true,
                },
            },
            {
                name: "l8 json",
                scope: [
                    "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
                ],
                settings: {
                    foreground: this.palette.Color04.code,
                    __italic: true,
                },
            },
            {
                name: "l9 json",
                scope: [
                    "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
                ],
                settings: {
                    foreground: this.palette.Color05.code,
                    __italic: true,
                },
            },
            {
                name: "l10 json",
                scope: [
                    "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
                ],
                settings: {
                    foreground: this.palette.Color17.code,
                    __italic: true,
                },
            },
            {
                name: "l11 json",
                scope: [
                    "meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value meta.structure.dictionary.value support.type.property-name.json",
                ],
                settings: {
                    foreground: this.palette.Color19.code,
                    __italic: true,
                },
            },
            {
                scope: ["meta.tag.metadata", "markup.underline.link"],
                settings: {
                    foreground: this.palette.Color20.code,
                },
            },
            {
                scope: ["meta.tag.metadata.link", "string.other.link.title.markdown"],
                settings: {
                    foreground: this.palette.Color12.code,
                },
            },
            {
                scope: ["markup.italic"],
                settings: {
                    foreground: this.palette.Color09.code,
                },
            },
            {
                scope: ["punctuation.definition.tag"],
                settings: {
                    foreground: this.palette.Color16.code,
                },
            },
            {
                scope: ["meta.tag.inline", "entity.name.tag.js.jsx", "entity.name.tag.tsx"],
                settings: {
                    foreground: this.palette.Color01.code,
                },
            },
            {
                scope: ["meta.tag.object"],
                settings: {
                    foreground: this.palette.Color14.code,
                },
            },
            {
                scope: [
                    "meta.tag.metadata.style",
                    "source.vue entity.name.tag.style.html",
                    "string.other.link.description.markdown",
                ],
                settings: {
                    foreground: this.palette.Color15.code,
                },
            },
            {
                scope: ["meta.tag.metadata.script", "source.vue entity.name.tag.script.html"],
                settings: {
                    foreground: this.palette.Color17.code,
                },
            },
            {
                scope: ["meta.tag.custom"],
                settings: {
                    foreground: this.palette.Color13.code,
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
                    foreground: this.palette.Color19.code,
                },
            },
            {
                scope: ["entity.other.attribute-name", "meta.selector.css", "source.css.scss entity.name.tag.css"],
                settings: {
                    foreground: this.palette.Color02.code,
                    __italic: true,
                },
            },
            {
                scope: ["heading"],
                settings: {
                    foreground: this.palette.Color02.code,
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
                    foreground: this.palette.Color04.code,
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
        if (style.toLowerCase() === "italic") {
            return __classPrivateFieldGet(this, _TextmateTheme_instances, "m", _TextmateTheme_italic).call(this, rules);
        }
        return rules;
    }
}
_TextmateTheme_instances = new WeakSet(), _TextmateTheme_italic = function _TextmateTheme_italic(theme) {
    return theme.map((r) => {
        if (r.settings.__italic) {
            r.settings.fontStyle = "italic";
        }
        return r;
    });
};
