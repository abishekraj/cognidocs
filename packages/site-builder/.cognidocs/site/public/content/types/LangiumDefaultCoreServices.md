# LangiumDefaultCoreServices

## Definition

```typescript
{
    readonly parser: {
        readonly AsyncParser: AsyncParser
        readonly GrammarConfig: GrammarConfig
        readonly ValueConverter: ValueConverter
        readonly LangiumParser: LangiumParser
        readonly ParserErrorMessageProvider: IParserErrorMessageProvider
        readonly LexerErrorMessageProvider: ILexerErrorMessageProvider
        readonly CompletionParser: LangiumCompletionParser
        readonly TokenBuilder: TokenBuilder
        readonly Lexer: Lexer
    }
    readonly documentation: {
        readonly CommentProvider: CommentProvider
        readonly DocumentationProvider: DocumentationProvider
    }
    readonly references: {
        readonly Linker: Linker
        readonly NameProvider: NameProvider
        readonly References: References
        readonly ScopeProvider: ScopeProvider
        readonly ScopeComputation: ScopeComputation
    }
    readonly serializer: {
        readonly Hydrator: Hydrator
        readonly JsonSerializer: JsonSerializer
    }
    readonly validation: {
        readonly DocumentValidator: DocumentValidator
        readonly ValidationRegistry: ValidationRegistry
    }
    readonly workspace: {
        readonly AstNodeLocator: AstNodeLocator
        readonly AstNodeDescriptionProvider: AstNodeDescriptionProvider
        readonly ReferenceDescriptionProvider: ReferenceDescriptionProvider
    }
    readonly shared: LangiumSharedCoreServices
}
```
