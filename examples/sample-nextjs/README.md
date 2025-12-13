# Sample Next.js Project

This is a sample project to demonstrate **CogniDocs** capabilities with Next.js applications.

## Architecture

Here is a high-level overview of the application flow:

```mermaid
graph TD
    User[User] -->|Visits| Home[Home Page /]
    User -->|Visits| About[About Page /about]
    User -->|Calls API| API[API Routes]

    subgraph "Next.js App"
        Home
        About
        API
    end

    API -->|GET /api/hello| HelloEndpoint
    API -->|GET /api/user| UserEndpoint
    API -->|POST /api/posts| PostsEndpoint
```

## Data Flow

```mermaid
sequenceDiagram
    participant Client
    participant API
    participant DB

    Client->>API: GET /api/posts
    API->>DB: Fetch Posts
    DB-->>API: Return [Post1, Post2]
    API-->>Client: 200 OK (JSON)
```
