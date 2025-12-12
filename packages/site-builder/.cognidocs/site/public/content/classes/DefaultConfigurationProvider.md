# DefaultConfigurationProvider

## Properties

| Name                                  | Type                                  | Description |
| :------------------------------------ | :------------------------------------ | :---------- |
| `serviceRegistry`                     | `ServiceRegistry`                     | -           |
| `_ready`                              | `any`                                 | -           |
| `settings`                            | `Record<string, Record<string, any>>` | -           |
| `workspaceConfig`                     | `any`                                 | -           |
| `onConfigurationSectionUpdateEmitter` | `any`                                 | -           |

## Methods

### initialize

**Return:** `void`

### initialized

**Return:** `Promise<void>`

### updateConfiguration

**Return:** `void`

### updateSectionConfiguration

**Return:** `void`

### getConfiguration

**Return:** `Promise<any>`

### toSectionName

**Return:** `string`
