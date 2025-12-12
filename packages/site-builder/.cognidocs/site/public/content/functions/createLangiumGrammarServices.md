# createLangiumGrammarServices

**Return Type:** `{
        shared: LangiumSharedServices,
        grammar: LangiumGrammarServices
    }`

## Parameters

| Name           | Type                                                          | Optional | Description                                                           |
| :------------- | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------- |
| `context`      | `DefaultSharedModuleContext`                                  | No       | Shared module context, used to create additional shared modules       |
| `sharedModule` | `Module<LangiumSharedServices, PartialLangiumSharedServices>` | Yes      | Existing shared module to inject together with new shared services    |
| `module`       | `Module<LangiumServices, PartialLangiumServices>`             | Yes      | Additional/modified service implementations for the language services |
