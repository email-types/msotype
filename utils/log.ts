import colors from 'colors';

const prefixes = {
  done: colors.green('[ done ]'),
  error: colors.red('[ error ]'),
  info: colors.cyan(colors.dim('[ info ]')),
  wait: colors.cyan('[ wait ]'),
  warn: colors.yellow('[ warn ]'),
};

export const done = (...msg: string[]): void => {
  console.log(`${prefixes.done} ${msg}`);
};

export const error = (...msg: string[]): void => {
  console.error(`${prefixes.error} ${msg}`);
};

export const info = (...msg: string[]): void => {
  console.info(`${prefixes.info} ${msg}`);
};

export const wait = (...msg: string[]): void => {
  console.log(`${prefixes.wait} ${msg}`);
};

export const warn = (...msg: string[]): void => {
  console.warn(`${prefixes.warn} ${msg}`);
};
