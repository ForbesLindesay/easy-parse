import leven from 'leven';
import {
  ResultKind,
  Suggestion,
  ErrorResult,
  SuccessResult,
  Result,
  success,
  error,
} from './types';
import Parser, {
  SuccessParser,
  ContextPassThroughParser,
  SuccessContextPassThroughParser,
  ExtractTResult,
  ExtractTInputContext,
  ExtractTOutputContext,
} from './Parser';
import StringInput from './StringInput';

export {
  ResultKind,
  Suggestion,
  ErrorResult,
  SuccessResult,
  Result,
  success,
  error,
};

export {
  Parser,
  SuccessParser,
  ContextPassThroughParser,
  SuccessContextPassThroughParser,
  ExtractTResult,
};

export {StringInput};

export function string<TExpected extends string>(expected: TExpected) {
  const withHandlers = <TResult>(
    result: (expected: TExpected, range: [number, number]) => TResult,
    errorMessage: (expected: TExpected, actual: string) => string,
  ) => {
    const parser: ContextPassThroughParser<TResult> = (str, context) => {
      if (str.startsWith(expected)) {
        const rest = str.substr(expected.length);
        return success(result(expected, [str.index, rest.index]), {
          rest,
          context,
        });
      } else {
        const end = str.index + Math.min(expected.length, str.value.length);
        const actual = str.value.substr(0, end);
        const distance = leven(expected, actual);
        return error(errorMessage(expected, actual), [str.index, end], {
          context,
          distance,
          suggestions: [
            {
              value: expected,
              range: [str.index, end],
              distance,
            },
          ],
        });
      }
    };
    return Object.assign(parser, {
      result: <TResult>(
        result: (expected: TExpected, range: [number, number]) => TResult,
      ) => withHandlers(result, errorMessage),
      error: (errorMessage: (expected: TExpected, actual: string) => string) =>
        withHandlers(result, errorMessage),
    });
  };
  return withHandlers(
    () => expected,
    (expected, actual) =>
      `Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`,
  );
}

export function deferred<TResult>(): ContextPassThroughParser<TResult> & {
  set: (parser: Parser<TResult, any, any>) => void;
} {
  let parser: any;
  return Object.assign((str: any, ctx: any) => parser(str, ctx), {
    set: (p: any) => {
      parser = p;
    },
  }) as any;
}

export type RegexResult<TResult> = ContextPassThroughParser<TResult> & {
  result: <TResultInner>(
    result: (
      expected: RegExpExecArray,
      range: [number, number],
    ) => TResultInner,
  ) => RegexResult<TResultInner>;
  error: (
    errorMessage: (
      expected: RegExp,
      actual: string,
      input: StringInput,
    ) => string,
  ) => RegexResult<TResult>;
};
export function regex(expected: RegExp): RegexResult<string> {
  const withHandlers = <TResult>(
    result: (value: RegExpExecArray, range: [number, number]) => TResult,
    errorMessage: (
      expected: RegExp,
      actual: string,
      input: StringInput,
    ) => string,
  ): RegexResult<TResult> => {
    const parser: ContextPassThroughParser<TResult> = (str, context) => {
      const match = str.exec(expected);
      if (match && str.value.indexOf(match[0]) === 0) {
        const rest = str.substr(match[0].length);
        return success(result(match, [str.index, rest.index]), {
          rest,
          context,
        });
      } else {
        const end = str.index + str.value.split(/\s/)[0].length;
        const actual = str.value.substr(0, end);
        return error(errorMessage(expected, actual, str), [str.index, end], {
          context,
        });
      }
    };
    return Object.assign(parser, {
      result: <TResult>(
        result: (expected: RegExpExecArray, range: [number, number]) => TResult,
      ) => withHandlers(result, errorMessage),
      error: (
        errorMessage: (
          expected: RegExp,
          actual: string,
          input: StringInput,
        ) => string,
      ) => withHandlers(result, errorMessage),
    });
  };
  return withHandlers(
    (value) => value[0],
    (expected, actual) =>
      `Expected "${expected.toString()}" but got "${JSON.stringify(actual)}"`,
  );
}

export function wrapResult<TResultA, TResultB>(
  parser: SuccessContextPassThroughParser<TResultA>,
  wrap: (result: TResultA) => TResultB,
): SuccessContextPassThroughParser<TResultB>;
export function wrapResult<TResultA, TResultB>(
  parser: ContextPassThroughParser<TResultA>,
  wrap: (result: TResultA) => TResultB,
): ContextPassThroughParser<TResultB>;
export function wrapResult<TResultA, TResultB, TInputContext, TOutputContext>(
  parser: SuccessParser<TResultA, TInputContext, TOutputContext>,
  wrap: (result: TResultA) => TResultB,
): SuccessParser<TResultB, TInputContext, TOutputContext>;
export function wrapResult<TResultA, TResultB, TInputContext, TOutputContext>(
  parser: Parser<TResultA, TInputContext, TOutputContext>,
  wrap: (result: TResultA) => TResultB,
): Parser<TResultB, TInputContext, TOutputContext>;
export function wrapResult<TResultA, TResultB, TInputContext, TOutputContext>(
  parser: Parser<TResultA, TInputContext, TOutputContext>,
  wrap: (result: TResultA) => TResultB,
): Parser<TResultB, TInputContext, TOutputContext> {
  return (str, context) => {
    const resultA = parser(str, context);
    if (resultA.kind === ResultKind.Success) {
      return {
        ...resultA,
        value: wrap(resultA.value),
      };
    }
    return resultA;
  };
}

export function optional<TResult>(
  parser: ContextPassThroughParser<TResult>,
): SuccessContextPassThroughParser<TResult | undefined>;
export function optional<TResult, TContext = unknown>(
  parser: Parser<TResult, TContext>,
): SuccessParser<TResult | undefined, TContext>;
export function optional<TResult, TContext = unknown>(
  parser: Parser<TResult, TContext>,
): SuccessParser<TResult | undefined, TContext> {
  return (str, context) => {
    const result = parser(str, context);
    if (result.kind === ResultKind.Success) {
      return result;
    } else {
      return success(undefined, {error: result, context, rest: str});
    }
  };
}

export function repeatOptional<TResult>(
  parser: ContextPassThroughParser<TResult>,
): SuccessContextPassThroughParser<TResult[]>;
export function repeatOptional<TResult, TContext = unknown>(
  parser: Parser<TResult, TContext>,
): SuccessParser<TResult[], TContext>;
export function repeatOptional<TResult, TContext = unknown>(
  parser: Parser<TResult, TContext>,
): SuccessParser<TResult[], TContext> {
  return (initialStr: StringInput, initialContext: TContext) => {
    const results = [];
    let rest = initialStr;
    let context = initialContext;
    while (true) {
      const result = parser(rest, context);
      if (result.kind === ResultKind.Success) {
        results.push(result.value);
        ({rest, context} = result);
      } else {
        return success(results, {
          rest,
          context,
          error: result,
        });
      }
    }
  };
}

export function repeatRequired<TResult>(
  parser: ContextPassThroughParser<TResult>,
): SuccessContextPassThroughParser<[TResult, ...TResult[]]>;
export function repeatRequired<TResult, TContext = unknown>(
  parser: Parser<TResult, TContext>,
): SuccessParser<[TResult, ...TResult[]], TContext>;
export function repeatRequired<TResult, TContext>(
  parser: Parser<TResult, TContext>,
): Parser<[TResult, ...TResult[]], TContext> {
  return (initialStr: StringInput, initialContext: TContext) => {
    const firstResult = parser(initialStr, initialContext);
    if (firstResult.kind !== ResultKind.Success) {
      return firstResult;
    }
    const results: [TResult, ...TResult[]] = [firstResult.value];
    let {rest, context} = firstResult;
    while (true) {
      const result = parser(rest, context);
      if (result.kind === ResultKind.Success) {
        results.push(result.value);
        ({rest, context} = result);
      } else {
        return success(results, {
          rest,
          context,
          error: result,
        });
      }
    }
  };
}

export function positiveLookahead<TResult>(
  lookahead: ContextPassThroughParser<any>,
  onMatch: ContextPassThroughParser<TResult>,
): ContextPassThroughParser<TResult>;
export function positiveLookahead<
  TResult,
  TContext = unknown,
  TOutputContext = TContext
>(
  lookahead: Parser<any, TContext, TOutputContext>,
  onMatch: Parser<TResult, TContext, TOutputContext>,
): Parser<TResult, TContext, TOutputContext>;
export function positiveLookahead<
  TResult,
  TContext = unknown,
  TOutputContext = TContext
>(
  lookahead: Parser<any, TContext, TOutputContext>,
  onMatch: Parser<TResult, TContext, TOutputContext>,
): Parser<TResult, TContext, TOutputContext> {
  return (str, context) => {
    const lookaheadResult = lookahead(str, context);
    if (lookaheadResult.kind === ResultKind.Success) {
      return onMatch(str, context);
    }
    return lookaheadResult;
  };
}

export function negativeLookahead<TResult>(
  errorMessage: string,
  parser: ContextPassThroughParser<any>,
  onMatch: ContextPassThroughParser<TResult>,
): ContextPassThroughParser<TResult>;
export function negativeLookahead<
  TResult,
  TContext = unknown,
  TOutputContext = TContext
>(
  errorMessage: string,
  parser: Parser<any, TContext, any>,
  onMatch: Parser<TResult, TContext, TOutputContext>,
): Parser<TResult, TContext, TOutputContext>;
export function negativeLookahead<
  TResult,
  TContext = unknown,
  TOutputContext = TContext
>(
  errorMessage: string,
  parser: Parser<any, TContext, any>,
  onMatch: Parser<TResult, TContext, TOutputContext>,
): Parser<TResult, TContext, TOutputContext> {
  return (str, context) => {
    const result = parser(str, context);
    if (result.kind === ResultKind.Error) {
      return onMatch(str, context);
    }
    return error(errorMessage, [str.index, result.rest.index], {
      context: result.context,
    });
  };
}

export function bestError<TContext>(
  errors: ErrorResult<TContext>[],
): ErrorResult<TContext> {
  const maxIndex = Math.max(...errors.map((e) => e.range[0]));
  const matchingErrors = errors.filter((e) => e.range[0] === maxIndex);
  if (matchingErrors.length === 1) {
    return {
      ...matchingErrors[0],
      suggestions: errors.flatMap((e) => e.suggestions || []),
    };
  }
  const minDistance = Math.min(
    ...matchingErrors.map((e) => e.distance || Infinity),
  );
  const matchingErrors2 =
    minDistance === Infinity
      ? matchingErrors
      : matchingErrors.filter((e) => e.distance === minDistance);
  if (matchingErrors2.length === 1) {
    return {
      ...matchingErrors2[0],
      suggestions: errors.flatMap((e) => e.suggestions || []),
    };
  }
  return error(
    matchingErrors2.map((e) => `(${e.message})`).join(' OR '),
    matchingErrors2[0].range,
    {
      context: matchingErrors[0].context,
      suggestions: errors.flatMap((e) => e.suggestions || []),
      distance: minDistance,
    },
  );
}

export type OneOfParser<
  TParsers extends [Parser<any, any>, ...Parser<any, any>[]]
> = Parser<
  ExtractTResult<TParsers[number]>,
  ExtractTInputContext<TParsers>,
  ExtractTOutputContext<TParsers>
>;
export function oneOf<
  TParsers extends [
    ContextPassThroughParser<any>,
    ...ContextPassThroughParser<any>[]
  ]
>(
  ...parsers: TParsers
): ContextPassThroughParser<ExtractTResult<TParsers[number]>> & {
  error: (
    merger: (errors: ErrorResult<any>[]) => ErrorResult<any>,
  ) => ContextPassThroughParser<ExtractTResult<TParsers[number]>>;
};
export function oneOf<
  TParsers extends [Parser<any, any>, ...Parser<any, any>[]]
>(
  ...parsers: TParsers
): OneOfParser<TParsers> & {
  error: (
    merger: (
      errors: ErrorResult<ExtractTOutputContext<TParsers>>[],
    ) => ErrorResult<ExtractTOutputContext<TParsers>>,
  ) => OneOfParser<TParsers>;
};
export function oneOf<
  TParsers extends [Parser<any, any>, ...Parser<any, any>[]]
>(...parsers: TParsers) {
  type TResult = ExtractTResult<TParsers[number]>;
  type TInputContext = ExtractTInputContext<TParsers>;
  type TOutputContext = ExtractTOutputContext<TParsers>;
  const mergeErrors = (
    merger: (
      errors: ErrorResult<TOutputContext>[],
    ) => ErrorResult<TOutputContext>,
  ) => {
    const parser: Parser<TResult, TInputContext, TOutputContext> = (
      str,
      context,
    ) => {
      const errors: ErrorResult<TOutputContext>[] = [];
      for (const parser of parsers) {
        const result = parser(str, context);
        if (result.kind === ResultKind.Success) {
          return result;
        } else {
          errors.push(result);
        }
      }
      return merger(errors);
    };
    return parser;
  };
  return Object.assign(mergeErrors(bestError), {
    error: mergeErrors,
  });
}

export function chain<
  TParsers extends [Parser<any, any>, ...Parser<any, any>[]]
>(...parsers: TParsers) {
  type TInputContext = ExtractTInputContext<TParsers>;
  type TOutputContext = ExtractTOutputContext<TParsers>;
  type TResults = {
    [TKey in keyof TParsers]: ExtractTResult<TParsers[TKey]>;
  };
  const mergeResults = <TResult>(merger: (...results: TResults) => TResult) => {
    const parser: Parser<TResult, TInputContext, TOutputContext> = (
      initialStr,
      initialContext,
    ) => {
      const results: any[] = [];
      let rest = initialStr;
      let context = initialContext;
      let error: ErrorResult<any> | undefined;
      for (const parser of parsers) {
        const result = parser(rest, context);
        if (result.kind === ResultKind.Success) {
          results.push(result.value);
          ({rest, context, error} = result);
        } else {
          return result;
        }
      }
      return success(merger(...(results as any)), {rest, context, error});
    };
    return parser;
  };

  const unmergedParser = mergeResults((...v) => v);

  return Object.assign(unmergedParser, {
    result: mergeResults,
  });
}
