# createConfigItem

Allows build tooling to create and cache config items up front. If this function is called multiple times for a given plugin, Babel will call the plugin's function itself multiple times. If you have a clear set of expected plugins and presets to inject, pre-constructing the config items would be recommended.

**Return Type:** `ConfigItem`

## Parameters

| Name      | Type                                                                                                  | Optional | Description |
| :-------- | :---------------------------------------------------------------------------------------------------- | :------- | :---------- |
| `value`   | `PluginTarget \| [PluginTarget, PluginOptions] \| [PluginTarget, PluginOptions, string \| undefined]` | No       | -           |
| `options` | `CreateConfigItemOptions`                                                                             | Yes      | -           |
