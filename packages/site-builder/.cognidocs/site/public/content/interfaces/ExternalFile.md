# ExternalFile

Represents a file in external project. External project is project whose set of files, compilation options and open\close state is maintained by the client (i.e. if all this data come from .csproj file in Visual Studio). External project will exist even if all files in it are closed and should be closed explicitly. If external project includes one or more tsconfig.json/jsconfig.json files then tsserver will create configured project for every config file but will maintain a link that these projects were created as a result of opening external project so they should be removed once external project is closed.

## Properties

| Name              | Type                           | Optional | Description |
| :---------------- | :----------------------------- | :------- | :---------- |
| `fileName`        | `string`                       | No       | -           |
| `scriptKind`      | `ScriptKindName \| ScriptKind` | Yes      | -           |
| `hasMixedContent` | `boolean`                      | Yes      | -           |
| `content`         | `string`                       | Yes      | -           |
