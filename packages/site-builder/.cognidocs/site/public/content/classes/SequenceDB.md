# SequenceDB

## Properties

| Name                | Type                    | Description |
| :------------------ | :---------------------- | :---------- |
| `state`             | `any`                   | -           |
| `activationCount`   | `any`                   | -           |
| `extractWrap`       | `any`                   | -           |
| `LINETYPE`          | `typeof LINETYPE`       | -           |
| `ARROWTYPE`         | `typeof ARROWTYPE`      | -           |
| `PLACEMENT`         | `typeof PLACEMENT`      | -           |
| `insertLinks`       | `any`                   | -           |
| `insertProperties`  | `any`                   | -           |
| `boxEnd`            | `any`                   | -           |
| `setAccTitle`       | `(txt: string) => void` | -           |
| `setAccDescription` | `(txt: string) => void` | -           |
| `setDiagramTitle`   | `(txt: string) => void` | -           |
| `getAccTitle`       | `() => string`          | -           |
| `getAccDescription` | `() => string`          | -           |
| `getDiagramTitle`   | `() => string`          | -           |

## Methods

### addBox

**Return:** `void`

### addActor

**Return:** `void`

### addMessage

**Return:** `void`

### addSignal

**Return:** `boolean`

### hasAtLeastOneBox

**Return:** `boolean`

### hasAtLeastOneBoxWithTitle

**Return:** `boolean`

### getMessages

**Return:** `Message[]`

### getBoxes

**Return:** `Box[]`

### getActors

**Return:** `Map<string, Actor>`

### getCreatedActors

**Return:** `Map<string, number>`

### getDestroyedActors

**Return:** `Map<string, number>`

### getActor

**Return:** `Actor`

### getActorKeys

**Return:** `string[]`

### enableSequenceNumbers

**Return:** `void`

### disableSequenceNumbers

**Return:** `void`

### showSequenceNumbers

**Return:** `boolean`

### setWrap

**Return:** `void`

### autoWrap

**Return:** `boolean`

### clear

**Return:** `void`

### parseMessage

**Return:** `{
        text: string | undefined;
        wrap: boolean | undefined;
    }`

### parseBoxData

**Return:** `{
        text: string | undefined;
        color: string;
        wrap: boolean | undefined;
    }`

### addNote

**Return:** `void`

### addLinks

**Return:** `void`

### addALink

**Return:** `void`

### addProperties

**Return:** `void`

### addDetails

**Return:** `void`

### getActorProperty

**Return:** `unknown`

### apply

**Return:** `void`

### getConfig

**Return:** `import("../../config.type.js").SequenceDiagramConfig | undefined`
