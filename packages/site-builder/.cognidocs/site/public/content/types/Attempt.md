# Attempt

Attempt deals with several values, and tries to parse according to those values. If a value resulted in `ok`, it worked, the tokens that were made are used, and `ok` is switched to. If the result is `nok`, the attempt failed, so we revert to the original state, and `nok` is used.

## Definition

```typescript
(construct: Array<Construct> | ConstructRecord | Construct, ok: State, nok?: State | undefined) =>
  State;
```
