# MixedInParser

This Type combines all the Parser traits. It is used in all traits in the "this type assertion" - https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#specifying-the-type-of-this-for-functions This enables strong Type Checks inside trait methods that invoke methods from other traits. This pattern is very similar to "self types" in Scala. - https://docs.scala-lang.org/tour/self-types.html

## Definition

```typescript
ParserConstructorImpel &
  ErrorHandler &
  LexerAdapter &
  LooksAhead &
  RecognizerApi &
  RecognizerEngine &
  Recoverable &
  TreeBuilder &
  ContentAssist &
  GastRecorder &
  PerformanceTracer;
```
