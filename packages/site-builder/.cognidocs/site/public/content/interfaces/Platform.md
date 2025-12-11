# Platform
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `getElementRects` | `(args: {
        reference: ReferenceElement;
        floating: FloatingElement;
        strategy: Strategy;
    }) => Promisable<ElementRects>` | No | - |
| `getClippingRect` | `(args: {
        element: any;
        boundary: Boundary;
        rootBoundary: RootBoundary;
        strategy: Strategy;
    }) => Promisable<Rect>` | No | - |
| `getDimensions` | `(element: any) => Promisable<Dimensions>` | No | - |
| `convertOffsetParentRelativeRectToViewportRelativeRect` | `(args: {
        elements?: Elements;
        rect: Rect;
        offsetParent: any;
        strategy: Strategy;
    }) => Promisable<Rect>` | Yes | - |
| `getOffsetParent` | `(element: any) => Promisable<any>` | Yes | - |
| `isElement` | `(value: any) => Promisable<boolean>` | Yes | - |
| `getDocumentElement` | `(element: any) => Promisable<any>` | Yes | - |
| `getClientRects` | `(element: any) => Promisable<Array<ClientRectObject>>` | Yes | - |
| `isRTL` | `(element: any) => Promisable<boolean>` | Yes | - |
| `getScale` | `(element: any) => Promisable<{
        x: number;
        y: number;
    }>` | Yes | - |