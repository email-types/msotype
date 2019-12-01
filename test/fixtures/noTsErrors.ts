/* eslint-disable no-unused-expressions, import/extensions, import/no-unresolved */
import * as Css from 'csstype';
import * as Mso from '../..';

interface CssMsoProperties extends Css.Properties, Mso.Properties {}

const cssMsoStyles: CssMsoProperties = {
  msoFontAlt: 'Helvetica',
  msoLineHeightRule: 'exactly',
  lineHeight: 1.4,
};

interface MixedStyles extends Mso.Properties, Mso.PropertiesHyphen {}

const mixedStyles: MixedStyles = {
  'mso-font-alt': 'Helvetica',
  'mso-line-height-rule': 'exactly',
  msoPaddingAlt: 0,
};

interface FontHyphenStyles
  extends Mso.FontProperties,
    Mso.FontPropertiesHyphen {}

const fontHyphenStyles: FontHyphenStyles = {
  'mso-ansi-font-size': 'large',
  msoBidiFlag: 'on',
};

cssMsoStyles;
mixedStyles;
fontHyphenStyles;
