# FullDocumentDiagnosticReport

A diagnostic report with a full set of problems.

## Definition
```typescript
{
    /**
     * A full document diagnostic report.
     */
    kind: typeof DocumentDiagnosticReportKind.Full;
    /**
     * An optional result id. If provided it will
     * be sent on the next diagnostic request for the
     * same document.
     */
    resultId?: string;
    /**
     * The actual items.
     */
    items: Diagnostic[];
}
```