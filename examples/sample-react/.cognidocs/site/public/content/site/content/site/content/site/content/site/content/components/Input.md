# Input

A controlled input component with validation and error handling.

This component provides a styled text input with built-in validation,
error messages, and various input types support.


**Type:** function Component (react)
**Source:** `/Users/abishekraj/Downloads/cognidocs/examples/sample-react/src/components/Input.tsx:37`

## Examples

```tsx
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={setEmail}
/>
```


```tsx
// With validation error
<Input
  label="Password"
  type="password"
  value={password}
  onChange={setPassword}
  error="Password must be at least 8 characters"
  required
/>
```

## Props
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `label` | `string` | No | Label text displayed above the input |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url'` | No | HTML input type |
| `value` | `string` | No | Current input value |
| `onChange` | `(value: string) => void` | No | Callback fired when input value changes |
| `placeholder` | `string` | No | Placeholder text shown when input is empty |
| `error` | `string` | No | Error message to display below the input |
| `disabled` | `boolean` | No | Whether the input is disabled |
| `required` | `boolean` | No | Whether the input is required |
| `maxLength` | `number` | No | Maximum number of characters allowed |