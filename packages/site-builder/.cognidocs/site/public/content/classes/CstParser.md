# CstParser

A Parser that outputs a Concrete Syntax Tree. See: - https://chevrotain.io/docs/tutorial/step3_adding_actions_root.html#alternatives - https://chevrotain.io/docs/guide/concrete_syntax_tree.html For in depth docs.

**Extends:** `BaseParser`

## Methods
### RULE

Creates a Grammar Rule Note that any parameters of your implementation must be optional as it will be called without parameters during the grammar recording phase.

**Return:** `ParserMethod<Parameters<F>, CstNode>`

### OVERRIDE_RULE

Overrides a Grammar Rule See usage example in: https://github.com/chevrotain/chevrotain/blob/master/examples/parser/versioning/versioning.js

**Return:** `ParserMethod<Parameters<F>, CstNode>`

### subrule

Like `SUBRULE` with the numerical suffix as a parameter, e.g: subrule(0, X) === SUBRULE(X) subrule(1, X) === SUBRULE1(X) subrule(2, X) === SUBRULE2(X) ...

**Return:** `CstNode`

### SUBRULE

The Parsing DSL Method is used by one rule to call another. It is equivalent to a non-Terminal in EBNF notation. This may seem redundant as it does not actually do much. However using it is **mandatory** for all sub rule invocations. Calling another rule without wrapping in SUBRULE(...) will cause errors/mistakes in the Parser's self analysis phase, which will lead to errors in error recovery/automatic lookahead calculation and any other functionality relying on the Parser's self analysis output. As in CONSUME the index in the method name indicates the occurrence of the sub rule invocation in its rule.

**Return:** `CstNode`

### SUBRULE1
**Return:** `CstNode`

### SUBRULE2
**Return:** `CstNode`

### SUBRULE3
**Return:** `CstNode`

### SUBRULE4
**Return:** `CstNode`

### SUBRULE5
**Return:** `CstNode`

### SUBRULE6
**Return:** `CstNode`

### SUBRULE7
**Return:** `CstNode`

### SUBRULE8
**Return:** `CstNode`

### SUBRULE9
**Return:** `CstNode`
