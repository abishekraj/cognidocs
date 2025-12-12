# TextDocumentFilter

A document filter denotes a document by different properties like the {@link TextDocument.languageId language}, the {@link Uri.scheme scheme} of its resource, or a glob-pattern that is applied to the {@link TextDocument.fileName path}. Glob patterns can have the following syntax: - `*` to match one or more characters in a path segment - `?` to match on one character in a path segment - `**` to match any number of path segments, including none - `{}` to group sub patterns into an OR expression. (e.g. `**​/*.{ts,js}` matches all TypeScript and JavaScript files) - `[]` to declare a range of characters to match in a path segment (e.g., `example.[0-9]` to match on `example.0`, `example.1`, …) - `[!...]` to negate a range of characters to match in a path segment (e.g., `example.[!0-9]` to match on `example.a`, `example.b`, but not `example.0`)

## Definition

```typescript
{
    /** A language id, like `typescript`. */
    language: string;
    /** A Uri {@link Uri.scheme scheme}, like `file` or `untitled`. */
    scheme?: string;
    /** A glob pattern, like **​/*.{ts,js}. See TextDocumentFilter for examples. */
    pattern?: string;
} | {
    /** A language id, like `typescript`. */
    language?: string;
    /** A Uri {@link Uri.scheme scheme}, like `file` or `untitled`. */
    scheme: string;
    /** A glob pattern, like **​/*.{ts,js}. See TextDocumentFilter for examples. */
    pattern?: string;
} | {
    /** A language id, like `typescript`. */
    language?: string;
    /** A Uri {@link Uri.scheme scheme}, like `file` or `untitled`. */
    scheme?: string;
    /** A glob pattern, like **​/*.{ts,js}. See TextDocumentFilter for examples. */
    pattern: string;
}
```
