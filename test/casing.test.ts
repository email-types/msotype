import { toCamelCase, toPascalCase, toSnakeCase } from '../utils';

it('returns a camelCaseString from kebab-case-string', () => {
  const result = toCamelCase('email-css-property-name');
  expect(result).toBe('emailCssPropertyName');
});

it('returns a camelCaseString from snake_case_string', () => {
  const result = toCamelCase('email_css_property_name');
  expect(result).toBe('emailCssPropertyName');
});

it('returns a camelCaseString from PascalCaseString', () => {
  const result = toCamelCase('EmailCssPropertyName');
  expect(result).toBe('emailCssPropertyName');
});

it('returns a PascalCaseString from a kebab-case-string', () => {
  const result = toPascalCase('email-css-property-name');
  expect(result).toBe('EmailCssPropertyName');
});

it('returns a PascalCaseString from a snake_case_string', () => {
  const result = toPascalCase('email_css_property_name');
  expect(result).toBe('EmailCssPropertyName');
});

it('returns a PascalCaseString from a camelCaseString', () => {
  const result = toPascalCase('emailCssPropertyName');
  expect(result).toBe('EmailCssPropertyName');
});

it('returns a snake_case_string from camelCaseString', () => {
  const result = toSnakeCase('emailCssPropertyName');
  expect(result).toBe('email_css_property_name');
});

it('returns a snake_case_string from PascalCaseString', () => {
  const result = toSnakeCase('EmailCssPropertyName');
  expect(result).toBe('email_css_property_name');
});

it('returns a snake_case_string from PascalCaseStringWithCaps', () => {
  const result = toSnakeCase('EmailCssPropertyNAME');
  expect(result).toBe('email_css_property_name');
});
