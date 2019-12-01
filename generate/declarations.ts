import { Property, getProperties } from './properties';
import { Syntax, getSyntaxes } from './syntaxes';
import { getOperators, getVersions } from './conditionals';
import {
  Category,
  DataType,
  categories,
  globalsString,
  globalsNumber,
} from './constants';

export interface Interface {
  name: Category;
  export: boolean;
  hasLength: boolean;
  extends: Category[];
  properties?: Property[];
}

export type Alias = Property | Syntax;

export const getAliases = (): Alias[] => {
  const properties = getProperties();
  const syntaxes = getSyntaxes();
  const operators = getOperators();
  const versions = getVersions();

  const aliases: Alias[] = [];

  // Global to allow for autocomplete with string literals
  aliases.push({
    key: '',
    name: globalsString.name,
    types: [{ type: DataType.Globals, value: globalsString.value }],
    export: false,
    hasLength: false,
  });

  // Global to allow for autocomplete with number literals
  aliases.push({
    key: '',
    name: globalsNumber.name,
    types: [{ type: DataType.Globals, value: globalsNumber.value }],
    export: false,
    hasLength: false,
  });

  aliases.push(...properties, ...syntaxes);

  // Conditional Operators
  aliases.push({
    key: '',
    name: 'ConditionalOperator',
    types: operators,
    export: true,
    hasLength: false,
  });

  // Conditional Versions
  aliases.push({
    key: '',
    name: 'ConditionalVersion',
    types: versions,
    export: true,
    hasLength: false,
  });

  return aliases;
};

export const getInterfaces = (): Interface[] => {
  const properties = getProperties();

  const interfaces = categories.reduce<Interface[]>((result, name) => {
    const items = properties.filter((item) => item.interface === name);

    result.push({
      name,
      hasLength: items.some((item) => item.hasLength),
      export: items.some((item) => item.export),
      properties: items,
      extends: [],
    });

    return result;
  }, []);

  interfaces.push({
    name: 'Properties',
    extends: ['AlternativeProperties', 'StandardProperties'],
    export: interfaces.some((item) => item.export),
    hasLength: interfaces.some((item) => item.hasLength),
  });

  interfaces.push({
    name: 'FontProperties',
    extends: [
      'AnsiProperties',
      'AsciiProperties',
      'BidiProperties',
      'FareastProperties',
      'PanoseProperties',
    ],
    export: interfaces.some((item) => item.export),
    hasLength: interfaces.some((item) => item.hasLength),
  });

  return interfaces;
};
