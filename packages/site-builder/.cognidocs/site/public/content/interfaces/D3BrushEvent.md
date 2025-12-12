# D3BrushEvent

D3 brush event The generic refers to the type of the datum for the group element on which brush was defined.

## Properties

| Name          | Type                                        | Optional | Description |
| :------------ | :------------------------------------------ | :------- | :---------- |
| `target`      | `BrushBehavior<Datum>`                      | No       | -           |
| `type`        | `"start" \| "brush" \| "end" \| string`     | No       | -           |
| `selection`   | `BrushSelection \| null`                    | No       | -           |
| `sourceEvent` | `any`                                       | No       | -           |
| `mode`        | `"drag" \| "space" \| "handle" \| "center"` | No       | -           |
