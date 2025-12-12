# rescan_gt

Reinterpret a possible > token when transitioning from a type to a non-type context. This comes up in two situations where >= needs to be treated as one token: - After an `as` expression, like in the code `a as T >= 1`. - In a type argument in an expression context, e.g. `f(a < b, c >= d)`, we need to see the token as >= so that we get an error and backtrack to normal expression parsing. Other situations require >= to be seen as two tokens, e.g. `const x: Array<T>=[];`, so it's important to treat > as its own token in typical type parsing situations.

**Return Type:** `void`
