# MessageConnection

## Properties

| Name                      | Type                                                        | Optional | Description |
| :------------------------ | :---------------------------------------------------------- | :------- | :---------- |
| `onUnhandledNotification` | `Event<NotificationMessage>`                                | No       | -           |
| `onUnhandledProgress`     | `Event<ProgressParams<any>>`                                | No       | -           |
| `onError`                 | `Event<[Error, Message \| undefined, number \| undefined]>` | No       | -           |
| `onClose`                 | `Event<void>`                                               | No       | -           |
| `onDispose`               | `Event<void>`                                               | No       | -           |
