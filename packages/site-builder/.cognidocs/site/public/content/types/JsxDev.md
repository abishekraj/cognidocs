# JsxDev

Create a development element.

## Definition
```typescript
(
  // `any` because runtimes often have complex framework-specific types here.
  // type-coverage:ignore-next-line
  type: any,
  props: Props,
  key: string | undefined,
  isStaticChildren: boolean,
  source: Source,
  self: undefined
) => JsxElement
```