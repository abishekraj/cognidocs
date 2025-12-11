---
title: Mermaid Diagrams Guide
description: Examples of Mermaid diagrams in CogniDocs documentation
category: Guides
order: 100
---

# Mermaid Diagrams Guide

CogniDocs now supports **Mermaid.js** diagrams! You can create beautiful flowcharts, sequence diagrams, class diagrams, and more directly in your markdown documentation.

## Flowchart Example

Here's a simple flowchart showing a user authentication flow:

```mermaid
graph TD
    A[User Login] --> B{Valid Credentials?}
    B -->|Yes| C[Generate Token]
    B -->|No| D[Show Error]
    C --> E[Redirect to Dashboard]
    D --> F[Return to Login]
```

## Sequence Diagram

A sequence diagram showing API interaction:

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant API
    participant Database

    User->>Frontend: Click Submit
    Frontend->>API: POST /api/data
    API->>Database: Query Data
    Database-->>API: Return Results
    API-->>Frontend: JSON Response
    Frontend-->>User: Display Results
```

## Class Diagram

A class diagram showing component relationships:

```mermaid
classDiagram
    class Component {
        +props: Props
        +state: State
        +render() void
        +componentDidMount() void
    }

    class Button {
        +variant: string
        +onClick: function
        +disabled: boolean
        +handleClick() void
    }

    class Input {
        +value: string
        +placeholder: string
        +onChange: function
        +handleChange() void
    }

    Component <|-- Button
    Component <|-- Input
```

## State Diagram

A state diagram showing component lifecycle:

```mermaid
stateDiagram-v2
    [*] --> Mounting
    Mounting --> Mounted
    Mounted --> Updating
    Updating --> Mounted
    Mounted --> Unmounting
    Unmounting --> [*]

    Mounting: Constructor Called
    Mounted: Component Rendered
    Updating: Props/State Changed
    Unmounting: Cleanup
```

## Entity Relationship Diagram

An ER diagram showing database relationships:

```mermaid
erDiagram
    USER ||--o{ PROJECT : creates
    USER {
        string id PK
        string name
        string email
        datetime created_at
    }
    PROJECT ||--|{ DOCUMENTATION : contains
    PROJECT {
        string id PK
        string name
        string user_id FK
        json config
    }
    DOCUMENTATION {
        string id PK
        string project_id FK
        text content
        datetime updated_at
    }
```

## Gantt Chart

A project timeline using a Gantt chart:

```mermaid
gantt
    title CogniDocs Development Timeline
    dateFormat YYYY-MM-DD
    section Phase 1
    Foundation           :done, p1, 2024-01-01, 21d
    section Phase 2
    Analysis & Coverage  :done, p2, 2024-01-22, 14d
    section Phase 3
    Core Documentation   :done, p3, 2024-02-05, 14d
    section Phase 3.5
    Premium UI           :active, p3-5, 2024-02-19, 14d
    section Phase 4
    Plugin System        :p4, 2024-03-04, 14d
```

## Pie Chart

Documentation coverage breakdown:

```mermaid
pie title Documentation Coverage by Type
    "Components" : 45
    "Functions" : 30
    "Classes" : 15
    "Interfaces" : 10
```

## Git Graph

A git branching workflow:

```mermaid
gitGraph
    commit id: "Initial commit"
    branch develop
    checkout develop
    commit id: "Add parser"
    commit id: "Add analyzer"
    checkout main
    merge develop
    branch feature/ui
    checkout feature/ui
    commit id: "Add UI components"
    commit id: "Add themes"
    checkout develop
    merge feature/ui
    checkout main
    merge develop
```

## How to Use Mermaid Diagrams

To add a Mermaid diagram to your documentation, simply create a code block with the language set to `mermaid`:

````markdown
```mermaid
graph TD
    A[Start] --> B[End]
```
````

The diagram will automatically render with the theme matching your current site theme!

## Supported Diagram Types

- **Flowcharts** - `graph TD`, `graph LR`
- **Sequence Diagrams** - `sequenceDiagram`
- **Class Diagrams** - `classDiagram`
- **State Diagrams** - `stateDiagram-v2`
- **Entity Relationship Diagrams** - `erDiagram`
- **Gantt Charts** - `gantt`
- **Pie Charts** - `pie`
- **Git Graphs** - `gitGraph`
- **User Journey** - `journey`
- **Quadrant Charts** - `quadrantChart`

## Theme Support

Mermaid diagrams automatically adapt to your selected CogniDocs theme:
- Light themes use the default Mermaid theme
- Dark themes (Dracula, Monokai, Nord Dark, etc.) use the dark Mermaid theme
- Colors are extracted from CSS variables for consistency

## Learn More

For complete Mermaid.js documentation and syntax, visit:
- [Mermaid Official Docs](https://mermaid.js.org/)
- [Mermaid Live Editor](https://mermaid.live/)
