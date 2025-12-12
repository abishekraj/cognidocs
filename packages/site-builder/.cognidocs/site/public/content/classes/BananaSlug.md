# BananaSlug

Slugger.

## Properties

| Name          | Type                     | Description |
| :------------ | :----------------------- | :---------- |
| `occurrences` | `Record<string, number>` | -           |

## Methods

### slug

Generate a unique slug. Tracks previously generated slugs: repeated calls with the same value will result in different slugs. Use the `slug` function to get same slugs.

**Return:** `string`

### reset

Reset - Forget all previous slugs

**Return:** `void`
