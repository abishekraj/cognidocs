---
title: System Architecture
category: Architecture
order: 2
---

# System Architecture

This document describes the architectural decisions for the sample app.

## Hybrid Routing

We use a hybrid approach with both App Router and Page Router to demonstrate compatibility.

- **App Router**: Used for the main marketing pages ('/', '/api/auth')
- **Page Router**: Used for legacy pages ('/about', '/api/posts')

## Component Library

We use standard React components with TypeScript interfaces.
