# findType2Conflicts

**Return Type:** `{
    [nodeId: string]: {
        [nodeId: string]: true;
        [nodeId: number]: true;
    };
    [nodeId: number]: {
        [nodeId: string]: true;
        [nodeId: number]: true;
    };
}`

## Parameters

| Name       | Type  | Optional | Description |
| :--------- | :---- | :------- | :---------- |
| `g`        | `any` | No       | -           |
| `layering` | `any` | No       | -           |
