# TypeHierarchyFeatureShape

Shape of the type hierarchy feature

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `typeHierarchy` | `{
        onPrepare(handler: ServerRequestHandler<TypeHierarchyPrepareParams, TypeHierarchyItem[] \| null, never, void>): Disposable;
        onSupertypes(handler: ServerRequestHandler<TypeHierarchySupertypesParams, TypeHierarchyItem[] \| null, TypeHierarchyItem[], void>): Disposable;
        onSubtypes(handler: ServerRequestHandler<TypeHierarchySubtypesParams, TypeHierarchyItem[] \| null, TypeHierarchyItem[], void>): Disposable;
    }` | No | - |