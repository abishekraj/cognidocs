# CodeLens

A code lens represents a {@link Command command} that should be shown along with source text, like the number of references, a way to run tests, etc. A code lens is _unresolved_ when no command is associated to it. For performance reasons the creation of a code lens and resolving should be done in two stages.

## Properties

| Name      | Type      | Optional | Description |
| :-------- | :-------- | :------- | :---------- |
| `range`   | `Range`   | No       | -           |
| `command` | `Command` | Yes      | -           |
| `data`    | `LSPAny`  | Yes      | -           |
