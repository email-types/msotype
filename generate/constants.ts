export type Category =
  | typeof categories[number]
  | 'Properties'
  | 'FontProperties';

export enum DataType {
  Globals,
  Length,
  Number,
  NumericLiteral,
  String,
  StringLiteral,
  Syntax,
}

export const categories = [
  'AlternativeProperties',
  'StandardProperties',
  'AnsiProperties',
  'AsciiProperties',
  'BidiProperties',
  'FareastProperties',
  'PanoseProperties',
] as const;

export const globalsString = {
  name: 'GlobalsString',
  value: 'string & {}',
};

export const globalsNumber = {
  name: 'GlobalsNumber',
  value: 'number & {}',
};

export const genericLength = {
  name: 'TLength',
  value: 'GlobalsString | 0',
};
