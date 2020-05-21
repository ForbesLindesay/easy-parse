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
    definitions: (OperationDefinition | FragmentDefinition | OperationDefinition)[];
}
declare type Value = NullValue | BooleanValue | Variable | StringValue | NumberValue | EnumValue | ListValue | ObjectValue;
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
export declare type Type = NamedType | NonNullType | ListType;
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
export declare function parse(str: string): p.Result<Document, {}>;
export {};
