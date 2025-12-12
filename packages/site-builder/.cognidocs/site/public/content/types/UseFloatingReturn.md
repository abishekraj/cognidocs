# UseFloatingReturn

## Definition

```typescript
Prettify<
  UseFloatingData & {
    /**
     * Update the position of the floating element, re-rendering the component
     * if required.
     */
    update: () => void;
    /**
     * Pre-configured positioning styles to apply to the floating element.
     */
    floatingStyles: React.CSSProperties;
    /**
     * Object containing the reference and floating refs and reactive setters.
     */
    refs: {
      /**
       * A React ref to the reference element.
       */
      reference: React.MutableRefObject<RT | null>;
      /**
       * A React ref to the floating element.
       */
      floating: React.MutableRefObject<HTMLElement | null>;
      /**
       * A callback to set the reference element (reactive).
       */
      setReference: (node: RT | null) => void;
      /**
       * A callback to set the floating element (reactive).
       */
      setFloating: (node: HTMLElement | null) => void;
    };
    /**
     * Object containing the reference and floating elements.
     */
    elements: {
      reference: RT | null;
      floating: HTMLElement | null;
    };
  }
>;
```
