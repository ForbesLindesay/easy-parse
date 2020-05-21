// import leven from 'leven';
// import {Result, error, ErrorResult} from './types';

export default class StringInput {
  public readonly index: number;
  public readonly value: string;

  constructor(index: number, value: string) {
    this.index = index;
    this.value = value;
  }

  public substr(amount: number | string) {
    const a = typeof amount === 'number' ? amount : amount.length;
    return new StringInput(this.index + a, this.value.substr(a));
  }

  public trimStart() {
    const newStr = this.value.trimStart();
    if (this.value === newStr) return this;
    return new StringInput(
      this.index + (this.value.length - newStr.length),
      newStr,
    );
  }

  public test(regexp: RegExp) {
    return regexp.test(this.value);
  }

  public exec(regexp: RegExp) {
    return regexp.exec(this.value);
  }

  public startsWith(str: string) {
    return this.value.startsWith(str);
  }

  // private findClosest(value: string) {
  //   const words = this.value.split(/\s/);
  //   let actual = words[0];
  //   let length = actual.length;
  //   let distance = leven(value, actual);
  //   for (const word of words.slice(1)) {
  //     if (word.length) {
  //       const newActual = actual + ' ' + word;
  //       const newDistance = leven(value, newActual);
  //       if (newDistance > distance) {
  //         break;
  //       }
  //       [actual, distance] = [newActual, newDistance];
  //     }
  //     length += 1 + word.length;
  //   }
  //   return {length, actual, distance};
  // }

  // public expect<T>(
  //   value: string,
  //   fn: (rest: StringInput, startIndex: number) => Result<T>,
  // ): Result<T> {
  //   if (/^\s*$/.test(this.value)) {
  //     if (!this.value) {
  //       return error(
  //         `Expected "${value}" but got to the end of the rule.`,
  //         [this.index, this.index],
  //         {
  //           suggestions: [
  //             {
  //               value: ` ${value}`,
  //               range: [this.index, this.index],
  //               displayValue: value,
  //             },
  //           ],
  //         },
  //       );
  //     } else {
  //       return error(
  //         `Expected "${value}" but got to the end of the rule.`,
  //         [this.index, this.index + this.value.length],
  //         {
  //           suggestions: [
  //             {
  //               value,
  //               range: [
  //                 this.index + this.value.length,
  //                 this.index + this.value.length,
  //               ],
  //             },
  //           ],
  //         },
  //       );
  //     }
  //   }
  //   const trimmed = this.trimStart();
  //   if (trimmed.value.startsWith(value)) {
  //     return fn(trimmed.substr(value.length), trimmed.index);
  //   } else {
  //     const {actual, length, distance} = trimmed.findClosest(value);
  //     return error(
  //       `Expected "${value}" but got "${actual}".`,
  //       [trimmed.index, trimmed.index + length],
  //       {
  //         suggestions: [
  //           {
  //             value,
  //             range: [trimmed.index, trimmed.index + length],
  //           },
  //         ],
  //         distance,
  //       },
  //     );
  //   }
  // }

  // public expectOneOf<T, S>(
  //   name: string,
  //   values: readonly (readonly [string, S])[],
  //   fn: (result: S, rest: StringInput, startIndex: number) => Result<T>,
  // ): Result<T> {
  //   if (/^\s*$/.test(this.value)) {
  //     return error(
  //       `Expected ${name} but got to the end of the rule.`,
  //       [this.index, this.index + this.value.length],
  //       {
  //         suggestions: values.map(([source]) => ({
  //           value: this.value ? source : ` ${source}`,
  //           range: [
  //             this.index + this.value.length,
  //             this.index + this.value.length,
  //           ],
  //         })),
  //       },
  //     );
  //   }
  //   const trimmed = this.trimStart();
  //   for (const [source, id] of values
  //     .slice()
  //     .sort((a, b) => b[0].length - a[0].length)) {
  //     if (trimmed.value.startsWith(source)) {
  //       return fn(id, trimmed.substr(source.length), trimmed.index);
  //     }
  //   }

  //   const suggestions = values
  //     .map(([source]) => ({source, ...trimmed.findClosest(source)}))
  //     .sort((a, b) => {
  //       // sort to get the closest match first
  //       // if multiple options with same closeness, pick the longest ones first
  //       return a.distance - b.distance || b.length - a.length;
  //     });
  //   return error(
  //     `Expected ${name} but got "${suggestions[0].actual}".`,
  //     [trimmed.index, trimmed.index + suggestions[0].length],
  //     {
  //       suggestions: suggestions.map(({source, length}) => ({
  //         value: source,
  //         range: [trimmed.index, trimmed.index + length],
  //       })),
  //       distance: suggestions[0].distance,
  //     },
  //   );
  // }

  // public expected(name: string): ErrorResult {
  //   if (/^\s*$/.test(this.value)) {
  //     return error(`Expected ${name} but got to the end of the rule.`, [
  //       this.index,
  //       this.index + this.value.length,
  //     ]);
  //   }
  //   const trimmed = this.trimStart();
  //   const firstWord = trimmed.value.split(/\s/)[0];
  //   return error(`Expected ${name} but got "${firstWord}".`, [
  //     trimmed.index,
  //     trimmed.index + firstWord.length,
  //   ]);
  // }
}
