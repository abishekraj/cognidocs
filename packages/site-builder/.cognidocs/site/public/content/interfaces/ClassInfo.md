# ClassInfo

Information about a class returned to inform the implementation of class fields and constructor initializers.

## Properties

| Name                               | Type                | Optional | Description |
| :--------------------------------- | :------------------ | :------- | :---------- |
| `headerInfo`                       | `ClassHeaderInfo`   | No       | -           |
| `constructorInitializerStatements` | `Array<string>`     | No       | -           |
| `instanceInitializerNames`         | `Array<string>`     | No       | -           |
| `staticInitializerNames`           | `Array<string>`     | No       | -           |
| `constructorInsertPos`             | `number \| null`    | No       | -           |
| `fields`                           | `Array<FieldInfo>`  | No       | -           |
| `rangesToRemove`                   | `Array<TokenRange>` | No       | -           |
