// import {Union} from 'ts-toolbelt';
import StringInput from './StringInput';
import {Result, SuccessResult} from './types';

export type ExtractTResult<TParser> = TParser extends Parser<
  infer TResult,
  any,
  any
>
  ? TResult
  : unknown;

// (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
export type ExtractTInputContext<TParsers extends Parser<any, any, any>[]> = {
  [TKey in keyof TParsers]: TParsers[TKey] extends ContextPassThroughParser<any>
    ? never
    : TParsers[TKey] extends Parser<any, infer TInputContext, any>
    ? (input: TInputContext) => void
    : never;
}[number & keyof TParsers] extends (k: infer TInputContext) => void
  ? TInputContext
  : never;
// export type ExtractTInputContext<
//   TParsers extends Parser<any, any, any>[]
// > = Union.IntersectOf<
//   {
//     [TKey in keyof TParsers]: TParsers[TKey] extends ContextPassThroughParser<
//       any
//     >
//       ? never
//       : TParsers[TKey] extends Parser<any, infer TInputContext, any>
//       ? TInputContext
//       : never;
//   }[number & keyof TParsers]
// >;
export type ExtractTOutputContext<TParsers extends Parser<any, any, any>[]> = {
  [TKey in keyof TParsers]: TParsers[TKey] extends ContextPassThroughParser<any>
    ? never
    : TParsers[TKey] extends Parser<any, any, infer TOutputContext>
    ? TOutputContext
    : never;
}[number & keyof TParsers];

export type SuccessContextPassThroughParser<TResult> = <TContext>(
  str: StringInput,
  context: TContext,
) => SuccessResult<TResult, TContext>;

export type ContextPassThroughParser<TResult> = <TContext>(
  str: StringInput,
  context: TContext,
) => Result<TResult, TContext>;

export type SuccessParser<
  TResult,
  TContext = unknown,
  TOuptutContext = TContext
> = (
  str: StringInput,
  context: TContext,
) => SuccessResult<TResult, TOuptutContext>;

type Parser<TResult, TContext = unknown, TOuptutContext = TContext> = (
  str: StringInput,
  context: TContext,
) => Result<TResult, TOuptutContext>;

export default Parser;
