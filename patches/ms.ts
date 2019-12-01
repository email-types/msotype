import { MSO } from '@email-types/data/mso';

export const msPatches: MSO.Properties = {
  'ms-interpolation-mode': {
    syntax: 'nearest-neighbor | bicubic',
    description:
      'Sets or retrieves the interpolation (resampling) method used to stretch an `<img /> element',
    initial: null,
    inherited: false,
    shorthand: false,
    features: [],
  },
};
