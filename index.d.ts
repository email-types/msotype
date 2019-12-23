export interface AlternativeProperties<TLength = GlobalsString | 0> {
  /**
   * Microsoft Office alternative to the **`border`** shorthand CSS property—which sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  msoBorderAlt?: MsoBorderAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-bottom`** shorthand CSS property—which sets an element's bottom border. It sets the values of `mso-border-bottom-width-alt`, `mso-border-bottom-style-alt` and `mso-border-bottom-color-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderBottomAlt?: MsoBorderBottomAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-bottom-color`** CSS property—which sets the color of an element's bottom border. It can also be set with shorthand properties `mso-border-color-alt` or `mso-border-bottom-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderBottomColorAlt?: MsoBorderBottomColorAltProperty;
  /**
   * Microsoft Office alternative to the **`border-bottom`** shorthand CSS property—which sets an element's bottom border. It sets the values of `mso-border-bottom-width-alt`, `mso-border-bottom-style-alt` and `mso-border-bottom-color-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderBottomStyleAlt?: MsoBorderBottomStyleAltProperty;
  /**
   * Microsoft Office alternative to the **`border-bottom-width`** CSS property—which sets the width of the bottom border of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderBottomWidthAlt?: MsoBorderBottomWidthAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-color`** shorthand CSS property—which sets the color of an element's border.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderColorAlt?: MsoBorderColorAltProperty;
  /**
   * Microsoft Office alternative to the **`border-left`** shorthand CSS property—which sets an element's left border. It sets the values of `mso-border-left-width-alt`, `mso-border-left-style-alt` and `mso-border-left-color-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderLeftAlt?: MsoBorderLeftAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-left-color`** CSS property—which sets the color of an element's left border. It can also be set with shorthand properties `mso-border-color-alt` or `mso-border-left-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderLeftColorAlt?: MsoBorderLeftColorAltProperty;
  /**
   * Microsoft Office alternative to the **`border-left-style`** CSS property—which sets the line style of an element's left border.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderLeftStyleAlt?: MsoBorderLeftStyleAltProperty;
  /**
   * Microsoft Office alternative to the **`border-left-width`** CSS property—which sets the width of the left border of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderLeftWidthAlt?: MsoBorderLeftWidthAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-right`** shorthand CSS property—which sets an element's right border. It sets the values of `mso-border-right-width-alt`, `mso-border-right-style-alt` and `mso-border-right-color-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderRightAlt?: MsoBorderRightAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-right-color`** CSS property—which sets the color of an element's right border. It can also be set with shorthand properties `mso-border-color-alt` or `mso-border-right-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderRightColorAlt?: MsoBorderRightColorAltProperty;
  /**
   * Microsoft Office alternative to the **`border-right-style`** CSS property—which sets the line style of an element's right border.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderRightStyleAlt?: MsoBorderRightStyleAltProperty;
  /**
   * Microsoft Office alternative to the **`border-right-width`** CSS property—which sets the width of the right border of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderRightWidthAlt?: MsoBorderRightWidthAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-style`** shorthand CSS property—which sets the style of an element's border.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderStyleAlt?: MsoBorderStyleAltProperty;
  /**
   * Microsoft Office alternative to the **`border-top`** shorthand CSS property—which sets an element's top border. It sets the values of `mso-border-top-width-alt`, `mso-border-top-style-alt` and `mso-border-top-color-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderTopAlt?: MsoBorderTopAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-top-color`** CSS property—which sets the color of an element's top border. It can also be set with shorthand properties `mso-border-color-alt` or `mso-border-top-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderTopColorAlt?: MsoBorderTopColorAltProperty;
  /**
   * Microsoft Office alternative to the **`border-top-style`** CSS property—which sets the line style of an element's top border.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderTopStyleAlt?: MsoBorderTopStyleAltProperty;
  /**
   * Microsoft Office alternative to the **`border-top-width`** CSS property—which sets the width of the top border of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderTopWidthAlt?: MsoBorderTopWidthAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-width`** shorthand CSS property—which sets the width of an element's border.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderWidthAlt?: MsoBorderWidthAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`color`** CSS property—which sets the foreground color value of an element's text and text decorations, and sets the `windowtext` value. `windowtext` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `mso-border-color-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoColorAlt?: MsoColorAltProperty;
  /**
   * Microsoft Office alternative to the **`font`** CSS property—which is a shorthand for `font-style`, `font-variant`, `font-weight`, `font-stretch`, `font-size`, `line-height`, and `font-family`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoFontAlt?: MsoFontAltProperty;
  /**
   * Microsoft Office alternative to the **`height`** CSS property—which specifies the height of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  msoHeightAlt?: MsoHeightAltProperty;
  /**
   * Microsoft Office alternative to the **`layout-grid-char`** CSS property—specifies the size of the character grid for the layout of an element's text content. It only applies to block elements.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoLayoutGridCharAlt?: MsoLayoutGridCharAltProperty;
  /**
   * Microsoft Office alternative to the **`line-height`** CSS property—which sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`normal` |
   *
   * @see [`Paragraphs`](https://stigmortenmyre.no/mso/html/concepts/ofconparagraphs.htm), [`Paragraph Spacing`](https://stigmortenmyre.no/mso/html/word/wdconparagraphspacing.htm)
   */
  msoLineHeightAlt?: MsoLineHeightAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`margin-bottom`** CSS property—which sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Paragraphs`](https://stigmortenmyre.no/mso/html/concepts/ofconparagraphs.htm), [`Paragraph Spacing`](https://stigmortenmyre.no/mso/html/word/wdconparagraphspacing.htm), [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoMarginBottomAlt?: MsoMarginBottomAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`margin-left`** CSS property—which sets the margin area on the left of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoMarginLeftAlt?: MsoMarginLeftAltProperty;
  /**
   * Microsoft Office alternative to the **`margin-top`** CSS property—which sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Paragraphs`](https://stigmortenmyre.no/mso/html/concepts/ofconparagraphs.htm), [`Paragraph Spacing`](https://stigmortenmyre.no/mso/html/word/wdconparagraphspacing.htm), [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoMarginTopAlt?: MsoMarginTopAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`padding`** CSS property—which sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoPaddingAlt?: MsoPaddingAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`padding-bottom`** CSS property—which sets the height of the padding area on the bottom of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoPaddingBottomAlt?: MsoPaddingBottomAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`padding-left`** CSS property—which sets the width of the padding area on the left of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoPaddingLeftAlt?: MsoPaddingLeftAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`padding-right`** CSS property—which sets the width of the padding area on the right of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoPaddingRightAlt?: MsoPaddingRightAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`padding-top`** CSS property—which sets the height of the padding area on the top of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoPaddingTopAlt?: MsoPaddingTopAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`table-layout`** CSS property—which sets the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`auto` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoTableLayoutAlt?: MsoTableLayoutAltProperty;
  /**
   * Microsoft Office alternative to the **`text-indent`** CSS property—which sets the length of empty space (indentation) that is put before lines of text in a block.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoTextIndentAlt?: MsoTextIndentAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`vertical-align`** CSS property—which sets vertical alignment of an inline or table-cell box.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoVerticalAlignAlt?: MsoVerticalAlignAltProperty;
  /**
   * Microsoft Office alternative to the **`width`** CSS property—which specifies the width of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  msoWidthAlt?: MsoWidthAltProperty;
}

export interface StandardProperties<TLength = GlobalsString | 0> {
  /**
   * Sets or retrieves the interpolation (resampling) method used to stretch an `<img /> element
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msInterpolationMode?: MsInterpolationModeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoBackground?: MsoBackgroundProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoBackgroundSource?: MsoBackgroundSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoBaselinePosition?: MsoBaselinePositionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Hyperlinks`](https://stigmortenmyre.no/mso/html/concepts/ofconhyperlinks.htm)
   */
  msoBookmark?: MsoBookmarkProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderBetween?: MsoBorderBetweenProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderBetweenColor?: MsoBorderBetweenColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderBetweenStyle?: MsoBorderBetweenStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderBetweenWidth?: MsoBorderBetweenWidthProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoBorderBottomSource?: MsoBorderBottomSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`box` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderEffect?: MsoBorderEffectProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoBorderLeftSource?: MsoBorderLeftSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoBorderRightSource?: MsoBorderRightSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoBorderShadow?: MsoBorderShadowProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoBorderSource?: MsoBorderSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoBorderTopSource?: MsoBorderTopSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoBreakType?: MsoBreakTypeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  msoBuild?: MsoBuildProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  msoBuildAfterAction?: MsoBuildAfterActionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  msoBuildAfterColor?: MsoBuildAfterColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  msoBuildAutoSecs?: MsoBuildAutoSecsProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  msoBuildAvi?: MsoBuildAviProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  msoBuildDualId?: MsoBuildDualIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  msoBuildOrder?: MsoBuildOrderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  msoBuildSoundName?: MsoBuildSoundNameProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoBulletImage?: MsoBulletImageProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoCellSpecial?: MsoCellSpecialProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoCellspacing?: MsoCellspacingProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoCharIndent?: MsoCharIndentProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoCharIndentCount?: MsoCharIndentCountProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoCharIndentSize?: MsoCharIndentSizeProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoCharType?: MsoCharTypeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoCharWrap?: MsoCharWrapProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoColorIndex?: MsoColorIndexProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoColorSource?: MsoColorSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoColumnBreakBefore?: MsoColumnBreakBeforeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoColumnSeparator?: MsoColumnSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoColumns?: MsoColumnsProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoCommentAuthor?: MsoCommentAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoCommentContinuation?: MsoCommentContinuationProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoCommentId?: MsoCommentIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoCommentReference?: MsoCommentReferenceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`new-cell` |
   *
   * @see [`Saving and Opening Html Files`](https://stigmortenmyre.no/mso/html/excel/xlconloadinghtml.htm)
   */
  msoDataPlacement?: MsoDataPlacementProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  msoDefaultHeight?: MsoDefaultHeightProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  msoDefaultWidth?: MsoDefaultWidthProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoDiagonalDown?: MsoDiagonalDownProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoDiagonalDownColor?: MsoDiagonalDownColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoDiagonalDownSource?: MsoDiagonalDownSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoDiagonalDownStyle?: MsoDiagonalDownStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoDiagonalDownWidth?: MsoDiagonalDownWidthProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoDiagonalUp?: MsoDiagonalUpProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoDiagonalUpColor?: MsoDiagonalUpColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoDiagonalUpSource?: MsoDiagonalUpSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoDiagonalUpStyle?: MsoDiagonalUpStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoDiagonalUpWidth?: MsoDiagonalUpWidthProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoDisplayedDecimalSeparator?: MsoDisplayedDecimalSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoDisplayedThousandSeparator?: MsoDisplayedThousandSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoElement?: MsoElementProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`margin` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  msoElementAnchorHorizontal?: MsoElementAnchorHorizontalProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  msoElementAnchorLock?: MsoElementAnchorLockProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`margin` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  msoElementAnchorVertical?: MsoElementAnchorVerticalProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  msoElementFrameHeight?: MsoElementFrameHeightProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  msoElementFrameHspace?: MsoElementFrameHspaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  msoElementFrameVspace?: MsoElementFrameVspaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  msoElementFrameWidth?: MsoElementFrameWidthProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  msoElementLeft?: MsoElementLeftProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  msoElementLinespan?: MsoElementLinespanProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  msoElementTop?: MsoElementTopProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  msoElementWrap?: MsoElementWrapProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteContinuationNotice?: MsoEndnoteContinuationNoticeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteContinuationNoticeId?: MsoEndnoteContinuationNoticeIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteContinuationNoticeSrc?: MsoEndnoteContinuationNoticeSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteContinuationSeparator?: MsoEndnoteContinuationSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteContinuationSeparatorId?: MsoEndnoteContinuationSeparatorIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteContinuationSeparatorSrc?: MsoEndnoteContinuationSeparatorSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`normal` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteDisplay?: MsoEndnoteDisplayProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteId?: MsoEndnoteIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteNumbering?: MsoEndnoteNumberingProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteNumberingRestart?: MsoEndnoteNumberingRestartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`1` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteNumberingStart?: MsoEndnoteNumberingStartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`arabic` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteNumberingStyle?: MsoEndnoteNumberingStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`end-of-document` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnotePosition?: MsoEndnotePositionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteSeparator?: MsoEndnoteSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteSeparatorId?: MsoEndnoteSeparatorIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEndnoteSeparatorSrc?: MsoEndnoteSeparatorSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEvenFooter?: MsoEvenFooterProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEvenFooterId?: MsoEvenFooterIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEvenFooterSrc?: MsoEvenFooterSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEvenHeader?: MsoEvenHeaderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEvenHeaderId?: MsoEvenHeaderIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoEvenHeaderSrc?: MsoEvenHeaderSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFacingPages?: MsoFacingPagesProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoFieldChange?: MsoFieldChangeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoFieldChangeAuthor?: MsoFieldChangeAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoFieldChangeTime?: MsoFieldChangeTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoFieldChangeValue?: MsoFieldChangeValueProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Fields`](https://stigmortenmyre.no/mso/html/word/wdconfields.htm)
   */
  msoFieldCode?: MsoFieldCodeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Fields`](https://stigmortenmyre.no/mso/html/word/wdconfields.htm)
   */
  msoFieldLock?: MsoFieldLockProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoFillsColor?: MsoFillsColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFirstFooter?: MsoFirstFooterProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFirstFooterId?: MsoFirstFooterIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFirstFooterSrc?: MsoFirstFooterSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFirstHeader?: MsoFirstHeaderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFirstHeaderId?: MsoFirstHeaderIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFirstHeaderSrc?: MsoFirstHeaderSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoFontCharset?: MsoFontCharsetProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`truetype` |
   */
  msoFontFormat?: MsoFontFormatProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoFontInfo?: MsoFontInfoProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`Ansi` |
   */
  msoFontInfoCharset?: MsoFontInfoCharsetProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`auto` |
   */
  msoFontInfoType?: MsoFontInfoTypeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoFontKerning?: MsoFontKerningProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   */
  msoFontPitch?: MsoFontPitchProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoFontSignature?: MsoFontSignatureProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoFontSignatureCsbOne?: MsoFontSignatureCsbOneProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoFontSignatureCsbTwo?: MsoFontSignatureCsbTwoProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoFontSignatureUsbFour?: MsoFontSignatureUsbFourProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoFontSignatureUsbOne?: MsoFontSignatureUsbOneProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoFontSignatureUsbThree?: MsoFontSignatureUsbThreeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoFontSignatureUsbTwo?: MsoFontSignatureUsbTwoProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoFontSrc?: MsoFontSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoFontWidth?: MsoFontWidthProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFooter?: MsoFooterProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFooterData?: MsoFooterDataProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFooterId?: MsoFooterIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFooterMargin?: MsoFooterMarginProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFooterSrc?: MsoFooterSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteContinuationNotice?: MsoFootnoteContinuationNoticeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteContinuationNoticeId?: MsoFootnoteContinuationNoticeIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteContinuationNoticeSrc?: MsoFootnoteContinuationNoticeSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteContinuationSeparator?: MsoFootnoteContinuationSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteContinuationSeparatorId?: MsoFootnoteContinuationSeparatorIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteContinuationSeparatorSrc?: MsoFootnoteContinuationSeparatorSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteId?: MsoFootnoteIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteNumbering?: MsoFootnoteNumberingProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteNumberingRestart?: MsoFootnoteNumberingRestartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`1` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteNumberingStart?: MsoFootnoteNumberingStartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`arabic` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteNumberingStyle?: MsoFootnoteNumberingStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`beneath-text` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnotePosition?: MsoFootnotePositionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteSeparator?: MsoFootnoteSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteSeparatorId?: MsoFootnoteSeparatorIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFootnoteSeparatorSrc?: MsoFootnoteSeparatorSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoForeground?: MsoForegroundProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`yes` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoFormsProtection?: MsoFormsProtectionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`auto` |
   */
  msoGenericFontFamily?: MsoGenericFontFamilyProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoGridBottom?: MsoGridBottomProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoGridBottomCount?: MsoGridBottomCountProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoGridLeft?: MsoGridLeftProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoGridLeftCount?: MsoGridLeftCountProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoGridRight?: MsoGridRightProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoGridRightCount?: MsoGridRightCountProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoGridTop?: MsoGridTopProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoGridTopCount?: MsoGridTopCountProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`ltr` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoGutterDirection?: MsoGutterDirectionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoGutterMargin?: MsoGutterMarginProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`side` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoGutterPosition?: MsoGutterPositionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoHansiFontFamily?: MsoHansiFontFamilyProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoHeader?: MsoHeaderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoHeaderData?: MsoHeaderDataProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoHeaderId?: MsoHeaderIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoHeaderMargin?: MsoHeaderMarginProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoHeaderSrc?: MsoHeaderSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoHeightRule?: MsoHeightRuleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  msoHeightSource?: MsoHeightSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`none` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoHide?: MsoHideProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoHighlight?: MsoHighlightProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`left` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoHorizontalPageAlign?: MsoHorizontalPageAlignProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoHyphenate?: MsoHyphenateProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Saving and Opening Html Files`](https://stigmortenmyre.no/mso/html/excel/xlconloadinghtml.htm)
   */
  msoIgnore?: MsoIgnoreProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoKinsokuOverflow?: MsoKinsokuOverflowProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoLayoutGridAlign?: MsoLayoutGridAlignProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoLayoutGridOrigin?: MsoLayoutGridOriginProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`normal` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelInherit?: MsoLevelInheritProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`no` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelLegacy?: MsoLevelLegacyProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelLegacyIndent?: MsoLevelLegacyIndentProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelLegacySpace?: MsoLevelLegacySpaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`no` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelLegalFormat?: MsoLevelLegalFormatProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`arabic` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelNumberFormat?: MsoLevelNumberFormatProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`left` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelNumberPosition?: MsoLevelNumberPositionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`restart` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelNumbering?: MsoLevelNumberingProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`none` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelResetLevel?: MsoLevelResetLevelProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`1` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelStartAt?: MsoLevelStartAtProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelStyleLink?: MsoLevelStyleLinkProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`tab` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelSuffix?: MsoLevelSuffixProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelTabStop?: MsoLevelTabStopProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoLevelText?: MsoLevelTextProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoLineBreakOverride?: MsoLineBreakOverrideProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoLineGrid?: MsoLineGridProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoLineHeightRule?: MsoLineHeightRuleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoLineNumbersCountBy?: MsoLineNumbersCountByProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoLineNumbersDistance?: MsoLineNumbersDistanceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`continuous` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoLineNumbersRestart?: MsoLineNumbersRestartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`1` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoLineNumbersStart?: MsoLineNumbersStartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoLineSpacing?: MsoLineSpacingProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`linked` |
   */
  msoLinkedFrame?: MsoLinkedFrameProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoList?: MsoListProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoListChange?: MsoListChangeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoListChangeAuthor?: MsoListChangeAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoListChangeTime?: MsoListChangeTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoListChangeValues?: MsoListChangeValuesProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoListId?: MsoListIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoListIns?: MsoListInsProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoListInsAuthor?: MsoListInsAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoListInsTime?: MsoListInsTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoListName?: MsoListNameProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoListTemplateIds?: MsoListTemplateIdsProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`multilevel` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  msoListType?: MsoListTypeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoMirrorMargins?: MsoMirrorMarginsProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`yes` |
   *
   * @see [`Whitespace`](https://stigmortenmyre.no/mso/html/concepts/ofconwhitespace.htm)
   */
  msoNegativeIndentTab?: MsoNegativeIndentTabProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoNumberFormat?: MsoNumberFormatProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoOutlineLevel?: MsoOutlineLevelProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoOutlineParent?: MsoOutlineParentProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`right` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoOutlineParentCol?: MsoOutlineParentColProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`bottom` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoOutlineParentRow?: MsoOutlineParentRowProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`expanded` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoOutlineParentVisibility?: MsoOutlineParentVisibilityProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`userset` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoOutlineStyle?: MsoOutlineStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   */
  msoPaddingBetween?: MsoPaddingBetweenProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageBorderAligned?: MsoPageBorderAlignedProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageBorderArt?: MsoPageBorderArtProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageBorderBottomArt?: MsoPageBorderBottomArtProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`all-pages` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageBorderDisplay?: MsoPageBorderDisplayProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageBorderLeftArt?: MsoPageBorderLeftArtProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`edge` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageBorderOffsetFrom?: MsoPageBorderOffsetFromProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageBorderRightArt?: MsoPageBorderRightArtProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`yes` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageBorderSurroundFooter?: MsoPageBorderSurroundFooterProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`yes` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageBorderSurroundHeader?: MsoPageBorderSurroundHeaderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageBorderTopArt?: MsoPageBorderTopArtProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`in-front` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageBorderZOrder?: MsoPageBorderZOrderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageNumbers?: MsoPageNumbersProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`hyphen` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageNumbersChapterSeparator?: MsoPageNumbersChapterSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageNumbersChapterStyle?: MsoPageNumbersChapterStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageNumbersStart?: MsoPageNumbersStartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`arabic` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageNumbersStyle?: MsoPageNumbersStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`portrait` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageOrientation?: MsoPageOrientationProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPageScale?: MsoPageScaleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   */
  msoPagination?: MsoPaginationProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPaperSource?: MsoPaperSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPaperSourceFirstPage?: MsoPaperSourceFirstPageProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPaperSourceOtherPages?: MsoPaperSourceOtherPagesProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoPattern?: MsoPatternProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoPatternColor?: MsoPatternColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoPatternStyle?: MsoPatternStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPrintArea?: MsoPrintAreaProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`yes` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPrintColor?: MsoPrintColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPrintGridlines?: MsoPrintGridlinesProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPrintHeadings?: MsoPrintHeadingsProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPrintResolution?: MsoPrintResolutionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`over-then-down` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPrintSheetOrder?: MsoPrintSheetOrderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPrintTitleColumn?: MsoPrintTitleColumnProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoPrintTitleRow?: MsoPrintTitleRowProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoPropChange?: MsoPropChangeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoPropChangeAuthor?: MsoPropChangeAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoPropChangeTime?: MsoPropChangeTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`no` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoProtection?: MsoProtectionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoRotate?: MsoRotateProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoRowMarginLeft?: MsoRowMarginLeftProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoRowMarginRight?: MsoRowMarginRightProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoRubyMerge?: MsoRubyMergeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoRubyVisibility?: MsoRubyVisibilityProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoSchemeFillColor?: MsoSchemeFillColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoSchemeShadowColor?: MsoSchemeShadowColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  msoShading?: MsoShadingProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoShadowColor?: MsoShadowColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  msoSpaceAbove?: MsoSpaceAboveProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  msoSpaceBelow?: MsoSpaceBelowProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Whitespace`](https://stigmortenmyre.no/mso/html/concepts/ofconwhitespace.htm)
   */
  msoSpacerun?: MsoSpacerunProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoSpecialCharacter?: MsoSpecialCharacterProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoSpecialFormat?: MsoSpecialFormatProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoStyleId?: MsoStyleIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoStyleName?: MsoStyleNameProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoStyleNext?: MsoStyleNextProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoStyleParent?: MsoStyleParentProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoStyleType?: MsoStyleTypeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoStyleUpdate?: MsoStyleUpdateProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Master Documents`](https://stigmortenmyre.no/mso/html/word/wdconmasterdocuments.htm)
   */
  msoSubdocument?: MsoSubdocumentProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   */
  msoSymbolFontFamily?: MsoSymbolFontFamilyProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`1` |
   *
   * @see [`Whitespace`](https://stigmortenmyre.no/mso/html/concepts/ofconwhitespace.htm)
   */
  msoTabCount?: MsoTabCountProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`margin` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoTableAnchorHorizontal?: MsoTableAnchorHorizontalProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`margin` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoTableAnchorVertical?: MsoTableAnchorVerticalProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoTableBspace?: MsoTableBspaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoTableDelAuthor?: MsoTableDelAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoTableDelTime?: MsoTableDelTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoTableDeleted?: MsoTableDeletedProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`normal` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoTableDir?: MsoTableDirProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoTableInsAuthor?: MsoTableInsAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoTableInsTime?: MsoTableInsTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoTableInserted?: MsoTableInsertedProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoTableLeft?: MsoTableLeftProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoTableLspace?: MsoTableLspaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`auto` |
   */
  msoTableOverlap?: MsoTableOverlapProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoTablePropAuthor?: MsoTablePropAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoTablePropChange?: MsoTablePropChangeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  msoTablePropTime?: MsoTablePropTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoTableRspace?: MsoTableRspaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoTableTop?: MsoTableTopProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoTableTspace?: MsoTableTspaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`none` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  msoTableWrap?: MsoTableWrapProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`none` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoTextAnimation?: MsoTextAnimationProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoTextCombineBrackets?: MsoTextCombineBracketsProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoTextCombineId?: MsoTextCombineIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  msoTextControl?: MsoTextControlProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoTextFitId?: MsoTextFitIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`horizontal` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  msoTextOrientation?: MsoTextOrientationProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoTextRaise?: MsoTextRaiseProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoTitlePage?: MsoTitlePageProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoTnyCompress?: MsoTnyCompressProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  msoUnsynced?: MsoUnsyncedProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`baseline` |
   */
  msoVerticalAlignSpecial?: MsoVerticalAlignSpecialProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`top` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm), [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  msoVerticalPageAlign?: MsoVerticalPageAlignProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  msoWidthSource?: MsoWidthSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoWordWrap?: MsoWordWrapProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`1` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  msoXlrowspan?: MsoXlrowspanProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  msoZeroHeight?: MsoZeroHeightProperty;
}

export interface AnsiProperties<TLength = GlobalsString | 0> {
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`medium` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoAnsiFontSize?: MsoAnsiFontSizeProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`normal` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoAnsiFontStyle?: MsoAnsiFontStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`normal` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoAnsiFontWeight?: MsoAnsiFontWeightProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoAnsiLanguage?: MsoAnsiLanguageProperty;
}

export interface AsciiProperties {
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoAsciiFontFamily?: MsoAsciiFontFamilyProperty;
}

export interface BidiProperties<TLength = GlobalsString | 0> {
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`off` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoBidiFlag?: MsoBidiFlagProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoBidiFontFamily?: MsoBidiFontFamilyProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`medium` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoBidiFontSize?: MsoBidiFontSizeProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`normal` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoBidiFontStyle?: MsoBidiFontStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`normal` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoBidiFontWeight?: MsoBidiFontWeightProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoBidiLanguage?: MsoBidiLanguageProperty;
}

export interface FareastProperties {
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  msoFareastFontFamily?: MsoFareastFontFamilyProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoFareastHint?: MsoFareastHintProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  msoFareastLanguage?: MsoFareastLanguageProperty;
}

export interface PanoseProperties {
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoPanoseArmStyle?: MsoPanoseArmStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoPanoseContrast?: MsoPanoseContrastProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoPanoseFamilyType?: MsoPanoseFamilyTypeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoPanoseLetterform?: MsoPanoseLetterformProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoPanoseMidline?: MsoPanoseMidlineProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoPanoseProportion?: MsoPanoseProportionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoPanoseSerifStyle?: MsoPanoseSerifStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoPanoseStrokeVariation?: MsoPanoseStrokeVariationProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoPanoseWeight?: MsoPanoseWeightProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  msoPanoseXHeight?: MsoPanoseXHeightProperty;
}

export interface Properties<TLength = GlobalsString | 0>
  extends AlternativeProperties<TLength>,
    StandardProperties<TLength> {}

export interface FontProperties<TLength = GlobalsString | 0>
  extends AnsiProperties<TLength>,
    AsciiProperties,
    BidiProperties<TLength>,
    FareastProperties,
    PanoseProperties {}

export interface AlternativePropertiesHyphen<TLength = GlobalsString | 0> {
  /**
   * Microsoft Office alternative to the **`border`** shorthand CSS property—which sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  'mso-border-alt'?: MsoBorderAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-bottom`** shorthand CSS property—which sets an element's bottom border. It sets the values of `mso-border-bottom-width-alt`, `mso-border-bottom-style-alt` and `mso-border-bottom-color-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-bottom-alt'?: MsoBorderBottomAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-bottom-color`** CSS property—which sets the color of an element's bottom border. It can also be set with shorthand properties `mso-border-color-alt` or `mso-border-bottom-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-bottom-color-alt'?: MsoBorderBottomColorAltProperty;
  /**
   * Microsoft Office alternative to the **`border-bottom`** shorthand CSS property—which sets an element's bottom border. It sets the values of `mso-border-bottom-width-alt`, `mso-border-bottom-style-alt` and `mso-border-bottom-color-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-bottom-style-alt'?: MsoBorderBottomStyleAltProperty;
  /**
   * Microsoft Office alternative to the **`border-bottom-width`** CSS property—which sets the width of the bottom border of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-bottom-width-alt'?: MsoBorderBottomWidthAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-color`** shorthand CSS property—which sets the color of an element's border.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-color-alt'?: MsoBorderColorAltProperty;
  /**
   * Microsoft Office alternative to the **`border-left`** shorthand CSS property—which sets an element's left border. It sets the values of `mso-border-left-width-alt`, `mso-border-left-style-alt` and `mso-border-left-color-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-left-alt'?: MsoBorderLeftAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-left-color`** CSS property—which sets the color of an element's left border. It can also be set with shorthand properties `mso-border-color-alt` or `mso-border-left-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-left-color-alt'?: MsoBorderLeftColorAltProperty;
  /**
   * Microsoft Office alternative to the **`border-left-style`** CSS property—which sets the line style of an element's left border.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-left-style-alt'?: MsoBorderLeftStyleAltProperty;
  /**
   * Microsoft Office alternative to the **`border-left-width`** CSS property—which sets the width of the left border of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-left-width-alt'?: MsoBorderLeftWidthAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-right`** shorthand CSS property—which sets an element's right border. It sets the values of `mso-border-right-width-alt`, `mso-border-right-style-alt` and `mso-border-right-color-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-right-alt'?: MsoBorderRightAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-right-color`** CSS property—which sets the color of an element's right border. It can also be set with shorthand properties `mso-border-color-alt` or `mso-border-right-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-right-color-alt'?: MsoBorderRightColorAltProperty;
  /**
   * Microsoft Office alternative to the **`border-right-style`** CSS property—which sets the line style of an element's right border.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-right-style-alt'?: MsoBorderRightStyleAltProperty;
  /**
   * Microsoft Office alternative to the **`border-right-width`** CSS property—which sets the width of the right border of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-right-width-alt'?: MsoBorderRightWidthAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-style`** shorthand CSS property—which sets the style of an element's border.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-style-alt'?: MsoBorderStyleAltProperty;
  /**
   * Microsoft Office alternative to the **`border-top`** shorthand CSS property—which sets an element's top border. It sets the values of `mso-border-top-width-alt`, `mso-border-top-style-alt` and `mso-border-top-color-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-top-alt'?: MsoBorderTopAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-top-color`** CSS property—which sets the color of an element's top border. It can also be set with shorthand properties `mso-border-color-alt` or `mso-border-top-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-top-color-alt'?: MsoBorderTopColorAltProperty;
  /**
   * Microsoft Office alternative to the **`border-top-style`** CSS property—which sets the line style of an element's top border.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-top-style-alt'?: MsoBorderTopStyleAltProperty;
  /**
   * Microsoft Office alternative to the **`border-top-width`** CSS property—which sets the width of the top border of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-top-width-alt'?: MsoBorderTopWidthAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`border-width`** shorthand CSS property—which sets the width of an element's border.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-width-alt'?: MsoBorderWidthAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`color`** CSS property—which sets the foreground color value of an element's text and text decorations, and sets the `windowtext` value. `windowtext` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `mso-border-color-alt`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-color-alt'?: MsoColorAltProperty;
  /**
   * Microsoft Office alternative to the **`font`** CSS property—which is a shorthand for `font-style`, `font-variant`, `font-weight`, `font-stretch`, `font-size`, `line-height`, and `font-family`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-font-alt'?: MsoFontAltProperty;
  /**
   * Microsoft Office alternative to the **`height`** CSS property—which specifies the height of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  'mso-height-alt'?: MsoHeightAltProperty;
  /**
   * Microsoft Office alternative to the **`layout-grid-char`** CSS property—specifies the size of the character grid for the layout of an element's text content. It only applies to block elements.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-layout-grid-char-alt'?: MsoLayoutGridCharAltProperty;
  /**
   * Microsoft Office alternative to the **`line-height`** CSS property—which sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`normal` |
   *
   * @see [`Paragraphs`](https://stigmortenmyre.no/mso/html/concepts/ofconparagraphs.htm), [`Paragraph Spacing`](https://stigmortenmyre.no/mso/html/word/wdconparagraphspacing.htm)
   */
  'mso-line-height-alt'?: MsoLineHeightAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`margin-bottom`** CSS property—which sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Paragraphs`](https://stigmortenmyre.no/mso/html/concepts/ofconparagraphs.htm), [`Paragraph Spacing`](https://stigmortenmyre.no/mso/html/word/wdconparagraphspacing.htm), [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-margin-bottom-alt'?: MsoMarginBottomAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`margin-left`** CSS property—which sets the margin area on the left of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-margin-left-alt'?: MsoMarginLeftAltProperty;
  /**
   * Microsoft Office alternative to the **`margin-top`** CSS property—which sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Paragraphs`](https://stigmortenmyre.no/mso/html/concepts/ofconparagraphs.htm), [`Paragraph Spacing`](https://stigmortenmyre.no/mso/html/word/wdconparagraphspacing.htm), [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-margin-top-alt'?: MsoMarginTopAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`padding`** CSS property—which sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-padding-alt'?: MsoPaddingAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`padding-bottom`** CSS property—which sets the height of the padding area on the bottom of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-padding-bottom-alt'?: MsoPaddingBottomAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`padding-left`** CSS property—which sets the width of the padding area on the left of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-padding-left-alt'?: MsoPaddingLeftAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`padding-right`** CSS property—which sets the width of the padding area on the right of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-padding-right-alt'?: MsoPaddingRightAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`padding-top`** CSS property—which sets the height of the padding area on the top of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-padding-top-alt'?: MsoPaddingTopAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`table-layout`** CSS property—which sets the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`auto` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-table-layout-alt'?: MsoTableLayoutAltProperty;
  /**
   * Microsoft Office alternative to the **`text-indent`** CSS property—which sets the length of empty space (indentation) that is put before lines of text in a block.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-text-indent-alt'?: MsoTextIndentAltProperty<TLength>;
  /**
   * Microsoft Office alternative to the **`vertical-align`** CSS property—which sets vertical alignment of an inline or table-cell box.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-vertical-align-alt'?: MsoVerticalAlignAltProperty;
  /**
   * Microsoft Office alternative to the **`width`** CSS property—which specifies the width of an element.
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  'mso-width-alt'?: MsoWidthAltProperty;
}

export interface StandardPropertiesHyphen<TLength = GlobalsString | 0> {
  /**
   * Sets or retrieves the interpolation (resampling) method used to stretch an `<img /> element
   *
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'ms-interpolation-mode'?: MsInterpolationModeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-background'?: MsoBackgroundProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-background-source'?: MsoBackgroundSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-baseline-position'?: MsoBaselinePositionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Hyperlinks`](https://stigmortenmyre.no/mso/html/concepts/ofconhyperlinks.htm)
   */
  'mso-bookmark'?: MsoBookmarkProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-between'?: MsoBorderBetweenProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-between-color'?: MsoBorderBetweenColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-between-style'?: MsoBorderBetweenStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-between-width'?: MsoBorderBetweenWidthProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-border-bottom-source'?: MsoBorderBottomSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`box` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-effect'?: MsoBorderEffectProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-border-left-source'?: MsoBorderLeftSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-border-right-source'?: MsoBorderRightSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-border-shadow'?: MsoBorderShadowProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-border-source'?: MsoBorderSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-border-top-source'?: MsoBorderTopSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-break-type'?: MsoBreakTypeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  'mso-build'?: MsoBuildProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  'mso-build-after-action'?: MsoBuildAfterActionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  'mso-build-after-color'?: MsoBuildAfterColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  'mso-build-auto-secs'?: MsoBuildAutoSecsProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  'mso-build-avi'?: MsoBuildAviProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  'mso-build-dual-id'?: MsoBuildDualIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  'mso-build-order'?: MsoBuildOrderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Animations`](https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm)
   */
  'mso-build-sound-name'?: MsoBuildSoundNameProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-bullet-image'?: MsoBulletImageProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-cell-special'?: MsoCellSpecialProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-cellspacing'?: MsoCellspacingProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-char-indent'?: MsoCharIndentProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-char-indent-count'?: MsoCharIndentCountProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-char-indent-size'?: MsoCharIndentSizeProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-char-type'?: MsoCharTypeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-char-wrap'?: MsoCharWrapProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-color-index'?: MsoColorIndexProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-color-source'?: MsoColorSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-column-break-before'?: MsoColumnBreakBeforeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-column-separator'?: MsoColumnSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-columns'?: MsoColumnsProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-comment-author'?: MsoCommentAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-comment-continuation'?: MsoCommentContinuationProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-comment-id'?: MsoCommentIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-comment-reference'?: MsoCommentReferenceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`new-cell` |
   *
   * @see [`Saving and Opening Html Files`](https://stigmortenmyre.no/mso/html/excel/xlconloadinghtml.htm)
   */
  'mso-data-placement'?: MsoDataPlacementProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  'mso-default-height'?: MsoDefaultHeightProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  'mso-default-width'?: MsoDefaultWidthProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-diagonal-down'?: MsoDiagonalDownProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-diagonal-down-color'?: MsoDiagonalDownColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-diagonal-down-source'?: MsoDiagonalDownSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-diagonal-down-style'?: MsoDiagonalDownStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-diagonal-down-width'?: MsoDiagonalDownWidthProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-diagonal-up'?: MsoDiagonalUpProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-diagonal-up-color'?: MsoDiagonalUpColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-diagonal-up-source'?: MsoDiagonalUpSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-diagonal-up-style'?: MsoDiagonalUpStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`medium` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-diagonal-up-width'?: MsoDiagonalUpWidthProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-displayed-decimal-separator'?: MsoDisplayedDecimalSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-displayed-thousand-separator'?: MsoDisplayedThousandSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-element'?: MsoElementProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`margin` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  'mso-element-anchor-horizontal'?: MsoElementAnchorHorizontalProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  'mso-element-anchor-lock'?: MsoElementAnchorLockProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`margin` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  'mso-element-anchor-vertical'?: MsoElementAnchorVerticalProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  'mso-element-frame-height'?: MsoElementFrameHeightProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  'mso-element-frame-hspace'?: MsoElementFrameHspaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  'mso-element-frame-vspace'?: MsoElementFrameVspaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  'mso-element-frame-width'?: MsoElementFrameWidthProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  'mso-element-left'?: MsoElementLeftProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  'mso-element-linespan'?: MsoElementLinespanProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  'mso-element-top'?: MsoElementTopProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Frames and Drop Caps`](https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm)
   */
  'mso-element-wrap'?: MsoElementWrapProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-continuation-notice'?: MsoEndnoteContinuationNoticeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-continuation-notice-id'?: MsoEndnoteContinuationNoticeIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-continuation-notice-src'?: MsoEndnoteContinuationNoticeSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-continuation-separator'?: MsoEndnoteContinuationSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-continuation-separator-id'?: MsoEndnoteContinuationSeparatorIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-continuation-separator-src'?: MsoEndnoteContinuationSeparatorSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`normal` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-display'?: MsoEndnoteDisplayProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-id'?: MsoEndnoteIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-numbering'?: MsoEndnoteNumberingProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-numbering-restart'?: MsoEndnoteNumberingRestartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`1` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-numbering-start'?: MsoEndnoteNumberingStartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`arabic` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-numbering-style'?: MsoEndnoteNumberingStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`end-of-document` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-position'?: MsoEndnotePositionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-separator'?: MsoEndnoteSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-separator-id'?: MsoEndnoteSeparatorIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-endnote-separator-src'?: MsoEndnoteSeparatorSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-even-footer'?: MsoEvenFooterProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-even-footer-id'?: MsoEvenFooterIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-even-footer-src'?: MsoEvenFooterSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-even-header'?: MsoEvenHeaderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-even-header-id'?: MsoEvenHeaderIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-even-header-src'?: MsoEvenHeaderSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-facing-pages'?: MsoFacingPagesProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-field-change'?: MsoFieldChangeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-field-change-author'?: MsoFieldChangeAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-field-change-time'?: MsoFieldChangeTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-field-change-value'?: MsoFieldChangeValueProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Fields`](https://stigmortenmyre.no/mso/html/word/wdconfields.htm)
   */
  'mso-field-code'?: MsoFieldCodeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Fields`](https://stigmortenmyre.no/mso/html/word/wdconfields.htm)
   */
  'mso-field-lock'?: MsoFieldLockProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-fills-color'?: MsoFillsColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-first-footer'?: MsoFirstFooterProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-first-footer-id'?: MsoFirstFooterIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-first-footer-src'?: MsoFirstFooterSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-first-header'?: MsoFirstHeaderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-first-header-id'?: MsoFirstHeaderIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-first-header-src'?: MsoFirstHeaderSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-font-charset'?: MsoFontCharsetProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`truetype` |
   */
  'mso-font-format'?: MsoFontFormatProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-font-info'?: MsoFontInfoProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`Ansi` |
   */
  'mso-font-info-charset'?: MsoFontInfoCharsetProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`auto` |
   */
  'mso-font-info-type'?: MsoFontInfoTypeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-font-kerning'?: MsoFontKerningProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   */
  'mso-font-pitch'?: MsoFontPitchProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-font-signature'?: MsoFontSignatureProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-font-signature-csb-one'?: MsoFontSignatureCsbOneProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-font-signature-csb-two'?: MsoFontSignatureCsbTwoProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-font-signature-usb-four'?: MsoFontSignatureUsbFourProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-font-signature-usb-one'?: MsoFontSignatureUsbOneProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-font-signature-usb-three'?: MsoFontSignatureUsbThreeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-font-signature-usb-two'?: MsoFontSignatureUsbTwoProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-font-src'?: MsoFontSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-font-width'?: MsoFontWidthProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footer'?: MsoFooterProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footer-data'?: MsoFooterDataProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footer-id'?: MsoFooterIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footer-margin'?: MsoFooterMarginProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footer-src'?: MsoFooterSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-continuation-notice'?: MsoFootnoteContinuationNoticeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-continuation-notice-id'?: MsoFootnoteContinuationNoticeIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-continuation-notice-src'?: MsoFootnoteContinuationNoticeSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-continuation-separator'?: MsoFootnoteContinuationSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-continuation-separator-id'?: MsoFootnoteContinuationSeparatorIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-continuation-separator-src'?: MsoFootnoteContinuationSeparatorSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-id'?: MsoFootnoteIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-numbering'?: MsoFootnoteNumberingProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-numbering-restart'?: MsoFootnoteNumberingRestartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`1` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-numbering-start'?: MsoFootnoteNumberingStartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`arabic` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-numbering-style'?: MsoFootnoteNumberingStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`beneath-text` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-position'?: MsoFootnotePositionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-separator'?: MsoFootnoteSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-separator-id'?: MsoFootnoteSeparatorIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-footnote-separator-src'?: MsoFootnoteSeparatorSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-foreground'?: MsoForegroundProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`yes` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-forms-protection'?: MsoFormsProtectionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`auto` |
   */
  'mso-generic-font-family'?: MsoGenericFontFamilyProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-grid-bottom'?: MsoGridBottomProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-grid-bottom-count'?: MsoGridBottomCountProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-grid-left'?: MsoGridLeftProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-grid-left-count'?: MsoGridLeftCountProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-grid-right'?: MsoGridRightProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-grid-right-count'?: MsoGridRightCountProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-grid-top'?: MsoGridTopProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-grid-top-count'?: MsoGridTopCountProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`ltr` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-gutter-direction'?: MsoGutterDirectionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-gutter-margin'?: MsoGutterMarginProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`side` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-gutter-position'?: MsoGutterPositionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-hansi-font-family'?: MsoHansiFontFamilyProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-header'?: MsoHeaderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-header-data'?: MsoHeaderDataProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-header-id'?: MsoHeaderIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-header-margin'?: MsoHeaderMarginProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-header-src'?: MsoHeaderSrcProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-height-rule'?: MsoHeightRuleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  'mso-height-source'?: MsoHeightSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`none` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-hide'?: MsoHideProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-highlight'?: MsoHighlightProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`left` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-horizontal-page-align'?: MsoHorizontalPageAlignProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-hyphenate'?: MsoHyphenateProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Saving and Opening Html Files`](https://stigmortenmyre.no/mso/html/excel/xlconloadinghtml.htm)
   */
  'mso-ignore'?: MsoIgnoreProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-kinsoku-overflow'?: MsoKinsokuOverflowProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-layout-grid-align'?: MsoLayoutGridAlignProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-layout-grid-origin'?: MsoLayoutGridOriginProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`normal` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-inherit'?: MsoLevelInheritProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`no` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-legacy'?: MsoLevelLegacyProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-legacy-indent'?: MsoLevelLegacyIndentProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-legacy-space'?: MsoLevelLegacySpaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`no` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-legal-format'?: MsoLevelLegalFormatProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`arabic` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-number-format'?: MsoLevelNumberFormatProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`left` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-number-position'?: MsoLevelNumberPositionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`restart` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-numbering'?: MsoLevelNumberingProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`none` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-reset-level'?: MsoLevelResetLevelProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`1` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-start-at'?: MsoLevelStartAtProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-style-link'?: MsoLevelStyleLinkProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`tab` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-suffix'?: MsoLevelSuffixProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-tab-stop'?: MsoLevelTabStopProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-level-text'?: MsoLevelTextProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-line-break-override'?: MsoLineBreakOverrideProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-line-grid'?: MsoLineGridProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-line-height-rule'?: MsoLineHeightRuleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-line-numbers-count-by'?: MsoLineNumbersCountByProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-line-numbers-distance'?: MsoLineNumbersDistanceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`continuous` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-line-numbers-restart'?: MsoLineNumbersRestartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`1` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-line-numbers-start'?: MsoLineNumbersStartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-line-spacing'?: MsoLineSpacingProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`linked` |
   */
  'mso-linked-frame'?: MsoLinkedFrameProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-list'?: MsoListProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-list-change'?: MsoListChangeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-list-change-author'?: MsoListChangeAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-list-change-time'?: MsoListChangeTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-list-change-values'?: MsoListChangeValuesProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-list-id'?: MsoListIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-list-ins'?: MsoListInsProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-list-ins-author'?: MsoListInsAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-list-ins-time'?: MsoListInsTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-list-name'?: MsoListNameProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-list-template-ids'?: MsoListTemplateIdsProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`multilevel` |
   *
   * @see [`Bullets and Numbered Lists`](https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm)
   */
  'mso-list-type'?: MsoListTypeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-mirror-margins'?: MsoMirrorMarginsProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`yes` |
   *
   * @see [`Whitespace`](https://stigmortenmyre.no/mso/html/concepts/ofconwhitespace.htm)
   */
  'mso-negative-indent-tab'?: MsoNegativeIndentTabProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-number-format'?: MsoNumberFormatProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-outline-level'?: MsoOutlineLevelProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-outline-parent'?: MsoOutlineParentProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`right` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-outline-parent-col'?: MsoOutlineParentColProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`bottom` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-outline-parent-row'?: MsoOutlineParentRowProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`expanded` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-outline-parent-visibility'?: MsoOutlineParentVisibilityProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`userset` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-outline-style'?: MsoOutlineStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   */
  'mso-padding-between'?: MsoPaddingBetweenProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-border-aligned'?: MsoPageBorderAlignedProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-border-art'?: MsoPageBorderArtProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-border-bottom-art'?: MsoPageBorderBottomArtProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`all-pages` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-border-display'?: MsoPageBorderDisplayProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-border-left-art'?: MsoPageBorderLeftArtProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`edge` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-border-offset-from'?: MsoPageBorderOffsetFromProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-border-right-art'?: MsoPageBorderRightArtProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`yes` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-border-surround-footer'?: MsoPageBorderSurroundFooterProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`yes` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-border-surround-header'?: MsoPageBorderSurroundHeaderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-border-top-art'?: MsoPageBorderTopArtProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`in-front` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-border-z-order'?: MsoPageBorderZOrderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-numbers'?: MsoPageNumbersProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`hyphen` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-numbers-chapter-separator'?: MsoPageNumbersChapterSeparatorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-numbers-chapter-style'?: MsoPageNumbersChapterStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`auto` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-numbers-start'?: MsoPageNumbersStartProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`arabic` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-numbers-style'?: MsoPageNumbersStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`portrait` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-orientation'?: MsoPageOrientationProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-page-scale'?: MsoPageScaleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   */
  'mso-pagination'?: MsoPaginationProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-paper-source'?: MsoPaperSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-paper-source-first-page'?: MsoPaperSourceFirstPageProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-paper-source-other-pages'?: MsoPaperSourceOtherPagesProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-pattern'?: MsoPatternProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-pattern-color'?: MsoPatternColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-pattern-style'?: MsoPatternStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-print-area'?: MsoPrintAreaProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`yes` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-print-color'?: MsoPrintColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-print-gridlines'?: MsoPrintGridlinesProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-print-headings'?: MsoPrintHeadingsProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-print-resolution'?: MsoPrintResolutionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`over-then-down` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-print-sheet-order'?: MsoPrintSheetOrderProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-print-title-column'?: MsoPrintTitleColumnProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-print-title-row'?: MsoPrintTitleRowProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-prop-change'?: MsoPropChangeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-prop-change-author'?: MsoPropChangeAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-prop-change-time'?: MsoPropChangeTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`no` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-protection'?: MsoProtectionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-rotate'?: MsoRotateProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-row-margin-left'?: MsoRowMarginLeftProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-row-margin-right'?: MsoRowMarginRightProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-ruby-merge'?: MsoRubyMergeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-ruby-visibility'?: MsoRubyVisibilityProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-scheme-fill-color'?: MsoSchemeFillColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-scheme-shadow-color'?: MsoSchemeShadowColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Borders and Shading`](https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm), [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm), [`Colors`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm)
   */
  'mso-shading'?: MsoShadingProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-shadow-color'?: MsoShadowColorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  'mso-space-above'?: MsoSpaceAboveProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  'mso-space-below'?: MsoSpaceBelowProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Whitespace`](https://stigmortenmyre.no/mso/html/concepts/ofconwhitespace.htm)
   */
  'mso-spacerun'?: MsoSpacerunProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-special-character'?: MsoSpecialCharacterProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-special-format'?: MsoSpecialFormatProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-style-id'?: MsoStyleIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-style-name'?: MsoStyleNameProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-style-next'?: MsoStyleNextProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-style-parent'?: MsoStyleParentProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-style-type'?: MsoStyleTypeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-style-update'?: MsoStyleUpdateProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Master Documents`](https://stigmortenmyre.no/mso/html/word/wdconmasterdocuments.htm)
   */
  'mso-subdocument'?: MsoSubdocumentProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   */
  'mso-symbol-font-family'?: MsoSymbolFontFamilyProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`1` |
   *
   * @see [`Whitespace`](https://stigmortenmyre.no/mso/html/concepts/ofconwhitespace.htm)
   */
  'mso-tab-count'?: MsoTabCountProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`margin` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-table-anchor-horizontal'?: MsoTableAnchorHorizontalProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`margin` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-table-anchor-vertical'?: MsoTableAnchorVerticalProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-table-bspace'?: MsoTableBspaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-table-del-author'?: MsoTableDelAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-table-del-time'?: MsoTableDelTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-table-deleted'?: MsoTableDeletedProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`normal` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-table-dir'?: MsoTableDirProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-table-ins-author'?: MsoTableInsAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-table-ins-time'?: MsoTableInsTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-table-inserted'?: MsoTableInsertedProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-table-left'?: MsoTableLeftProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-table-lspace'?: MsoTableLspaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`auto` |
   */
  'mso-table-overlap'?: MsoTableOverlapProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-table-prop-author'?: MsoTablePropAuthorProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-table-prop-change'?: MsoTablePropChangeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Change Tracking`](https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm)
   */
  'mso-table-prop-time'?: MsoTablePropTimeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-table-rspace'?: MsoTableRspaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-table-top'?: MsoTableTopProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-table-tspace'?: MsoTableTspaceProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`none` |
   *
   * @see [`Tables`](https://stigmortenmyre.no/mso/html/word/wdcontables.htm)
   */
  'mso-table-wrap'?: MsoTableWrapProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`none` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-text-animation'?: MsoTextAnimationProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`none` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-text-combine-brackets'?: MsoTextCombineBracketsProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-text-combine-id'?: MsoTextCombineIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Cell Formatting`](https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm)
   */
  'mso-text-control'?: MsoTextControlProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-text-fit-id'?: MsoTextFitIdProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`horizontal` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  'mso-text-orientation'?: MsoTextOrientationProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-text-raise'?: MsoTextRaiseProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-title-page'?: MsoTitlePageProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-tny-compress'?: MsoTnyCompressProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  'mso-unsynced'?: MsoUnsyncedProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`baseline` |
   */
  'mso-vertical-align-special'?: MsoVerticalAlignSpecialProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`top` |
   *
   * @see [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm), [`Comments`](https://stigmortenmyre.no/mso/html/word/wdconcomments.htm), [`Footnotes and Endnotes`](https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm), [`Grouping and Outlines`](https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm), [`Headers and Footers`](https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm), [`Page Layout and Section Breaks`](https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm), [`Page Setup`](https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm)
   */
  'mso-vertical-page-align'?: MsoVerticalPageAlignProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  'mso-width-source'?: MsoWidthSourceProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-word-wrap'?: MsoWordWrapProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`1` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  'mso-xlrowspan'?: MsoXlrowspanProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`no` |
   *
   * @see [`Worksheets`](https://stigmortenmyre.no/mso/html/excel/xlcontables.htm)
   */
  'mso-zero-height'?: MsoZeroHeightProperty;
}

export interface AnsiPropertiesHyphen<TLength = GlobalsString | 0> {
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`medium` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-ansi-font-size'?: MsoAnsiFontSizeProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`normal` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-ansi-font-style'?: MsoAnsiFontStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`normal` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-ansi-font-weight'?: MsoAnsiFontWeightProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-ansi-language'?: MsoAnsiLanguageProperty;
}

export interface AsciiPropertiesHyphen {
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-ascii-font-family'?: MsoAsciiFontFamilyProperty;
}

export interface BidiPropertiesHyphen<TLength = GlobalsString | 0> {
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`off` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-bidi-flag'?: MsoBidiFlagProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-bidi-font-family'?: MsoBidiFontFamilyProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`medium` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-bidi-font-size'?: MsoBidiFontSizeProperty<TLength>;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`normal` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-bidi-font-style'?: MsoBidiFontStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`normal` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-bidi-font-weight'?: MsoBidiFontWeightProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-bidi-language'?: MsoBidiLanguageProperty;
}

export interface FareastPropertiesHyphen {
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`Text`](https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm)
   */
  'mso-fareast-font-family'?: MsoFareastFontFamilyProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-fareast-hint'?: MsoFareastHintProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `true` | &vert; |`n/a` |
   *
   * @see [`International Documents`](https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm)
   */
  'mso-fareast-language'?: MsoFareastLanguageProperty;
}

export interface PanosePropertiesHyphen {
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-panose-arm-style'?: MsoPanoseArmStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-panose-contrast'?: MsoPanoseContrastProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-panose-family-type'?: MsoPanoseFamilyTypeProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-panose-letterform'?: MsoPanoseLetterformProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-panose-midline'?: MsoPanoseMidlineProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-panose-proportion'?: MsoPanoseProportionProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-panose-serif-style'?: MsoPanoseSerifStyleProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-panose-stroke-variation'?: MsoPanoseStrokeVariationProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-panose-weight'?: MsoPanoseWeightProperty;
  /**
   * | Inherited | &vert; | Initial |
   * | --------- | -- | ------------- |
   * `false` | &vert; |`n/a` |
   */
  'mso-panose-x-height'?: MsoPanoseXHeightProperty;
}

export interface PropertiesHyphen<TLength = GlobalsString | 0>
  extends AlternativePropertiesHyphen<TLength>,
    StandardPropertiesHyphen<TLength> {}

export interface FontPropertiesHyphen<TLength = GlobalsString | 0>
  extends AnsiPropertiesHyphen<TLength>,
    AsciiPropertiesHyphen,
    BidiPropertiesHyphen<TLength>,
    FareastPropertiesHyphen,
    PanosePropertiesHyphen {}

type GlobalsString = string & {};

type GlobalsNumber = number & {};

export type MsInterpolationModeProperty = 'bicubic' | 'nearest-neighbor';

export type MsoAnsiFontSizeProperty<TLength = GlobalsString | 0> = FontSize | TLength | GlobalsString | 'inherit';

export type MsoAnsiFontStyleProperty = 'italic' | 'normal' | 'oblique' | 'inherit';

export type MsoAnsiFontWeightProperty = GlobalsNumber | 'bold' | 'bolder' | 'lighter' | 'normal' | 'inherit';

export type MsoAnsiLanguageProperty = GlobalsString | 'inherit';

export type MsoAsciiFontFamilyProperty = GenericFontFamily | GlobalsString | 'auto' | 'inherit';

export type MsoBackgroundProperty = Color | 'auto';

export type MsoBackgroundSourceProperty = 'auto';

export type MsoBaselinePositionProperty = GlobalsString;

export type MsoBidiFlagProperty = 'off' | 'on' | 'inherit';

export type MsoBidiFontFamilyProperty = GenericFontFamily | GlobalsString | 'auto' | 'inherit';

export type MsoBidiFontSizeProperty<TLength = GlobalsString | 0> = FontSize | TLength | GlobalsString | 'inherit';

export type MsoBidiFontStyleProperty = 'italic' | 'normal' | 'oblique' | 'inherit';

export type MsoBidiFontWeightProperty = GlobalsNumber | 'bold' | 'bolder' | 'lighter' | 'normal' | 'inherit';

export type MsoBidiLanguageProperty = GlobalsString | 'inherit';

export type MsoBookmarkProperty = GlobalsString;

export type MsoBorderAltProperty<TLength = GlobalsString | 0> = BorderArt | BorderStyle | Color | TLength | LineWidth;

export type MsoBorderBetweenProperty<TLength = GlobalsString | 0> =
  | BorderArt
  | BorderStyle
  | Color
  | TLength
  | LineWidth;

export type MsoBorderBetweenColorProperty = Color | 'auto';

export type MsoBorderBetweenStyleProperty = BorderArt | BorderStyle;

export type MsoBorderBetweenWidthProperty<TLength = GlobalsString | 0> = TLength | LineWidth;

export type MsoBorderBottomAltProperty<TLength = GlobalsString | 0> =
  | BorderArt
  | BorderStyle
  | Color
  | TLength
  | LineWidth;

export type MsoBorderBottomColorAltProperty = Color | 'auto';

export type MsoBorderBottomSourceProperty = 'auto' | 'background' | 'foreground';

export type MsoBorderBottomStyleAltProperty = BorderArt | BorderStyle;

export type MsoBorderBottomWidthAltProperty<TLength = GlobalsString | 0> = TLength | LineWidth;

export type MsoBorderColorAltProperty = Color | 'auto';

export type MsoBorderEffectProperty = '3d' | 'box';

export type MsoBorderLeftAltProperty<TLength = GlobalsString | 0> =
  | BorderArt
  | BorderStyle
  | Color
  | TLength
  | LineWidth;

export type MsoBorderLeftColorAltProperty = Color | 'auto';

export type MsoBorderLeftSourceProperty = 'auto' | 'background' | 'foreground';

export type MsoBorderLeftStyleAltProperty = BorderArt | BorderStyle;

export type MsoBorderLeftWidthAltProperty<TLength = GlobalsString | 0> = TLength | LineWidth;

export type MsoBorderRightAltProperty<TLength = GlobalsString | 0> =
  | BorderArt
  | BorderStyle
  | Color
  | TLength
  | LineWidth;

export type MsoBorderRightColorAltProperty = Color | 'auto';

export type MsoBorderRightSourceProperty = 'auto' | 'background' | 'foreground';

export type MsoBorderRightStyleAltProperty = BorderArt | BorderStyle;

export type MsoBorderRightWidthAltProperty<TLength = GlobalsString | 0> = TLength | LineWidth;

export type MsoBorderShadowProperty = 'no' | 'yes';

export type MsoBorderSourceProperty = 'auto' | 'background' | 'foreground' | 'inherit';

export type MsoBorderStyleAltProperty = BorderArt | BorderStyle;

export type MsoBorderTopAltProperty<TLength = GlobalsString | 0> =
  | BorderArt
  | BorderStyle
  | Color
  | TLength
  | LineWidth;

export type MsoBorderTopColorAltProperty = Color | 'auto';

export type MsoBorderTopSourceProperty = 'auto' | 'background' | 'foreground';

export type MsoBorderTopStyleAltProperty = BorderArt | BorderStyle;

export type MsoBorderTopWidthAltProperty<TLength = GlobalsString | 0> = TLength | LineWidth;

export type MsoBorderWidthAltProperty<TLength = GlobalsString | 0> = TLength | LineWidth;

export type MsoBreakTypeProperty = 'auto' | 'section-break';

export type MsoBuildProperty = GlobalsString;

export type MsoBuildAfterActionProperty = GlobalsString;

export type MsoBuildAfterColorProperty = GlobalsString;

export type MsoBuildAutoSecsProperty = GlobalsString;

export type MsoBuildAviProperty = GlobalsString;

export type MsoBuildDualIdProperty = GlobalsString;

export type MsoBuildOrderProperty = GlobalsString;

export type MsoBuildSoundNameProperty = GlobalsString;

export type MsoBulletImageProperty = GlobalsString;

export type MsoCellSpecialProperty = 'placeholder' | 'template-column' | 'template-row';

export type MsoCellspacingProperty<TLength = GlobalsString | 0> = TLength;

export type MsoCharIndentProperty<TLength = GlobalsString | 0> = TLength;

export type MsoCharIndentCountProperty = GlobalsNumber;

export type MsoCharIndentSizeProperty<TLength = GlobalsString | 0> = TLength;

export type MsoCharTypeProperty = 'hiragana' | 'katakana' | 'narrow-katakana' | 'none' | 'symbol';

export type MsoCharWrapProperty = GlobalsNumber;

export type MsoColorAltProperty = Color | 'auto' | 'inherit';

export type MsoColorIndexProperty = GlobalsNumber;

export type MsoColorSourceProperty = 'auto';

export type MsoColumnBreakBeforeProperty = 'always' | 'auto';

export type MsoColumnSeparatorProperty = 'none' | 'solid';

export type MsoColumnsProperty<TLength = GlobalsString | 0> = TLength | GlobalsString | 'even' | 'not-even';

export type MsoCommentAuthorProperty = GlobalsString;

export type MsoCommentContinuationProperty = GlobalsString;

export type MsoCommentIdProperty = GlobalsString;

export type MsoCommentReferenceProperty = GlobalsString;

export type MsoDataPlacementProperty = 'new-cell' | 'same-cell' | 'inherit';

export type MsoDefaultHeightProperty<TLength = GlobalsString | 0> = TLength;

export type MsoDefaultWidthProperty<TLength = GlobalsString | 0> = TLength;

export type MsoDiagonalDownProperty<TLength = GlobalsString | 0> =
  | BorderArt
  | BorderStyle
  | Color
  | TLength
  | LineWidth;

export type MsoDiagonalDownColorProperty = Color | 'auto';

export type MsoDiagonalDownSourceProperty = 'auto' | 'background' | 'foreground';

export type MsoDiagonalDownStyleProperty = BorderArt | BorderStyle;

export type MsoDiagonalDownWidthProperty<TLength = GlobalsString | 0> = TLength | LineWidth;

export type MsoDiagonalUpProperty<TLength = GlobalsString | 0> = BorderArt | BorderStyle | Color | TLength | LineWidth;

export type MsoDiagonalUpColorProperty = Color | 'auto';

export type MsoDiagonalUpSourceProperty = 'auto' | 'background' | 'foreground';

export type MsoDiagonalUpStyleProperty = BorderArt | BorderStyle;

export type MsoDiagonalUpWidthProperty<TLength = GlobalsString | 0> = TLength | LineWidth;

export type MsoDisplayedDecimalSeparatorProperty = GlobalsString;

export type MsoDisplayedThousandSeparatorProperty = GlobalsString;

export type MsoElementProperty =
  | 'comment'
  | 'comment-list'
  | 'dropcap-dropped'
  | 'dropcap-in-margin'
  | 'endnote'
  | 'endnote-continuation-notice'
  | 'endnote-continuation-separator'
  | 'endnote-list'
  | 'endnote-separator'
  | 'field-begin'
  | 'field-end'
  | 'field-separator'
  | 'footer'
  | 'footnote'
  | 'footnote-continuation-notice'
  | 'footnote-continuation-separator'
  | 'footnote-list'
  | 'footnote-separator'
  | 'frame'
  | 'header'
  | 'none'
  | 'paragraph-mark-properties'
  | 'table-head';

export type MsoElementAnchorHorizontalProperty = 'column' | 'margin' | 'page';

export type MsoElementAnchorLockProperty = 'auto' | 'locked';

export type MsoElementAnchorVerticalProperty = 'margin' | 'page' | 'paragraph';

export type MsoElementFrameHeightProperty<TLength = GlobalsString | 0> = TLength | 'auto';

export type MsoElementFrameHspaceProperty<TLength = GlobalsString | 0> = TLength;

export type MsoElementFrameVspaceProperty<TLength = GlobalsString | 0> = TLength;

export type MsoElementFrameWidthProperty<TLength = GlobalsString | 0> = TLength | 'auto';

export type MsoElementLeftProperty<TLength = GlobalsString | 0> =
  | TLength
  | 'center'
  | 'inside'
  | 'left'
  | 'outside'
  | 'right';

export type MsoElementLinespanProperty = GlobalsNumber;

export type MsoElementTopProperty<TLength = GlobalsString | 0> =
  | TLength
  | 'bottom'
  | 'inside'
  | 'middle'
  | 'outside'
  | 'top';

export type MsoElementWrapProperty = 'around' | 'auto' | 'no-wrap-beside' | 'none';

export type MsoEndnoteContinuationNoticeProperty = GlobalsString | GlobalsString;

export type MsoEndnoteContinuationNoticeIdProperty = GlobalsString;

export type MsoEndnoteContinuationNoticeSrcProperty = GlobalsString;

export type MsoEndnoteContinuationSeparatorProperty = GlobalsString | GlobalsString;

export type MsoEndnoteContinuationSeparatorIdProperty = GlobalsString;

export type MsoEndnoteContinuationSeparatorSrcProperty = GlobalsString;

export type MsoEndnoteDisplayProperty = 'none' | 'normal';

export type MsoEndnoteIdProperty = GlobalsString;

export type MsoEndnoteNumberingProperty =
  | GlobalsNumber
  | 'alpha-lower'
  | 'alpha-upper'
  | 'arabic'
  | 'auto'
  | 'chicago'
  | 'decimal'
  | 'each-section'
  | 'lower-alpha'
  | 'lower-roman'
  | 'roman-lower'
  | 'roman-upper'
  | 'upper-alpha'
  | 'upper-roman';

export type MsoEndnoteNumberingRestartProperty = 'auto' | 'each-section';

export type MsoEndnoteNumberingStartProperty = GlobalsNumber;

export type MsoEndnoteNumberingStyleProperty =
  | 'alpha-lower'
  | 'alpha-upper'
  | 'arabic'
  | 'chicago'
  | 'decimal'
  | 'lower-alpha'
  | 'lower-roman'
  | 'roman-lower'
  | 'roman-upper'
  | 'upper-alpha'
  | 'upper-roman';

export type MsoEndnotePositionProperty = 'end-of-document' | 'end-of-section';

export type MsoEndnoteSeparatorProperty = GlobalsString | GlobalsString;

export type MsoEndnoteSeparatorIdProperty = GlobalsString;

export type MsoEndnoteSeparatorSrcProperty = GlobalsString;

export type MsoEvenFooterProperty = GlobalsString | GlobalsString;

export type MsoEvenFooterIdProperty = GlobalsString;

export type MsoEvenFooterSrcProperty = GlobalsString;

export type MsoEvenHeaderProperty = GlobalsString | GlobalsString;

export type MsoEvenHeaderIdProperty = GlobalsString;

export type MsoEvenHeaderSrcProperty = GlobalsString;

export type MsoFacingPagesProperty = 'no' | 'yes';

export type MsoFareastFontFamilyProperty = GenericFontFamily | GlobalsString | 'auto' | 'inherit';

export type MsoFareastHintProperty = 'no' | 'yes';

export type MsoFareastLanguageProperty = GlobalsString | 'inherit';

export type MsoFieldChangeProperty = GlobalsString;

export type MsoFieldChangeAuthorProperty = GlobalsString;

export type MsoFieldChangeTimeProperty = GlobalsString;

export type MsoFieldChangeValueProperty = GlobalsString;

export type MsoFieldCodeProperty = GlobalsString;

export type MsoFieldLockProperty = 'no' | 'yes';

export type MsoFillsColorProperty = Color | 'auto';

export type MsoFirstFooterProperty = GlobalsString | GlobalsString;

export type MsoFirstFooterIdProperty = GlobalsString;

export type MsoFirstFooterSrcProperty = GlobalsString;

export type MsoFirstHeaderProperty = GlobalsString | GlobalsString;

export type MsoFirstHeaderIdProperty = GlobalsString;

export type MsoFirstHeaderSrcProperty = GlobalsString;

export type MsoFontAltProperty = GlobalsString;

export type MsoFontCharsetProperty = GlobalsNumber | 'inherit';

export type MsoFontFormatProperty = 'other' | 'truetype';

export type MsoFontInfoProperty = GenericFontFamily | GlobalsNumber | GlobalsString | 'auto';

export type MsoFontInfoCharsetProperty = GlobalsNumber | 'inherit';

export type MsoFontInfoTypeProperty = GenericFontFamily | GlobalsString | 'auto' | 'inherit';

export type MsoFontKerningProperty<TLength = GlobalsString | 0> = TLength | GlobalsString | 'none';

export type MsoFontPitchProperty = 'auto' | 'fixed' | 'variable';

export type MsoFontSignatureProperty = GlobalsNumber;

export type MsoFontSignatureCsbOneProperty = GlobalsNumber;

export type MsoFontSignatureCsbTwoProperty = GlobalsNumber;

export type MsoFontSignatureUsbFourProperty = GlobalsNumber;

export type MsoFontSignatureUsbOneProperty = GlobalsNumber;

export type MsoFontSignatureUsbThreeProperty = GlobalsNumber;

export type MsoFontSignatureUsbTwoProperty = GlobalsNumber;

export type MsoFontSrcProperty = GlobalsNumber;

export type MsoFontWidthProperty<TLength = GlobalsString | 0> = TLength | GlobalsString;

export type MsoFooterProperty = GlobalsString | GlobalsString;

export type MsoFooterDataProperty = GlobalsString;

export type MsoFooterIdProperty = GlobalsString;

export type MsoFooterMarginProperty<TLength = GlobalsString | 0> = TLength | GlobalsString;

export type MsoFooterSrcProperty = GlobalsString;

export type MsoFootnoteContinuationNoticeProperty = GlobalsString | GlobalsString;

export type MsoFootnoteContinuationNoticeIdProperty = GlobalsString;

export type MsoFootnoteContinuationNoticeSrcProperty = GlobalsString;

export type MsoFootnoteContinuationSeparatorProperty = GlobalsString | GlobalsString;

export type MsoFootnoteContinuationSeparatorIdProperty = GlobalsString;

export type MsoFootnoteContinuationSeparatorSrcProperty = GlobalsString;

export type MsoFootnoteIdProperty = GlobalsString;

export type MsoFootnoteNumberingProperty =
  | GlobalsNumber
  | 'alpha-lower'
  | 'alpha-upper'
  | 'arabic'
  | 'auto'
  | 'chicago'
  | 'decimal'
  | 'each-page'
  | 'each-section'
  | 'lower-alpha'
  | 'lower-roman'
  | 'roman-lower'
  | 'roman-upper'
  | 'upper-alpha'
  | 'upper-roman';

export type MsoFootnoteNumberingRestartProperty = 'auto' | 'each-page' | 'each-section';

export type MsoFootnoteNumberingStartProperty = GlobalsNumber;

export type MsoFootnoteNumberingStyleProperty =
  | 'alpha-lower'
  | 'alpha-upper'
  | 'arabic'
  | 'chicago'
  | 'decimal'
  | 'lower-alpha'
  | 'lower-roman'
  | 'roman-lower'
  | 'roman-upper'
  | 'upper-alpha'
  | 'upper-roman';

export type MsoFootnotePositionProperty = 'beneath-text' | 'bottom-of-page';

export type MsoFootnoteSeparatorProperty = GlobalsString | GlobalsString;

export type MsoFootnoteSeparatorIdProperty = GlobalsString;

export type MsoFootnoteSeparatorSrcProperty = GlobalsString;

export type MsoForegroundProperty = Color | 'auto';

export type MsoFormsProtectionProperty = 'no' | 'yes' | 'inherit';

export type MsoGenericFontFamilyProperty = 'auto' | 'decorative' | 'modern' | 'roman' | 'script' | 'swiss' | 'inherit';

export type MsoGridBottomProperty<TLength = GlobalsString | 0> = TLength;

export type MsoGridBottomCountProperty = GlobalsNumber;

export type MsoGridLeftProperty<TLength = GlobalsString | 0> = TLength;

export type MsoGridLeftCountProperty = GlobalsNumber;

export type MsoGridRightProperty<TLength = GlobalsString | 0> = TLength;

export type MsoGridRightCountProperty = GlobalsNumber;

export type MsoGridTopProperty<TLength = GlobalsString | 0> = TLength;

export type MsoGridTopCountProperty = GlobalsNumber;

export type MsoGutterDirectionProperty = 'ltr' | 'rtl';

export type MsoGutterMarginProperty<TLength = GlobalsString | 0> = TLength | GlobalsString;

export type MsoGutterPositionProperty = 'side' | 'top';

export type MsoHansiFontFamilyProperty =
  | GlobalsString
  | 'auto'
  | 'cursive'
  | 'fantasy'
  | 'monospace'
  | 'sans-serif'
  | 'serif'
  | 'inherit';

export type MsoHeaderProperty = GlobalsString | GlobalsString;

export type MsoHeaderDataProperty = GlobalsString;

export type MsoHeaderIdProperty = GlobalsString;

export type MsoHeaderMarginProperty<TLength = GlobalsString | 0> = TLength | GlobalsString;

export type MsoHeaderSrcProperty = GlobalsString;

export type MsoHeightAltProperty = GlobalsNumber;

export type MsoHeightRuleProperty = 'at-least' | 'exactly' | 'inherit';

export type MsoHeightSourceProperty = 'auto' | 'userset' | 'inherit';

export type MsoHideProperty = 'all' | 'none' | 'screen' | 'inherit';

export type MsoHighlightProperty = Color | 'auto';

export type MsoHorizontalPageAlignProperty = 'center' | 'left' | 'right';

export type MsoHyphenateProperty = 'auto' | 'none';

export type MsoIgnoreProperty =
  | 'align'
  | 'bgcolor'
  | 'color'
  | 'colspan'
  | 'colspan-obo'
  | 'colspan-obt'
  | 'colspan-rowspan'
  | 'padding'
  | 'style'
  | 'vglayout'
  | 'vglayout2'
  | 'visibility';

export type MsoKinsokuOverflowProperty = GlobalsNumber;

export type MsoLayoutGridAlignProperty = 'auto' | 'none';

export type MsoLayoutGridCharAltProperty = GlobalsNumber;

export type MsoLayoutGridOriginProperty<TLength = GlobalsString | 0> = TLength;

export type MsoLevelInheritProperty = 'legal' | 'normal' | 'inherit';

export type MsoLevelLegacyProperty = 'no' | 'yes' | 'inherit';

export type MsoLevelLegacyIndentProperty<TLength = GlobalsString | 0> = TLength | GlobalsString | 'inherit';

export type MsoLevelLegacySpaceProperty<TLength = GlobalsString | 0> = TLength | GlobalsString | 'inherit';

export type MsoLevelLegalFormatProperty = 'no' | 'yes' | 'inherit';

export type MsoLevelNumberFormatProperty = IntNumberStyle | NumberStyle | 'none' | 'inherit';

export type MsoLevelNumberPositionProperty = 'center' | 'left' | 'right' | 'inherit';

export type MsoLevelNumberingProperty = 'continue' | 'restart' | 'inherit';

export type MsoLevelResetLevelProperty =
  | 'level1'
  | 'level2'
  | 'level3'
  | 'level4'
  | 'level5'
  | 'level6'
  | 'level7'
  | 'level8'
  | 'level9'
  | 'none'
  | 'inherit';

export type MsoLevelStartAtProperty = GlobalsNumber | 'inherit';

export type MsoLevelStyleLinkProperty = GlobalsString | 'inherit';

export type MsoLevelSuffixProperty = 'none' | 'space' | 'tab' | 'inherit';

export type MsoLevelTabStopProperty<TLength = GlobalsString | 0> = TLength | 'none' | 'inherit';

export type MsoLevelTextProperty = GlobalsString | 'inherit';

export type MsoLineBreakOverrideProperty = 'none' | 'restrictions';

export type MsoLineGridProperty = 'auto' | 'default';

export type MsoLineHeightAltProperty<TLength = GlobalsString | 0> =
  | TLength
  | GlobalsNumber
  | GlobalsString
  | 'normal'
  | 'inherit';

export type MsoLineHeightRuleProperty = 'at-least' | 'exactly';

export type MsoLineNumbersCountByProperty = GlobalsNumber | 'none';

export type MsoLineNumbersDistanceProperty<TLength = GlobalsString | 0> = TLength | GlobalsString | 'auto';

export type MsoLineNumbersRestartProperty = 'continuous' | 'new-page' | 'new-section';

export type MsoLineNumbersStartProperty = GlobalsNumber;

export type MsoLineSpacingProperty = GlobalsString;

export type MsoLinkedFrameProperty = 'auto' | 'linked';

export type MsoListProperty =
  | GlobalsString
  | 'level1'
  | 'level2'
  | 'level3'
  | 'level4'
  | 'level5'
  | 'level6'
  | 'level7'
  | 'level8'
  | 'level9'
  | 'none'
  | 'inherit';

export type MsoListChangeProperty = GlobalsString;

export type MsoListChangeAuthorProperty = GlobalsString;

export type MsoListChangeTimeProperty = GlobalsString;

export type MsoListChangeValuesProperty = GlobalsString;

export type MsoListIdProperty = GlobalsNumber | 'inherit';

export type MsoListInsProperty = GlobalsString;

export type MsoListInsAuthorProperty = GlobalsString;

export type MsoListInsTimeProperty = GlobalsString;

export type MsoListNameProperty = GlobalsString | 'inherit';

export type MsoListTemplateIdsProperty = GlobalsNumber | 'inherit';

export type MsoListTypeProperty = 'hybrid' | 'multilevel' | 'simple' | 'inherit';

export type MsoMarginBottomAltProperty<TLength = GlobalsString | 0> = TLength | GlobalsString | 'auto';

export type MsoMarginLeftAltProperty = GlobalsNumber;

export type MsoMarginTopAltProperty<TLength = GlobalsString | 0> = TLength | GlobalsString | 'auto';

export type MsoMirrorMarginsProperty = 'no' | 'yes';

export type MsoNegativeIndentTabProperty = 'no' | 'yes';

export type MsoNumberFormatProperty = GlobalsString;

export type MsoOutlineLevelProperty = GlobalsNumber | 'body-text';

export type MsoOutlineParentProperty = 'bottom' | 'collapsed' | 'expanded' | 'left' | 'right' | 'top';

export type MsoOutlineParentColProperty = 'left' | 'right';

export type MsoOutlineParentRowProperty = 'bottom' | 'top';

export type MsoOutlineParentVisibilityProperty = 'collapsed' | 'expanded';

export type MsoOutlineStyleProperty = 'auto' | 'userset';

export type MsoPaddingAltProperty<TLength = GlobalsString | 0> = TLength | GlobalsString;

export type MsoPaddingBetweenProperty<TLength = GlobalsString | 0> = TLength | GlobalsString | 'inherit';

export type MsoPaddingBottomAltProperty<TLength = GlobalsString | 0> = TLength | GlobalsString;

export type MsoPaddingLeftAltProperty<TLength = GlobalsString | 0> = TLength | GlobalsString;

export type MsoPaddingRightAltProperty<TLength = GlobalsString | 0> = TLength | GlobalsString;

export type MsoPaddingTopAltProperty<TLength = GlobalsString | 0> = TLength | GlobalsString;

export type MsoPageBorderAlignedProperty = 'no' | 'yes';

export type MsoPageBorderArtProperty = BorderArt | 'inherit';

export type MsoPageBorderBottomArtProperty = BorderArt;

export type MsoPageBorderDisplayProperty = 'all-pages' | 'all-pages-except-first' | 'first-page';

export type MsoPageBorderLeftArtProperty = BorderArt;

export type MsoPageBorderOffsetFromProperty = 'edge' | 'text';

export type MsoPageBorderRightArtProperty = BorderArt;

export type MsoPageBorderSurroundFooterProperty = 'no' | 'yes';

export type MsoPageBorderSurroundHeaderProperty = 'no' | 'yes';

export type MsoPageBorderTopArtProperty = BorderArt;

export type MsoPageBorderZOrderProperty = 'in-back' | 'in-front';

export type MsoPageNumbersProperty = IntNumberStyle | GlobalsNumber | 'auto';

export type MsoPageNumbersChapterSeparatorProperty = 'colon' | 'em-dash' | 'en-dash' | 'hyphen' | 'period';

export type MsoPageNumbersChapterStyleProperty =
  | 'header-1'
  | 'header-2'
  | 'header-3'
  | 'header-4'
  | 'header-5'
  | 'header-6'
  | 'header-7'
  | 'header-8'
  | 'header-9'
  | 'none';

export type MsoPageNumbersStartProperty = GlobalsNumber | 'auto';

export type MsoPageNumbersStyleProperty = IntNumberStyle | NumberStyle;

export type MsoPageOrientationProperty = GlobalsNumber | GlobalsString | 'landscape' | 'portrait';

export type MsoPageScaleProperty = GlobalsNumber | GlobalsString;

export type MsoPaginationProperty =
  | 'keep-with-next'
  | 'lines-together'
  | 'no-line-numbers'
  | 'none'
  | 'page-break-before'
  | 'widow-orphan';

export type MsoPanoseArmStyleProperty = GlobalsNumber;

export type MsoPanoseContrastProperty = GlobalsNumber;

export type MsoPanoseFamilyTypeProperty = GlobalsNumber;

export type MsoPanoseLetterformProperty = GlobalsNumber;

export type MsoPanoseMidlineProperty = GlobalsNumber;

export type MsoPanoseProportionProperty = GlobalsNumber;

export type MsoPanoseSerifStyleProperty = GlobalsNumber;

export type MsoPanoseStrokeVariationProperty = GlobalsNumber;

export type MsoPanoseWeightProperty = GlobalsNumber;

export type MsoPanoseXHeightProperty = GlobalsNumber;

export type MsoPaperSourceProperty = GlobalsNumber;

export type MsoPaperSourceFirstPageProperty = GlobalsNumber;

export type MsoPaperSourceOtherPagesProperty = GlobalsNumber;

export type MsoPatternProperty =
  | Color
  | MsExcelPatternName
  | MsWordPatternName
  | 'auto'
  | 'diag-cross'
  | 'diag-stripe'
  | 'horz-cross'
  | 'horz-stripe'
  | 'none'
  | 'reverse-diag-stripe'
  | 'solid'
  | 'thick-diag-cross'
  | 'thin-diag-cross'
  | 'thin-diag-stripe'
  | 'thin-horz-cross'
  | 'thin-horz-stripe'
  | 'thin-reverse-diag-stripe'
  | 'thin-vert-stripe'
  | 'vert-stripe';

export type MsoPatternColorProperty = Color | 'auto';

export type MsoPatternStyleProperty =
  | MsExcelPatternName
  | MsWordPatternName
  | 'diag-cross'
  | 'diag-stripe'
  | 'horz-cross'
  | 'horz-stripe'
  | 'none'
  | 'reverse-diag-stripe'
  | 'solid'
  | 'thick-diag-cross'
  | 'thin-diag-cross'
  | 'thin-diag-stripe'
  | 'thin-horz-cross'
  | 'thin-horz-stripe'
  | 'thin-reverse-diag-stripe'
  | 'thin-vert-stripe'
  | 'vert-stripe';

export type MsoPrintAreaProperty = GlobalsNumber;

export type MsoPrintColorProperty = 'no' | 'yes';

export type MsoPrintGridlinesProperty = 'no' | 'yes';

export type MsoPrintHeadingsProperty = 'no' | 'yes';

export type MsoPrintResolutionProperty = GlobalsNumber;

export type MsoPrintSheetOrderProperty = 'down-then-over' | 'over-then-down';

export type MsoPrintTitleColumnProperty = GlobalsNumber;

export type MsoPrintTitleRowProperty = GlobalsNumber;

export type MsoPropChangeProperty = GlobalsString;

export type MsoPropChangeAuthorProperty = GlobalsString;

export type MsoPropChangeTimeProperty = GlobalsString;

export type MsoProtectionProperty = 'hidden' | 'locked' | 'no' | 'unlocked' | 'visible' | 'yes' | 'inherit';

export type MsoRotateProperty = GlobalsNumber;

export type MsoRowMarginLeftProperty<TLength = GlobalsString | 0> = TLength | GlobalsString | 'inherit';

export type MsoRowMarginRightProperty<TLength = GlobalsString | 0> = TLength | GlobalsString | 'inherit';

export type MsoRubyMergeProperty = 'auto' | 'none' | 'inherit';

export type MsoRubyVisibilityProperty = 'none' | 'normal';

export type MsoSchemeFillColorProperty = Color;

export type MsoSchemeShadowColorProperty = Color;

export type MsoShadingProperty = Color | 'auto' | 'transparent';

export type MsoShadowColorProperty = Color | 'auto';

export type MsoSpaceAboveProperty = 'no' | 'yes';

export type MsoSpaceBelowProperty = 'no' | 'yes';

export type MsoSpacerunProperty = 'no' | 'yes';

export type MsoSpecialCharacterProperty =
  | 'comment'
  | 'footnote'
  | 'footnote-continuation-separator'
  | 'footnote-separator'
  | 'line-break'
  | 'none';

export type MsoSpecialFormatProperty = GlobalsString;

export type MsoStyleIdProperty = GlobalsNumber;

export type MsoStyleNameProperty = GlobalsString;

export type MsoStyleNextProperty = GlobalsString;

export type MsoStyleParentProperty = GlobalsString;

export type MsoStyleTypeProperty =
  | 'character'
  | 'export-only'
  | 'paragraph'
  | 'personal'
  | 'personal-compose'
  | 'personal-reply';

export type MsoStyleUpdateProperty = 'auto' | 'none';

export type MsoSubdocumentProperty = 'no' | 'yes';

export type MsoSymbolFontFamilyProperty = GenericFontFamily | GlobalsString | 'auto' | 'inherit';

export type MsoTabCountProperty = GlobalsNumber | 'blank' | 'dashed' | 'dotted' | 'heavy' | 'lined' | 'middot';

export type MsoTableAnchorHorizontalProperty = 'column' | 'margin' | 'page' | 'inherit';

export type MsoTableAnchorVerticalProperty = 'margin' | 'page' | 'paragraph';

export type MsoTableBspaceProperty<TLength = GlobalsString | 0> = TLength;

export type MsoTableDelAuthorProperty = GlobalsString;

export type MsoTableDelTimeProperty = GlobalsString;

export type MsoTableDeletedProperty = GlobalsString;

export type MsoTableDirProperty = 'bidi' | 'normal' | 'rtl';

export type MsoTableInsAuthorProperty = GlobalsString;

export type MsoTableInsTimeProperty = GlobalsString;

export type MsoTableInsertedProperty = GlobalsString;

export type MsoTableLayoutAltProperty = 'auto' | 'fixed' | 'inherit';

export type MsoTableLeftProperty<TLength = GlobalsString | 0> =
  | TLength
  | 'center'
  | 'inside'
  | 'left'
  | 'outside'
  | 'right'
  | 'inherit';

export type MsoTableLspaceProperty<TLength = GlobalsString | 0> = TLength | 'inherit';

export type MsoTableOverlapProperty = 'auto' | 'never' | 'inherit';

export type MsoTablePropAuthorProperty = GlobalsString;

export type MsoTablePropChangeProperty = GlobalsString;

export type MsoTablePropTimeProperty = GlobalsString;

export type MsoTableRspaceProperty<TLength = GlobalsString | 0> = TLength | GlobalsString | 'inherit';

export type MsoTableTopProperty<TLength = GlobalsString | 0> =
  | TLength
  | GlobalsString
  | 'bottom'
  | 'inside'
  | 'middle'
  | 'outside'
  | 'top';

export type MsoTableTspaceProperty<TLength = GlobalsString | 0> = TLength | 'inherit';

export type MsoTableWrapProperty = 'around' | 'none' | 'inherit';

export type MsoTextAnimationProperty =
  | 'ants-black'
  | 'ants-red'
  | 'blink-background'
  | 'lights'
  | 'none'
  | 'shimmer'
  | 'sparkle'
  | 'inherit';

export type MsoTextCombineBracketsProperty = 'angle' | 'curly' | 'none' | 'round' | 'square';

export type MsoTextCombineIdProperty = GlobalsNumber;

export type MsoTextControlProperty = 'shrinktofit' | 'wrap';

export type MsoTextFitIdProperty = GlobalsNumber;

export type MsoTextIndentAltProperty<TLength = GlobalsString | 0> = TLength | GlobalsString;

export type MsoTextOrientationProperty = GlobalsNumber | 'horizontal' | 'vertical';

export type MsoTextRaiseProperty<TLength = GlobalsString | 0> = TLength | GlobalsString;

export type MsoTitlePageProperty = 'no' | 'yes';

export type MsoTnyCompressProperty = 'no' | 'yes';

export type MsoUnsyncedProperty = 'no' | 'yes';

export type MsoVerticalAlignAltProperty = 'auto';

export type MsoVerticalAlignSpecialProperty<TLength = GlobalsString | 0> =
  | '010'
  | 121
  | TLength
  | GlobalsString
  | 'baseline'
  | 'bottom'
  | 'distributed'
  | 'justify'
  | 'middle'
  | 'sub'
  | 'super'
  | 'text-bottom'
  | 'text-top'
  | 'top';

export type MsoVerticalPageAlignProperty = 'bottom' | 'center' | 'justified' | 'middle' | 'top';

export type MsoWidthAltProperty = GlobalsNumber;

export type MsoWidthSourceProperty = 'auto' | 'userset' | 'inherit';

export type MsoWordWrapProperty = GlobalsNumber;

export type MsoXlrowspanProperty = GlobalsNumber;

export type MsoZeroHeightProperty = 'no' | 'yes';

type BorderArt =
  | 'apples'
  | 'arched-scallops'
  | 'baby-pacifier'
  | 'baby-rattle'
  | 'balloons-3-color'
  | 'balloons-hot-air'
  | 'basic-black-dashes'
  | 'basic-black-dots'
  | 'basic-black-squares'
  | 'basic-thin-lines'
  | 'basic-white-dashes'
  | 'basic-white-dots'
  | 'basic-white-squares'
  | 'basic-wide-inline'
  | 'basic-wide-midline'
  | 'basic-wide-outline'
  | 'bats'
  | 'birds'
  | 'birds-flight'
  | 'cabins'
  | 'cake-slice'
  | 'candy-corn'
  | 'celtic-knotwork'
  | 'certificate-banner'
  | 'chain-link'
  | 'champagne-bottle'
  | 'checked-bar-black'
  | 'checked-bar-color'
  | 'checkered'
  | 'christmas-tree'
  | 'circles-lines'
  | 'circles-rectangles'
  | 'classical-wave'
  | 'clocks'
  | 'compass'
  | 'confetti'
  | 'confetti-grays'
  | 'confetti-outline'
  | 'confetti-streamers'
  | 'confetti-white'
  | 'corner-triangles'
  | 'coupon-cutout-dashes'
  | 'coupon-cutout-dots'
  | 'crazy-maze'
  | 'creatures-butterfly'
  | 'creatures-fish'
  | 'creatures-insects'
  | 'creatures-lady-bug'
  | 'cross-stitch'
  | 'cup'
  | 'deco-arch'
  | 'deco-arch-color'
  | 'deco-blocks'
  | 'diamonds-gray'
  | 'double-d'
  | 'double-diamonds'
  | 'earth-1'
  | 'earth-2'
  | 'eclipsing-squares-1'
  | 'eclipsing-squares-2'
  | 'eggs-black'
  | 'fans'
  | 'film'
  | 'firecrackers'
  | 'flowers-block-print'
  | 'flowers-daisies'
  | 'flowers-modern-1'
  | 'flowers-modern-2'
  | 'flowers-pansy'
  | 'flowers-red-rose'
  | 'flowers-roses'
  | 'flowers-teacup'
  | 'flowers-tiny'
  | 'gems'
  | 'gingerbread-man'
  | 'gradient'
  | 'handmade-1'
  | 'handmade-2'
  | 'heart-balloon'
  | 'heart-gray'
  | 'hearts'
  | 'heebie-jeebies'
  | 'holly'
  | 'house-funky'
  | 'hypnotic'
  | 'ice-cream-cones'
  | 'light-bulb'
  | 'lightning-1'
  | 'lightning-2'
  | 'map-pins'
  | 'maple-leaf'
  | 'maple-muffins'
  | 'marquee'
  | 'marquee-toothed'
  | 'moons'
  | 'mosaic'
  | 'music-notes'
  | 'northwest'
  | 'ovals'
  | 'packages'
  | 'palms-black'
  | 'palms-color'
  | 'paper-clips'
  | 'papyrus'
  | 'party-favor'
  | 'party-glass'
  | 'pencils'
  | 'people'
  | 'people-hats'
  | 'people-waving'
  | 'poinsettias'
  | 'postage-stamp'
  | 'pumpkin-1'
  | 'push-pin-note-1'
  | 'push-pin-note-2'
  | 'pyramids'
  | 'pyramids-above'
  | 'quadrants'
  | 'rings'
  | 'safari'
  | 'sawtooth'
  | 'sawtooth-gray'
  | 'scared-cat'
  | 'seattle'
  | 'shadowed-squares'
  | 'sharks-teeth'
  | 'shorebird-tracks'
  | 'skyrocket'
  | 'snowflake-fancy'
  | 'snowflakes'
  | 'sombrero'
  | 'southwest'
  | 'stars'
  | 'stars-3d'
  | 'stars-black'
  | 'stars-shadowed'
  | 'stars-top'
  | 'sun'
  | 'swirligig'
  | 'torn-paper'
  | 'torn-paper-black'
  | 'trees'
  | 'triangle-party'
  | 'triangles'
  | 'tribal-1'
  | 'tribal-2'
  | 'tribal-3'
  | 'tribal-4'
  | 'tribal-5'
  | 'tribal-6'
  | 'twisted-lines-1'
  | 'twisted-lines-2'
  | 'vine'
  | 'waveline'
  | 'weaving-angles'
  | 'weaving-braid'
  | 'weaving-ribbon'
  | 'weaving-strips'
  | 'white-flowers'
  | 'woodwork'
  | 'x-illusions'
  | 'zany-triangles'
  | 'zig-zag'
  | 'zig-zag-stitch';

type BorderStyle = ComplexLineStyle | GapLineStyle | SimpleLineStyle;

type Color = NamedColor | GlobalsString | 'auto' | 'windowtext';

type ComplexLineStyle =
  | 'dash-dot-stroked'
  | 'dot-dash'
  | 'dot-dash-slanted'
  | 'dot-dot-dash'
  | 'double-wave'
  | 'emboss-3d'
  | 'engrave-3d'
  | 'short-dash'
  | 'solid-thick'
  | 'three-d-emboss'
  | 'three-d-engrave';

type FontSize = 'large' | 'larger' | 'medium' | 'small' | 'smaller' | 'x-large' | 'x-small' | 'xx-large' | 'xx-small';

type GapLineStyle =
  | 'dash-large-gap'
  | 'dash-small-gap'
  | 'thick-thin-large-gap'
  | 'thick-thin-medium-gap'
  | 'thick-thin-small-gap'
  | 'thick-thin-thick-small-gap'
  | 'thin-thick-large-gap'
  | 'thin-thick-medium-gap'
  | 'thin-thick-small-gap'
  | 'thin-thick-thin-large-gap'
  | 'thin-thick-thin-medium-gap'
  | 'thin-thick-thin-small-gap';

type GenericFontFamily = GlobalsString | 'cursive' | 'fantasy' | 'monospace' | 'sans-serif' | 'serif';

type IntNumberStyle =
  | 'aiueo'
  | 'aiueo-full-width'
  | 'arabic'
  | 'arabic-abjad'
  | 'arabic-alpha'
  | 'arabic-leading-zero'
  | 'bullet'
  | 'cardinal-text'
  | 'chicago'
  | 'chinese-counting'
  | 'chinese-counting-thousand'
  | 'chinese-legal-simplified'
  | 'chosung'
  | 'decimal'
  | 'decimal-enclosed-circle'
  | 'decimal-enclosed-circle-chinese'
  | 'decimal-enclosed-fullstop'
  | 'decimal-enclosed-paren'
  | 'decimal-full-width'
  | 'decimal-half-width'
  | 'decimal-zero'
  | 'ganada'
  | 'hangul-digital'
  | 'hebrew-1'
  | 'hebrew-2'
  | 'hexadecimal'
  | 'ideograph-digital'
  | 'ideograph-enclosed-circle'
  | 'ideograph-legal-traditional'
  | 'ideograph-traditional'
  | 'ideograph-zodiak'
  | 'ideograph-zodiak-traditional'
  | 'iroha'
  | 'iroha-full-width'
  | 'japanese-counting'
  | 'japanese-digital-ten-thousand'
  | 'japanese-legal'
  | 'korean-counting'
  | 'korean-digital'
  | 'korean-legal'
  | 'ordinal'
  | 'ordinal-text'
  | 'taiwanese-counting'
  | 'taiwanese-counting-thousand'
  | 'taiwanese-digital';

type LineWidth<TLength = GlobalsString | 0> = TLength | 'medium' | 'thick' | 'thin';

type MsExcelPatternName = '12.5-gray' | '25-gray' | '50-gray' | '6.25-gray' | '75-gray';

type MsWordPatternName =
  | '075-gray'
  | '10-gray'
  | '12.5-gray'
  | '15-gray'
  | '175-gray'
  | '20-gray'
  | '225-gray'
  | '25-gray'
  | '25-gray'
  | '275-gray'
  | '30-gray'
  | '325-gray'
  | '35-gray'
  | '37.5-gray'
  | '40-gray'
  | '425-gray'
  | '45-gray'
  | '475-gray'
  | '5-gray'
  | '50-gray'
  | '525-gray'
  | '55-gray'
  | '575-gray'
  | '60-gray'
  | '625-gray'
  | '65-gray'
  | '675-gray'
  | '70-gray'
  | '725-gray'
  | '75-gray'
  | '775-gray'
  | '80-gray'
  | '825-gray'
  | '85-gray'
  | '87.5-gray'
  | '90-gray'
  | '925-gray'
  | '95-gray'
  | '97-gray'
  | '975-gray';

type NamedColor =
  | 'aqua'
  | 'black'
  | 'black'
  | 'blue'
  | 'fuchsia'
  | 'gray'
  | 'green'
  | 'lime'
  | 'maroon'
  | 'navy'
  | 'olive'
  | 'purple'
  | 'red'
  | 'silver'
  | 'teal'
  | 'white'
  | 'yellow';

type NumberStyle =
  | 'alpha-lower'
  | 'alpha-upper'
  | 'lower-alpha'
  | 'lower-roman'
  | 'roman-lower'
  | 'roman-upper'
  | 'upper-alpha'
  | 'upper-roman';

type SimpleLineStyle =
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'hairline'
  | 'inset'
  | 'none'
  | 'outset'
  | 'ridge'
  | 'solid'
  | 'triple'
  | 'wave';

export type ConditionalOperator = '&' | 'gt' | 'gte' | 'lt' | 'lte' | '!' | '|';

export type ConditionalVersion =
  | 'IE'
  | 'mso'
  | 'mso 9'
  | 'mso 10'
  | 'mso 11'
  | 'mso 12'
  | 'mso 14'
  | 'mso 15'
  | 'mso 16';
