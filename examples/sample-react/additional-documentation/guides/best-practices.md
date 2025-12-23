---
title: Best Practices
description: Code quality and best practices
order: 2
category: Guides
---

# Best Practices

Follow these best practices to maintain code quality and consistency.

## Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use Prettier for formatting
- Write descriptive variable names

## Component Design

### Keep components small and focused

- Each component should do one thing well
- Extract logic into custom hooks

### Avoid prop drilling

- Use Context API for global state
- Consider state management libraries for complex apps

### Performance optimization

- Use 'React.memo()' for expensive renders
- Implement 'useMemo()' and 'useCallback()' appropriately

### Testing

Always write tests for your components:

```typescript
describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(onClick).toHaveBeenCalled();
  });
});
```

### Documentation

- Add JSDoc comments to all exported functions
- Document props interfaces
- Include usage examples
