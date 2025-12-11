---
title: Component Guide
description: Learn how to create and use components
order: 1
category: Guides
---

# Component Guide

This guide covers best practices for creating React components in this project.

## Component Structure

All components should follow this structure:

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', onClick, children }: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
```

## Naming Conventions

- Use PascalCase for component names
- Use camelCase for prop names
- Use descriptive names that indicate purpose

## File Organization

- One component per file
- Co-locate styles and tests
- Export components from index files

## Examples

### Basic Component

```tsx
export function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
}
```

### Component with Hooks

```tsx
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
