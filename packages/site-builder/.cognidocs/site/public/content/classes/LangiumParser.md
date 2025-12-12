# LangiumParser

**Extends:** `AbstractLangiumParser`

## Properties

| Name            | Type             | Description |
| :-------------- | :--------------- | :---------- |
| `linker`        | `Linker`         | -           |
| `converter`     | `ValueConverter` | -           |
| `astReflection` | `AstReflection`  | -           |
| `nodeBuilder`   | `any`            | -           |
| `lexerResult`   | `LexerResult`    | -           |
| `stack`         | `any[]`          | -           |
| `assignmentMap` | `any`            | -           |

## Methods

### rule

**Return:** `RuleResult`

### computeRuleType

**Return:** `string | symbol | undefined`

### parse

**Return:** `ParseResult<T>`

### startImplementation

**Return:** `RuleImpl`

### extractHiddenTokens

**Return:** `IToken[]`

### consume

**Return:** `void`

### isValidToken

**Return:** `boolean`

### subrule

**Return:** `void`

### performSubruleAssignment

**Return:** `void`

### action

**Return:** `void`

### construct

**Return:** `unknown`

### getAssignment

**Return:** `AssignmentElement`

### assign

**Return:** `void`

### assignWithoutOverride

**Return:** `any`
