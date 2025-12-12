# MessageWriter

Writes JSON-RPC messages to an underlying transport.

## Properties

| Name      | Type                                                        | Optional | Description |
| :-------- | :---------------------------------------------------------- | :------- | :---------- |
| `onError` | `Event<[Error, Message \| undefined, number \| undefined]>` | No       | -           |
| `onClose` | `Event<void>`                                               | No       | -           |
