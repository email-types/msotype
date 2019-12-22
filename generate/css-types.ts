import { dataTypes as rawDataTypes } from '@email-types/data/css';
import {
  globalsString,
  globalsNumber,
  genericLength,
  AnyDataType,
  DataType,
} from './constants';

export const getCssDataTypes = () => {
  const cssDataTypes = Object.keys(rawDataTypes).reduce<
    Record<string, AnyDataType>
  >((results, name) => {
    // skip color and so its populated using syntaxes data
    if (name === 'color') {
      return results;
    }

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
