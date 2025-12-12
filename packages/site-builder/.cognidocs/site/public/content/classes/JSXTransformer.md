# JSXTransformer

**Extends:** `Transformer`

## Properties

| Name                                | Type                         | Description |
| :---------------------------------- | :--------------------------- | :---------- |
| `rootTransformer`                   | `RootTransformer`            | -           |
| `tokens`                            | `TokenProcessor`             | -           |
| `importProcessor`                   | `CJSImportProcessor \| null` | -           |
| `nameManager`                       | `NameManager`                | -           |
| `options`                           | `Options`                    | -           |
| `jsxPragmaInfo`                     | `JSXPragmaInfo`              | -           |
| `jsxImportSource`                   | `string`                     | -           |
| `isAutomaticRuntime`                | `boolean`                    | -           |
| `lastLineNumber`                    | `number`                     | -           |
| `lastIndex`                         | `number`                     | -           |
| `filenameVarName`                   | `string \| null`             | -           |
| `esmAutomaticImportNameResolutions` | `{                           |

        [name: string]: string;
    }` | - |

| `cjsAutomaticModuleNameResolutions` | `{
        [path: string]: string;
    }` | - |

## Methods

### process

**Return:** `boolean`

### getPrefixCode

**Return:** `string`

### processJSXTag

**Return:** `void`

### getElementLocationCode

**Return:** `string`

### getLineNumberForIndex

Get the line number for this source position. This is calculated lazily and must be called in increasing order by index.

**Return:** `number`

### transformTagToJSXFunc

Convert the current JSX element to a call to jsx, jsxs, or jsxDEV. This is the primary transformation for the automatic transform. Example: <div a={1} key={2}>Hello{x}</div> becomes jsxs('div', {a: 1, children: ["Hello", x]}, 2)

**Return:** `void`

### transformTagToCreateElement

Convert the current JSX element to a createElement call. In the classic runtime, this is the only case. In the automatic runtime, this is called as a fallback in some situations. Example: <div a={1} key={2}>Hello{x}</div> becomes React.createElement('div', {a: 1, key: 2}, "Hello", x)

**Return:** `void`

### getJSXFuncInvocationCode

Get the code for the relevant function for this context: jsx, jsxs, or jsxDEV. The following open-paren is included as well. These functions are only used for the automatic runtime, so they are always auto-imported, but the auto-import will be either CJS or ESM based on the target module format.

**Return:** `string`

### getCreateElementInvocationCode

Return the code to use for the createElement function, e.g. `React.createElement`, including the following open-paren. This is the main function to use for the classic runtime. For the automatic runtime, this function is used as a fallback function to preserve behavior when there is a prop spread followed by an explicit key. In that automatic runtime case, the function should be automatically imported.

**Return:** `string`

### getFragmentCode

Return the code to use as the component when compiling a shorthand fragment, e.g. `React.Fragment`. This may be called from either the classic or automatic runtime, and the value should be auto-imported for the automatic runtime.

**Return:** `string`

### claimAutoImportedFuncInvocation

Return code that invokes the given function. When the imports transform is enabled, use the CJSImportTransformer strategy of using `.call(void 0, ...` to avoid passing a `this` value in a situation that would otherwise look like a method call.

**Return:** `string`

### claimAutoImportedName

**Return:** `string`

### processTagIntro

Process the first part of a tag, before any props.

**Return:** `void`

### processPropsObjectWithDevInfo

Starting at the beginning of the props, add the props argument to React.createElement, including the comma before it.

**Return:** `void`

### processProps

Transform the core part of the props, assuming that a { has already been inserted before us and that a } will be inserted after us. If extractKeyCode is true (i.e. when using any jsx... function), any prop named "key" has its code captured and returned rather than being emitted to the output code. This shifts line numbers, and emitting the code later will correct line numbers again. If no key is found or if extractKeyCode is false, this function returns null.

**Return:** `string | null`

### processPropName

**Return:** `void`

### processPropValue

**Return:** `void`

### processStringPropValue

**Return:** `void`

### processAutomaticChildrenAndEndProps

Starting in the middle of the props object literal, produce an additional prop for the children and close the object literal.

**Return:** `void`

### processChildren

Transform children into a comma-separated list, which will be either arguments to createElement or array elements of a children prop.

**Return:** `void`

### processChildTextElement

Turn a JSX text element into a string literal, or nothing at all if the JSX text resolves to the empty string. Returns true if a string literal is emitted, false otherwise.

**Return:** `boolean`

### getDevSource

**Return:** `string`

### getFilenameVarName

**Return:** `string`
