import { EOL } from 'os';
import { Property as MSOProperty } from '@email-types/data/mso';
import { groupLinks } from '../patches/links';
import { log } from '../utils';

export const createComment = (
  key: string,
  property: MSOProperty,
): string | null => {
  const rows: string[] = [];

  if (property.description && typeof property.description === 'string') {
    rows.push(property.description, '');
  }

  rows.push(`| Inherited | &vert; | Initial |`);
  rows.push('| --------- | -- | ------------- |');

  const tableRow: string[] = [];

  if (typeof property.inherited === 'boolean') {
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
    const links: string[] = [];
    property.groups.forEach((group) => {
      const name = group.toLowerCase().replace(/\s+/g, '-');
      const data = groupLinks[name];

      if (data) {
        Object.keys(data).forEach((title) => {
          links.push(`[\`${title}\`](${data[title]})`);
        });
        return;
      }

      log.warn(`Could not find '${group}' group for ${key}`);
      return undefined;
    });

    links.filter(Boolean);

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
