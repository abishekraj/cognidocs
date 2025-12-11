# GetEditsForRefactorRequestArgs

Request the edits that a particular refactoring action produces. Callers must specify the name of the refactor and the name of the action.

## Definition
```typescript
FileLocationOrRangeRequestArgs & {
                refactor: string;
                action: string;
                interactiveRefactorArguments?: InteractiveRefactorArguments;
            }
```