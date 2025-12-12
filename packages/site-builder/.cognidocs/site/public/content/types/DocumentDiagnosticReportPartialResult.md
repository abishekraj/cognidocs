# DocumentDiagnosticReportPartialResult

A partial result for a document diagnostic report.

## Definition

```typescript
{
    relatedDocuments: {
        [uri: DocumentUri]: FullDocumentDiagnosticReport | UnchangedDocumentDiagnosticReport;
    };
}
```
