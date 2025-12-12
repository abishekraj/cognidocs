# D3ZoomEvent

A D3 Zoom Event The first generic refers to the type of reference element to which the zoom behavior is attached. The second generic refers to the type of the datum of the reference element.

## Properties

| Name          | Type                                   | Optional | Description |
| :------------ | :------------------------------------- | :------- | :---------- |
| `target`      | `ZoomBehavior<ZoomRefElement, Datum>`  | No       | -           |
| `type`        | `"start" \| "zoom" \| "end" \| string` | No       | -           |
| `transform`   | `ZoomTransform`                        | No       | -           |
| `sourceEvent` | `any`                                  | No       | -           |
