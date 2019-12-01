import { EOL } from 'os';
import { resolve } from 'path';
import { outputFile } from 'fs-extra';
import { format, resolveConfig } from 'prettier';
import { log } from '../utils';

const cwd = process.cwd();
const output = resolve(cwd, 'index.d.ts');

(async () => {
  try {
    log.info('generating declarations');
    const { generate } = await import('../generate');
    const declarations = generate();

    log.wait('formatting...');
    const config = await resolveConfig(cwd);
    const content = format(declarations, {
      ...config,
      printWidth: 120,
      parser: 'typescript',
    });

    log.wait('writing to disk...');
    await outputFile(output, content.replace(/\n/g, EOL));

    log.done(`successfully created msotype declaration: '${output}'`);
  } catch (error) {
    log.error(error);
    process.exit(0);
  }
})();
