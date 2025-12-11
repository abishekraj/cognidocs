# TypeScriptParser
## Methods
### parseFile
**Return:** `Promise<ParseResult>`

### parseDirectory
**Return:** `Promise<ParseResult[]>`

### parseFunctionDeclaration
**Return:** `FunctionMetadata`

### parseClassDeclaration
**Return:** `ClassMetadata`

### parseInterfaceDeclaration
**Return:** `InterfaceMetadata`

### parseTypeAliasDeclaration
**Return:** `TypeMetadata`

### parseImportDeclaration
**Return:** `ImportMetadata | null`

### extractJSDocComment
**Return:** `string | undefined`

### isExported
**Return:** `boolean`

### getExportName
**Return:** `string | null`

### hasModifier
**Return:** `boolean`

### getExtendsClause
**Return:** `string | undefined`

### getImplementsClauses
**Return:** `string[]`

### getLineNumber
**Return:** `number`
