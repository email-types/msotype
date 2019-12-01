import { types as cssData } from '@email-types/data/mso';
import {
  globalsString,
  globalsNumber,
  genericLength,
  AnyDataType,
  DataType,
} from './constants';

export const getCssDataTypes = () => {
  const cssDataTypes = Object.keys(cssData).reduce<Record<string, AnyDataType>>(
    (results, name) => {
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
    },
    {},
  );

  return cssDataTypes;
};
