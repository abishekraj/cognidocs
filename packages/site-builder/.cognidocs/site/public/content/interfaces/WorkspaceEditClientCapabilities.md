# WorkspaceEditClientCapabilities
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `documentChanges` | `boolean` | Yes | - |
| `resourceOperations` | `ResourceOperationKind[]` | Yes | - |
| `failureHandling` | `FailureHandlingKind` | Yes | - |
| `normalizesLineEndings` | `boolean` | Yes | - |
| `changeAnnotationSupport` | `{
        /**
         * Whether the client groups edits with equal labels into tree nodes,
         * for instance all edits labelled with "Changes in Strings" would
         * be a tree node.
         */
        groupsOnLabel?: boolean;
    }` | Yes | - |