# CompiledMode
## Definition
```typescript
Omit<Mode, 'contains'> &
        {
            begin?: RegExp | string
            end?: RegExp | string
            scope?: string
            contains: CompiledMode[]
            keywords: KeywordDict
            data: Record<string, any>
            terminatorEnd: string
            keywordPatternRe: RegExp
            beginRe: RegExp
            endRe: RegExp
            illegalRe: RegExp
            matcher: any
            isCompiled: true
            starts?: CompiledMode
            parent?: CompiledMode
            beginScope?: CompiledScope
            endScope?: CompiledScope
        }
```