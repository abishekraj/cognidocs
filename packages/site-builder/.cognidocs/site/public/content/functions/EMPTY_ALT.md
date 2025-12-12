# EMPTY_ALT

Convenience used to express an **empty** alternative in an OR (alternation). can be used to more clearly describe the intent in a case of empty alternation. For example: 1. without using EMPTY_ALT: `this.OR([ {ALT: () => { this.CONSUME1(OneTok) return "1" }}, {ALT: () => { this.CONSUME1(TwoTok) return "2" }}, // implicitly empty because there are no invoked grammar // rules (OR/MANY/CONSUME...) inside this alternative. {ALT: () => { return "666" }}, ])` 2. using EMPTY_ALT: `this.OR([ {ALT: () => { this.CONSUME1(OneTok) return "1" }}, {ALT: () => { this.CONSUME1(TwoTok) return "2" }}, // explicitly empty, clearer intent {ALT: EMPTY_ALT("666")}, ])`

**Return Type:** `() => undefined`
