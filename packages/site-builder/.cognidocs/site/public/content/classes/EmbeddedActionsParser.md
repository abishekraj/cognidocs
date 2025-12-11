# EmbeddedActionsParser

A Parser that relies on end user's embedded actions to control its output. For more details see: - https://chevrotain.io/docs/tutorial/step3_adding_actions_root.html#alternatives - https://chevrotain.io/docs/tutorial/step3b_adding_actions_embedded.html#simple-example

**Extends:** `BaseParser`

## Methods
### RULE

Creates a Grammar Rule Note that any parameters of your implementation must be optional as it will be called without parameters during the grammar recording phase.

**Return:** `ParserMethod<Parameters<F>, ReturnType<F>>`

### OVERRIDE_RULE

Overrides a Grammar Rule See usage example in: https://github.com/chevrotain/chevrotain/blob/master/examples/parser/versioning/versioning.js

**Return:** `ParserMethod<Parameters<F>, ReturnType<F>>`

### subrule

Like `SUBRULE` with the numerical suffix as a parameter, e.g: subrule(0, X) === SUBRULE(X) subrule(1, X) === SUBRULE1(X) subrule(2, X) === SUBRULE2(X) ...

**Return:** `R`

### SUBRULE

The Parsing DSL Method is used by one rule to call another. It is equivalent to a non-Terminal in EBNF notation. This may seem redundant as it does not actually do much. However using it is **mandatory** for all sub rule invocations. Calling another rule without wrapping in SUBRULE(...) will cause errors/mistakes in the Parser's self analysis phase, which will lead to errors in error recovery/automatic lookahead calculation and any other functionality relying on the Parser's self analysis output. As in CONSUME the index in the method name indicates the occurrence of the sub rule invocation in its rule.

**Return:** `R`

### SUBRULE1
**Return:** `R`

### SUBRULE2
**Return:** `R`

### SUBRULE3
**Return:** `R`

### SUBRULE4
**Return:** `R`

### SUBRULE5
**Return:** `R`

### SUBRULE6
**Return:** `R`

### SUBRULE7
**Return:** `R`

### SUBRULE8
**Return:** `R`

### SUBRULE9
**Return:** `R`
