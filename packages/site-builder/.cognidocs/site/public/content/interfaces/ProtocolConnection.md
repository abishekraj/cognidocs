# ProtocolConnection

## Properties

| Name                      | Type                                                        | Optional | Description |
| :------------------------ | :---------------------------------------------------------- | :------- | :---------- |
| `onError`                 | `Event<[Error, Message \| undefined, number \| undefined]>` | No       | -           |
| `onClose`                 | `Event<void>`                                               | No       | -           |
| `onUnhandledNotification` | `Event<NotificationMessage>`                                | No       | -           |
| `onDispose`               | `Event<void>`                                               | No       | -           |
