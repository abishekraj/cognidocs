# RelativePattern

A relative pattern is a helper to construct glob patterns that are matched relatively to a base URI. The common value for a `baseUri` is a workspace folder root, but it can be another absolute URI as well.

## Properties

| Name      | Type                     | Optional | Description |
| :-------- | :----------------------- | :------- | :---------- |
| `baseUri` | `WorkspaceFolder \| URI` | No       | -           |
| `pattern` | `Pattern`                | No       | -           |
