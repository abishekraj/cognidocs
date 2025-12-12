# tsParseImportSpecifier

Parse a TS import specifier, which may be prefixed with "type" and may be of the form `foo as bar`. The number of identifier-like tokens we see happens to be enough to uniquely identify the form, so simply count the number of identifiers rather than matching the words `type` or `as`. This is particularly important because `type` and `as` could each actually be plain identifiers rather than keywords.

**Return Type:** `void`
