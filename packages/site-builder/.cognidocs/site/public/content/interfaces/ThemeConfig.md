# ThemeConfig

## Properties

| Name        | Type                                   | Optional | Description |
| :---------- | :------------------------------------- | :------- | :---------- |
| `screens`   | `ResolvableTo<ScreensConfig>`          | No       | -           |
| `supports`  | `ResolvableTo<Record<string, string>>` | No       | -           |
| `data`      | `ResolvableTo<Record<string, string>>` | No       | -           |
| `colors`    | `ResolvableTo<RecursiveKeyValuePair>`  | No       | -           |
| `spacing`   | `ResolvableTo<KeyValuePair>`           | No       | -           |
| `container` | `ResolvableTo<                         |

    Partial<{
      screens: ScreensConfig
      center: boolean
      padding: string \| Record<string, string>
    }>

> `| No | - |
|`inset`|`ThemeConfig['spacing']`| No | - |
|`zIndex`|`ResolvableTo<KeyValuePair>`| No | - |
|`order`|`ResolvableTo<KeyValuePair>`| No | - |
|`gridColumn`|`ResolvableTo<KeyValuePair>`| No | - |
|`gridColumnStart`|`ResolvableTo<KeyValuePair>`| No | - |
|`gridColumnEnd`|`ResolvableTo<KeyValuePair>`| No | - |
|`gridRow`|`ResolvableTo<KeyValuePair>`| No | - |
|`gridRowStart`|`ResolvableTo<KeyValuePair>`| No | - |
|`gridRowEnd`|`ResolvableTo<KeyValuePair>`| No | - |
|`margin`|`ThemeConfig['spacing']`| No | - |
|`aspectRatio`|`ResolvableTo<KeyValuePair>`| No | - |
|`height`|`ThemeConfig['spacing']`| No | - |
|`maxHeight`|`ThemeConfig['spacing']`| No | - |
|`minHeight`|`ResolvableTo<KeyValuePair>`| No | - |
|`width`|`ThemeConfig['spacing']`| No | - |
|`maxWidth`|`ResolvableTo<KeyValuePair>`| No | - |
|`minWidth`|`ResolvableTo<KeyValuePair>`| No | - |
|`flex`|`ResolvableTo<KeyValuePair>`| No | - |
|`flexShrink`|`ResolvableTo<KeyValuePair>`| No | - |
|`flexGrow`|`ResolvableTo<KeyValuePair>`| No | - |
|`flexBasis`|`ThemeConfig['spacing']`| No | - |
|`borderSpacing`|`ThemeConfig['spacing']`| No | - |
|`transformOrigin`|`ResolvableTo<KeyValuePair>`| No | - |
|`translate`|`ThemeConfig['spacing']`| No | - |
|`rotate`|`ResolvableTo<KeyValuePair>`| No | - |
|`skew`|`ResolvableTo<KeyValuePair>`| No | - |
|`scale`|`ResolvableTo<KeyValuePair>`| No | - |
|`animation`|`ResolvableTo<KeyValuePair>`| No | - |
|`keyframes`|`ResolvableTo<KeyValuePair<string, KeyValuePair<string, KeyValuePair>>>`| No | - |
|`cursor`|`ResolvableTo<KeyValuePair>`| No | - |
|`scrollMargin`|`ThemeConfig['spacing']`| No | - |
|`scrollPadding`|`ThemeConfig['spacing']`| No | - |
|`listStyleType`|`ResolvableTo<KeyValuePair>`| No | - |
|`columns`|`ResolvableTo<KeyValuePair>`| No | - |
|`gridAutoColumns`|`ResolvableTo<KeyValuePair>`| No | - |
|`gridAutoRows`|`ResolvableTo<KeyValuePair>`| No | - |
|`gridTemplateColumns`|`ResolvableTo<KeyValuePair>`| No | - |
|`gridTemplateRows`|`ResolvableTo<KeyValuePair>`| No | - |
|`gap`|`ThemeConfig['spacing']`| No | - |
|`space`|`ThemeConfig['spacing']`| No | - |
|`divideWidth`|`ThemeConfig['borderWidth']`| No | - |
|`divideColor`|`ThemeConfig['borderColor']`| No | - |
|`divideOpacity`|`ThemeConfig['borderOpacity']`| No | - |
|`borderRadius`|`ResolvableTo<KeyValuePair>`| No | - |
|`borderWidth`|`ResolvableTo<KeyValuePair>`| No | - |
|`borderColor`|`ThemeConfig['colors']`| No | - |
|`borderOpacity`|`ThemeConfig['opacity']`| No | - |
|`backgroundColor`|`ThemeConfig['colors']`| No | - |
|`backgroundOpacity`|`ThemeConfig['opacity']`| No | - |
|`backgroundImage`|`ResolvableTo<KeyValuePair>`| No | - |
|`gradientColorStops`|`ThemeConfig['colors']`| No | - |
|`backgroundSize`|`ResolvableTo<KeyValuePair>`| No | - |
|`backgroundPosition`|`ResolvableTo<KeyValuePair>`| No | - |
|`fill`|`ThemeConfig['colors']`| No | - |
|`stroke`|`ThemeConfig['colors']`| No | - |
|`strokeWidth`|`ResolvableTo<KeyValuePair>`| No | - |
|`objectPosition`|`ResolvableTo<KeyValuePair>`| No | - |
|`padding`|`ThemeConfig['spacing']`| No | - |
|`textIndent`|`ThemeConfig['spacing']`| No | - |
|`fontFamily`|`ResolvableTo<

    KeyValuePair<
      string,
      \| string
      \| string[]
      \| [
          fontFamily: string \| string[],
          configuration: Partial<{
            fontFeatureSettings: string
            fontVariationSettings: string
          }>
        ]
    >

> `| No | - |
|`fontSize`|`ResolvableTo<

    KeyValuePair<
      string,
      \| string
      \| [fontSize: string, lineHeight: string]
      \| [
          fontSize: string,
          configuration: Partial<{
            lineHeight: string
            letterSpacing: string
            fontWeight: string \| number
          }>
        ]
    >

> `| No | - |
|`fontWeight`|`ResolvableTo<KeyValuePair>`| No | - |
|`lineHeight`|`ResolvableTo<KeyValuePair>`| No | - |
|`letterSpacing`|`ResolvableTo<KeyValuePair>`| No | - |
|`textColor`|`ThemeConfig['colors']`| No | - |
|`textOpacity`|`ThemeConfig['opacity']`| No | - |
|`textDecorationColor`|`ThemeConfig['colors']`| No | - |
|`textDecorationThickness`|`ResolvableTo<KeyValuePair>`| No | - |
|`textUnderlineOffset`|`ResolvableTo<KeyValuePair>`| No | - |
|`placeholderColor`|`ThemeConfig['colors']`| No | - |
|`placeholderOpacity`|`ThemeConfig['opacity']`| No | - |
|`caretColor`|`ThemeConfig['colors']`| No | - |
|`accentColor`|`ThemeConfig['colors']`| No | - |
|`opacity`|`ResolvableTo<KeyValuePair>`| No | - |
|`boxShadow`|`ResolvableTo<KeyValuePair<string, string \| string[]>>`| No | - |
|`boxShadowColor`|`ThemeConfig['colors']`| No | - |
|`outlineWidth`|`ResolvableTo<KeyValuePair>`| No | - |
|`outlineOffset`|`ResolvableTo<KeyValuePair>`| No | - |
|`outlineColor`|`ThemeConfig['colors']`| No | - |
|`ringWidth`|`ResolvableTo<KeyValuePair>`| No | - |
|`ringColor`|`ThemeConfig['colors']`| No | - |
|`ringOpacity`|`ThemeConfig['opacity']`| No | - |
|`ringOffsetWidth`|`ResolvableTo<KeyValuePair>`| No | - |
|`ringOffsetColor`|`ThemeConfig['colors']`| No | - |
|`blur`|`ResolvableTo<KeyValuePair>`| No | - |
|`brightness`|`ResolvableTo<KeyValuePair>`| No | - |
|`contrast`|`ResolvableTo<KeyValuePair>`| No | - |
|`dropShadow`|`ResolvableTo<KeyValuePair<string, string \| string[]>>`| No | - |
|`grayscale`|`ResolvableTo<KeyValuePair>`| No | - |
|`hueRotate`|`ResolvableTo<KeyValuePair>`| No | - |
|`invert`|`ResolvableTo<KeyValuePair>`| No | - |
|`saturate`|`ResolvableTo<KeyValuePair>`| No | - |
|`sepia`|`ResolvableTo<KeyValuePair>`| No | - |
|`backdropBlur`|`ThemeConfig['blur']`| No | - |
|`backdropBrightness`|`ThemeConfig['brightness']`| No | - |
|`backdropContrast`|`ThemeConfig['contrast']`| No | - |
|`backdropGrayscale`|`ThemeConfig['grayscale']`| No | - |
|`backdropHueRotate`|`ThemeConfig['hueRotate']`| No | - |
|`backdropInvert`|`ThemeConfig['invert']`| No | - |
|`backdropOpacity`|`ThemeConfig['opacity']`| No | - |
|`backdropSaturate`|`ThemeConfig['saturate']`| No | - |
|`backdropSepia`|`ThemeConfig['sepia']`| No | - |
|`transitionProperty`|`ResolvableTo<KeyValuePair>`| No | - |
|`transitionTimingFunction`|`ResolvableTo<KeyValuePair>`| No | - |
|`transitionDelay`|`ResolvableTo<KeyValuePair>`| No | - |
|`transitionDuration`|`ResolvableTo<KeyValuePair>`| No | - |
|`willChange`|`ResolvableTo<KeyValuePair>`| No | - |
|`content`|`ResolvableTo<KeyValuePair>` | No | - |
