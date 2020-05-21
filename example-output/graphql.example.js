"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const p = __importStar(require("."));
// 2.1.7: Includes commas, and line comments
const ignored = p.regex(/([\s,]|#[^\n\r]+)+/);
// 2.1.9: Limited to ASCII character set, so regex shortcodes are fine
const name = p.regex(/[_\w][_\d\w]*/).result((x) => ({
    kind: 'Name',
    value: x[0],
}));
const null_ = p.string('null').result(() => ({ kind: 'NullValue', value: null }));
const bool = p.regex(/true|false/).result((x) => ({
    kind: 'BooleanValue',
    value: x[0] === 'true',
}));
const variable = p.chain(p.regex(/[$]/), name).result((_, name) => ({
    kind: 'Variable',
    value: name,
}));
// 2.9.6: Technically, this parser doesn't need to check that true, false, and null
// aren't used as enums, but this prevents mistakes and follows the spec closely
const enum_ = p.wrapResult(p.negativeLookahead('Enum values cannot be true, false or null', p.regex(/true|false|null/), name), (name) => ({
    kind: 'EnumValue',
    value: name,
}));
// 2.9.1-2: These combine both number values for the sake of simplicity.
// It allows for leading zeroes, unlike graphql.js, which shouldn't matter;
const number_ = p
    .chain(p.regex(/[-]?\d+/), p.optional(p.regex(/[.]\d+/)), p.optional(p.regex(/[eE][+-]?\d+/)))
    .result((...x) => ({
    kind: x.filter(Boolean).length === 1
        ? 'IntValue'
        : 'FloatValue',
    value: x.join(''),
}));
// 2.9.4: Notably, this skips checks for unicode escape sequences and escaped
// quotes. This is mainly meant for client-side use, so we won't have to be strict.
const string_ = p.wrapResult(p.oneOf(p.chain(p.regex(/"""/), p.regex(/.*(?=""")/), p.regex(/"""/)), p.chain(p.regex(/"/), p.regex(/[^"\r\n]*/), p.regex(/"/))), ([_start, value, _end]) => ({
    kind: 'StringValue',
    value,
}));
const rawValue = p.oneOf(null_, bool, variable, string_, number_, enum_);
const valueDeferred = p.deferred();
const list = p
    .chain(p.chain(p.string('['), p.optional(ignored)), p.repeatOptional(valueDeferred), p.chain(p.string(']'), p.optional(ignored)))
    .result((_, values) => ({
    kind: 'ListValue',
    values,
}));
const objectField = p
    .chain(name, p.optional(p.chain(ignored, p.string(':'), ignored)), valueDeferred, p.optional(ignored))
    .result((name, _, value) => ({ kind: 'ObjectField', name, value }));
const object = p
    .chain(p.chain(p.string('{'), p.optional(ignored)), p.repeatOptional(objectField), p.chain(p.string('}'), p.optional(ignored)))
    .result((_, fields) => ({ kind: 'ObjectValue', fields }));
// 2.9: This matches the spec closely and is complete
const value = p
    .chain(p.oneOf(rawValue, list, object), p.optional(ignored))
    .result((v) => v);
valueDeferred.set(value);
const arg = p
    .chain(name, p.chain(p.optional(ignored), p.string(':'), p.optional(ignored)), value)
    .result((name, _, value) => ({ kind: 'Argument', name, value }));
const args = p.optional(p
    .chain(p.chain(p.string('('), p.optional(ignored)), p.repeatRequired(arg), p.chain(p.string(')'), p.optional(ignored)))
    .result((_, args) => args));
const directive = p
    .chain(p.string('@'), name, p.optional(ignored), args, p.optional(ignored))
    .result((_a, name, _b, args) => ({
    kind: 'Directive',
    name,
    arguments: args,
}));
const directives = p
    .chain(p.optional(ignored), p.repeatOptional(directive))
    .result((_, directives) => directives);
const typeDeferred = p.deferred();
const type = p
    .chain(p.oneOf(p
    .chain(p.chain(p.string('['), p.optional(ignored)), typeDeferred, p.chain(p.optional(ignored), p.string(']'), p.optional(ignored)))
    .result((_, type) => ({ kind: 'ListType', type })), p.wrapResult(name, (name) => ({ kind: 'NamedType', name }))), p.optional(p.string('!')), p.optional(ignored))
    .result((node, notNull) => notNull === '!' ? { kind: 'NonNullType', type: node } : node);
typeDeferred.set(type);
const typeCondition = p
    .chain(p.chain(p.string('on'), ignored), name, p.optional(ignored))
    .result((_, name) => ({ kind: 'TypeCondition', name }));
const fragmentSpread = p
    .chain(p.chain(p.string('...'), p.optional(ignored)), name, p.optional(ignored), directives)
    .result((_a, name, _b, directives) => ({
    kind: 'FragmentSpread',
    name,
    directives,
}));
const selectionSetDeferred = p.deferred();
const field = p
    .chain(name, p.optional(ignored), p.optional(p
    .chain(p.chain(p.string(':'), p.optional(p.string('?'))), name)
    .result((_, name) => name)), p.optional(ignored), args, directives, p.optional(selectionSetDeferred))
    .result((name, _a, alias, _b, args, directives, selectionSet) => ({
    kind: 'Field',
    alias,
    name,
    arguments: args,
    directives,
    selectionSet,
}));
const inlineFragment = p
    .chain(p.chain(p.string('...'), p.optional(ignored)), typeCondition, directives, selectionSetDeferred)
    .result((_, typeCondition, directives, selectionSet) => ({
    kind: 'InlineFragment',
    typeCondition,
    directives,
    selectionSet,
}));
const selectionSet = p
    .chain(p.chain(p.string('{'), p.optional(ignored)), p.repeatRequired(p.oneOf(inlineFragment, fragmentSpread, field)), p.chain(p.string('}'), p.optional(ignored)))
    .result((_, selections) => ({ kind: 'SelectionSet', selections }));
selectionSetDeferred.set(selectionSet);
const varDefinitionDefault = p
    .chain(p.chain(p.string('='), p.optional(ignored)), value)
    .result((_, v) => v);
const varDefinition = p
    .chain(variable, p.chain(p.optional(ignored), p.string(':'), p.optional(ignored)), type, p.optional(varDefinitionDefault), directives, p.optional(ignored))
    .result((variable, _, type, defaultValue, directives) => ({
    kind: 'VariableDefinition',
    variable,
    type,
    defaultValue,
    directives,
}));
const varDefinitions = p
    .chain(p.chain(p.string('('), p.optional(ignored)), p.repeatRequired(varDefinition), p.chain(p.string(')'), p.optional(ignored)))
    .result((_, varDefinitions) => varDefinitions);
const fragmentDefinition = p
    .chain(p.chain(p.string('fragment'), ignored), name, ignored, typeCondition, directives, selectionSet)
    .result((_a, name, _b, typeCondition, directives, selectionSet) => ({
    kind: 'FragmentDefinition',
    name,
    typeCondition,
    directives,
    selectionSet,
}));
const operationDefinition = p
    .chain(p.optional(ignored), p.regex(/query|mutation|subscription/), p.optional(p.chain(ignored, name).result((_, name) => name)), p.optional(ignored), p.optional(varDefinitions), directives, selectionSet)
    .result((_1, operation, name, _2, variableDefinitions, directives, selectionSet) => ({
    kind: 'OperationDefinition',
    operation,
    name,
    variableDefinitions: variableDefinitions || [],
    directives,
    selectionSet,
}));
const queryShorthand = p
    .chain(p.optional(ignored), selectionSet)
    .result((_, selectionSet) => ({
    kind: 'OperationDefinition',
    operation: 'query',
    name: undefined,
    variableDefinitions: [],
    directives: [],
    selectionSet,
}));
const root = p.wrapResult(p.oneOf(p.wrapResult(queryShorthand, (r) => [r]), p.repeatRequired(p.oneOf(operationDefinition, fragmentDefinition))), (definitions) => ({ kind: 'Document', definitions }));
function parse(str) {
    const result = root(new p.StringInput(0, str), {});
    if (result.kind === p.ResultKind.Success &&
        result.rest.value &&
        result.error) {
        return result.error;
    }
    return result;
}
exports.parse = parse;
//# sourceMappingURL=graphql.example.js.map