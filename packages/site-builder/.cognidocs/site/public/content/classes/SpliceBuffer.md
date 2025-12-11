# SpliceBuffer

Some of the internal operations of micromark do lots of editing operations on very large arrays. This runs into problems with two properties of most circa-2020 JavaScript interpreters: - Array-length modifications at the high end of an array (push/pop) are expected to be common and are implemented in (amortized) time proportional to the number of elements added or removed, whereas other operations (shift/unshift and splice) are much less efficient. - Function arguments are passed on the stack, so adding tens of thousands of elements to an array with `arr.push(...newElements)` will frequently cause stack overflows. (see <https://stackoverflow.com/questions/22123769/rangeerror-maximum-call-stack-size-exceeded-why>) SpliceBuffers are an implementation of gap buffers, which are a generalization of the "queue made of two stacks" idea. The splice buffer maintains a cursor, and moving the cursor has cost proportional to the distance the cursor moves, but inserting, deleting, or splicing in new information at the cursor is as efficient as the push/pop operation. This allows for an efficient sequence of splices (or pushes, pops, shifts, or unshifts) as long such edits happen at the same part of the array or generally sweep through the array from the beginning to the end. The interface for splice buffers also supports large numbers of inputs by passing a single array argument rather passing multiple arguments on the function call stack.

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `left` | `Array<T>` | - |
| `right` | `Array<T>` | - |

## Methods
### get

Array access; does not move the cursor.

**Return:** `T`

### shift

Remove and return `list[0]`; moves the cursor to `0`.

**Return:** `T | undefined`

### slice

Slice the buffer to get an array; does not move the cursor.

**Return:** `Array<T>`

### splice

Mimics the behavior of Array.prototype.splice() except for the change of interface necessary to avoid segfaults when patching in very large arrays. This operation moves cursor is moved to `start` and results in the cursor placed after any inserted items.

**Return:** `Array<T>`

### pop

Remove and return the highest-numbered item in the array, so `list[list.length - 1]`; Moves the cursor to `length`.

**Return:** `T | undefined`

### push

Inserts a single item to the high-numbered side of the array; moves the cursor to `length`.

**Return:** `undefined`

### pushMany

Inserts many items to the high-numbered side of the array. Moves the cursor to `length`.

**Return:** `undefined`

### unshift

Inserts a single item to the low-numbered side of the array; Moves the cursor to `0`.

**Return:** `undefined`

### unshiftMany

Inserts many items to the low-numbered side of the array; moves the cursor to `0`.

**Return:** `undefined`

### setCursor

Move the cursor to a specific position in the array. Requires time proportional to the distance moved. If `n < 0`, the cursor will end up at the beginning. If `n > length`, the cursor will end up at the end.

**Return:** `undefined`
