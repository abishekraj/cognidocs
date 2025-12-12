# identifyShadowedGlobals

Traverse the given tokens and modify them if necessary to indicate that some names shadow global variables.

**Return Type:** `void`

## Parameters

| Name          | Type             | Optional | Description |
| :------------ | :--------------- | :------- | :---------- |
| `tokens`      | `TokenProcessor` | No       | -           |
| `scopes`      | `Array<Scope>`   | No       | -           |
| `globalNames` | `Set<string>`    | No       | -           |
