# TokenizeContext

A context object that helps w/ tokenizing markdown constructs.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `_gfmTableDynamicInterruptHack` | `boolean` | Yes | - |
| `_gfmTasklistFirstContentOfListItem` | `boolean \| undefined` | Yes | - |
| `_contentTypeTextTrailing` | `boolean \| undefined` | Yes | - |
| `code` | `Code` | No | - |
| `containerState` | `ContainerState \| undefined` | Yes | - |
| `currentConstruct` | `Construct \| undefined` | Yes | - |
| `events` | `Array<Event>` | No | - |
| `interrupt` | `boolean \| undefined` | Yes | - |
| `parser` | `ParseContext` | No | - |
| `previous` | `Code` | No | - |