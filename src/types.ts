import StringInput from './StringInput';

export enum ResultKind {
  Success = 'success',
  Error = 'error',
}

export interface Suggestion {
  value: string;
  displayValue?: string;
  range: [number, number];
  distance?: number;
}

export interface ErrorResult<TContext = unknown> {
  kind: ResultKind.Error;
  message: string;
  range: [number, number];
  context: TContext;
  suggestions?: Suggestion[];
  distance?: number;
}

export interface SuccessResult<TResult, TContext = unknown> {
  kind: ResultKind.Success;
  value: TResult;
  rest: StringInput;
  context: TContext;
  // This represents an error that would have allowed more of the
  // "rest" of the string to be parsed.
  error?: ErrorResult<TContext>;
}

export type Result<TResult, TContext = unknown> =
  | SuccessResult<TResult, TContext>
  | ErrorResult<TContext>;

export function success<TResult, TContext = unknown>(
  value: TResult,
  extra: Omit<SuccessResult<TResult, TContext>, 'kind' | 'value'>,
): SuccessResult<TResult, TContext> {
  return {
    kind: ResultKind.Success,
    value,
    ...extra,
  };
}

export function error<TContext = unknown>(
  message: string,
  range: [number, number],
  extra: Omit<ErrorResult<TContext>, 'kind' | 'message' | 'range'>,
): ErrorResult<TContext> {
  return {
    kind: ResultKind.Error,
    message,
    range,
    ...extra,
  };
}
