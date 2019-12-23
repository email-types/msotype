import { Properties as MSOProperties } from '@email-types/data/mso';

export const msPatches: MSOProperties = {
  'ms-interpolation-mode': {
    syntax: 'nearest-neighbor | bicubic',
    description:
      'Sets or retrieves the interpolation (resampling) method used to stretch an `<img /> element',
    initial: null,
    inherited: false,
    shorthand: false,
    groups: [],
  },
};
