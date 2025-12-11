# UnchangedDocumentDiagnosticReport

A diagnostic report indicating that the last returned report is still accurate.

## Definition
```typescript
{
    /**
     * A document diagnostic report indicating
     * no changes to the last result. A server can
     * only return `unchanged` if result ids are
     * provided.
     */
    kind: typeof DocumentDiagnosticReportKind.Unchanged;
    /**
     * A result id which will be sent on the next
     * diagnostic request for the same document.
     */
    resultId: string;
}
```