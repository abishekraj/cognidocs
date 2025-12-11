# NodePath
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `parent` | `Node` | - |
| `hub` | `Hub` | - |
| `data` | `Record<string \| symbol, unknown>` | - |
| `context` | `TraversalContext` | - |
| `scope` | `Scope` | - |
| `contexts` | `TraversalContext[]` | - |
| `state` | `any` | - |
| `opts` | `any` | - |
| `skipKeys` | `Record<string, boolean> \| null` | - |
| `parentPath` | `T extends t.Program ? null : NodePath` | - |
| `container` | `Node \| Node[] \| null` | - |
| `listKey` | `string \| null` | - |
| `key` | `string \| number \| null` | - |
| `node` | `T` | - |
| `type` | `T extends Node ? T["type"] : T extends null \| undefined ? undefined : Node["type"] \| undefined` | - |
| `shouldSkip` | `boolean` | - |
| `shouldStop` | `boolean` | - |
| `removed` | `boolean` | - |
| `inList` | `boolean` | - |
| `parentKey` | `string` | - |
| `typeAnnotation` | `object` | - |

## Methods
### get
**Return:** `NodePath<C[K]>`

### get
**Return:** `C[L] extends Array<Node | null | undefined> ? NodePath<C[L][number]> : never`

### getScope
**Return:** `Scope`

### setData
**Return:** `any`

### getData
**Return:** `any`

### hasNode
**Return:** `this is NodePath<Exclude<T, null | undefined>>`

### buildCodeFrameError
**Return:** `Error`

### traverse
**Return:** `void`

### traverse
**Return:** `void`

### set
**Return:** `void`

### getPathLocation
**Return:** `string`

### debug
**Return:** `void`

### findParent

Starting at the parent path of the current `NodePath` and going up the tree, return the first `NodePath` that causes the provided `callback` to return a truthy value, or `null` if the `callback` never returns a truthy value.

**Return:** `NodePath | null`

### find

Starting at current `NodePath` and going up the tree, return the first `NodePath` that causes the provided `callback` to return a truthy value, or `null` if the `callback` never returns a truthy value.

**Return:** `NodePath | null`

### getFunctionParent
**Return:** `NodePath<t.Function> | null`

### getStatementParent
**Return:** `NodePath<t.Statement> | null`

### getEarliestCommonAncestorFrom

Get the deepest common ancestor and then from it, get the earliest relationship path to that ancestor. Earliest is defined as being "before" all the other nodes in terms of list container position and visiting key.

**Return:** `NodePath`

### getDeepestCommonAncestorFrom
**Return:** `NodePath`

### getAncestry

Build an array of node paths containing the entire ancestry of the current node path. NOTE: The current node path is included in this.

**Return:** `[this, ...NodePath[]]`

### isAncestor

A helper to find if `this` path is an ancestor of `maybeDescendant`

**Return:** `boolean`

### isDescendant

A helper to find if `this` path is a descendant of `maybeAncestor`

**Return:** `boolean`

### inType
**Return:** `boolean`

### getTypeAnnotation
**Return:** `t.FlowType | t.TSType`

### isBaseType
**Return:** `boolean`

### couldBeBaseType
**Return:** `boolean`

### baseTypeStrictlyMatches
**Return:** `boolean`

### isGenericType
**Return:** `boolean`

### replaceWithMultiple

Replace a node with an array of multiple. This method performs the following steps: - Inherit the comments of first provided node with that of the current node. - Insert the provided nodes after the current node. - Remove the current node.

**Return:** `NodePaths<Nodes>`

### replaceWithSourceString

Parse a string as an expression and replace the current node with the result. NOTE: This is typically not a good idea to use. Building source strings when transforming ASTs is an antipattern and SHOULD NOT be encouraged. Even if it's easier to use, your transforms will be extremely brittle.

**Return:** `[NodePath]`

### replaceWith
**Return:** `[NodePath<R>]`

### replaceWith
**Return:** `[R]`

### replaceExpressionWithStatements

This method takes an array of statements nodes and then explodes it into expressions. This method retains completion records which is extremely important to retain original semantics.

**Return:** `NodePaths<t.Expression | t.Statement>`

### replaceInline
**Return:** `NodePaths<Nodes>`

### evaluateTruthy

Walk the input `node` and statically evaluate if it's truthy. Returning `true` when we're sure that the expression will evaluate to a truthy value, `false` if we're sure that it will evaluate to a falsy value and `undefined` if we aren't sure. Because of this please do not rely on coercion when using this method and check with === if it's false.

**Return:** `boolean | undefined`

### evaluate

Walk the input `node` and statically evaluate it. Returns an object in the form `{ confident, value, deopt }`. `confident` indicates whether or not we had to drop out of evaluating the expression because of hitting an unknown node that we couldn't confidently find the value of, in which case `deopt` is the path of said node. Example: t.evaluate(parse("5 + 5")) // { confident: true, value: 10 } t.evaluate(parse("!true")) // { confident: true, value: false } t.evaluate(parse("foo + foo")) // { confident: false, value: undefined, deopt: NodePath }

**Return:** `{
        confident: boolean;
        value: any;
        deopt?: NodePath;
    }`

### matchesPattern

Match the current node if it matches the provided `pattern`. For example, given the match `React.createClass` it would match the parsed nodes of `React.createClass` and `React["createClass"]`.

**Return:** `boolean`

### has

Check whether we have the input `key`. If the `key` references an array then we check if the array has any items, otherwise we just check if it's falsy.

**Return:** `boolean`

### isStatic
**Return:** `boolean`

### is
**Return:** `boolean`

### isnt
**Return:** `boolean`

### equals
**Return:** `boolean`

### isNodeType

Check the type against our stored internal type of the node. This is handy when a node has been removed yet we still internally know the type and need it to calculate node replacement.

**Return:** `boolean`

### canHaveVariableDeclarationOrExpression

This checks whether or not we're in one of the following positions: for (KEY in right); for (KEY;;); This is because these spots allow VariableDeclarations AND normal expressions so we need to tell the path replacement that it's ok to replace this with an expression.

**Return:** `boolean`

### canSwapBetweenExpressionAndStatement

This checks whether we are swapping an arrow function's body between an expression and a block statement (or vice versa). This is because arrow functions may implicitly return an expression, which is the same as containing a block statement.

**Return:** `boolean`

### isCompletionRecord
**Return:** `boolean`

### isStatementOrBlock

Check whether or not the current `key` allows either a single statement or block statement so we can explode it if necessary.

**Return:** `boolean`

### referencesImport
**Return:** `boolean`

### getSource
**Return:** `string`

### willIMaybeExecuteBefore
**Return:** `boolean`

### resolve
**Return:** `NodePath`

### isConstantExpression
**Return:** `boolean`

### isInStrictMode
**Return:** `boolean`

### call
**Return:** `boolean`

### isDenylisted
**Return:** `boolean`

### isBlacklisted
**Return:** `boolean`

### visit
**Return:** `boolean`

### skip
**Return:** `void`

### skipKey
**Return:** `void`

### stop
**Return:** `void`

### setScope
**Return:** `void`

### setContext
**Return:** `this`

### resync

Here we resync the node paths `key` and `container`. If they've changed according to what we have stored internally then we attempt to resync by crawling and looking for the new values.

**Return:** `void`

### popContext
**Return:** `void`

### pushContext
**Return:** `void`

### requeue
**Return:** `void`

### remove
**Return:** `void`

### toComputedKey
**Return:** `t.PrivateName | t.Expression`

### arrowFunctionToShadowed
**Return:** `void`

### unwrapFunctionEnvironment

Given an arbitrary function, process its content as if it were an arrow function, moving references to "this", "arguments", "super", and such into the function's parent scope. This method is useful if you have wrapped some set of items in an IIFE or other function, but want "this", "arguments", and super" to continue behaving as expected.

**Return:** `void`

### arrowFunctionToExpression

Convert a given arrow function into a normal ES5 function expression.

**Return:** `NodePath<Exclude<t.Function, t.Method | t.ArrowFunctionExpression> | t.CallExpression>`

### ensureBlock
**Return:** `asserts this is NodePath<
        T & {
            body: t.BlockStatement;
        }
    >`

### insertBefore
**Return:** `NodePaths<Nodes>`

### insertAfter

Insert the provided nodes after the current one. When inserting nodes after an expression, ensure that the completion record is correct by pushing the current node.

**Return:** `NodePaths<Nodes>`

### updateSiblingKeys
**Return:** `void`

### unshiftContainer

Insert child nodes at the start of the current node.

**Return:** `NodePaths<Nodes>`

### pushContainer

Insert child nodes at the end of the current node.

**Return:** `NodePaths<Nodes>`

### hoist
**Return:** `void`

### getOpposite
**Return:** `NodePath | null`

### getCompletionRecords
**Return:** `NodePath[]`

### getSibling
**Return:** `NodePath`

### getPrevSibling
**Return:** `NodePath`

### getNextSibling
**Return:** `NodePath`

### getAllPrevSiblings
**Return:** `NodePath[]`

### getAllNextSiblings
**Return:** `NodePath[]`

### get
**Return:** `NodePathResult<T[K]>`

### get
**Return:** `NodePathResult<ImplGetRecursive<T, P>>`

### get
**Return:** `NodePath | NodePath[]`

### getBindingIdentifiers
**Return:** `Record<string, t.Identifier[]>`

### getBindingIdentifiers
**Return:** `Record<string, t.Identifier>`

### getBindingIdentifiers
**Return:** `Record<string, t.Identifier | t.Identifier[]>`

### getOuterBindingIdentifiers
**Return:** `Record<string, t.Identifier[]>`

### getOuterBindingIdentifiers
**Return:** `Record<string, t.Identifier>`

### getOuterBindingIdentifiers
**Return:** `Record<string, t.Identifier | t.Identifier[]>`

### getBindingIdentifierPaths
**Return:** `Record<string, Array<NodePath<t.Identifier>>>`

### getBindingIdentifierPaths
**Return:** `Record<string, NodePath<t.Identifier>>`

### getBindingIdentifierPaths
**Return:** `Record<string, NodePath<t.Identifier> | Array<NodePath<t.Identifier>>>`

### getOuterBindingIdentifierPaths
**Return:** `Record<string, Array<NodePath<t.Identifier>>>`

### getOuterBindingIdentifierPaths
**Return:** `Record<string, NodePath<t.Identifier>>`

### getOuterBindingIdentifierPaths
**Return:** `Record<string, NodePath<t.Identifier> | Array<NodePath<t.Identifier>>>`

### shareCommentsWithSiblings
**Return:** `void`

### addComment
**Return:** `void`

### addComments
**Return:** `void`

### isAccessor
**Return:** `this is NodePath<t.Accessor>`

### isAnyTypeAnnotation
**Return:** `this is NodePath<t.AnyTypeAnnotation>`

### isArgumentPlaceholder
**Return:** `this is NodePath<t.ArgumentPlaceholder>`

### isArrayExpression
**Return:** `this is NodePath<t.ArrayExpression>`

### isArrayPattern
**Return:** `this is NodePath<t.ArrayPattern>`

### isArrayTypeAnnotation
**Return:** `this is NodePath<t.ArrayTypeAnnotation>`

### isArrowFunctionExpression
**Return:** `this is NodePath<t.ArrowFunctionExpression>`

### isAssignmentExpression
**Return:** `this is NodePath<t.AssignmentExpression>`

### isAssignmentPattern
**Return:** `this is NodePath<t.AssignmentPattern>`

### isAwaitExpression
**Return:** `this is NodePath<t.AwaitExpression>`

### isBigIntLiteral
**Return:** `this is NodePath<t.BigIntLiteral>`

### isBinary
**Return:** `this is NodePath<t.Binary>`

### isBinaryExpression
**Return:** `this is NodePath<t.BinaryExpression>`

### isBindExpression
**Return:** `this is NodePath<t.BindExpression>`

### isBlock
**Return:** `this is NodePath<t.Block>`

### isBlockParent
**Return:** `this is NodePath<t.BlockParent>`

### isBlockStatement
**Return:** `this is NodePath<t.BlockStatement>`

### isBooleanLiteral
**Return:** `this is NodePath<t.BooleanLiteral>`

### isBooleanLiteralTypeAnnotation
**Return:** `this is NodePath<t.BooleanLiteralTypeAnnotation>`

### isBooleanTypeAnnotation
**Return:** `this is NodePath<t.BooleanTypeAnnotation>`

### isBreakStatement
**Return:** `this is NodePath<t.BreakStatement>`

### isCallExpression
**Return:** `this is NodePath<t.CallExpression>`

### isCatchClause
**Return:** `this is NodePath<t.CatchClause>`

### isClass
**Return:** `this is NodePath<t.Class>`

### isClassAccessorProperty
**Return:** `this is NodePath<t.ClassAccessorProperty>`

### isClassBody
**Return:** `this is NodePath<t.ClassBody>`

### isClassDeclaration
**Return:** `this is NodePath<t.ClassDeclaration>`

### isClassExpression
**Return:** `this is NodePath<t.ClassExpression>`

### isClassImplements
**Return:** `this is NodePath<t.ClassImplements>`

### isClassMethod
**Return:** `this is NodePath<t.ClassMethod>`

### isClassPrivateMethod
**Return:** `this is NodePath<t.ClassPrivateMethod>`

### isClassPrivateProperty
**Return:** `this is NodePath<t.ClassPrivateProperty>`

### isClassProperty
**Return:** `this is NodePath<t.ClassProperty>`

### isCompletionStatement
**Return:** `this is NodePath<t.CompletionStatement>`

### isConditional
**Return:** `this is NodePath<t.Conditional>`

### isConditionalExpression
**Return:** `this is NodePath<t.ConditionalExpression>`

### isContinueStatement
**Return:** `this is NodePath<t.ContinueStatement>`

### isDebuggerStatement
**Return:** `this is NodePath<t.DebuggerStatement>`

### isDecimalLiteral
**Return:** `this is NodePath<t.DecimalLiteral>`

### isDeclaration
**Return:** `this is NodePath<t.Declaration>`

### isDeclareClass
**Return:** `this is NodePath<t.DeclareClass>`

### isDeclareExportAllDeclaration
**Return:** `this is NodePath<t.DeclareExportAllDeclaration>`

### isDeclareExportDeclaration
**Return:** `this is NodePath<t.DeclareExportDeclaration>`

### isDeclareFunction
**Return:** `this is NodePath<t.DeclareFunction>`

### isDeclareInterface
**Return:** `this is NodePath<t.DeclareInterface>`

### isDeclareModule
**Return:** `this is NodePath<t.DeclareModule>`

### isDeclareModuleExports
**Return:** `this is NodePath<t.DeclareModuleExports>`

### isDeclareOpaqueType
**Return:** `this is NodePath<t.DeclareOpaqueType>`

### isDeclareTypeAlias
**Return:** `this is NodePath<t.DeclareTypeAlias>`

### isDeclareVariable
**Return:** `this is NodePath<t.DeclareVariable>`

### isDeclaredPredicate
**Return:** `this is NodePath<t.DeclaredPredicate>`

### isDecorator
**Return:** `this is NodePath<t.Decorator>`

### isDirective
**Return:** `this is NodePath<t.Directive>`

### isDirectiveLiteral
**Return:** `this is NodePath<t.DirectiveLiteral>`

### isDoExpression
**Return:** `this is NodePath<t.DoExpression>`

### isDoWhileStatement
**Return:** `this is NodePath<t.DoWhileStatement>`

### isEmptyStatement
**Return:** `this is NodePath<t.EmptyStatement>`

### isEmptyTypeAnnotation
**Return:** `this is NodePath<t.EmptyTypeAnnotation>`

### isEnumBody
**Return:** `this is NodePath<t.EnumBody>`

### isEnumBooleanBody
**Return:** `this is NodePath<t.EnumBooleanBody>`

### isEnumBooleanMember
**Return:** `this is NodePath<t.EnumBooleanMember>`

### isEnumDeclaration
**Return:** `this is NodePath<t.EnumDeclaration>`

### isEnumDefaultedMember
**Return:** `this is NodePath<t.EnumDefaultedMember>`

### isEnumMember
**Return:** `this is NodePath<t.EnumMember>`

### isEnumNumberBody
**Return:** `this is NodePath<t.EnumNumberBody>`

### isEnumNumberMember
**Return:** `this is NodePath<t.EnumNumberMember>`

### isEnumStringBody
**Return:** `this is NodePath<t.EnumStringBody>`

### isEnumStringMember
**Return:** `this is NodePath<t.EnumStringMember>`

### isEnumSymbolBody
**Return:** `this is NodePath<t.EnumSymbolBody>`

### isExistsTypeAnnotation
**Return:** `this is NodePath<t.ExistsTypeAnnotation>`

### isExportAllDeclaration
**Return:** `this is NodePath<t.ExportAllDeclaration>`

### isExportDeclaration
**Return:** `this is NodePath<t.ExportDeclaration>`

### isExportDefaultDeclaration
**Return:** `this is NodePath<t.ExportDefaultDeclaration>`

### isExportDefaultSpecifier
**Return:** `this is NodePath<t.ExportDefaultSpecifier>`

### isExportNamedDeclaration
**Return:** `this is NodePath<t.ExportNamedDeclaration>`

### isExportNamespaceSpecifier
**Return:** `this is NodePath<t.ExportNamespaceSpecifier>`

### isExportSpecifier
**Return:** `this is NodePath<t.ExportSpecifier>`

### isExpression
**Return:** `this is NodePath<t.Expression>`

### isExpressionStatement
**Return:** `this is NodePath<t.ExpressionStatement>`

### isExpressionWrapper
**Return:** `this is NodePath<t.ExpressionWrapper>`

### isFile
**Return:** `this is NodePath<t.File>`

### isFlow
**Return:** `this is NodePath<t.Flow>`

### isFlowBaseAnnotation
**Return:** `this is NodePath<t.FlowBaseAnnotation>`

### isFlowDeclaration
**Return:** `this is NodePath<t.FlowDeclaration>`

### isFlowPredicate
**Return:** `this is NodePath<t.FlowPredicate>`

### isFlowType
**Return:** `this is NodePath<t.FlowType>`

### isFor
**Return:** `this is NodePath<t.For>`

### isForInStatement
**Return:** `this is NodePath<t.ForInStatement>`

### isForOfStatement
**Return:** `this is NodePath<t.ForOfStatement>`

### isForStatement
**Return:** `this is NodePath<t.ForStatement>`

### isForXStatement
**Return:** `this is NodePath<t.ForXStatement>`

### isFunction
**Return:** `this is NodePath<t.Function>`

### isFunctionDeclaration
**Return:** `this is NodePath<t.FunctionDeclaration>`

### isFunctionExpression
**Return:** `this is NodePath<t.FunctionExpression>`

### isFunctionParameter
**Return:** `this is NodePath<t.FunctionParameter>`

### isFunctionParent
**Return:** `this is NodePath<t.FunctionParent>`

### isFunctionTypeAnnotation
**Return:** `this is NodePath<t.FunctionTypeAnnotation>`

### isFunctionTypeParam
**Return:** `this is NodePath<t.FunctionTypeParam>`

### isGenericTypeAnnotation
**Return:** `this is NodePath<t.GenericTypeAnnotation>`

### isIdentifier
**Return:** `this is NodePath<t.Identifier>`

### isIfStatement
**Return:** `this is NodePath<t.IfStatement>`

### isImmutable
**Return:** `this is NodePath<t.Immutable>`

### isImport
**Return:** `this is NodePath<t.Import>`

### isImportAttribute
**Return:** `this is NodePath<t.ImportAttribute>`

### isImportDeclaration
**Return:** `this is NodePath<t.ImportDeclaration>`

### isImportExpression
**Return:** `this is NodePath<t.ImportExpression>`

### isImportDefaultSpecifier
**Return:** `this is NodePath<t.ImportDefaultSpecifier>`

### isImportNamespaceSpecifier
**Return:** `this is NodePath<t.ImportNamespaceSpecifier>`

### isImportOrExportDeclaration
**Return:** `this is NodePath<t.ImportOrExportDeclaration>`

### isImportSpecifier
**Return:** `this is NodePath<t.ImportSpecifier>`

### isIndexedAccessType
**Return:** `this is NodePath<t.IndexedAccessType>`

### isInferredPredicate
**Return:** `this is NodePath<t.InferredPredicate>`

### isInterfaceDeclaration
**Return:** `this is NodePath<t.InterfaceDeclaration>`

### isInterfaceExtends
**Return:** `this is NodePath<t.InterfaceExtends>`

### isInterfaceTypeAnnotation
**Return:** `this is NodePath<t.InterfaceTypeAnnotation>`

### isInterpreterDirective
**Return:** `this is NodePath<t.InterpreterDirective>`

### isIntersectionTypeAnnotation
**Return:** `this is NodePath<t.IntersectionTypeAnnotation>`

### isJSX
**Return:** `this is NodePath<t.JSX>`

### isJSXAttribute
**Return:** `this is NodePath<t.JSXAttribute>`

### isJSXClosingElement
**Return:** `this is NodePath<t.JSXClosingElement>`

### isJSXClosingFragment
**Return:** `this is NodePath<t.JSXClosingFragment>`

### isJSXElement
**Return:** `this is NodePath<t.JSXElement>`

### isJSXEmptyExpression
**Return:** `this is NodePath<t.JSXEmptyExpression>`

### isJSXExpressionContainer
**Return:** `this is NodePath<t.JSXExpressionContainer>`

### isJSXFragment
**Return:** `this is NodePath<t.JSXFragment>`

### isJSXIdentifier
**Return:** `this is NodePath<t.JSXIdentifier>`

### isJSXMemberExpression
**Return:** `this is NodePath<t.JSXMemberExpression>`

### isJSXNamespacedName
**Return:** `this is NodePath<t.JSXNamespacedName>`

### isJSXOpeningElement
**Return:** `this is NodePath<t.JSXOpeningElement>`

### isJSXOpeningFragment
**Return:** `this is NodePath<t.JSXOpeningFragment>`

### isJSXSpreadAttribute
**Return:** `this is NodePath<t.JSXSpreadAttribute>`

### isJSXSpreadChild
**Return:** `this is NodePath<t.JSXSpreadChild>`

### isJSXText
**Return:** `this is NodePath<t.JSXText>`

### isLVal
**Return:** `this is NodePath<t.LVal>`

### isLabeledStatement
**Return:** `this is NodePath<t.LabeledStatement>`

### isLiteral
**Return:** `this is NodePath<t.Literal>`

### isLogicalExpression
**Return:** `this is NodePath<t.LogicalExpression>`

### isLoop
**Return:** `this is NodePath<t.Loop>`

### isMemberExpression
**Return:** `this is NodePath<t.MemberExpression>`

### isMetaProperty
**Return:** `this is NodePath<t.MetaProperty>`

### isMethod
**Return:** `this is NodePath<t.Method>`

### isMiscellaneous
**Return:** `this is NodePath<t.Miscellaneous>`

### isMixedTypeAnnotation
**Return:** `this is NodePath<t.MixedTypeAnnotation>`

### isModuleDeclaration
**Return:** `this is NodePath<t.ModuleDeclaration>`

### isModuleExpression
**Return:** `this is NodePath<t.ModuleExpression>`

### isModuleSpecifier
**Return:** `this is NodePath<t.ModuleSpecifier>`

### isNewExpression
**Return:** `this is NodePath<t.NewExpression>`

### isNoop
**Return:** `this is NodePath<t.Noop>`

### isNullLiteral
**Return:** `this is NodePath<t.NullLiteral>`

### isNullLiteralTypeAnnotation
**Return:** `this is NodePath<t.NullLiteralTypeAnnotation>`

### isNullableTypeAnnotation
**Return:** `this is NodePath<t.NullableTypeAnnotation>`

### isNumberLiteral
**Return:** `this is NodePath<t.NumberLiteral>`

### isNumberLiteralTypeAnnotation
**Return:** `this is NodePath<t.NumberLiteralTypeAnnotation>`

### isNumberTypeAnnotation
**Return:** `this is NodePath<t.NumberTypeAnnotation>`

### isNumericLiteral
**Return:** `this is NodePath<t.NumericLiteral>`

### isObjectExpression
**Return:** `this is NodePath<t.ObjectExpression>`

### isObjectMember
**Return:** `this is NodePath<t.ObjectMember>`

### isObjectMethod
**Return:** `this is NodePath<t.ObjectMethod>`

### isObjectPattern
**Return:** `this is NodePath<t.ObjectPattern>`

### isObjectProperty
**Return:** `this is NodePath<t.ObjectProperty>`

### isObjectTypeAnnotation
**Return:** `this is NodePath<t.ObjectTypeAnnotation>`

### isObjectTypeCallProperty
**Return:** `this is NodePath<t.ObjectTypeCallProperty>`

### isObjectTypeIndexer
**Return:** `this is NodePath<t.ObjectTypeIndexer>`

### isObjectTypeInternalSlot
**Return:** `this is NodePath<t.ObjectTypeInternalSlot>`

### isObjectTypeProperty
**Return:** `this is NodePath<t.ObjectTypeProperty>`

### isObjectTypeSpreadProperty
**Return:** `this is NodePath<t.ObjectTypeSpreadProperty>`

### isOpaqueType
**Return:** `this is NodePath<t.OpaqueType>`

### isOptionalCallExpression
**Return:** `this is NodePath<t.OptionalCallExpression>`

### isOptionalIndexedAccessType
**Return:** `this is NodePath<t.OptionalIndexedAccessType>`

### isOptionalMemberExpression
**Return:** `this is NodePath<t.OptionalMemberExpression>`

### isParenthesizedExpression
**Return:** `this is NodePath<t.ParenthesizedExpression>`

### isPattern
**Return:** `this is NodePath<t.Pattern>`

### isPatternLike
**Return:** `this is NodePath<t.PatternLike>`

### isPipelineBareFunction
**Return:** `this is NodePath<t.PipelineBareFunction>`

### isPipelinePrimaryTopicReference
**Return:** `this is NodePath<t.PipelinePrimaryTopicReference>`

### isPipelineTopicExpression
**Return:** `this is NodePath<t.PipelineTopicExpression>`

### isPlaceholder
**Return:** `this is NodePath<t.Placeholder>`

### isPrivate
**Return:** `this is NodePath<t.Private>`

### isPrivateName
**Return:** `this is NodePath<t.PrivateName>`

### isProgram
**Return:** `this is NodePath<t.Program>`

### isProperty
**Return:** `this is NodePath<t.Property>`

### isPureish
**Return:** `this is NodePath<t.Pureish>`

### isQualifiedTypeIdentifier
**Return:** `this is NodePath<t.QualifiedTypeIdentifier>`

### isRecordExpression
**Return:** `this is NodePath<t.RecordExpression>`

### isRegExpLiteral
**Return:** `this is NodePath<t.RegExpLiteral>`

### isRegexLiteral
**Return:** `this is NodePath<t.RegexLiteral>`

### isRestElement
**Return:** `this is NodePath<t.RestElement>`

### isRestProperty
**Return:** `this is NodePath<t.RestProperty>`

### isReturnStatement
**Return:** `this is NodePath<t.ReturnStatement>`

### isScopable
**Return:** `this is NodePath<t.Scopable>`

### isSequenceExpression
**Return:** `this is NodePath<t.SequenceExpression>`

### isSpreadElement
**Return:** `this is NodePath<t.SpreadElement>`

### isSpreadProperty
**Return:** `this is NodePath<t.SpreadProperty>`

### isStandardized
**Return:** `this is NodePath<t.Standardized>`

### isStatement
**Return:** `this is NodePath<t.Statement>`

### isStaticBlock
**Return:** `this is NodePath<t.StaticBlock>`

### isStringLiteral
**Return:** `this is NodePath<t.StringLiteral>`

### isStringLiteralTypeAnnotation
**Return:** `this is NodePath<t.StringLiteralTypeAnnotation>`

### isStringTypeAnnotation
**Return:** `this is NodePath<t.StringTypeAnnotation>`

### isSuper
**Return:** `this is NodePath<t.Super>`

### isSwitchCase
**Return:** `this is NodePath<t.SwitchCase>`

### isSwitchStatement
**Return:** `this is NodePath<t.SwitchStatement>`

### isSymbolTypeAnnotation
**Return:** `this is NodePath<t.SymbolTypeAnnotation>`

### isTSAnyKeyword
**Return:** `this is NodePath<t.TSAnyKeyword>`

### isTSArrayType
**Return:** `this is NodePath<t.TSArrayType>`

### isTSAsExpression
**Return:** `this is NodePath<t.TSAsExpression>`

### isTSBaseType
**Return:** `this is NodePath<t.TSBaseType>`

### isTSBigIntKeyword
**Return:** `this is NodePath<t.TSBigIntKeyword>`

### isTSBooleanKeyword
**Return:** `this is NodePath<t.TSBooleanKeyword>`

### isTSCallSignatureDeclaration
**Return:** `this is NodePath<t.TSCallSignatureDeclaration>`

### isTSConditionalType
**Return:** `this is NodePath<t.TSConditionalType>`

### isTSConstructSignatureDeclaration
**Return:** `this is NodePath<t.TSConstructSignatureDeclaration>`

### isTSConstructorType
**Return:** `this is NodePath<t.TSConstructorType>`

### isTSDeclareFunction
**Return:** `this is NodePath<t.TSDeclareFunction>`

### isTSDeclareMethod
**Return:** `this is NodePath<t.TSDeclareMethod>`

### isTSEntityName
**Return:** `this is NodePath<t.TSEntityName>`

### isTSEnumBody
**Return:** `this is NodePath<t.TSEnumBody>`

### isTSEnumDeclaration
**Return:** `this is NodePath<t.TSEnumDeclaration>`

### isTSEnumMember
**Return:** `this is NodePath<t.TSEnumMember>`

### isTSExportAssignment
**Return:** `this is NodePath<t.TSExportAssignment>`

### isTSExpressionWithTypeArguments
**Return:** `this is NodePath<t.TSExpressionWithTypeArguments>`

### isTSExternalModuleReference
**Return:** `this is NodePath<t.TSExternalModuleReference>`

### isTSFunctionType
**Return:** `this is NodePath<t.TSFunctionType>`

### isTSImportEqualsDeclaration
**Return:** `this is NodePath<t.TSImportEqualsDeclaration>`

### isTSImportType
**Return:** `this is NodePath<t.TSImportType>`

### isTSIndexSignature
**Return:** `this is NodePath<t.TSIndexSignature>`

### isTSIndexedAccessType
**Return:** `this is NodePath<t.TSIndexedAccessType>`

### isTSInferType
**Return:** `this is NodePath<t.TSInferType>`

### isTSInstantiationExpression
**Return:** `this is NodePath<t.TSInstantiationExpression>`

### isTSInterfaceBody
**Return:** `this is NodePath<t.TSInterfaceBody>`

### isTSInterfaceDeclaration
**Return:** `this is NodePath<t.TSInterfaceDeclaration>`

### isTSIntersectionType
**Return:** `this is NodePath<t.TSIntersectionType>`

### isTSIntrinsicKeyword
**Return:** `this is NodePath<t.TSIntrinsicKeyword>`

### isTSLiteralType
**Return:** `this is NodePath<t.TSLiteralType>`

### isTSMappedType
**Return:** `this is NodePath<t.TSMappedType>`

### isTSMethodSignature
**Return:** `this is NodePath<t.TSMethodSignature>`

### isTSModuleBlock
**Return:** `this is NodePath<t.TSModuleBlock>`

### isTSModuleDeclaration
**Return:** `this is NodePath<t.TSModuleDeclaration>`

### isTSNamedTupleMember
**Return:** `this is NodePath<t.TSNamedTupleMember>`

### isTSNamespaceExportDeclaration
**Return:** `this is NodePath<t.TSNamespaceExportDeclaration>`

### isTSNeverKeyword
**Return:** `this is NodePath<t.TSNeverKeyword>`

### isTSNonNullExpression
**Return:** `this is NodePath<t.TSNonNullExpression>`

### isTSNullKeyword
**Return:** `this is NodePath<t.TSNullKeyword>`

### isTSNumberKeyword
**Return:** `this is NodePath<t.TSNumberKeyword>`

### isTSObjectKeyword
**Return:** `this is NodePath<t.TSObjectKeyword>`

### isTSOptionalType
**Return:** `this is NodePath<t.TSOptionalType>`

### isTSParameterProperty
**Return:** `this is NodePath<t.TSParameterProperty>`

### isTSParenthesizedType
**Return:** `this is NodePath<t.TSParenthesizedType>`

### isTSPropertySignature
**Return:** `this is NodePath<t.TSPropertySignature>`

### isTSQualifiedName
**Return:** `this is NodePath<t.TSQualifiedName>`

### isTSRestType
**Return:** `this is NodePath<t.TSRestType>`

### isTSSatisfiesExpression
**Return:** `this is NodePath<t.TSSatisfiesExpression>`

### isTSStringKeyword
**Return:** `this is NodePath<t.TSStringKeyword>`

### isTSSymbolKeyword
**Return:** `this is NodePath<t.TSSymbolKeyword>`

### isTSTemplateLiteralType
**Return:** `this is NodePath<t.TSTemplateLiteralType>`

### isTSThisType
**Return:** `this is NodePath<t.TSThisType>`

### isTSTupleType
**Return:** `this is NodePath<t.TSTupleType>`

### isTSType
**Return:** `this is NodePath<t.TSType>`

### isTSTypeAliasDeclaration
**Return:** `this is NodePath<t.TSTypeAliasDeclaration>`

### isTSTypeAnnotation
**Return:** `this is NodePath<t.TSTypeAnnotation>`

### isTSTypeAssertion
**Return:** `this is NodePath<t.TSTypeAssertion>`

### isTSTypeElement
**Return:** `this is NodePath<t.TSTypeElement>`

### isTSTypeLiteral
**Return:** `this is NodePath<t.TSTypeLiteral>`

### isTSTypeOperator
**Return:** `this is NodePath<t.TSTypeOperator>`

### isTSTypeParameter
**Return:** `this is NodePath<t.TSTypeParameter>`

### isTSTypeParameterDeclaration
**Return:** `this is NodePath<t.TSTypeParameterDeclaration>`

### isTSTypeParameterInstantiation
**Return:** `this is NodePath<t.TSTypeParameterInstantiation>`

### isTSTypePredicate
**Return:** `this is NodePath<t.TSTypePredicate>`

### isTSTypeQuery
**Return:** `this is NodePath<t.TSTypeQuery>`

### isTSTypeReference
**Return:** `this is NodePath<t.TSTypeReference>`

### isTSUndefinedKeyword
**Return:** `this is NodePath<t.TSUndefinedKeyword>`

### isTSUnionType
**Return:** `this is NodePath<t.TSUnionType>`

### isTSUnknownKeyword
**Return:** `this is NodePath<t.TSUnknownKeyword>`

### isTSVoidKeyword
**Return:** `this is NodePath<t.TSVoidKeyword>`

### isTaggedTemplateExpression
**Return:** `this is NodePath<t.TaggedTemplateExpression>`

### isTemplateElement
**Return:** `this is NodePath<t.TemplateElement>`

### isTemplateLiteral
**Return:** `this is NodePath<t.TemplateLiteral>`

### isTerminatorless
**Return:** `this is NodePath<t.Terminatorless>`

### isThisExpression
**Return:** `this is NodePath<t.ThisExpression>`

### isThisTypeAnnotation
**Return:** `this is NodePath<t.ThisTypeAnnotation>`

### isThrowStatement
**Return:** `this is NodePath<t.ThrowStatement>`

### isTopicReference
**Return:** `this is NodePath<t.TopicReference>`

### isTryStatement
**Return:** `this is NodePath<t.TryStatement>`

### isTupleExpression
**Return:** `this is NodePath<t.TupleExpression>`

### isTupleTypeAnnotation
**Return:** `this is NodePath<t.TupleTypeAnnotation>`

### isTypeAlias
**Return:** `this is NodePath<t.TypeAlias>`

### isTypeAnnotation
**Return:** `this is NodePath<t.TypeAnnotation>`

### isTypeCastExpression
**Return:** `this is NodePath<t.TypeCastExpression>`

### isTypeParameter
**Return:** `this is NodePath<t.TypeParameter>`

### isTypeParameterDeclaration
**Return:** `this is NodePath<t.TypeParameterDeclaration>`

### isTypeParameterInstantiation
**Return:** `this is NodePath<t.TypeParameterInstantiation>`

### isTypeScript
**Return:** `this is NodePath<t.TypeScript>`

### isTypeofTypeAnnotation
**Return:** `this is NodePath<t.TypeofTypeAnnotation>`

### isUnaryExpression
**Return:** `this is NodePath<t.UnaryExpression>`

### isUnaryLike
**Return:** `this is NodePath<t.UnaryLike>`

### isUnionTypeAnnotation
**Return:** `this is NodePath<t.UnionTypeAnnotation>`

### isUpdateExpression
**Return:** `this is NodePath<t.UpdateExpression>`

### isUserWhitespacable
**Return:** `this is NodePath<t.UserWhitespacable>`

### isV8IntrinsicIdentifier
**Return:** `this is NodePath<t.V8IntrinsicIdentifier>`

### isVariableDeclaration
**Return:** `this is NodePath<t.VariableDeclaration>`

### isVariableDeclarator
**Return:** `this is NodePath<t.VariableDeclarator>`

### isVariance
**Return:** `this is NodePath<t.Variance>`

### isVoidPattern
**Return:** `this is NodePath<t.VoidPattern>`

### isVoidTypeAnnotation
**Return:** `this is NodePath<t.VoidTypeAnnotation>`

### isWhile
**Return:** `this is NodePath<t.While>`

### isWhileStatement
**Return:** `this is NodePath<t.WhileStatement>`

### isWithStatement
**Return:** `this is NodePath<t.WithStatement>`

### isYieldExpression
**Return:** `this is NodePath<t.YieldExpression>`

### isBindingIdentifier
**Return:** `this is NodePath<VirtualTypeAliases["BindingIdentifier"]>`

### isBlockScoped
**Return:** `this is NodePath<t.FunctionDeclaration | t.ClassDeclaration | t.VariableDeclaration>`

### isExistentialTypeParam
**Return:** `this is NodePath<VirtualTypeAliases["ExistentialTypeParam"]>`

### isForAwaitStatement
**Return:** `this is NodePath<VirtualTypeAliases["ForAwaitStatement"]>`

### isGenerated
**Return:** `boolean`

### isNumericLiteralTypeAnnotation
**Return:** `void`

### isPure
**Return:** `boolean`

### isReferenced
**Return:** `boolean`

### isReferencedIdentifier
**Return:** `this is NodePath<VirtualTypeAliases["ReferencedIdentifier"]>`

### isReferencedMemberExpression
**Return:** `this is NodePath<VirtualTypeAliases["ReferencedMemberExpression"]>`

### isScope
**Return:** `this is NodePath<VirtualTypeAliases["Scope"]>`

### isUser
**Return:** `boolean`

### isVar
**Return:** `this is NodePath<VirtualTypeAliases["Var"]>`

### assertAccessor
**Return:** `asserts this is NodePath<t.Accessor>`

### assertAnyTypeAnnotation
**Return:** `asserts this is NodePath<t.AnyTypeAnnotation>`

### assertArgumentPlaceholder
**Return:** `asserts this is NodePath<t.ArgumentPlaceholder>`

### assertArrayExpression
**Return:** `asserts this is NodePath<t.ArrayExpression>`

### assertArrayPattern
**Return:** `asserts this is NodePath<t.ArrayPattern>`

### assertArrayTypeAnnotation
**Return:** `asserts this is NodePath<t.ArrayTypeAnnotation>`

### assertArrowFunctionExpression
**Return:** `asserts this is NodePath<t.ArrowFunctionExpression>`

### assertAssignmentExpression
**Return:** `asserts this is NodePath<t.AssignmentExpression>`

### assertAssignmentPattern
**Return:** `asserts this is NodePath<t.AssignmentPattern>`

### assertAwaitExpression
**Return:** `asserts this is NodePath<t.AwaitExpression>`

### assertBigIntLiteral
**Return:** `asserts this is NodePath<t.BigIntLiteral>`

### assertBinary
**Return:** `asserts this is NodePath<t.Binary>`

### assertBinaryExpression
**Return:** `asserts this is NodePath<t.BinaryExpression>`

### assertBindExpression
**Return:** `asserts this is NodePath<t.BindExpression>`

### assertBlock
**Return:** `asserts this is NodePath<t.Block>`

### assertBlockParent
**Return:** `asserts this is NodePath<t.BlockParent>`

### assertBlockStatement
**Return:** `asserts this is NodePath<t.BlockStatement>`

### assertBooleanLiteral
**Return:** `asserts this is NodePath<t.BooleanLiteral>`

### assertBooleanLiteralTypeAnnotation
**Return:** `asserts this is NodePath<t.BooleanLiteralTypeAnnotation>`

### assertBooleanTypeAnnotation
**Return:** `asserts this is NodePath<t.BooleanTypeAnnotation>`

### assertBreakStatement
**Return:** `asserts this is NodePath<t.BreakStatement>`

### assertCallExpression
**Return:** `asserts this is NodePath<t.CallExpression>`

### assertCatchClause
**Return:** `asserts this is NodePath<t.CatchClause>`

### assertClass
**Return:** `asserts this is NodePath<t.Class>`

### assertClassAccessorProperty
**Return:** `asserts this is NodePath<t.ClassAccessorProperty>`

### assertClassBody
**Return:** `asserts this is NodePath<t.ClassBody>`

### assertClassDeclaration
**Return:** `asserts this is NodePath<t.ClassDeclaration>`

### assertClassExpression
**Return:** `asserts this is NodePath<t.ClassExpression>`

### assertClassImplements
**Return:** `asserts this is NodePath<t.ClassImplements>`

### assertClassMethod
**Return:** `asserts this is NodePath<t.ClassMethod>`

### assertClassPrivateMethod
**Return:** `asserts this is NodePath<t.ClassPrivateMethod>`

### assertClassPrivateProperty
**Return:** `asserts this is NodePath<t.ClassPrivateProperty>`

### assertClassProperty
**Return:** `asserts this is NodePath<t.ClassProperty>`

### assertCompletionStatement
**Return:** `asserts this is NodePath<t.CompletionStatement>`

### assertConditional
**Return:** `asserts this is NodePath<t.Conditional>`

### assertConditionalExpression
**Return:** `asserts this is NodePath<t.ConditionalExpression>`

### assertContinueStatement
**Return:** `asserts this is NodePath<t.ContinueStatement>`

### assertDebuggerStatement
**Return:** `asserts this is NodePath<t.DebuggerStatement>`

### assertDecimalLiteral
**Return:** `asserts this is NodePath<t.DecimalLiteral>`

### assertDeclaration
**Return:** `asserts this is NodePath<t.Declaration>`

### assertDeclareClass
**Return:** `asserts this is NodePath<t.DeclareClass>`

### assertDeclareExportAllDeclaration
**Return:** `asserts this is NodePath<t.DeclareExportAllDeclaration>`

### assertDeclareExportDeclaration
**Return:** `asserts this is NodePath<t.DeclareExportDeclaration>`

### assertDeclareFunction
**Return:** `asserts this is NodePath<t.DeclareFunction>`

### assertDeclareInterface
**Return:** `asserts this is NodePath<t.DeclareInterface>`

### assertDeclareModule
**Return:** `asserts this is NodePath<t.DeclareModule>`

### assertDeclareModuleExports
**Return:** `asserts this is NodePath<t.DeclareModuleExports>`

### assertDeclareOpaqueType
**Return:** `asserts this is NodePath<t.DeclareOpaqueType>`

### assertDeclareTypeAlias
**Return:** `asserts this is NodePath<t.DeclareTypeAlias>`

### assertDeclareVariable
**Return:** `asserts this is NodePath<t.DeclareVariable>`

### assertDeclaredPredicate
**Return:** `asserts this is NodePath<t.DeclaredPredicate>`

### assertDecorator
**Return:** `asserts this is NodePath<t.Decorator>`

### assertDirective
**Return:** `asserts this is NodePath<t.Directive>`

### assertDirectiveLiteral
**Return:** `asserts this is NodePath<t.DirectiveLiteral>`

### assertDoExpression
**Return:** `asserts this is NodePath<t.DoExpression>`

### assertDoWhileStatement
**Return:** `asserts this is NodePath<t.DoWhileStatement>`

### assertEmptyStatement
**Return:** `asserts this is NodePath<t.EmptyStatement>`

### assertEmptyTypeAnnotation
**Return:** `asserts this is NodePath<t.EmptyTypeAnnotation>`

### assertEnumBody
**Return:** `asserts this is NodePath<t.EnumBody>`

### assertEnumBooleanBody
**Return:** `asserts this is NodePath<t.EnumBooleanBody>`

### assertEnumBooleanMember
**Return:** `asserts this is NodePath<t.EnumBooleanMember>`

### assertEnumDeclaration
**Return:** `asserts this is NodePath<t.EnumDeclaration>`

### assertEnumDefaultedMember
**Return:** `asserts this is NodePath<t.EnumDefaultedMember>`

### assertEnumMember
**Return:** `asserts this is NodePath<t.EnumMember>`

### assertEnumNumberBody
**Return:** `asserts this is NodePath<t.EnumNumberBody>`

### assertEnumNumberMember
**Return:** `asserts this is NodePath<t.EnumNumberMember>`

### assertEnumStringBody
**Return:** `asserts this is NodePath<t.EnumStringBody>`

### assertEnumStringMember
**Return:** `asserts this is NodePath<t.EnumStringMember>`

### assertEnumSymbolBody
**Return:** `asserts this is NodePath<t.EnumSymbolBody>`

### assertExistsTypeAnnotation
**Return:** `asserts this is NodePath<t.ExistsTypeAnnotation>`

### assertExportAllDeclaration
**Return:** `asserts this is NodePath<t.ExportAllDeclaration>`

### assertExportDeclaration
**Return:** `asserts this is NodePath<t.ExportDeclaration>`

### assertExportDefaultDeclaration
**Return:** `asserts this is NodePath<t.ExportDefaultDeclaration>`

### assertExportDefaultSpecifier
**Return:** `asserts this is NodePath<t.ExportDefaultSpecifier>`

### assertExportNamedDeclaration
**Return:** `asserts this is NodePath<t.ExportNamedDeclaration>`

### assertExportNamespaceSpecifier
**Return:** `asserts this is NodePath<t.ExportNamespaceSpecifier>`

### assertExportSpecifier
**Return:** `asserts this is NodePath<t.ExportSpecifier>`

### assertExpression
**Return:** `asserts this is NodePath<t.Expression>`

### assertExpressionStatement
**Return:** `asserts this is NodePath<t.ExpressionStatement>`

### assertExpressionWrapper
**Return:** `asserts this is NodePath<t.ExpressionWrapper>`

### assertFile
**Return:** `asserts this is NodePath<t.File>`

### assertFlow
**Return:** `asserts this is NodePath<t.Flow>`

### assertFlowBaseAnnotation
**Return:** `asserts this is NodePath<t.FlowBaseAnnotation>`

### assertFlowDeclaration
**Return:** `asserts this is NodePath<t.FlowDeclaration>`

### assertFlowPredicate
**Return:** `asserts this is NodePath<t.FlowPredicate>`

### assertFlowType
**Return:** `asserts this is NodePath<t.FlowType>`

### assertFor
**Return:** `asserts this is NodePath<t.For>`

### assertForInStatement
**Return:** `asserts this is NodePath<t.ForInStatement>`

### assertForOfStatement
**Return:** `asserts this is NodePath<t.ForOfStatement>`

### assertForStatement
**Return:** `asserts this is NodePath<t.ForStatement>`

### assertForXStatement
**Return:** `asserts this is NodePath<t.ForXStatement>`

### assertFunction
**Return:** `asserts this is NodePath<t.Function>`

### assertFunctionDeclaration
**Return:** `asserts this is NodePath<t.FunctionDeclaration>`

### assertFunctionExpression
**Return:** `asserts this is NodePath<t.FunctionExpression>`

### assertFunctionParameter
**Return:** `asserts this is NodePath<t.FunctionParameter>`

### assertFunctionParent
**Return:** `asserts this is NodePath<t.FunctionParent>`

### assertFunctionTypeAnnotation
**Return:** `asserts this is NodePath<t.FunctionTypeAnnotation>`

### assertFunctionTypeParam
**Return:** `asserts this is NodePath<t.FunctionTypeParam>`

### assertGenericTypeAnnotation
**Return:** `asserts this is NodePath<t.GenericTypeAnnotation>`

### assertIdentifier
**Return:** `asserts this is NodePath<t.Identifier>`

### assertIfStatement
**Return:** `asserts this is NodePath<t.IfStatement>`

### assertImmutable
**Return:** `asserts this is NodePath<t.Immutable>`

### assertImport
**Return:** `asserts this is NodePath<t.Import>`

### assertImportAttribute
**Return:** `asserts this is NodePath<t.ImportAttribute>`

### assertImportDeclaration
**Return:** `asserts this is NodePath<t.ImportDeclaration>`

### assertImportExpression
**Return:** `asserts this is NodePath<t.ImportExpression>`

### assertImportDefaultSpecifier
**Return:** `asserts this is NodePath<t.ImportDefaultSpecifier>`

### assertImportNamespaceSpecifier
**Return:** `asserts this is NodePath<t.ImportNamespaceSpecifier>`

### assertImportOrExportDeclaration
**Return:** `asserts this is NodePath<t.ImportOrExportDeclaration>`

### assertImportSpecifier
**Return:** `asserts this is NodePath<t.ImportSpecifier>`

### assertIndexedAccessType
**Return:** `asserts this is NodePath<t.IndexedAccessType>`

### assertInferredPredicate
**Return:** `asserts this is NodePath<t.InferredPredicate>`

### assertInterfaceDeclaration
**Return:** `asserts this is NodePath<t.InterfaceDeclaration>`

### assertInterfaceExtends
**Return:** `asserts this is NodePath<t.InterfaceExtends>`

### assertInterfaceTypeAnnotation
**Return:** `asserts this is NodePath<t.InterfaceTypeAnnotation>`

### assertInterpreterDirective
**Return:** `asserts this is NodePath<t.InterpreterDirective>`

### assertIntersectionTypeAnnotation
**Return:** `asserts this is NodePath<t.IntersectionTypeAnnotation>`

### assertJSX
**Return:** `asserts this is NodePath<t.JSX>`

### assertJSXAttribute
**Return:** `asserts this is NodePath<t.JSXAttribute>`

### assertJSXClosingElement
**Return:** `asserts this is NodePath<t.JSXClosingElement>`

### assertJSXClosingFragment
**Return:** `asserts this is NodePath<t.JSXClosingFragment>`

### assertJSXElement
**Return:** `asserts this is NodePath<t.JSXElement>`

### assertJSXEmptyExpression
**Return:** `asserts this is NodePath<t.JSXEmptyExpression>`

### assertJSXExpressionContainer
**Return:** `asserts this is NodePath<t.JSXExpressionContainer>`

### assertJSXFragment
**Return:** `asserts this is NodePath<t.JSXFragment>`

### assertJSXIdentifier
**Return:** `asserts this is NodePath<t.JSXIdentifier>`

### assertJSXMemberExpression
**Return:** `asserts this is NodePath<t.JSXMemberExpression>`

### assertJSXNamespacedName
**Return:** `asserts this is NodePath<t.JSXNamespacedName>`

### assertJSXOpeningElement
**Return:** `asserts this is NodePath<t.JSXOpeningElement>`

### assertJSXOpeningFragment
**Return:** `asserts this is NodePath<t.JSXOpeningFragment>`

### assertJSXSpreadAttribute
**Return:** `asserts this is NodePath<t.JSXSpreadAttribute>`

### assertJSXSpreadChild
**Return:** `asserts this is NodePath<t.JSXSpreadChild>`

### assertJSXText
**Return:** `asserts this is NodePath<t.JSXText>`

### assertLVal
**Return:** `asserts this is NodePath<t.LVal>`

### assertLabeledStatement
**Return:** `asserts this is NodePath<t.LabeledStatement>`

### assertLiteral
**Return:** `asserts this is NodePath<t.Literal>`

### assertLogicalExpression
**Return:** `asserts this is NodePath<t.LogicalExpression>`

### assertLoop
**Return:** `asserts this is NodePath<t.Loop>`

### assertMemberExpression
**Return:** `asserts this is NodePath<t.MemberExpression>`

### assertMetaProperty
**Return:** `asserts this is NodePath<t.MetaProperty>`

### assertMethod
**Return:** `asserts this is NodePath<t.Method>`

### assertMiscellaneous
**Return:** `asserts this is NodePath<t.Miscellaneous>`

### assertMixedTypeAnnotation
**Return:** `asserts this is NodePath<t.MixedTypeAnnotation>`

### assertModuleDeclaration
**Return:** `asserts this is NodePath<t.ModuleDeclaration>`

### assertModuleExpression
**Return:** `asserts this is NodePath<t.ModuleExpression>`

### assertModuleSpecifier
**Return:** `asserts this is NodePath<t.ModuleSpecifier>`

### assertNewExpression
**Return:** `asserts this is NodePath<t.NewExpression>`

### assertNoop
**Return:** `asserts this is NodePath<t.Noop>`

### assertNullLiteral
**Return:** `asserts this is NodePath<t.NullLiteral>`

### assertNullLiteralTypeAnnotation
**Return:** `asserts this is NodePath<t.NullLiteralTypeAnnotation>`

### assertNullableTypeAnnotation
**Return:** `asserts this is NodePath<t.NullableTypeAnnotation>`

### assertNumberLiteral
**Return:** `asserts this is NodePath<t.NumberLiteral>`

### assertNumberLiteralTypeAnnotation
**Return:** `asserts this is NodePath<t.NumberLiteralTypeAnnotation>`

### assertNumberTypeAnnotation
**Return:** `asserts this is NodePath<t.NumberTypeAnnotation>`

### assertNumericLiteral
**Return:** `asserts this is NodePath<t.NumericLiteral>`

### assertObjectExpression
**Return:** `asserts this is NodePath<t.ObjectExpression>`

### assertObjectMember
**Return:** `asserts this is NodePath<t.ObjectMember>`

### assertObjectMethod
**Return:** `asserts this is NodePath<t.ObjectMethod>`

### assertObjectPattern
**Return:** `asserts this is NodePath<t.ObjectPattern>`

### assertObjectProperty
**Return:** `asserts this is NodePath<t.ObjectProperty>`

### assertObjectTypeAnnotation
**Return:** `asserts this is NodePath<t.ObjectTypeAnnotation>`

### assertObjectTypeCallProperty
**Return:** `asserts this is NodePath<t.ObjectTypeCallProperty>`

### assertObjectTypeIndexer
**Return:** `asserts this is NodePath<t.ObjectTypeIndexer>`

### assertObjectTypeInternalSlot
**Return:** `asserts this is NodePath<t.ObjectTypeInternalSlot>`

### assertObjectTypeProperty
**Return:** `asserts this is NodePath<t.ObjectTypeProperty>`

### assertObjectTypeSpreadProperty
**Return:** `asserts this is NodePath<t.ObjectTypeSpreadProperty>`

### assertOpaqueType
**Return:** `asserts this is NodePath<t.OpaqueType>`

### assertOptionalCallExpression
**Return:** `asserts this is NodePath<t.OptionalCallExpression>`

### assertOptionalIndexedAccessType
**Return:** `asserts this is NodePath<t.OptionalIndexedAccessType>`

### assertOptionalMemberExpression
**Return:** `asserts this is NodePath<t.OptionalMemberExpression>`

### assertParenthesizedExpression
**Return:** `asserts this is NodePath<t.ParenthesizedExpression>`

### assertPattern
**Return:** `asserts this is NodePath<t.Pattern>`

### assertPatternLike
**Return:** `asserts this is NodePath<t.PatternLike>`

### assertPipelineBareFunction
**Return:** `asserts this is NodePath<t.PipelineBareFunction>`

### assertPipelinePrimaryTopicReference
**Return:** `asserts this is NodePath<t.PipelinePrimaryTopicReference>`

### assertPipelineTopicExpression
**Return:** `asserts this is NodePath<t.PipelineTopicExpression>`

### assertPlaceholder
**Return:** `asserts this is NodePath<t.Placeholder>`

### assertPrivate
**Return:** `asserts this is NodePath<t.Private>`

### assertPrivateName
**Return:** `asserts this is NodePath<t.PrivateName>`

### assertProgram
**Return:** `asserts this is NodePath<t.Program>`

### assertProperty
**Return:** `asserts this is NodePath<t.Property>`

### assertPureish
**Return:** `asserts this is NodePath<t.Pureish>`

### assertQualifiedTypeIdentifier
**Return:** `asserts this is NodePath<t.QualifiedTypeIdentifier>`

### assertRecordExpression
**Return:** `asserts this is NodePath<t.RecordExpression>`

### assertRegExpLiteral
**Return:** `asserts this is NodePath<t.RegExpLiteral>`

### assertRegexLiteral
**Return:** `asserts this is NodePath<t.RegexLiteral>`

### assertRestElement
**Return:** `asserts this is NodePath<t.RestElement>`

### assertRestProperty
**Return:** `asserts this is NodePath<t.RestProperty>`

### assertReturnStatement
**Return:** `asserts this is NodePath<t.ReturnStatement>`

### assertScopable
**Return:** `asserts this is NodePath<t.Scopable>`

### assertSequenceExpression
**Return:** `asserts this is NodePath<t.SequenceExpression>`

### assertSpreadElement
**Return:** `asserts this is NodePath<t.SpreadElement>`

### assertSpreadProperty
**Return:** `asserts this is NodePath<t.SpreadProperty>`

### assertStandardized
**Return:** `asserts this is NodePath<t.Standardized>`

### assertStatement
**Return:** `asserts this is NodePath<t.Statement>`

### assertStaticBlock
**Return:** `asserts this is NodePath<t.StaticBlock>`

### assertStringLiteral
**Return:** `asserts this is NodePath<t.StringLiteral>`

### assertStringLiteralTypeAnnotation
**Return:** `asserts this is NodePath<t.StringLiteralTypeAnnotation>`

### assertStringTypeAnnotation
**Return:** `asserts this is NodePath<t.StringTypeAnnotation>`

### assertSuper
**Return:** `asserts this is NodePath<t.Super>`

### assertSwitchCase
**Return:** `asserts this is NodePath<t.SwitchCase>`

### assertSwitchStatement
**Return:** `asserts this is NodePath<t.SwitchStatement>`

### assertSymbolTypeAnnotation
**Return:** `asserts this is NodePath<t.SymbolTypeAnnotation>`

### assertTSAnyKeyword
**Return:** `asserts this is NodePath<t.TSAnyKeyword>`

### assertTSArrayType
**Return:** `asserts this is NodePath<t.TSArrayType>`

### assertTSAsExpression
**Return:** `asserts this is NodePath<t.TSAsExpression>`

### assertTSBaseType
**Return:** `asserts this is NodePath<t.TSBaseType>`

### assertTSBigIntKeyword
**Return:** `asserts this is NodePath<t.TSBigIntKeyword>`

### assertTSBooleanKeyword
**Return:** `asserts this is NodePath<t.TSBooleanKeyword>`

### assertTSCallSignatureDeclaration
**Return:** `asserts this is NodePath<t.TSCallSignatureDeclaration>`

### assertTSConditionalType
**Return:** `asserts this is NodePath<t.TSConditionalType>`

### assertTSConstructSignatureDeclaration
**Return:** `asserts this is NodePath<t.TSConstructSignatureDeclaration>`

### assertTSConstructorType
**Return:** `asserts this is NodePath<t.TSConstructorType>`

### assertTSDeclareFunction
**Return:** `asserts this is NodePath<t.TSDeclareFunction>`

### assertTSDeclareMethod
**Return:** `asserts this is NodePath<t.TSDeclareMethod>`

### assertTSEntityName
**Return:** `asserts this is NodePath<t.TSEntityName>`

### assertTSEnumBody
**Return:** `asserts this is NodePath<t.TSEnumBody>`

### assertTSEnumDeclaration
**Return:** `asserts this is NodePath<t.TSEnumDeclaration>`

### assertTSEnumMember
**Return:** `asserts this is NodePath<t.TSEnumMember>`

### assertTSExportAssignment
**Return:** `asserts this is NodePath<t.TSExportAssignment>`

### assertTSExpressionWithTypeArguments
**Return:** `asserts this is NodePath<t.TSExpressionWithTypeArguments>`

### assertTSExternalModuleReference
**Return:** `asserts this is NodePath<t.TSExternalModuleReference>`

### assertTSFunctionType
**Return:** `asserts this is NodePath<t.TSFunctionType>`

### assertTSImportEqualsDeclaration
**Return:** `asserts this is NodePath<t.TSImportEqualsDeclaration>`

### assertTSImportType
**Return:** `asserts this is NodePath<t.TSImportType>`

### assertTSIndexSignature
**Return:** `asserts this is NodePath<t.TSIndexSignature>`

### assertTSIndexedAccessType
**Return:** `asserts this is NodePath<t.TSIndexedAccessType>`

### assertTSInferType
**Return:** `asserts this is NodePath<t.TSInferType>`

### assertTSInstantiationExpression
**Return:** `asserts this is NodePath<t.TSInstantiationExpression>`

### assertTSInterfaceBody
**Return:** `asserts this is NodePath<t.TSInterfaceBody>`

### assertTSInterfaceDeclaration
**Return:** `asserts this is NodePath<t.TSInterfaceDeclaration>`

### assertTSIntersectionType
**Return:** `asserts this is NodePath<t.TSIntersectionType>`

### assertTSIntrinsicKeyword
**Return:** `asserts this is NodePath<t.TSIntrinsicKeyword>`

### assertTSLiteralType
**Return:** `asserts this is NodePath<t.TSLiteralType>`

### assertTSMappedType
**Return:** `asserts this is NodePath<t.TSMappedType>`

### assertTSMethodSignature
**Return:** `asserts this is NodePath<t.TSMethodSignature>`

### assertTSModuleBlock
**Return:** `asserts this is NodePath<t.TSModuleBlock>`

### assertTSModuleDeclaration
**Return:** `asserts this is NodePath<t.TSModuleDeclaration>`

### assertTSNamedTupleMember
**Return:** `asserts this is NodePath<t.TSNamedTupleMember>`

### assertTSNamespaceExportDeclaration
**Return:** `asserts this is NodePath<t.TSNamespaceExportDeclaration>`

### assertTSNeverKeyword
**Return:** `asserts this is NodePath<t.TSNeverKeyword>`

### assertTSNonNullExpression
**Return:** `asserts this is NodePath<t.TSNonNullExpression>`

### assertTSNullKeyword
**Return:** `asserts this is NodePath<t.TSNullKeyword>`

### assertTSNumberKeyword
**Return:** `asserts this is NodePath<t.TSNumberKeyword>`

### assertTSObjectKeyword
**Return:** `asserts this is NodePath<t.TSObjectKeyword>`

### assertTSOptionalType
**Return:** `asserts this is NodePath<t.TSOptionalType>`

### assertTSParameterProperty
**Return:** `asserts this is NodePath<t.TSParameterProperty>`

### assertTSParenthesizedType
**Return:** `asserts this is NodePath<t.TSParenthesizedType>`

### assertTSPropertySignature
**Return:** `asserts this is NodePath<t.TSPropertySignature>`

### assertTSQualifiedName
**Return:** `asserts this is NodePath<t.TSQualifiedName>`

### assertTSRestType
**Return:** `asserts this is NodePath<t.TSRestType>`

### assertTSSatisfiesExpression
**Return:** `asserts this is NodePath<t.TSSatisfiesExpression>`

### assertTSStringKeyword
**Return:** `asserts this is NodePath<t.TSStringKeyword>`

### assertTSSymbolKeyword
**Return:** `asserts this is NodePath<t.TSSymbolKeyword>`

### assertTSTemplateLiteralType
**Return:** `asserts this is NodePath<t.TSTemplateLiteralType>`

### assertTSThisType
**Return:** `asserts this is NodePath<t.TSThisType>`

### assertTSTupleType
**Return:** `asserts this is NodePath<t.TSTupleType>`

### assertTSType
**Return:** `asserts this is NodePath<t.TSType>`

### assertTSTypeAliasDeclaration
**Return:** `asserts this is NodePath<t.TSTypeAliasDeclaration>`

### assertTSTypeAnnotation
**Return:** `asserts this is NodePath<t.TSTypeAnnotation>`

### assertTSTypeAssertion
**Return:** `asserts this is NodePath<t.TSTypeAssertion>`

### assertTSTypeElement
**Return:** `asserts this is NodePath<t.TSTypeElement>`

### assertTSTypeLiteral
**Return:** `asserts this is NodePath<t.TSTypeLiteral>`

### assertTSTypeOperator
**Return:** `asserts this is NodePath<t.TSTypeOperator>`

### assertTSTypeParameter
**Return:** `asserts this is NodePath<t.TSTypeParameter>`

### assertTSTypeParameterDeclaration
**Return:** `asserts this is NodePath<t.TSTypeParameterDeclaration>`

### assertTSTypeParameterInstantiation
**Return:** `asserts this is NodePath<t.TSTypeParameterInstantiation>`

### assertTSTypePredicate
**Return:** `asserts this is NodePath<t.TSTypePredicate>`

### assertTSTypeQuery
**Return:** `asserts this is NodePath<t.TSTypeQuery>`

### assertTSTypeReference
**Return:** `asserts this is NodePath<t.TSTypeReference>`

### assertTSUndefinedKeyword
**Return:** `asserts this is NodePath<t.TSUndefinedKeyword>`

### assertTSUnionType
**Return:** `asserts this is NodePath<t.TSUnionType>`

### assertTSUnknownKeyword
**Return:** `asserts this is NodePath<t.TSUnknownKeyword>`

### assertTSVoidKeyword
**Return:** `asserts this is NodePath<t.TSVoidKeyword>`

### assertTaggedTemplateExpression
**Return:** `asserts this is NodePath<t.TaggedTemplateExpression>`

### assertTemplateElement
**Return:** `asserts this is NodePath<t.TemplateElement>`

### assertTemplateLiteral
**Return:** `asserts this is NodePath<t.TemplateLiteral>`

### assertTerminatorless
**Return:** `asserts this is NodePath<t.Terminatorless>`

### assertThisExpression
**Return:** `asserts this is NodePath<t.ThisExpression>`

### assertThisTypeAnnotation
**Return:** `asserts this is NodePath<t.ThisTypeAnnotation>`

### assertThrowStatement
**Return:** `asserts this is NodePath<t.ThrowStatement>`

### assertTopicReference
**Return:** `asserts this is NodePath<t.TopicReference>`

### assertTryStatement
**Return:** `asserts this is NodePath<t.TryStatement>`

### assertTupleExpression
**Return:** `asserts this is NodePath<t.TupleExpression>`

### assertTupleTypeAnnotation
**Return:** `asserts this is NodePath<t.TupleTypeAnnotation>`

### assertTypeAlias
**Return:** `asserts this is NodePath<t.TypeAlias>`

### assertTypeAnnotation
**Return:** `asserts this is NodePath<t.TypeAnnotation>`

### assertTypeCastExpression
**Return:** `asserts this is NodePath<t.TypeCastExpression>`

### assertTypeParameter
**Return:** `asserts this is NodePath<t.TypeParameter>`

### assertTypeParameterDeclaration
**Return:** `asserts this is NodePath<t.TypeParameterDeclaration>`

### assertTypeParameterInstantiation
**Return:** `asserts this is NodePath<t.TypeParameterInstantiation>`

### assertTypeScript
**Return:** `asserts this is NodePath<t.TypeScript>`

### assertTypeofTypeAnnotation
**Return:** `asserts this is NodePath<t.TypeofTypeAnnotation>`

### assertUnaryExpression
**Return:** `asserts this is NodePath<t.UnaryExpression>`

### assertUnaryLike
**Return:** `asserts this is NodePath<t.UnaryLike>`

### assertUnionTypeAnnotation
**Return:** `asserts this is NodePath<t.UnionTypeAnnotation>`

### assertUpdateExpression
**Return:** `asserts this is NodePath<t.UpdateExpression>`

### assertUserWhitespacable
**Return:** `asserts this is NodePath<t.UserWhitespacable>`

### assertV8IntrinsicIdentifier
**Return:** `asserts this is NodePath<t.V8IntrinsicIdentifier>`

### assertVariableDeclaration
**Return:** `asserts this is NodePath<t.VariableDeclaration>`

### assertVariableDeclarator
**Return:** `asserts this is NodePath<t.VariableDeclarator>`

### assertVariance
**Return:** `asserts this is NodePath<t.Variance>`

### assertVoidPattern
**Return:** `asserts this is NodePath<t.VoidPattern>`

### assertVoidTypeAnnotation
**Return:** `asserts this is NodePath<t.VoidTypeAnnotation>`

### assertWhile
**Return:** `asserts this is NodePath<t.While>`

### assertWhileStatement
**Return:** `asserts this is NodePath<t.WhileStatement>`

### assertWithStatement
**Return:** `asserts this is NodePath<t.WithStatement>`

### assertYieldExpression
**Return:** `asserts this is NodePath<t.YieldExpression>`
