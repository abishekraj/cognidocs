# IntrinsicElements

Define the prop types for known elements. For `hastscript` this defines any string may be used in combination with `hast` `Properties`. This **must** be an interface.

## Definition
```typescript
Record<
  string,
  | Properties
  | {
      /**
       * The prop that matches `ElementChildrenAttribute` key defines the
       * type of JSX children, defines the children type.
       */
      [children]?: Child
    }
>
```