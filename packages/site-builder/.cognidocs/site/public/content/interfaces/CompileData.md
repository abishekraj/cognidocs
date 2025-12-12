# CompileData

State tracked to compile events as HTML.

## Properties

| Name                     | Type                         | Optional | Description |
| :----------------------- | :--------------------------- | :------- | :---------- |
| `expectFirstItem`        | `boolean \| undefined`       | Yes      | -           |
| `characterReferenceType` | `string \| undefined`        | Yes      | -           |
| `definitions`            | `Record<string, Definition>` | No       | -           |
| `fencedCodeInside`       | `boolean \| undefined`       | Yes      | -           |
| `fencesCount`            | `number \| undefined`        | Yes      | -           |
| `flowCodeSeenData`       | `boolean \| undefined`       | Yes      | -           |
| `headingRank`            | `number \| undefined`        | Yes      | -           |
| `ignoreEncode`           | `boolean \| undefined`       | Yes      | -           |
| `inCodeText`             | `boolean \| undefined`       | Yes      | -           |
| `lastWasTag`             | `boolean \| undefined`       | Yes      | -           |
| `slurpAllLineEndings`    | `boolean \| undefined`       | Yes      | -           |
| `slurpOneLineEnding`     | `boolean \| undefined`       | Yes      | -           |
| `tightStack`             | `Array<boolean>`             | No       | -           |
