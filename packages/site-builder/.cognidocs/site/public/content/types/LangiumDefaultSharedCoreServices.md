# LangiumDefaultSharedCoreServices
## Definition
```typescript
{
    readonly ServiceRegistry: ServiceRegistry
    readonly workspace: {
        readonly ConfigurationProvider: ConfigurationProvider
        readonly DocumentBuilder: DocumentBuilder
        readonly FileSystemProvider: FileSystemProvider
        readonly IndexManager: IndexManager
        readonly LangiumDocuments: LangiumDocuments
        readonly LangiumDocumentFactory: LangiumDocumentFactory
        readonly TextDocuments?: TextDocumentProvider
        readonly WorkspaceLock: WorkspaceLock
        readonly WorkspaceManager: WorkspaceManager
    }
}
```