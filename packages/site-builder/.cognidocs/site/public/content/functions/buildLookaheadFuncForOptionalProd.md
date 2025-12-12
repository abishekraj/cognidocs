# buildLookaheadFuncForOptionalProd

When dealing with an Optional production (OPTION/MANY/2nd iteration of AT_LEAST_ONE/...) we need to compare the lookahead "inside" the production and the lookahead immediately "after" it in the same top level rule (context free). Example: given a production: ABC(DE)?DF The optional '(DE)?' should only be entered if we see 'DE'. a single Token 'D' is not sufficient to distinguish between the two alternatives.

**Return Type:** `() => boolean`

## Parameters

| Name                   | Type        | Optional | Description |
| :--------------------- | :---------- | :------- | :---------- |
| `occurrence`           | `number`    | No       | -           |
| `ruleGrammar`          | `Rule`      | No       | -           |
| `k`                    | `number`    | No       | -           |
| `dynamicTokensEnabled` | `boolean`   | No       | -           |
| `prodType`             | `PROD_TYPE` | No       | -           |
| `lookaheadBuilder`     | `(          |

    lookAheadSequence: LookaheadSequence,
    tokenMatcher: TokenMatcher,
    dynamicTokensEnabled: boolean,

) => () => boolean` | No | - |
