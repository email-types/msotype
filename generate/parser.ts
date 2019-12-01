import { syntaxes } from '@email-types/data/mso';
import { getCssDataTypes } from './css-types';
import { AnyDataType, DataType } from './constants';
import { toPascalCase, log } from '../utils';

const REGEX_DATA_TYPE = /^(<[^>]+>)/g;
const REGEX_KEYWORD = /^([\w-|\w.]+)/g;

export const parse = (syntax: string): AnyDataType[] => {
  const rawdata = syntax
    .split('|')
    .map((v) => v.trim())
    .sort();

  const parsed = rawdata.reduce<AnyDataType[]>((result, next) => {
    if (next.match(REGEX_DATA_TYPE) !== null) {
      const value = next.slice(1, -1);
      const cssDataTypes = getCssDataTypes();

      if (value in cssDataTypes) {
        result.push({
          type: cssDataTypes[value].type,
          value: cssDataTypes[value].value,
        });
      } else if (value in syntaxes) {
        result.push({
          type: DataType.Syntax,
          value: toPascalCase(value),
        });
      }
    } else if (next.match(REGEX_KEYWORD) !== null) {
      const literal = Number(next);
      if (String(literal) === next) {
        result.push({
          type: DataType.NumericLiteral,
          value: literal,
        });
      } else {
        result.push({
          type: DataType.StringLiteral,
          value: next,
        });
      }
    } else {
      log.warn('Data type `%s` was missing', next);
      result.push({ type: DataType.String, value: next });
    }

    return result;
  }, []);

  return parsed;
};
