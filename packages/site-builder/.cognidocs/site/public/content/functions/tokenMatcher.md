# tokenMatcher

A Utility method to check if a token is of the type of the argument Token class. This utility is needed because Chevrotain tokens support "categories" which means A TokenType may have multiple categories. This means a simple comparison using the {@link IToken.tokenType} property may not suffice. For example: ``` import { createToken, tokenMatcher, Lexer } from "chevrotain" // An "abstract" Token used only for categorization purposes. const NumberTokType = createToken({ name: "NumberTokType", pattern: Lexer.NA }) const IntegerTokType = createToken({ name: "IntegerTokType", pattern: /\d+/, // Integer "Is A" Number categories: [NumberTokType] }) const DecimalTokType = createToken({ name: "DecimalTokType", pattern: /\d+\.\d+/, // Double "Is A" Number categories: [NumberTokType] }) // Will always be false as the tokenType property can only // be Integer or Double Token Types as the Number TokenType is "abstract". if (myToken.tokenType === NumberTokType) { /* ... *\/ } // Will be true when myToken is of Type Integer or Double. // Because the hierarchy defined by the categories is taken into account. if (tokenMatcher(myToken, NumberTokType) { /* ... *\/ } ```


**Return Type:** `boolean`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `token` | `IToken` | No | - |
| `tokType` | `TokenType` | No | - |