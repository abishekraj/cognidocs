# TagToken

## Properties

| Name             | Type                                       | Optional | Description |
| :--------------- | :----------------------------------------- | :------- | :---------- |
| `type`           | `TokenType.START_TAG \| TokenType.END_TAG` | No       | -           |
| `tagName`        | `string`                                   | No       | -           |
| `tagID`          | `TAG_ID`                                   | No       | -           |
| `selfClosing`    | `boolean`                                  | No       | -           |
| `ackSelfClosing` | `boolean`                                  | No       | -           |
| `attrs`          | `Attribute[]`                              | No       | -           |
| `location`       | `LocationWithAttributes \| null`           | No       | -           |
