# Preset

Sharable configuration. They can contain plugins and settings.

## Definition

```typescript
{
    /**
     * List of plugins and presets (optional).
     */
    plugins?: PluggableList | undefined;
    /**
     * Shared settings for parsers and compilers (optional).
     */
    settings?: Settings | undefined;
}
```
