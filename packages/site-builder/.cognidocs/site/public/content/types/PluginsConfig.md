# PluginsConfig
## Definition
```typescript
(
  | PluginCreator
  | { handler: PluginCreator; config?: Partial<Config> | undefined }
  | {
      (options: any): {
        handler: PluginCreator;
        config?: Partial<Config> | undefined;
      };
      __isOptionsFunction: true
    }
)[]
```