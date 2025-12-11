# RuleProps
## Definition
```typescript
{
    /** Information used to generate byte-to-byte equal node string as it was in the origin input. */
    raws?: RuleRaws
  } & (
      | {
          /** Selector or selectors of the rule. */
          selector: string
          selectors?: never
        }
      | {
          selector?: never
          /** Selectors of the rule represented as an array of strings. */
          selectors: readonly string[]
        }
    ) & ContainerProps
```