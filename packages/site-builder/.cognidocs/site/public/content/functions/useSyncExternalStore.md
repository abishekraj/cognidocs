# useSyncExternalStore

**Return Type:** `Snapshot`

## Parameters

| Name                | Type                                        | Optional | Description |
| :------------------ | :------------------------------------------ | :------- | :---------- |
| `subscribe`         | `(onStoreChange: () => void) => () => void` | No       | -           |
| `getSnapshot`       | `() => Snapshot`                            | No       | -           |
| `getServerSnapshot` | `() => Snapshot`                            | Yes      | -           |
