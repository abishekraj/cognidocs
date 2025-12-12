# LangiumCompletionParser

**Extends:** `AbstractLangiumParser`

## Properties

| Name               | Type                | Description |
| :----------------- | :------------------ | :---------- |
| `tokens`           | `IToken[]`          | -           |
| `elementStack`     | `AbstractElement[]` | -           |
| `lastElementStack` | `AbstractElement[]` | -           |
| `nextTokenIndex`   | `any`               | -           |
| `stackSize`        | `any`               | -           |

## Methods

### action

**Return:** `void`

### construct

**Return:** `unknown`

### parse

**Return:** `CompletionParserResult`

### rule

**Return:** `RuleResult`

### resetState

**Return:** `void`

### startImplementation

**Return:** `RuleImpl`

### removeUnexpectedElements

**Return:** `void`

### keepStackSize

**Return:** `number`

### resetStackSize

**Return:** `void`

### consume

**Return:** `void`

### subrule

**Return:** `void`

### before

**Return:** `void`

### after

**Return:** `void`
