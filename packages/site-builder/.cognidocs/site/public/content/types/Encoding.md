# Encoding

Encodings supported by `TextEncoder`. Arbitrary encodings can be supported depending on how the engine is built. So any string *could* be valid. But you probably want `utf-8`.

## Definition
```typescript
| 'utf-8' // Always supported in Node.
  | 'utf-16le' // Always supported in Node.
  | 'utf-16be' // Not supported when ICU is disabled.
  // Everything else (depends on browser, or full ICU data).
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {})
```