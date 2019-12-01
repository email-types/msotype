import path from 'path';
import ts from 'typescript';

const typescriptDiagnostic = (
  fileName: string[],
  options: ts.CompilerOptions,
): string[] => {
  const program = ts.createProgram(fileName, options);
  const diagnostics = ts.getPreEmitDiagnostics(program);

  return diagnostics.map(({ file, start = 0, messageText }) => {
    const diagFile = file && file.getLineAndCharacterOfPosition(start);

    if (diagFile) {
      return `${diagFile.line}:${
        diagFile.character
      } - ${ts.flattenDiagnosticMessageText(messageText, '\n')}`;
    }

    return `${ts.flattenDiagnosticMessageText(messageText, '\n')}`;
  });
};

it('throws typescript errors', () => {
  const result = typescriptDiagnostic(
    [path.resolve(__dirname, 'fixtures/hasTsErrors.ts')],
    { noEmit: true, strict: true },
  );

  expect(result).toHaveLength(2);
  expect(result[0]).toMatchSnapshot();
  expect(result[1]).toMatchSnapshot();
});

it('throws no typescript errors', () => {
  const result = typescriptDiagnostic(
    [path.resolve(__dirname, 'fixtures/noTsErrors.ts')],
    { noEmit: true, strict: true },
  );

  expect(result).toHaveLength(0);
});
