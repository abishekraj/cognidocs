# hasShadowedGlobals

We can do a fast up-front check to see if there are any declarations to global names. If not, then there's no point in computing scope assignments.

**Return Type:** `boolean`

## Parameters

| Name          | Type             | Optional | Description |
| :------------ | :--------------- | :------- | :---------- |
| `tokens`      | `TokenProcessor` | No       | -           |
| `globalNames` | `Set<string>`    | No       | -           |
