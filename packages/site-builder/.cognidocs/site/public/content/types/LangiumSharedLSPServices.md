# LangiumSharedLSPServices
## Definition
```typescript
{
    readonly lsp: {
        readonly Connection?: Connection
        readonly DocumentUpdateHandler: DocumentUpdateHandler
        readonly ExecuteCommandHandler?: ExecuteCommandHandler
        readonly FileOperationHandler?: FileOperationHandler
        readonly FuzzyMatcher: FuzzyMatcher
        readonly LanguageServer: LanguageServer
        readonly NodeKindProvider: NodeKindProvider
        readonly WorkspaceSymbolProvider?: WorkspaceSymbolProvider
    },
    readonly workspace: {
        readonly TextDocuments: TextDocuments<TextDocument>
    }
}
```