# PacketDB

## Properties

| Name                | Type                    | Description |
| :------------------ | :---------------------- | :---------- |
| `packet`            | `any`                   | -           |
| `setAccTitle`       | `(txt: string) => void` | -           |
| `getAccTitle`       | `() => string`          | -           |
| `setDiagramTitle`   | `(txt: string) => void` | -           |
| `getDiagramTitle`   | `() => string`          | -           |
| `getAccDescription` | `() => string`          | -           |
| `setAccDescription` | `(txt: string) => void` | -           |

## Methods

### getConfig

**Return:** `{
        rowHeight: number;
        bitWidth: number;
        bitsPerRow: number;
        showBits: boolean;
        paddingX: number;
        paddingY: number;
        useWidth: number;
        useMaxWidth: boolean;
    }`

### getPacket

**Return:** `PacketWord[]`

### pushWord

**Return:** `void`

### clear

**Return:** `void`
