---
title: Callout Boxes Guide
description: Learn how to use callout boxes to highlight important information in your documentation
category: Guides
order: 4
---

# Callout Boxes Guide

Callout boxes are special containers that help you highlight important information in your documentation. CogniDocs supports four types of callout boxes: **Info**, **Warning**, **Tip**, and **Danger**.

## Syntax

Callout boxes use the directive syntax with three colons:

    :::type
    Your content goes here
    :::

Replace `type` with one of: `info`, `warning`, `tip`, or `danger`.

## Available Callout Types

### Info Callouts

Use info callouts to provide additional context or helpful information.

:::info
This is an informational callout. Use it to share helpful context, background information, or general notes that complement the main content.
:::

**Syntax:**

    :::info
    Your informational content here
    :::

### Warning Callouts

Use warning callouts to alert users about potential issues or things to be careful about.

:::warning
This is a warning callout. Use it to alert users about potential pitfalls, deprecated features, or situations that require caution.
:::

**Syntax:**

    :::warning
    Your warning message here
    :::

### Tip Callouts

Use tip callouts to share best practices, shortcuts, or helpful suggestions.

:::tip
This is a tip callout. Use it to share best practices, pro tips, performance optimizations, or clever shortcuts that can help users work more efficiently.
:::

**Syntax:**

    :::tip
    Your helpful tip here
    :::

### Danger Callouts

Use danger callouts for critical warnings about actions that could cause serious problems.

:::danger
This is a danger callout. Use it for critical warnings about destructive actions, security vulnerabilities, or situations that could lead to data loss or system failures.
:::

**Syntax:**

    :::danger
    Your critical warning here
    :::

## Practical Examples

### Example 1: API Documentation

When documenting an API endpoint, you might use multiple callout types:

:::info
The `/api/users` endpoint supports pagination. Use the `page` and `limit` query parameters to control the response size.
:::

:::warning
This endpoint requires authentication. Make sure to include a valid JWT token in the `Authorization` header.
:::

:::tip
For better performance, consider caching the response for up to 5 minutes. User data doesn't change frequently.
:::

:::danger
Never expose user passwords or sensitive personal information through this endpoint. Always filter sensitive fields before returning data.
:::

### Example 2: Configuration Guide

:::info
CogniDocs uses a `cognidocs.config.js` file in your project root for configuration.
:::

:::tip
You can generate a default configuration file by running `cognidocs init` in your terminal.
:::

:::warning
If you change the `entry` path in your configuration, make sure the path exists and contains valid source files.
:::

### Example 3: Installation Instructions

:::info
CogniDocs requires Node.js version 16 or higher.
:::

:::tip
Using a Node version manager like `nvm` makes it easy to switch between different Node.js versions for different projects.
:::

:::danger
Do not install CogniDocs globally unless you need it available across all projects. Project-local installations are recommended for better version control.
:::

## Best Practices

1. **Use callouts sparingly** - Too many callouts can make your documentation feel cluttered
2. **Choose the right type** - Match the callout type to the importance and nature of the information
3. **Keep content concise** - Callouts are meant to highlight key points, not replace main content
4. **Use consistent language** - Maintain a consistent tone across similar callout types
5. **Test visual hierarchy** - Make sure callouts enhance rather than distract from the main content

:::tip
Callout boxes work great in combination with other markdown features like code blocks, lists, and tables!
:::

## Dark Mode Support

All callout types automatically adapt to your selected theme. Switch between light and dark modes to see how they look in different contexts.

:::info
The callout colors are carefully chosen to maintain good contrast and readability in both light and dark themes.
:::
