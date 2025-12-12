# StreamImpl

## Properties

| Name      | Type                              | Description |
| :-------- | :-------------------------------- | :---------- |
| `startFn` | `() => S`                         | -           |
| `nextFn`  | `(state: S) => IteratorResult<T>` | -           |

## Methods

### iterator

**Return:** `IterableIterator<T>`

### [Symbol.iterator]

**Return:** `Iterator<T>`

### isEmpty

**Return:** `boolean`

### count

**Return:** `number`

### toArray

**Return:** `T[]`

### toSet

**Return:** `Set<T>`

### toMap

**Return:** `Map<K, V>`

### toString

**Return:** `string`

### concat

**Return:** `Stream<T | T2>`

### join

**Return:** `string`

### indexOf

**Return:** `number`

### every

**Return:** `this is Stream<U> & this`

### every

**Return:** `boolean`

### every

**Return:** `boolean`

### some

**Return:** `boolean`

### forEach

**Return:** `void`

### map

**Return:** `Stream<U>`

### filter

**Return:** `Stream<U> & this`

### filter

**Return:** `Stream<T> & this`

### filter

**Return:** `Stream<T>`

### nonNullable

**Return:** `Stream<NonNullable<T>>`

### reduce

**Return:** `T | undefined`

### reduce

**Return:** `U`

### reduce

**Return:** `U | T | undefined`

### reduceRight

**Return:** `T | undefined`

### reduceRight

**Return:** `U`

### reduceRight

**Return:** `U | T | undefined`

### recursiveReduce

**Return:** `U | T | undefined`

### find

**Return:** `S | undefined`

### find

**Return:** `T | undefined`

### find

**Return:** `T | undefined`

### findIndex

**Return:** `number`

### includes

**Return:** `boolean`

### flatMap

**Return:** `Stream<U>`

### flat

**Return:** `FlatStream<T, D>`

### head

**Return:** `T | undefined`

### tail

**Return:** `Stream<T>`

### limit

**Return:** `Stream<T>`

### distinct

**Return:** `Stream<T>`

### exclude

**Return:** `Stream<T>`
