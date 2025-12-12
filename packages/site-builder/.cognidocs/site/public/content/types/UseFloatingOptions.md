# UseFloatingOptions

## Definition

```typescript
Prettify<
  Partial<ComputePositionConfig> & {
    /**
     * A callback invoked when both the reference and floating elements are
     * mounted, and cleaned up when either is unmounted. This is useful for
     * setting up event listeners (e.g. pass `autoUpdate`).
     */
    whileElementsMounted?: (reference: RT, floating: HTMLElement, update: () => void) => () => void;
    /**
     * Object containing the reference and floating elements.
     */
    elements?: {
      reference?: RT | null;
      floating?: HTMLElement | null;
    };
    /**
     * The `open` state of the floating element to synchronize with the
     * `isPositioned` value.
     * @default false
     */
    open?: boolean;
    /**
     * Whether to use `transform` for positioning instead of `top` and `left`
     * (layout) in the `floatingStyles` object.
     * @default true
     */
    transform?: boolean;
  }
>;
```
