/* eslint-disable import/no-mutable-exports */
import { syntaxes as rawSyntaxes } from '@email-types/data/mso';
import { toPascalCase } from '../utils';
import { parse } from './parser';
import { DataType } from './constants';
import { Property } from './properties';

export type Syntax = Omit<Property, 'interface' | 'comment'>;

export let getSyntaxes = (): Syntax[] => {
  const entries = Object.entries(rawSyntaxes).sort();
  const syntaxes = entries.map(
    ([key, value]): Syntax => {
      const types = parse(value.syntax);

      const syntax: Syntax = {
        key,
        types,
        export: false,
        name: toPascalCase(key),
        hasLength: types.some((t) => t.type === DataType.Length),
      };

      return syntax;
    },
  );

  // cache
  getSyntaxes = (): Syntax[] => syntaxes;

  return syntaxes;
};
