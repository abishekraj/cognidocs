# ExtractTagName

Extract tag name from a simple selector.

## Definition

```typescript
SimpleSelector extends "" ? DefaultTagName : SimpleSelector extends `${infer TagName}.${infer Rest}` ? ExtractTagName<TagName, DefaultTagName> : SimpleSelector extends `${infer TagName_1}#${infer Rest_1}` ? ExtractTagName<TagName_1, DefaultTagName> : SimpleSelector extends string ? SimpleSelector : DefaultTagName
```
