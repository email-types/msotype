[csstype]: https://github.com/frenic/csstype
[stigmortenmyre]:
  https://stigmortenmyre.no/mso/html/concepts/ofconstyletable.htm

# MSOType

TypeScript definitions for MSO (Microsoft Office), including definitions for the
`mso-` CSS vendor prefix. Autocompletion and type checking for all known MSO
properties and values are provided.

Install with yarn:

```sh
yarn add msotype
```

Or install with npm:

```sh
npm install msotype
```

## Properties

All properties are categorized in different uses and come in two technical
variations—JavaScript case (camel) and CSS kebab (case)—to provide typings that
suits different needs.

Variations:

- **Default** - Property names in JavaScript (camel) case
- **Hyphen** - Property names in CSS (kebab) case

### Alternative & Standard Types

All of the following interfaces accept an optional, generic argument, to define
the `<length>` value. It defaults to `string | 0`. You can specify this when
using libraries that accepts any numeric value as length which is common in
CSS-in-JS libraries like [EmotionJS](https://github.com/emotion-js/emotion).

|                 | Default                 | Hyphen                        |
| :-------------- | :---------------------- | :---------------------------- |
| **All**         | `Properties`            | `PropertiesHyphen`            |
| **Alternative** | `AlternativeProperties` | `AlternativePropertiesHyphen` |
| **Standard**    | `StandardProperties`    | `StandardPropertiesHyphen`    |

Categories:

- **All** - Includes `Alternative` and `Standard`
- **`Alternative`** - Properties that end with an `-alt` postfix that are direct
  alternatives to a standard CSS property
- **`Standard`** - Properties that correspond to a Microsoft Office feature.
  While these do not have a CSS equivalent, they may or may not have an effect
  on Microsoft Outlook

### Font Types

Interfaces with descriptors for different MSO font types.

|               | Default             | Hyphen                    |
| :------------ | :------------------ | :------------------------ |
| **All**       | `FontProperties`    | `FontPropertiesHyphen`    |
| **`Ansi`**    | `AnsiProperties`    | `AnsiPropertiesHyphen`    |
| **`Ascii`**   | `AsciiProperties`   | `AsciiropertiesHyphen`    |
| **`Bidi`**    | `BidiProperties`    | `BidiPropertiesHyphen`    |
| **`Fareast`** | `FareastProperties` | `FareastPropertiesHyphen` |
| **`Panose`**  | `PanoseProperties`  | `PanosePropertiesHyphen`  |

Categories:

- **All** - Includes `Ansi`, `Ascii`, `Bidi`, `Fareast`, and `Panose`
- **`Ansi`** - Ansi specific font properties
- **`Ascii`** - Ascii specific font properties
- **`Bidi`** - Bidi specific font properties
- **`Fareast`** - Fareast specific font properties
- **`Panose`** - Panose specific font properties

## Using Default Variation

JavaScript cased (camel) properties are provided in `Mso.Properties` and
`Mso.FontProperties`.

```ts
import * as Mso from 'msotype';

const styles: Mso.Properties = {
  msoFontAlt: 'Helvetica',
  msoLineHeightRule: 'exactly',
};
```

## Using Hyphen Variation

Hyphen cased (kebab) properties are provided in `Mso.PropertiesHyphen`. These
not **not** included by default in `Mso.Properties`. To allow both of them, you
can simply extend with `Mso.PropertiesHyphen`.

```ts
import * as Mso from 'msotype';

interface Style extends Mso.Properties, Mso.PropertiesHyphen {}

const style: Style = {
  'mso-margin-alt': 0,
  msoPaddingAlt: 0,
};
```

This also works with `Mso.FontPropertiesHyphen`, which can be used to extend
`Mso.FontProperties`.

```ts
import * as Mso from 'msotype';

interface Style extends Mso.FontProperties, Mso.FontPropertiesHyphen {}

const style: Style = {
  'mso-ansi-font-size': 'large',
  msoBidiFlag: 'on',
};
```

## Overriding `<length>`

Length defaults to `string | 0`. But it's possible to override it using
generics.

```ts
import * as Mso from 'msotype';

const style: Mso.Properties<string | number> = {
  msoMarginAlt: '0px',
  msoPaddingAlt: 0,
};
```

## Type Check All CSS Properties

By default, **only** `mso-` CSS vendor prefixes are provided. If you want to
type check all CSS properties, you can use `msotype` together with [csstype]. To
do this, you can simply extend any `csstype` type with any `msotype` type.

```ts
import * as Css from 'csstype';
import * as Mso from 'msotype';

interface Styles extends Css.Properties, Mso.Properties {}

const styles: Styles = {
  msoFontAlt: 'Helvetica',
  msoLineHeightRule: 'exactly',
  lineHeight: 1.4,
};
```

## More

**Data Sources**

- [List of MSO Properties][stigmortenmyre]
