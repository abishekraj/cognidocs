# IconifyInfo

Icon set information block.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `name` | `string` | No | - |
| `total` | `number` | Yes | - |
| `version` | `string` | Yes | - |
| `author` | `{
		// Author name.
		name: string;

		// Link to author's website or icon set website.
		url?: string;
	}` | No | - |
| `license` | `{
		// Human readable license.
		title: string;

		// SPDX license identifier.
		spdx?: string;

		// License URL.
		url?: string;
	}` | No | - |
| `samples` | `string[]` | Yes | - |
| `height` | `number \| number[]` | Yes | - |
| `displayHeight` | `number` | Yes | - |
| `category` | `string` | Yes | - |
| `tags` | `string[]` | Yes | - |
| `palette` | `boolean` | Yes | - |
| `hidden` | `boolean` | Yes | - |