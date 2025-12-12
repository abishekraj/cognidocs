# CompletionList

Represents a collection of {@link CompletionItem completion items} to be presented in the editor.

## Properties

| Name           | Type      | Optional | Description |
| :------------- | :-------- | :------- | :---------- |
| `isIncomplete` | `boolean` | No       | -           |
| `itemDefaults` | `{        |

        /**
         * A default commit character set.
         *
         * @since 3.17.0
         */
        commitCharacters?: string[];
        /**
         * A default edit range.
         *
         * @since 3.17.0
         */
        editRange?: Range \| {
            insert: Range;
            replace: Range;
        };
        /**
         * A default insert text format.
         *
         * @since 3.17.0
         */
        insertTextFormat?: InsertTextFormat;
        /**
         * A default insert text mode.
         *
         * @since 3.17.0
         */
        insertTextMode?: InsertTextMode;
        /**
         * A default data value.
         *
         * @since 3.17.0
         */
        data?: LSPAny;
    }` | Yes | - |

| `items` | `CompletionItem[]` | No | - |
