# MiddlewareData
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `arrow` | `Partial<Coords> & {
        centerOffset: number;
        alignmentOffset?: number;
    }` | Yes | - |
| `autoPlacement` | `{
        index?: number;
        overflows: Array<{
            placement: Placement;
            overflows: Array<number>;
        }>;
    }` | Yes | - |
| `flip` | `{
        index?: number;
        overflows: Array<{
            placement: Placement;
            overflows: Array<number>;
        }>;
    }` | Yes | - |
| `hide` | `{
        referenceHidden?: boolean;
        escaped?: boolean;
        referenceHiddenOffsets?: SideObject;
        escapedOffsets?: SideObject;
    }` | Yes | - |
| `offset` | `Coords & {
        placement: Placement;
    }` | Yes | - |
| `shift` | `Coords & {
        enabled: {
            [key in Axis]: boolean;
        };
    }` | Yes | - |