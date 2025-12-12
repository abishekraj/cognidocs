# ServerCapabilities

Defines the capabilities provided by a language server.

## Properties

| Name                               | Type                                                                            | Optional | Description |
| :--------------------------------- | :------------------------------------------------------------------------------ | :------- | :---------- |
| `positionEncoding`                 | `PositionEncodingKind`                                                          | Yes      | -           |
| `textDocumentSync`                 | `TextDocumentSyncOptions \| TextDocumentSyncKind`                               | Yes      | -           |
| `notebookDocumentSync`             | `NotebookDocumentSyncOptions \| NotebookDocumentSyncRegistrationOptions`        | Yes      | -           |
| `completionProvider`               | `CompletionOptions`                                                             | Yes      | -           |
| `hoverProvider`                    | `boolean \| HoverOptions`                                                       | Yes      | -           |
| `signatureHelpProvider`            | `SignatureHelpOptions`                                                          | Yes      | -           |
| `declarationProvider`              | `boolean \| DeclarationOptions \| DeclarationRegistrationOptions`               | Yes      | -           |
| `definitionProvider`               | `boolean \| DefinitionOptions`                                                  | Yes      | -           |
| `typeDefinitionProvider`           | `boolean \| TypeDefinitionOptions \| TypeDefinitionRegistrationOptions`         | Yes      | -           |
| `implementationProvider`           | `boolean \| ImplementationOptions \| ImplementationRegistrationOptions`         | Yes      | -           |
| `referencesProvider`               | `boolean \| ReferenceOptions`                                                   | Yes      | -           |
| `documentHighlightProvider`        | `boolean \| DocumentHighlightOptions`                                           | Yes      | -           |
| `documentSymbolProvider`           | `boolean \| DocumentSymbolOptions`                                              | Yes      | -           |
| `codeActionProvider`               | `boolean \| CodeActionOptions`                                                  | Yes      | -           |
| `codeLensProvider`                 | `CodeLensOptions`                                                               | Yes      | -           |
| `documentLinkProvider`             | `DocumentLinkOptions`                                                           | Yes      | -           |
| `colorProvider`                    | `boolean \| DocumentColorOptions \| DocumentColorRegistrationOptions`           | Yes      | -           |
| `workspaceSymbolProvider`          | `boolean \| WorkspaceSymbolOptions`                                             | Yes      | -           |
| `documentFormattingProvider`       | `boolean \| DocumentFormattingOptions`                                          | Yes      | -           |
| `documentRangeFormattingProvider`  | `boolean \| DocumentRangeFormattingOptions`                                     | Yes      | -           |
| `documentOnTypeFormattingProvider` | `DocumentOnTypeFormattingOptions`                                               | Yes      | -           |
| `renameProvider`                   | `boolean \| RenameOptions`                                                      | Yes      | -           |
| `foldingRangeProvider`             | `boolean \| FoldingRangeOptions \| FoldingRangeRegistrationOptions`             | Yes      | -           |
| `selectionRangeProvider`           | `boolean \| SelectionRangeOptions \| SelectionRangeRegistrationOptions`         | Yes      | -           |
| `executeCommandProvider`           | `ExecuteCommandOptions`                                                         | Yes      | -           |
| `callHierarchyProvider`            | `boolean \| CallHierarchyOptions \| CallHierarchyRegistrationOptions`           | Yes      | -           |
| `linkedEditingRangeProvider`       | `boolean \| LinkedEditingRangeOptions \| LinkedEditingRangeRegistrationOptions` | Yes      | -           |
| `semanticTokensProvider`           | `SemanticTokensOptions \| SemanticTokensRegistrationOptions`                    | Yes      | -           |
| `monikerProvider`                  | `boolean \| MonikerOptions \| MonikerRegistrationOptions`                       | Yes      | -           |
| `typeHierarchyProvider`            | `boolean \| TypeHierarchyOptions \| TypeHierarchyRegistrationOptions`           | Yes      | -           |
| `inlineValueProvider`              | `boolean \| InlineValueOptions \| InlineValueRegistrationOptions`               | Yes      | -           |
| `inlayHintProvider`                | `boolean \| InlayHintOptions \| InlayHintRegistrationOptions`                   | Yes      | -           |
| `diagnosticProvider`               | `DiagnosticOptions \| DiagnosticRegistrationOptions`                            | Yes      | -           |
| `inlineCompletionProvider`         | `boolean \| InlineCompletionOptions`                                            | Yes      | -           |
| `workspace`                        | `{                                                                              |

        /**
         * The server supports workspace folder.
         *
         * @since 3.6.0
         */
        workspaceFolders?: WorkspaceFoldersServerCapabilities;
        /**
        * The server is interested in notifications/requests for operations on files.
        *
        * @since 3.16.0
        */
        fileOperations?: FileOperationOptions;
    }` | Yes | - |

| `experimental` | `T` | Yes | - |
