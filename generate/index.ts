import { EOL } from 'os';
import { toCamelCase } from '../utils';
import { Property } from './properties';
import { AnyDataType } from './parser';
import { DataType, genericLength } from './constants';
import { getAliases, getInterfaces, Interface, Alias } from './declarations';

const lengthGeneric = (hasLength: boolean, defaults = false): string => {
  if (!hasLength) return '';
  return `<${`${genericLength.name}${
    defaults ? ` = ${genericLength.value}` : ''
  }`}>`;
};

const stringifyType = (type: AnyDataType): string | number => {
  if (type.type === DataType.StringLiteral) {
    return JSON.stringify(type.value);
  }

  return type.value;
};

const stringifyProperty = (items: Property[], isHyphen = false): string => {
  const output = items.map((item) => {
    const generic = lengthGeneric(item.hasLength);
    const comment = item.comment ? `${item.comment}${EOL}` : '';
    return `${comment}${
      isHyphen ? JSON.stringify(item.key) : toCamelCase(item.key)
    }?: ${item.name}${generic};`;
  });

  return output.join(EOL);
};

const createAliasesOutput = (aliases: Alias[]): string[] => {
  const output = aliases.reduce<string[]>((result, item) => {
    const exportKey = item.export ? 'export' : '';
    const generic = lengthGeneric(item.hasLength, true);

    result.push(
      `${exportKey} type ${item.name}${generic} = ${item.types
        .map(stringifyType)
        .join(' | ')}`,
    );

    return result;
  }, []);

  return output;
};

const createInterfaceOutput = (
  interfaces: Interface[],
): ((isHyphen?: boolean | undefined) => string[]) => (
  isHyphen?: boolean,
): string[] => {
  const output = interfaces.reduce<string[]>((result, item) => {
    const postfix = isHyphen ? 'Hyphen' : '';

    const extendList = item.extends.map((name) => {
      const children = interfaces.filter((i) => i.name === name);
      const hasLength = children.some((type) => type.hasLength);
      const generic = lengthGeneric(hasLength);
      return `${name}${postfix}${generic}`;
    });

    const extend =
      extendList && extendList.length > 0
        ? ` extends ${extendList.join(', ')}`
        : '';

    const exportKey = item.export ? 'export' : '';
    const generic = lengthGeneric(item.hasLength, true);

    result.push(
      `${exportKey} interface ${item.name}${postfix}${generic}${extend} {
        ${item.properties ? stringifyProperty(item.properties, isHyphen) : ''}
      }`,
    );

    return result;
  }, []);

  return output;
};

export const generate = (): string => {
  const interfaces = getInterfaces();
  const interfaceOutput = createInterfaceOutput(interfaces);

  const aliases = getAliases();
  const aliasesOutput = createAliasesOutput(aliases);

  return [
    ...interfaceOutput(),
    ...interfaceOutput(true),
    ...aliasesOutput,
  ].join(`${EOL}${EOL}`);
};
