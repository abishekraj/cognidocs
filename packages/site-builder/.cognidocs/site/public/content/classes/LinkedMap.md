# LinkedMap

## Properties

| Name                   | Type  | Description |
| :--------------------- | :---- | :---------- |
| `[Symbol.toStringTag]` | `any` | -           |
| `_map`                 | `any` | -           |
| `_head`                | `any` | -           |
| `_tail`                | `any` | -           |
| `_size`                | `any` | -           |
| `_state`               | `any` | -           |
| `addItemFirst`         | `any` | -           |
| `addItemLast`          | `any` | -           |
| `removeItem`           | `any` | -           |
| `touch`                | `any` | -           |

## Methods

### clear

**Return:** `void`

### isEmpty

**Return:** `boolean`

### has

**Return:** `boolean`

### get

**Return:** `V | undefined`

### set

**Return:** `this`

### delete

**Return:** `boolean`

### remove

**Return:** `V | undefined`

### shift

**Return:** `V | undefined`

### forEach

**Return:** `void`

### keys

**Return:** `IterableIterator<K>`

### values

**Return:** `IterableIterator<V>`

### entries

**Return:** `IterableIterator<[K, V]>`

### [Symbol.iterator]

**Return:** `IterableIterator<[K, V]>`

### trimOld

**Return:** `void`

### toJSON

**Return:** `[K, V][]`

### fromJSON

**Return:** `void`
