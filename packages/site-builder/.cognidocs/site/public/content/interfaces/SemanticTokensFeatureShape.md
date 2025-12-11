# SemanticTokensFeatureShape

Shape of the semantic token feature

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `semanticTokens` | `{
        refresh(): void;
        on(handler: ServerRequestHandler<SemanticTokensParams, SemanticTokens, SemanticTokensPartialResult, void>): Disposable;
        onDelta(handler: ServerRequestHandler<SemanticTokensDeltaParams, SemanticTokensDelta \| SemanticTokens, SemanticTokensDeltaPartialResult \| SemanticTokensPartialResult, void>): Disposable;
        onRange(handler: ServerRequestHandler<SemanticTokensRangeParams, SemanticTokens, SemanticTokensPartialResult, void>): Disposable;
    }` | No | - |