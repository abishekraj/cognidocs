# WorkspaceDiagnosticParams

Parameters of the workspace diagnostic request.

## Definition
```typescript
WorkDoneProgressParams & PartialResultParams & {
    /**
     * The additional identifier provided during registration.
     */
    identifier?: string;
    /**
     * The currently known diagnostic reports with their
     * previous result ids.
     */
    previousResultIds: PreviousResultId[];
}
```