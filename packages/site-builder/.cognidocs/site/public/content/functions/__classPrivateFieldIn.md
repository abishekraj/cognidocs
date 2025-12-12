# \_\_classPrivateFieldIn

**Return Type:** `boolean`

## Parameters

| Name       | Type                                                            | Optional | Description                                                                                                              |
| :--------- | :-------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------- |
| `state`    | `(new (...args: any[]) => unknown) \| { has(o: any): boolean }` | No       | The class constructor containing the static member, or the WeakMap or WeakSet associated with a private instance member. |
| `receiver` | `unknown`                                                       | No       | The object for which to test the presence of the private member.                                                         |
