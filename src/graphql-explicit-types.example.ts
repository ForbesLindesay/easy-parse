import * as p from '.';

export interface Name {
  kind: 'Name';
  value: string;
}

export interface NullValue {
  kind: 'NullValue';
  value: null;
}

export interface BooleanValue {
  kind: 'BooleanValue';
  value: boolean;
}

export interface Variable {
  kind: 'Variable';
  value: Name;
}

export interface EnumValue {
  kind: 'EnumValue';
  value: Name;
}

export interface NumberValue {
  kind: 'IntValue' | 'FloatValue';
  value: string;
}

export interface StringValue {
  kind: 'StringValue';
  value: string;
}

export interface ListValue {
  kind: 'ListValue';
  values: Value[];
}

export interface ObjectField {
  kind: 'ObjectField';
  name: Name;
  value: Value;
}

export interface ObjectValue {
  kind: 'ObjectValue';
  fields: ObjectField[];
}

export interface Document {
  kind: 'Document';
  definitions: (
    | OperationDefinition
    | FragmentDefinition
    | OperationDefinition
  )[];
}

type Value =
  | NullValue
  | BooleanValue
  | Variable
  | StringValue
  | NumberValue
  | EnumValue
  | ListValue
  | ObjectValue;

export interface Argument {
  kind: 'Argument';
  name: Name;
  value: Value;
}

export interface Directive {
  kind: 'Directive';
  name: Name;
  arguments: Argument[];
}

export interface NamedType {
  kind: 'NamedType';
  name: Name;
}

export interface NonNullType {
  kind: 'NonNullType';
  type: Type;
}

export interface ListType {
  kind: 'ListType';
  type: Type;
}

export type Type = NamedType | NonNullType | ListType;

export interface TypeCondition {
  kind: 'TypeCondition';
  name: Name;
}

export interface FragmentSpread {
  kind: 'FragmentSpread';
  name: Name;
  directives: Directive[];
}

export interface Field {
  kind: 'Field';
  alias: Name | undefined;
  name: Name;
  arguments: undefined | Argument[];
  directives: Directive[];
  selectionSet: undefined | SelectionSet;
}

export interface InlineFragment {
  kind: 'InlineFragment';
  typeCondition: TypeCondition;
  directives: Directive[];
  selectionSet: SelectionSet;
}

export interface SelectionSet {
  kind: 'SelectionSet';
  selections: (Field | InlineFragment | FragmentSpread)[];
}

export interface VariableDefinition {
  kind: 'VariableDefinition';
  variable: Variable;
  type: Type;
  defaultValue: Value | undefined;
  directives: Directive[];
}

export interface FragmentDefinition {
  kind: 'FragmentDefinition';
  name: Name;
  typeCondition: TypeCondition;
  directives: Directive[];
  selectionSet: SelectionSet;
}

export interface OperationDefinition {
  kind: 'OperationDefinition';
  operation: 'query' | 'mutation' | 'subscription';
  name?: Name;
  variableDefinitions: VariableDefinition[];
  directives: Directive[];
  selectionSet: SelectionSet;
}
// 2.1.7: Includes commas, and line comments
const ignored = p.regex(/([\s,]|#[^\n\r]+)+/);

// 2.1.9: Limited to ASCII character set, so regex shortcodes are fine
const name = p
  .regex(/[_\w][_\d\w]*/)
  .result<Name>((x) => ({kind: 'Name', value: x[0]}));

const null_ = p
  .string('null')
  .result<NullValue>(() => ({kind: 'NullValue', value: null}));

const bool = p.regex(/true|false/).result<BooleanValue>((x) => ({
  kind: 'BooleanValue',
  value: x[0] === 'true',
}));

const variable = p.chain(p.regex(/[$]/), name).result<Variable>((_, name) => ({
  kind: 'Variable',
  value: name,
}));

// 2.9.6: Technically, this parser doesn't need to check that true, false, and null
// aren't used as enums, but this prevents mistakes and follows the spec closely
const enum_ = p.wrapResult(
  p.negativeLookahead(
    'Enum values cannot be true, false or null',
    p.regex(/true|false|null/),
    name,
  ),
  (value): EnumValue => ({kind: 'EnumValue', value}),
);

// 2.9.1-2: These combine both number values for the sake of simplicity.
// It allows for leading zeroes, unlike graphql.js, which shouldn't matter;
const number_ = p
  .chain(
    p.regex(/[-]?\d+/),
    p.optional(p.regex(/[.]\d+/)),
    p.optional(p.regex(/[eE][+-]?\d+/)),
  )
  .result<NumberValue>((...x) => ({
    kind: x.filter(Boolean).length === 1 ? 'IntValue' : 'FloatValue',
    value: x.join(''),
  }));

// 2.9.4: Notably, this skips checks for unicode escape sequences and escaped
// quotes. This is mainly meant for client-side use, so we won't have to be strict.
const string_ = p.wrapResult(
  p.oneOf(
    p.chain(p.regex(/"""/), p.regex(/.*(?=""")/), p.regex(/"""/)),
    p.chain(p.regex(/"/), p.regex(/[^"\r\n]*/), p.regex(/"/)),
  ),
  ([_, value]): StringValue => ({kind: 'StringValue', value}),
);

const valueDeferred = p.deferred<Value>();

const list = p
  .chain(
    p.chain(p.string('['), p.optional(ignored)),
    p.repeatOptional(valueDeferred),
    p.chain(p.string(']'), p.optional(ignored)),
  )
  .result<ListValue>((_, values) => ({
    kind: 'ListValue',
    values,
  }));

const objectField = p
  .chain(
    name,
    p.optional(p.chain(ignored, p.string(':'), ignored)),
    valueDeferred,
    p.optional(ignored),
  )
  .result<ObjectField>((name, _, value) => ({
    kind: 'ObjectField',
    name,
    value,
  }));

const object = p
  .chain(
    p.chain(p.string('{'), p.optional(ignored)),
    p.repeatOptional(objectField),
    p.chain(p.string('}'), p.optional(ignored)),
  )
  .result<ObjectValue>((_, fields) => ({kind: 'ObjectValue', fields}));

// 2.9: This matches the spec closely and is complete
const value = p
  .chain(
    p.oneOf(null_, bool, variable, string_, number_, enum_, list, object),
    p.optional(ignored),
  )
  .result((v) => v);

valueDeferred.set(value);

const arg = p
  .chain(
    name,
    p.chain(p.optional(ignored), p.string(':'), p.optional(ignored)),
    value,
  )
  .result<Argument>((name, _, value) => ({kind: 'Argument', name, value}));

const args = p.optional(
  p
    .chain(
      p.chain(p.string('('), p.optional(ignored)),
      p.repeatRequired(arg),
      p.chain(p.string(')'), p.optional(ignored)),
    )
    .result((_, args) => args),
);

const directive = p
  .chain(p.string('@'), name, p.optional(ignored), args, p.optional(ignored))
  .result<Directive>((_a, name, _b, args) => ({
    kind: 'Directive',
    name,
    arguments: args || [],
  }));

const directives = p
  .chain(p.optional(ignored), p.repeatOptional(directive))
  .result((_, directives) => directives);

// // 2.11: The type declarations may be simplified since there's little room
// // for error in this limited type system.
const typeDeferred = p.deferred<Type>();
const type = p
  .chain(
    p.oneOf(
      p
        .chain(
          p.chain(p.string('['), p.optional(ignored)),
          typeDeferred,
          p.chain(p.optional(ignored), p.string(']'), p.optional(ignored)),
        )
        .result<Type>((_, type) => ({kind: 'ListType', type})),
      p.wrapResult(name, (name): Type => ({kind: 'NamedType', name})),
    ),
    p.optional(p.string('!')),
    p.optional(ignored),
  )
  .result<Type>((node, notNull) =>
    notNull === '!' ? {kind: 'NonNullType', type: node} : node,
  );
typeDeferred.set(type);

const typeCondition = p
  .chain(p.chain(p.string('on'), ignored), name, p.optional(ignored))
  .result<TypeCondition>((_, name) => ({kind: 'TypeCondition', name}));

const fragmentSpread = p
  .chain(
    p.chain(p.string('...'), p.optional(ignored)),
    name,
    p.optional(ignored),
    directives,
  )
  .result<FragmentSpread>((_a, name, _b, directives) => ({
    kind: 'FragmentSpread',
    name,
    directives,
  }));

const selectionSetDeferred = p.deferred<SelectionSet>();

const field = p
  .chain(
    name,
    p.optional(ignored),
    p.optional(
      p
        .chain(p.chain(p.string(':'), p.optional(p.string('?'))), name)
        .result((_, name) => name),
    ),
    p.optional(ignored),
    args,
    directives,
    p.optional(selectionSetDeferred),
  )
  .result<Field>((name, _a, alias, _b, args, directives, selectionSet) => ({
    kind: 'Field',
    alias,
    name,
    arguments: args,
    directives,
    selectionSet,
  }));

const inlineFragment = p
  .chain(
    p.chain(p.string('...'), p.optional(ignored)),
    typeCondition,
    directives,
    selectionSetDeferred,
  )
  .result<InlineFragment>((_, typeCondition, directives, selectionSet) => ({
    kind: 'InlineFragment' as const,
    typeCondition,
    directives,
    selectionSet,
  }));

const selectionSet = p
  .chain(
    p.chain(p.string('{'), p.optional(ignored)),
    p.repeatRequired(p.oneOf(inlineFragment, fragmentSpread, field)),
    p.chain(p.string('}'), p.optional(ignored)),
  )
  .result<SelectionSet>((_, selections) => ({
    kind: 'SelectionSet' as const,
    selections,
  }));
selectionSetDeferred.set(selectionSet);

const varDefinitionDefault = p
  .chain(p.chain(p.string('='), p.optional(ignored)), value)
  .result((_, v) => v);

const varDefinition = p
  .chain(
    variable,
    p.chain(p.optional(ignored), p.string(':'), p.optional(ignored)),
    type,
    p.optional(varDefinitionDefault),
    directives,
    p.optional(ignored),
  )
  .result<VariableDefinition>(
    (variable, _, type, defaultValue, directives) => ({
      kind: 'VariableDefinition' as const,
      variable,
      type,
      defaultValue,
      directives,
    }),
  );

const varDefinitions = p
  .chain(
    p.chain(p.string('('), p.optional(ignored)),
    p.repeatRequired(varDefinition),
    p.chain(p.string(')'), p.optional(ignored)),
  )
  .result((_, varDefinitions) => varDefinitions);

const fragmentDefinition = p
  .chain(
    p.chain(p.string('fragment'), ignored),
    name,
    ignored,
    typeCondition,
    directives,
    selectionSet,
  )
  .result<FragmentDefinition>(
    (_a, name, _b, typeCondition, directives, selectionSet) => ({
      kind: 'FragmentDefinition',
      name,
      typeCondition,
      directives,
      selectionSet,
    }),
  );

const operationDefinition = p
  .chain(
    p.optional(ignored),
    p.oneOf(p.string('query'), p.string('mutation'), p.string('subscription')),
    p.optional(p.chain(ignored, name).result((_, name) => name)),
    p.optional(ignored),
    p.optional(varDefinitions),
    directives,
    selectionSet,
  )
  .result<OperationDefinition>(
    (
      _1,
      operation,
      name,
      _2,
      variableDefinitions,
      directives,
      selectionSet,
    ) => ({
      kind: 'OperationDefinition',
      operation,
      name,
      variableDefinitions: variableDefinitions || [],
      directives,
      selectionSet,
    }),
  );

const queryShorthand = p
  .chain(p.optional(ignored), selectionSet)
  .result<OperationDefinition>((_, selectionSet) => ({
    kind: 'OperationDefinition',
    operation: 'query',
    name: undefined,
    variableDefinitions: [],
    directives: [],
    selectionSet,
  }));

const root = p.wrapResult(
  p.oneOf(
    p.wrapResult(queryShorthand, (r) => [r]),
    p.repeatRequired(p.oneOf(operationDefinition, fragmentDefinition)),
  ),
  (definitions): Document => ({kind: 'Document', definitions}),
);

export function parse(str: string) {
  const result = root(new p.StringInput(0, str), {});
  if (
    result.kind === p.ResultKind.Success &&
    result.rest.value &&
    result.error
  ) {
    return result.error;
  }
  return result;
}
