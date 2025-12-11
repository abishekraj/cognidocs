# Checker

Checker implements validation of objects, and also includes accessors to validate method calls. Checkers should be created using `createCheckers()`.

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `suite` | `any` | - |
| `ttype` | `any` | - |
| `_path` | `any` | - |
| `props` | `any` | - |
| `checkerPlain` | `any` | - |
| `checkerStrict` | `any` | - |
| `_doCheck` | `any` | - |
| `_doValidate` | `any` | - |
| `_getMethod` | `any` | - |

## Methods
### setReportedPath

Set the path to report in errors, instead of the default "value". (E.g. if the Checker is for a "person" interface, set path to "person" to report e.g. "person.name is not a string".)

**Return:** `void`

### check

Check that the given value satisfies this checker's type, or throw Error.

**Return:** `void`

### test

A fast check for whether or not the given value satisfies this Checker's type. This returns true or false, does not produce an error message, and is fast both on success and on failure.

**Return:** `boolean`

### validate

Returns an error object describing the errors if the given value does not satisfy this Checker's type, or null if it does.

**Return:** `IErrorDetail | null`

### strictCheck

Check that the given value satisfies this checker's type strictly. This checks that objects and tuples have no extra members. Note that this prevents backward compatibility, so usually a plain check() is more appropriate.

**Return:** `void`

### strictTest

A fast strict check for whether or not the given value satisfies this Checker's type. Returns true or false, does not produce an error message, and is fast both on success and on failure.

**Return:** `boolean`

### strictValidate

Returns an error object describing the errors if the given value does not satisfy this Checker's type strictly, or null if it does.

**Return:** `IErrorDetail | null`

### getProp

If this checker is for an interface, returns a Checker for the type required for the given property of this interface.

**Return:** `Checker`

### methodArgs

If this checker is for an interface, returns a Checker for the argument-list required to call the given method of this interface. E.g. if this Checker is for the interface: interface Foo { find(s: string, pos?: number): number; } Then methodArgs("find").check(...) will succeed for ["foo"] and ["foo", 3], but not for [17].

**Return:** `Checker`

### methodResult

If this checker is for an interface, returns a Checker for the return value of the given method of this interface.

**Return:** `Checker`

### getArgs

If this checker is for a function, returns a Checker for its argument-list.

**Return:** `Checker`

### getResult

If this checker is for a function, returns a Checker for its result.

**Return:** `Checker`

### getType

Return the type for which this is a checker.

**Return:** `TType`
