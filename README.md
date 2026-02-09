# Mission Control Reference Archive

> **Purpose**: A clean-room reference for rebuilding the Mission Control system. Contains only verified specs, schemas, and philosophies — no technical debt.

## Origin Story

This project was inspired by [@pbteja1998's tweet](https://x.com/pbteja1998/status/2017662163540971756?s=20) showcasing an AI-powered project management dashboard with anime-styled agent avatars.

**Vision**: An Isekai Crossover Legion where AI agents from different anime universes collaborate to manage tasks, coordinate strategy, and execute on behalf of the User.

---

## Repository Structure

| Folder | Contents |
|--------|----------|
| `/docs` | Architecture, Personas, Protocols |
| `/database` | Convex schema (distilled, clean) |
| `/core-logic` | Heartbeat loop, Agent coordination specs |
| `/ui-landscape` | Kanban, Threaded Comments requirements |
| `/snippets` | Verified code snippets |
| `/integrations` | Telegram webhook, Convex API specs |
| `/skills` | Skills matrix, Tool catalog |
| `/assets` | Visual references, Screenshots |
| `/ops` | Scaling notes, Known issues |

---

## Quick Start for Future Lelouch

1. **Read `/docs/ARCHITECTURE.md`** — Understand the 8-Phase Heartbeat and 4-Layer Hierarchy.
2. **Review `/docs/PERSONAS.md`** — Know your team (11 agents with distinct roles).
3. **Study `/database/schema.ts`** — The data model for Tasks, Agents, Comments.
4. **Implement `/core-logic/`** — Build the agent brain step by step.
5. **Build UI from `/ui-landscape/`** — Follow the Kanban and Comments specs.

---

## The Hierarchy

```
┌─────────────────────────────────────┐
│         FAIQ (User/Visionary)       │
│         Final Authority             │
└─────────────────┬───────────────────┘
                  │
┌─────────────────▼───────────────────┐
│      LELOUCH (Supreme Commander)    │
│   Strategic Partner, System Arch    │
└─────────────────┬───────────────────┘
                  │
┌─────────────────▼───────────────────┐
│         C.C. (Chief of Staff)       │
│   Logistics, Memory, Data Fetching  │
└─────────────────┬───────────────────┘
                  │
┌─────────────────▼───────────────────┐
│           AREA LEADS (VPs)          │
│  Lena, Shiroe, Ainz, Meliodas       │
└─────────────────┬───────────────────┘
                  │
┌─────────────────▼───────────────────┐
│         SPECIALISTS (Executors)     │
│  Killua, Yor, Rimuru, Senku, etc.   │
└─────────────────────────────────────┘
```

---

## License

Internal reference only. Not for public distribution.
