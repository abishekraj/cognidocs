# Input

A controlled input component with validation and error handling.


**Return Type:** `void`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `{
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  required = false,
  maxLength,
}` | `{
  /** Label text displayed above the input */
  label: string;

  /** HTML input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

  /** Current input value */
  value: string;

  /** Callback fired when input value changes */
  onChange: (value: string) => void;

  /** Placeholder text shown when input is empty */
  placeholder?: string;

  /** Error message to display below the input */
  error?: string;

  /** Whether the input is disabled */
  disabled?: boolean;

  /** Whether the input is required */
  required?: boolean;

  /** Maximum number of characters allowed */
  maxLength?: number;
}` | No | - |