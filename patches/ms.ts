import { create, MSO } from '@email-types/data';

const validate = create<MSO.Property>();

export const msPatches = validate({
  'ms-interpolation-mode': {
    syntax: 'nearest-neighbor | bicubic',
    description:
      'Sets or retrieves the interpolation (resampling) method used to stretch an `<img /> element',
    initial: null,
    inherited: false,
    shorthand: false,
    groups: [],
  },
});
