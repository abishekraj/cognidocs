# SizeOptions

## Definition

```typescript
Prettify<
  Omit<SizeOptions_2, 'apply' | 'boundary'> &
    DetectOverflowOptions & {
      /**
       * Function that is called to perform style mutations to the floating element
       * to change its size.
       * @default undefined
       */
      apply?(
        args: MiddlewareState & {
          availableWidth: number;
          availableHeight: number;
        }
      ): Promisable<void>;
    }
>;
```
