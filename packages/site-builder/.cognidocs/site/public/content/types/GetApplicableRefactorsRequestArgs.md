# GetApplicableRefactorsRequestArgs
## Definition
```typescript
FileLocationOrRangeRequestArgs & {
                triggerReason?: RefactorTriggerReason;
                kind?: string;
                /**
                 * Include refactor actions that require additional arguments to be passed when
                 * calling 'GetEditsForRefactor'. When true, clients should inspect the
                 * `isInteractive` property of each returned `RefactorActionInfo`
                 * and ensure they are able to collect the appropriate arguments for any
                 * interactive refactor before offering it.
                 */
                includeInteractiveActions?: boolean;
            }
```