import * as p from '.';
declare const name: p.RegexResult<{
    kind: "Name";
    value: string;
}>;
declare const rawValue: p.ContextPassThroughParser<{
    kind: string;
    value: null;
} | {
    kind: "BooleanValue";
    value: boolean;
} | {
    kind: "Variable";
    value: {
        kind: "Name";
        value: string;
    };
} | {
    kind: "EnumValue";
    value: {
        kind: "Name";
        value: string;
    };
} | {
    kind: "IntValue" | "FloatValue";
    value: string;
} | {
    kind: "StringValue";
    value: string;
}> & {
    error: (merger: (errors: p.ErrorResult<any>[]) => p.ErrorResult<any>) => p.ContextPassThroughParser<{
        kind: string;
        value: null;
    } | {
        kind: "BooleanValue";
        value: boolean;
    } | {
        kind: "Variable";
        value: {
            kind: "Name";
            value: string;
        };
    } | {
        kind: "EnumValue";
        value: {
            kind: "Name";
            value: string;
        };
    } | {
        kind: "IntValue" | "FloatValue";
        value: string;
    } | {
        kind: "StringValue";
        value: string;
    }>;
};
declare type Value = p.ExtractTResult<typeof rawValue> | {
    kind: 'ListValue';
    values: Value[];
} | {
    kind: 'ObjectValue';
    fields: {
        kind: 'ObjectField';
        name: {
            kind: 'Name';
            value: string;
        };
        value: Value;
    }[];
};
declare const args: p.SuccessContextPassThroughParser<[{
    kind: string;
    name: {
        kind: "Name";
        value: string;
    };
    value: {
        kind: string;
        value: null;
    } | {
        kind: "BooleanValue";
        value: boolean;
    } | {
        kind: "Variable";
        value: {
            kind: "Name";
            value: string;
        };
    } | {
        kind: "EnumValue";
        value: {
            kind: "Name";
            value: string;
        };
    } | {
        kind: "IntValue" | "FloatValue";
        value: string;
    } | {
        kind: "StringValue";
        value: string;
    } | {
        kind: "ListValue";
        values: Value[];
    } | {
        kind: "ObjectValue";
        fields: {
            kind: "ObjectField";
            name: {
                kind: "Name";
                value: string;
            };
            value: Value;
        }[];
    };
}, ...{
    kind: string;
    name: {
        kind: "Name";
        value: string;
    };
    value: {
        kind: string;
        value: null;
    } | {
        kind: "BooleanValue";
        value: boolean;
    } | {
        kind: "Variable";
        value: {
            kind: "Name";
            value: string;
        };
    } | {
        kind: "EnumValue";
        value: {
            kind: "Name";
            value: string;
        };
    } | {
        kind: "IntValue" | "FloatValue";
        value: string;
    } | {
        kind: "StringValue";
        value: string;
    } | {
        kind: "ListValue";
        values: Value[];
    } | {
        kind: "ObjectValue";
        fields: {
            kind: "ObjectField";
            name: {
                kind: "Name";
                value: string;
            };
            value: Value;
        }[];
    };
}[]] | undefined>;
declare const directives: p.Parser<{
    kind: "Directive";
    name: {
        kind: "Name";
        value: string;
    };
    arguments: [{
        kind: string;
        name: {
            kind: "Name";
            value: string;
        };
        value: {
            kind: string;
            value: null;
        } | {
            kind: "BooleanValue";
            value: boolean;
        } | {
            kind: "Variable";
            value: {
                kind: "Name";
                value: string;
            };
        } | {
            kind: "EnumValue";
            value: {
                kind: "Name";
                value: string;
            };
        } | {
            kind: "IntValue" | "FloatValue";
            value: string;
        } | {
            kind: "StringValue";
            value: string;
        } | {
            kind: "ListValue";
            values: Value[];
        } | {
            kind: "ObjectValue";
            fields: {
                kind: "ObjectField";
                name: {
                    kind: "Name";
                    value: string;
                };
                value: Value;
            }[];
        };
    }, ...{
        kind: string;
        name: {
            kind: "Name";
            value: string;
        };
        value: {
            kind: string;
            value: null;
        } | {
            kind: "BooleanValue";
            value: boolean;
        } | {
            kind: "Variable";
            value: {
                kind: "Name";
                value: string;
            };
        } | {
            kind: "EnumValue";
            value: {
                kind: "Name";
                value: string;
            };
        } | {
            kind: "IntValue" | "FloatValue";
            value: string;
        } | {
            kind: "StringValue";
            value: string;
        } | {
            kind: "ListValue";
            values: Value[];
        } | {
            kind: "ObjectValue";
            fields: {
                kind: "ObjectField";
                name: {
                    kind: "Name";
                    value: string;
                };
                value: Value;
            }[];
        };
    }[]] | undefined;
}[], unknown, never>;
declare type Type = {
    kind: 'NamedType';
    name: p.ExtractTResult<typeof name>;
} | {
    kind: 'NonNullType';
    type: Type;
} | {
    kind: 'ListType';
    type: Type;
};
declare const typeCondition: p.Parser<{
    kind: "TypeCondition";
    name: {
        kind: "Name";
        value: string;
    };
}, unknown, never>;
declare const fragmentSpread: p.Parser<{
    kind: "FragmentSpread";
    name: {
        kind: "Name";
        value: string;
    };
    directives: {
        kind: "Directive";
        name: {
            kind: "Name";
            value: string;
        };
        arguments: [{
            kind: string;
            name: {
                kind: "Name";
                value: string;
            };
            value: {
                kind: string;
                value: null;
            } | {
                kind: "BooleanValue";
                value: boolean;
            } | {
                kind: "Variable";
                value: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "EnumValue";
                value: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "IntValue" | "FloatValue";
                value: string;
            } | {
                kind: "StringValue";
                value: string;
            } | {
                kind: "ListValue";
                values: Value[];
            } | {
                kind: "ObjectValue";
                fields: {
                    kind: "ObjectField";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: Value;
                }[];
            };
        }, ...{
            kind: string;
            name: {
                kind: "Name";
                value: string;
            };
            value: {
                kind: string;
                value: null;
            } | {
                kind: "BooleanValue";
                value: boolean;
            } | {
                kind: "Variable";
                value: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "EnumValue";
                value: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "IntValue" | "FloatValue";
                value: string;
            } | {
                kind: "StringValue";
                value: string;
            } | {
                kind: "ListValue";
                values: Value[];
            } | {
                kind: "ObjectValue";
                fields: {
                    kind: "ObjectField";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: Value;
                }[];
            };
        }[]] | undefined;
    }[];
}, unknown, never>;
declare type SelectionSet = {
    kind: 'SelectionSet';
    selections: ({
        kind: 'Field';
        alias: p.ExtractTResult<typeof name> | undefined;
        name: p.ExtractTResult<typeof name>;
        arguments: p.ExtractTResult<typeof args>;
        directives: p.ExtractTResult<typeof directives>;
        selectionSet: undefined | SelectionSet;
    } | {
        kind: 'InlineFragment';
        typeCondition: p.ExtractTResult<typeof typeCondition>;
        directives: p.ExtractTResult<typeof directives>;
        selectionSet: SelectionSet;
    } | p.ExtractTResult<typeof fragmentSpread>)[];
};
export declare function parse(str: string): p.Result<{
    kind: "Document";
    definitions: {
        kind: string;
        operation: string;
        name: undefined;
        variableDefinitions: never[];
        directives: never[];
        selectionSet: {
            kind: "SelectionSet";
            selections: [{
                kind: "FragmentSpread";
                name: {
                    kind: "Name";
                    value: string;
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
            } | {
                kind: "Field";
                alias: {
                    kind: "Name";
                    value: string;
                } | undefined;
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet | undefined;
            } | {
                kind: "InlineFragment";
                typeCondition: {
                    kind: "TypeCondition";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet;
            }, ...({
                kind: "FragmentSpread";
                name: {
                    kind: "Name";
                    value: string;
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
            } | {
                kind: "Field";
                alias: {
                    kind: "Name";
                    value: string;
                } | undefined;
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet | undefined;
            } | {
                kind: "InlineFragment";
                typeCondition: {
                    kind: "TypeCondition";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet;
            })[]];
        };
    }[] | [{
        kind: "FragmentDefinition";
        name: {
            kind: "Name";
            value: string;
        };
        typeCondition: {
            kind: "TypeCondition";
            name: {
                kind: "Name";
                value: string;
            };
        };
        directives: {
            kind: "Directive";
            name: {
                kind: "Name";
                value: string;
            };
            arguments: [{
                kind: string;
                name: {
                    kind: "Name";
                    value: string;
                };
                value: {
                    kind: string;
                    value: null;
                } | {
                    kind: "BooleanValue";
                    value: boolean;
                } | {
                    kind: "Variable";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "EnumValue";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "IntValue" | "FloatValue";
                    value: string;
                } | {
                    kind: "StringValue";
                    value: string;
                } | {
                    kind: "ListValue";
                    values: Value[];
                } | {
                    kind: "ObjectValue";
                    fields: {
                        kind: "ObjectField";
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: Value;
                    }[];
                };
            }, ...{
                kind: string;
                name: {
                    kind: "Name";
                    value: string;
                };
                value: {
                    kind: string;
                    value: null;
                } | {
                    kind: "BooleanValue";
                    value: boolean;
                } | {
                    kind: "Variable";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "EnumValue";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "IntValue" | "FloatValue";
                    value: string;
                } | {
                    kind: "StringValue";
                    value: string;
                } | {
                    kind: "ListValue";
                    values: Value[];
                } | {
                    kind: "ObjectValue";
                    fields: {
                        kind: "ObjectField";
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: Value;
                    }[];
                };
            }[]] | undefined;
        }[];
        selectionSet: {
            kind: "SelectionSet";
            selections: [{
                kind: "FragmentSpread";
                name: {
                    kind: "Name";
                    value: string;
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
            } | {
                kind: "Field";
                alias: {
                    kind: "Name";
                    value: string;
                } | undefined;
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet | undefined;
            } | {
                kind: "InlineFragment";
                typeCondition: {
                    kind: "TypeCondition";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet;
            }, ...({
                kind: "FragmentSpread";
                name: {
                    kind: "Name";
                    value: string;
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
            } | {
                kind: "Field";
                alias: {
                    kind: "Name";
                    value: string;
                } | undefined;
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet | undefined;
            } | {
                kind: "InlineFragment";
                typeCondition: {
                    kind: "TypeCondition";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet;
            })[]];
        };
    } | {
        kind: string;
        operation: string;
        name: {
            kind: "Name";
            value: string;
        } | undefined;
        variableDefinitions: [] | [{
            kind: "VariableDefinition";
            variable: {
                kind: "Variable";
                value: {
                    kind: "Name";
                    value: string;
                };
            };
            type: {
                kind: "ListType";
                type: Type;
            } | {
                kind: "NamedType";
                name: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "NonNullType";
                type: {
                    kind: "ListType";
                    type: Type;
                } | {
                    kind: "NamedType";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
            };
            defaultValue: {
                kind: string;
                value: null;
            } | {
                kind: "BooleanValue";
                value: boolean;
            } | {
                kind: "Variable";
                value: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "EnumValue";
                value: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "IntValue" | "FloatValue";
                value: string;
            } | {
                kind: "StringValue";
                value: string;
            } | {
                kind: "ListValue";
                values: Value[];
            } | {
                kind: "ObjectValue";
                fields: {
                    kind: "ObjectField";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: Value;
                }[];
            } | undefined;
            directives: {
                kind: "Directive";
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
            }[];
        }, ...{
            kind: "VariableDefinition";
            variable: {
                kind: "Variable";
                value: {
                    kind: "Name";
                    value: string;
                };
            };
            type: {
                kind: "ListType";
                type: Type;
            } | {
                kind: "NamedType";
                name: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "NonNullType";
                type: {
                    kind: "ListType";
                    type: Type;
                } | {
                    kind: "NamedType";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
            };
            defaultValue: {
                kind: string;
                value: null;
            } | {
                kind: "BooleanValue";
                value: boolean;
            } | {
                kind: "Variable";
                value: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "EnumValue";
                value: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "IntValue" | "FloatValue";
                value: string;
            } | {
                kind: "StringValue";
                value: string;
            } | {
                kind: "ListValue";
                values: Value[];
            } | {
                kind: "ObjectValue";
                fields: {
                    kind: "ObjectField";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: Value;
                }[];
            } | undefined;
            directives: {
                kind: "Directive";
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
            }[];
        }[]];
        directives: {
            kind: "Directive";
            name: {
                kind: "Name";
                value: string;
            };
            arguments: [{
                kind: string;
                name: {
                    kind: "Name";
                    value: string;
                };
                value: {
                    kind: string;
                    value: null;
                } | {
                    kind: "BooleanValue";
                    value: boolean;
                } | {
                    kind: "Variable";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "EnumValue";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "IntValue" | "FloatValue";
                    value: string;
                } | {
                    kind: "StringValue";
                    value: string;
                } | {
                    kind: "ListValue";
                    values: Value[];
                } | {
                    kind: "ObjectValue";
                    fields: {
                        kind: "ObjectField";
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: Value;
                    }[];
                };
            }, ...{
                kind: string;
                name: {
                    kind: "Name";
                    value: string;
                };
                value: {
                    kind: string;
                    value: null;
                } | {
                    kind: "BooleanValue";
                    value: boolean;
                } | {
                    kind: "Variable";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "EnumValue";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "IntValue" | "FloatValue";
                    value: string;
                } | {
                    kind: "StringValue";
                    value: string;
                } | {
                    kind: "ListValue";
                    values: Value[];
                } | {
                    kind: "ObjectValue";
                    fields: {
                        kind: "ObjectField";
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: Value;
                    }[];
                };
            }[]] | undefined;
        }[];
        selectionSet: {
            kind: "SelectionSet";
            selections: [{
                kind: "FragmentSpread";
                name: {
                    kind: "Name";
                    value: string;
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
            } | {
                kind: "Field";
                alias: {
                    kind: "Name";
                    value: string;
                } | undefined;
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet | undefined;
            } | {
                kind: "InlineFragment";
                typeCondition: {
                    kind: "TypeCondition";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet;
            }, ...({
                kind: "FragmentSpread";
                name: {
                    kind: "Name";
                    value: string;
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
            } | {
                kind: "Field";
                alias: {
                    kind: "Name";
                    value: string;
                } | undefined;
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet | undefined;
            } | {
                kind: "InlineFragment";
                typeCondition: {
                    kind: "TypeCondition";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet;
            })[]];
        };
    }, ...({
        kind: "FragmentDefinition";
        name: {
            kind: "Name";
            value: string;
        };
        typeCondition: {
            kind: "TypeCondition";
            name: {
                kind: "Name";
                value: string;
            };
        };
        directives: {
            kind: "Directive";
            name: {
                kind: "Name";
                value: string;
            };
            arguments: [{
                kind: string;
                name: {
                    kind: "Name";
                    value: string;
                };
                value: {
                    kind: string;
                    value: null;
                } | {
                    kind: "BooleanValue";
                    value: boolean;
                } | {
                    kind: "Variable";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "EnumValue";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "IntValue" | "FloatValue";
                    value: string;
                } | {
                    kind: "StringValue";
                    value: string;
                } | {
                    kind: "ListValue";
                    values: Value[];
                } | {
                    kind: "ObjectValue";
                    fields: {
                        kind: "ObjectField";
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: Value;
                    }[];
                };
            }, ...{
                kind: string;
                name: {
                    kind: "Name";
                    value: string;
                };
                value: {
                    kind: string;
                    value: null;
                } | {
                    kind: "BooleanValue";
                    value: boolean;
                } | {
                    kind: "Variable";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "EnumValue";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "IntValue" | "FloatValue";
                    value: string;
                } | {
                    kind: "StringValue";
                    value: string;
                } | {
                    kind: "ListValue";
                    values: Value[];
                } | {
                    kind: "ObjectValue";
                    fields: {
                        kind: "ObjectField";
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: Value;
                    }[];
                };
            }[]] | undefined;
        }[];
        selectionSet: {
            kind: "SelectionSet";
            selections: [{
                kind: "FragmentSpread";
                name: {
                    kind: "Name";
                    value: string;
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
            } | {
                kind: "Field";
                alias: {
                    kind: "Name";
                    value: string;
                } | undefined;
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet | undefined;
            } | {
                kind: "InlineFragment";
                typeCondition: {
                    kind: "TypeCondition";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet;
            }, ...({
                kind: "FragmentSpread";
                name: {
                    kind: "Name";
                    value: string;
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
            } | {
                kind: "Field";
                alias: {
                    kind: "Name";
                    value: string;
                } | undefined;
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet | undefined;
            } | {
                kind: "InlineFragment";
                typeCondition: {
                    kind: "TypeCondition";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet;
            })[]];
        };
    } | {
        kind: string;
        operation: string;
        name: {
            kind: "Name";
            value: string;
        } | undefined;
        variableDefinitions: [] | [{
            kind: "VariableDefinition";
            variable: {
                kind: "Variable";
                value: {
                    kind: "Name";
                    value: string;
                };
            };
            type: {
                kind: "ListType";
                type: Type;
            } | {
                kind: "NamedType";
                name: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "NonNullType";
                type: {
                    kind: "ListType";
                    type: Type;
                } | {
                    kind: "NamedType";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
            };
            defaultValue: {
                kind: string;
                value: null;
            } | {
                kind: "BooleanValue";
                value: boolean;
            } | {
                kind: "Variable";
                value: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "EnumValue";
                value: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "IntValue" | "FloatValue";
                value: string;
            } | {
                kind: "StringValue";
                value: string;
            } | {
                kind: "ListValue";
                values: Value[];
            } | {
                kind: "ObjectValue";
                fields: {
                    kind: "ObjectField";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: Value;
                }[];
            } | undefined;
            directives: {
                kind: "Directive";
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
            }[];
        }, ...{
            kind: "VariableDefinition";
            variable: {
                kind: "Variable";
                value: {
                    kind: "Name";
                    value: string;
                };
            };
            type: {
                kind: "ListType";
                type: Type;
            } | {
                kind: "NamedType";
                name: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "NonNullType";
                type: {
                    kind: "ListType";
                    type: Type;
                } | {
                    kind: "NamedType";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
            };
            defaultValue: {
                kind: string;
                value: null;
            } | {
                kind: "BooleanValue";
                value: boolean;
            } | {
                kind: "Variable";
                value: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "EnumValue";
                value: {
                    kind: "Name";
                    value: string;
                };
            } | {
                kind: "IntValue" | "FloatValue";
                value: string;
            } | {
                kind: "StringValue";
                value: string;
            } | {
                kind: "ListValue";
                values: Value[];
            } | {
                kind: "ObjectValue";
                fields: {
                    kind: "ObjectField";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: Value;
                }[];
            } | undefined;
            directives: {
                kind: "Directive";
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
            }[];
        }[]];
        directives: {
            kind: "Directive";
            name: {
                kind: "Name";
                value: string;
            };
            arguments: [{
                kind: string;
                name: {
                    kind: "Name";
                    value: string;
                };
                value: {
                    kind: string;
                    value: null;
                } | {
                    kind: "BooleanValue";
                    value: boolean;
                } | {
                    kind: "Variable";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "EnumValue";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "IntValue" | "FloatValue";
                    value: string;
                } | {
                    kind: "StringValue";
                    value: string;
                } | {
                    kind: "ListValue";
                    values: Value[];
                } | {
                    kind: "ObjectValue";
                    fields: {
                        kind: "ObjectField";
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: Value;
                    }[];
                };
            }, ...{
                kind: string;
                name: {
                    kind: "Name";
                    value: string;
                };
                value: {
                    kind: string;
                    value: null;
                } | {
                    kind: "BooleanValue";
                    value: boolean;
                } | {
                    kind: "Variable";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "EnumValue";
                    value: {
                        kind: "Name";
                        value: string;
                    };
                } | {
                    kind: "IntValue" | "FloatValue";
                    value: string;
                } | {
                    kind: "StringValue";
                    value: string;
                } | {
                    kind: "ListValue";
                    values: Value[];
                } | {
                    kind: "ObjectValue";
                    fields: {
                        kind: "ObjectField";
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: Value;
                    }[];
                };
            }[]] | undefined;
        }[];
        selectionSet: {
            kind: "SelectionSet";
            selections: [{
                kind: "FragmentSpread";
                name: {
                    kind: "Name";
                    value: string;
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
            } | {
                kind: "Field";
                alias: {
                    kind: "Name";
                    value: string;
                } | undefined;
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet | undefined;
            } | {
                kind: "InlineFragment";
                typeCondition: {
                    kind: "TypeCondition";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet;
            }, ...({
                kind: "FragmentSpread";
                name: {
                    kind: "Name";
                    value: string;
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
            } | {
                kind: "Field";
                alias: {
                    kind: "Name";
                    value: string;
                } | undefined;
                name: {
                    kind: "Name";
                    value: string;
                };
                arguments: [{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }, ...{
                    kind: string;
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    value: {
                        kind: string;
                        value: null;
                    } | {
                        kind: "BooleanValue";
                        value: boolean;
                    } | {
                        kind: "Variable";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "EnumValue";
                        value: {
                            kind: "Name";
                            value: string;
                        };
                    } | {
                        kind: "IntValue" | "FloatValue";
                        value: string;
                    } | {
                        kind: "StringValue";
                        value: string;
                    } | {
                        kind: "ListValue";
                        values: Value[];
                    } | {
                        kind: "ObjectValue";
                        fields: {
                            kind: "ObjectField";
                            name: {
                                kind: "Name";
                                value: string;
                            };
                            value: Value;
                        }[];
                    };
                }[]] | undefined;
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet | undefined;
            } | {
                kind: "InlineFragment";
                typeCondition: {
                    kind: "TypeCondition";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                };
                directives: {
                    kind: "Directive";
                    name: {
                        kind: "Name";
                        value: string;
                    };
                    arguments: [{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }, ...{
                        kind: string;
                        name: {
                            kind: "Name";
                            value: string;
                        };
                        value: {
                            kind: string;
                            value: null;
                        } | {
                            kind: "BooleanValue";
                            value: boolean;
                        } | {
                            kind: "Variable";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "EnumValue";
                            value: {
                                kind: "Name";
                                value: string;
                            };
                        } | {
                            kind: "IntValue" | "FloatValue";
                            value: string;
                        } | {
                            kind: "StringValue";
                            value: string;
                        } | {
                            kind: "ListValue";
                            values: Value[];
                        } | {
                            kind: "ObjectValue";
                            fields: {
                                kind: "ObjectField";
                                name: {
                                    kind: "Name";
                                    value: string;
                                };
                                value: Value;
                            }[];
                        };
                    }[]] | undefined;
                }[];
                selectionSet: SelectionSet;
            })[]];
        };
    })[]];
}, {}>;
export {};
