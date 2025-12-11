# Card

A flexible card component for displaying content with a title and optional actions. The Card component provides a container with consistent styling and optional interactive features. It supports different visual variants and loading states.


**Type:** function Component (react)
**Source:** `/Users/abishekraj/Downloads/cognidocs/examples/sample-react/src/components/Card.tsx:79`

## Props
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `title` | `string` | No | The title displayed at the top of the card |
| `subtitle` | `string` | No | Optional subtitle displayed below the title |
| `children` | `React.ReactNode` | No | Card content (can be text, elements, or other components) |
| `variant` | `'default' \| 'elevated' \| 'outlined'` | No | Visual style variant of the card |
| `loading` | `boolean` | No | Whether the card is in a loading state |
| `onClick` | `(event: React.MouseEvent<HTMLDivElement>) => void` | No | Callback fired when the card is clicked |
| `className` | `string` | No | Custom CSS class name |