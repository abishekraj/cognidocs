# FlowchartDiagramConfig

The object containing configurations specific for flowcharts This interface was referenced by `MermaidConfig`'s JSON-Schema via the `definition` "FlowchartDiagramConfig".

## Properties

| Name                  | Type     | Optional | Description |
| :-------------------- | :------- | :------- | :---------- |
| `titleTopMargin`      | `number` | Yes      | -           |
| `subGraphTitleMargin` | `{       |

        top?: number;
        bottom?: number;
    }` | Yes | - |

| `arrowMarkerAbsolute` | `boolean` | Yes | - |
| `diagramPadding` | `number` | Yes | - |
| `htmlLabels` | `boolean` | Yes | - |
| `nodeSpacing` | `number` | Yes | - |
| `rankSpacing` | `number` | Yes | - |
| `curve` | `'basis' \| 'bumpX' \| 'bumpY' \| 'cardinal' \| 'catmullRom' \| 'linear' \| 'monotoneX' \| 'monotoneY' \| 'natural' \| 'step' \| 'stepAfter' \| 'stepBefore'` | Yes | - |
| `padding` | `number` | Yes | - |
| `defaultRenderer` | `'dagre-d3' \| 'dagre-wrapper' \| 'elk'` | Yes | - |
| `wrappingWidth` | `number` | Yes | - |
| `inheritDir` | `boolean` | Yes | - |
