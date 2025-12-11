# GenerateDtsOptions
## Definition
```typescript
{
  /**
   * `true` by default.
   * Disable this to prevent the generation of the CSTVisitor interface.
   * For example, if a different traversal method on the CST has been implemented
   * by the end-user and the Chevrotain CST Visitor apis are not used.
   */
  includeVisitorInterface?: boolean;
  /**
   * The generated visitor interface will be called `ICstNodeVisitor` by default
   * This parameter enables giving it a more specific name, for example: `MyCstVisitor` or `JohnDoe`
   */
  visitorInterfaceName?: string;
}
```