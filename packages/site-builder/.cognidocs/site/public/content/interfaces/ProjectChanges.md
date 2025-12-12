# ProjectChanges

Represents a set of changes that happen in project

## Properties

| Name               | Type                                                 | Optional | Description |
| :----------------- | :--------------------------------------------------- | :------- | :---------- |
| `added`            | `string[] \| FileWithProjectReferenceRedirectInfo[]` | No       | -           |
| `removed`          | `string[] \| FileWithProjectReferenceRedirectInfo[]` | No       | -           |
| `updated`          | `string[] \| FileWithProjectReferenceRedirectInfo[]` | No       | -           |
| `updatedRedirects` | `FileWithProjectReferenceRedirectInfo[]`             | Yes      | -           |
