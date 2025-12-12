# FootnoteBackLabelTemplate

Generate a back label dynamically. For the following markdown: `markdown Alpha[^micromark], bravo[^micromark], and charlie[^remark]. [^remark]: things about remark [^micromark]: things about micromark ` This function will be called with: _ `0` and `0` for the backreference from `things about micromark` to `alpha`, as it is the first used definition, and the first call to it _ `0` and `1` for the backreference from `things about micromark` to `bravo`, as it is the first used definition, and the second call to it \* `1` and `0` for the backreference from `things about remark` to `charlie`, as it is the second used definition

## Definition

```typescript
(referenceIndex: number, rereferenceIndex: number) => string;
```
