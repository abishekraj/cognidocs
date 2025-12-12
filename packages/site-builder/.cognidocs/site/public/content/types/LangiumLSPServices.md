# LangiumLSPServices

## Definition

```typescript
{
    readonly lsp: {
        readonly CompletionProvider?: CompletionProvider
        readonly DocumentHighlightProvider?: DocumentHighlightProvider
        readonly DocumentSymbolProvider?: DocumentSymbolProvider
        readonly HoverProvider?: HoverProvider
        readonly FoldingRangeProvider?: FoldingRangeProvider
        readonly DefinitionProvider?: DefinitionProvider
        readonly TypeProvider?: TypeDefinitionProvider
        readonly ImplementationProvider?: ImplementationProvider
        readonly ReferencesProvider?: ReferencesProvider
        readonly CodeActionProvider?: CodeActionProvider
        readonly SemanticTokenProvider?: SemanticTokenProvider
        readonly RenameProvider?: RenameProvider
        readonly Formatter?: Formatter
        readonly SignatureHelp?: SignatureHelpProvider
        readonly CallHierarchyProvider?: CallHierarchyProvider
        readonly TypeHierarchyProvider?: TypeHierarchyProvider
        readonly DeclarationProvider?: DeclarationProvider
        readonly InlayHintProvider?: InlayHintProvider
        readonly CodeLensProvider?: CodeLensProvider
        readonly DocumentLinkProvider?: DocumentLinkProvider
    },
    readonly shared: LangiumSharedServices
}
```
