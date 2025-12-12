# FoldingRangeClientCapabilities

## Properties

| Name                  | Type       | Optional | Description |
| :-------------------- | :--------- | :------- | :---------- |
| `dynamicRegistration` | `boolean`  | Yes      | -           |
| `rangeLimit`          | `uinteger` | Yes      | -           |
| `lineFoldingOnly`     | `boolean`  | Yes      | -           |
| `foldingRangeKind`    | `{         |

        /**
         * The folding range kind values the client supports. When this
         * property exists the client also guarantees that it will
         * handle values outside its set gracefully and falls back
         * to a default value when unknown.
         */
        valueSet?: FoldingRangeKind[];
    }` | Yes | - |

| `foldingRange` | `{
        /**
        * If set, the client signals that it supports setting collapsedText on
        * folding ranges to display custom labels instead of the default text.
        *
        * @since 3.17.0
        */
        collapsedText?: boolean;
    }` | Yes | - |
