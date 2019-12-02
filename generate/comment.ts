import { EOL } from 'os';
import { MSO, groups } from '@email-types/data';
import { log } from '../utils';

export const createComment = (
  key: string,
  property: MSO.Property,
): string | null => {
  const rows: string[] = [];

  if (property.description && typeof property.description === 'string') {
    rows.push(property.description, '');
  }

  rows.push(`| Inherited | &vert; | Initial |`);
  rows.push('| --------- | -- | ------------- |');

  const tableRow: string[] = [];

  if (property.inherited) {
    tableRow.push(`\`${property.inherited}\` | &vert; |`);
  } else {
    tableRow.push('`unknown` | &vert; |');
  }

  if (property.initial) {
    tableRow.push(`\`${property.initial}\` |`);
  } else {
    tableRow.push('`n/a` |');
  }

  rows.push(tableRow.join(''), '');

  if (property.groups && property.groups.length > 0) {
    const links = property.groups
      .map((group) => {
        const name = group.toLowerCase().replace(/\s+/g, '-');
        const data = groups[(name as unknown) as keyof typeof groups];

        if (data) {
          return `[\`${data.title}\`](${data.url})`;
        }
        log.warn(`Could not find '${group}' group for ${key}`);
        return undefined;
      })
      .filter(Boolean);

    if (links.length > 0) {
      rows.push(`@see ${links.join(', ')}`);
    }
  }

  if (rows[rows.length - 1] === '') {
    rows.pop();
  }

  return rows.length > 0
    ? `/**${EOL} * ${rows.join(`${EOL} * `)} ${EOL} */`
    : null;
};
