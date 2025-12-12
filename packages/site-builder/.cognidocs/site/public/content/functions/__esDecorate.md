# \_\_esDecorate

**Return Type:** `void`

## Parameters

| Name                | Type                 | Optional | Description                                                                               |
| :------------------ | :------------------- | :------- | :---------------------------------------------------------------------------------------- |
| `ctor`              | `Function \| null`   | No       | For non-field class members, the class constructor. Otherwise, `null`.                    |
| `descriptorIn`      | `object \| null`     | No       | The `PropertyDescriptor` to use when unable to look up the property from `ctor`.          |
| `decorators`        | `Function[]`         | No       | The decorators to apply                                                                   |
| `contextIn`         | `object`             | No       | The `DecoratorContext` to clone for each decorator application.                           |
| `initializers`      | `Function[] \| null` | No       | An array of field initializer mutation functions into which new initializers are written. |
| `extraInitializers` | `Function[]`         | No       | An array of extra initializer functions into which new initializers are written.          |
