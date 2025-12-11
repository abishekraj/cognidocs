# DiagramDefinition
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `db` | `DiagramDB` | No | - |
| `renderer` | `DiagramRenderer` | No | - |
| `parser` | `ParserDefinition` | No | - |
| `styles` | `any` | Yes | - |
| `init` | `(config: MermaidConfig) => void` | Yes | - |
| `injectUtils` | `(_log: InjectUtils['_log'], _setLogLevel: InjectUtils['_setLogLevel'], _getConfig: InjectUtils['_getConfig'], _sanitizeText: InjectUtils['_sanitizeText'], _setupGraphViewbox: InjectUtils['_setupGraphViewbox'], _commonDb: InjectUtils['_commonDb'], 
    /** @deprecated as directives will be pre-processed since https://github.com/mermaid-js/mermaid/pull/4759 */
    _parseDirective: InjectUtils['_parseDirective']) => void` | Yes | - |