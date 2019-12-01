/* eslint-disable import/no-mutable-exports */
import {
  operators as rawOperators,
  versions as rawVersions,
} from '@email-types/data/mso';
import { AnyDataType } from './parser';
import { DataType } from './constants';

export let getOperators = (): AnyDataType[] => {
  const entries = Object.values(rawOperators);
  const operators = entries.reduce<AnyDataType[]>((results, value) => {
    results.push({
      type: DataType.StringLiteral,
      value: value.syntax,
    });
    return results;
  }, []);

  // cache
  getOperators = (): AnyDataType[] => operators;

  return operators;
};

export let getVersions = (): AnyDataType[] => {
  const entries = Object.values(rawVersions);
  const versions = entries.reduce<AnyDataType[]>((results, value) => {
    results.push({
      type: DataType.StringLiteral,
      value: value.syntax,
    });
    return results;
  }, []);

  // cache
  getVersions = (): AnyDataType[] => versions;

  return versions;
};
