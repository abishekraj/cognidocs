# image

Fetches the image at the specified input URL and returns a promise of an HTML image element. If init is specified, sets any additional properties on the image before loading.

**Return Type:** `Promise<HTMLImageElement>`

## Parameters

| Name   | Type                        | Optional | Description                                    |
| :----- | :-------------------------- | :------- | :--------------------------------------------- |
| `url`  | `string`                    | No       | A valid URL string.                            |
| `init` | `Partial<HTMLImageElement>` | Yes      | An optional object of image properties to set. |
