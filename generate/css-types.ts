import { types as cssData } from '@email-types/data/mso';
import {
  globalsString,
  globalsNumber,
  genericLength,
  DataType,
} from './constants';

export const getCssDataTypes = <T extends object>(): Record<string, T> => {
  const cssDataTypes = Object.keys(cssData).reduce((results, name) => {
    if (name === 'number' || name === 'integer') {
      results[name] = {
        type: DataType.Number,
        value: globalsNumber.name,
      };
    } else if (name === 'length') {
      results[name] = {
        type: DataType.Length,
        value: genericLength.name,
      };
    } else {
      results[name] = {
        type: DataType.String,
        value: globalsString.name,
      };
    }

    return results;
  }, {});

  return cssDataTypes;
};
