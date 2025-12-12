# GetMoveToRefactoringFileSuggestions

Response is a list of available files. Each refactoring exposes one or more "Actions"; a user selects one action to invoke a refactoring

## Properties

| Name   | Type | Optional | Description |
| :----- | :--- | :------- | :---------- |
| `body` | `{   |

                    newFileName: string;
                    files: string[];
                }` | No | - |
