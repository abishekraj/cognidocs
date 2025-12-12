# CompletionOptions

Completion options.

## Properties

| Name                  | Type       | Optional | Description |
| :-------------------- | :--------- | :------- | :---------- |
| `triggerCharacters`   | `string[]` | Yes      | -           |
| `allCommitCharacters` | `string[]` | Yes      | -           |
| `resolveProvider`     | `boolean`  | Yes      | -           |
| `completionItem`      | `{         |

        /**
         * The server has support for completion item label
         * details (see also `CompletionItemLabelDetails`) when
         * receiving a completion item in a resolve call.
         *
         * @since 3.17.0
         */
        labelDetailsSupport?: boolean;
    }` | Yes | - |
