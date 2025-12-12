# BaseRegExpVisitor

## Methods

### visit

The entry point visitor method. This will dispatch to the specific visitor method.

**Return:** `void`

### visitChildren

The entry point for visiting the children of a node. Override this to filter the types of children visited or to support new types of children in extended ASTs.

**Return:** `void`

### visitPattern

The specific visitor methods Override some of these of create custom visitors.

**Return:** `void`

### visitFlags

**Return:** `void`

### visitDisjunction

**Return:** `void`

### visitAlternative

**Return:** `void`

### visitStartAnchor

**Return:** `void`

### visitEndAnchor

**Return:** `void`

### visitWordBoundary

**Return:** `void`

### visitNonWordBoundary

**Return:** `void`

### visitLookahead

**Return:** `void`

### visitNegativeLookahead

**Return:** `void`

### visitCharacter

**Return:** `void`

### visitSet

**Return:** `void`

### visitGroup

**Return:** `void`

### visitGroupBackReference

**Return:** `void`

### visitQuantifier

**Return:** `void`
