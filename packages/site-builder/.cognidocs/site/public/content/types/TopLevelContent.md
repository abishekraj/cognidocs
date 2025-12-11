# TopLevelContent

Union of registered mdast nodes that can occur at the top of the document. To register custom mdast nodes, add them to {@link BlockContent}, {@link FrontmatterContent}, or {@link DefinitionContent}. They will be automatically added here.

## Definition
```typescript
BlockContent | FrontmatterContent | DefinitionContent
```