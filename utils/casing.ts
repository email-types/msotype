const leadingLetter = /^(\w)/;
const capitalLetters = /\.?([A-Z]+)/g;
const kebabSeparator = /-(\w)/g;
const snakeSeparator = /_(\w)/g;

const toUpper = (prefix = '') => (_: string, ...args: string[]): string => {
  return `${prefix}${args[0].toUpperCase()}`.trim();
};

const toLower = (prefix = '') => (_: string, ...args: string[]): string => {
  return `${prefix}${args[0].toLowerCase()}`.trim();
};

export const toPascalCase = (value: string): string => {
  return value
    .replace(leadingLetter, toUpper())
    .replace(snakeSeparator, toUpper())
    .replace(kebabSeparator, toUpper());
};

export const toCamelCase = (value: string): string => {
  return value
    .replace(leadingLetter, toLower())
    .replace(snakeSeparator, toUpper())
    .replace(kebabSeparator, toUpper());
};

export const toSnakeCase = (value: string): string => {
  return value.replace(capitalLetters, toLower('_')).replace(/^_/, '');
};
