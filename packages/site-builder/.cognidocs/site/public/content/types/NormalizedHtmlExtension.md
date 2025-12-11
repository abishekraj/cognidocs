# NormalizedHtmlExtension

An HTML extension changes how markdown tokens are serialized.

## Definition
```typescript
{
  [Key in keyof HtmlExtension]-?: Exclude<HtmlExtension[Key], undefined>
}
```