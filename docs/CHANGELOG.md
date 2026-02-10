# Changelog

All notable changes to the Mission Control Reference will be documented in this file.

## [2026-02-10] - Phase 2 Deployment: Trading Team

### Added
- **Shiroe** (`cliproxy/gemini-3-pro-high`): Trading Architect — orchestrates strategy loops
- **Rimuru** (`cliproxy/gemini-3-flash`): Data Engineer + Backtester — data collection, validation
- **Senku** (`cliproxy/claude-sonnet-4-5-thinking`): Research Specialist — deep research, pattern discovery

### Files Modified
- VPS: `~/.openclaw/openclaw.json`, agent identity files for shiroe/rimuru/senku

### Reference
- Session: d339887d-4884-4500-bdb6-809a6c662b81

---

## [2026-02-10] - Phase 1 Deployment: Schema + Core Agents

### Added
- **Task Decomposition Schema**: `createdBy`, `parentTaskId`, `acceptanceCriteria`, `requiredSkills` + indexes (`by_parent`, `by_creator`)
- **Agent Health Schema**: `layer`, `skills`, `behavior`, `dormant`, `healthMetrics` (tasksCompleted, tasksFailed, avgCompletionTime, contextResets)
- **Tasks API**: `getSubTasks` query, decomposition args in `create` mutation
- **Agents API**: `getAvailableForSkills`, `getActive` queries, `updateHealthMetrics` mutation
- **Seed**: 7 active + 6 dormant agents with skills/layer/behavior
- **VPS KB**: `kb/trading`, `kb/devops`, `kb/research` directories
- **VPS CC Reports**: `cc-reports/squad-status.md`, `daily-digest.md`, `scaling-recs.md`
- **OpenClaw Agents**: `main` (Lelouch), `cc` (C.C.), `meliodas`, `demiurge` — each with identity + model routing
- **CLIproxy Auth**: `cliproxy:default` profile → fight-dos:8317
- **Cron Heartbeats**: `lelouch-heartbeat` (10m), `cc-heartbeat` (30m, silent)

### Files Modified
- `database/schema.ts`, `database/tasks.ts`, `database/agents.ts`, `database/seed.ts`
- VPS: `~/.openclaw/openclaw.json`, agent identity files, cron jobs

### Reference
- Session: d339887d-4884-4500-bdb6-809a6c662b81

---

## [2026-02-10] - Multi-Agent Architecture Redesign

### Changed
- **Agent Structure**: Redesigned from 13-agent full spec to **7 active agents** with 6 dormant (spawn on demand)
- **C.C. Role**: From "Chief of Staff" to **Silent Analyst** — writes living documents (`cc-reports/`), no chat with Lelouch
- **Lelouch Role**: Now also **Personal Assistant** (reminders, scheduling) + Resource Planning
- **Meliodas**: Absorbs ALL dev/devops skills (solo lead, no specialists)
- **Shiroe**: Now **Trading Architect** (orchestrate only, does not execute)
- **Hierarchy**: From 4-layer to **3-layer active** (Strategic → Leads → Specialists)

### Added
- **Knowledge Base (KB)**: Shared `kb/` directory for persistent learning across sessions
- **Model Tiering**: Per-agent LLM model assignment with fallback chains
  - Codex models via fight-uno, CLIproxy models (Gemini/Opus) via fight-dos
  - Heartbeat scan: gemini-3-flash (all agents)
  - Fallback: quota-exceeded auto-switch
- **Task Decomposition**: Vision → Strategic Goal → Tactical Tasks → Execution
  - Schema additions: `createdBy`, `parentTaskId`, `acceptanceCriteria`, `requiredSkills`
- **Agent Health Metrics**: `skills`, `behavior`, `healthMetrics` fields on agents table
- **Autonomous Iteration Loop**: Shiroe orchestrates research/backtest loops without human intervention
- **Scaling Decision Matrix**: Trigger-based rules for spawning new agents

### Architecture Decisions
- **Lelouch ↔ C.C.**: File-based (instant) rather than chat-based (30min wait)
- **Shiroe as orchestrator**: Keeps context lean for long-running research loops
- **KB as bridge**: Enables specialists to execute-and-forget while knowledge persists
- **Dormant agents**: @killua, @yor, @lena, @ainz, @albedo, @kazuma available for future scaling

### Files Modified
- `docs/ARCHITECTURE.md` — Updated hierarchy, added KB + model tiering sections
- `docs/PERSONAS.md` — Restructured: 7 active + 6 dormant agents
- `docs/CHANGELOG.md` — This entry
- `docs/ROADMAP.md` — Updated with deployment phases

### Reference
- Session: d339887d-4884-4500-bdb6-809a6c662b81

---

## [2026-02-10] - Mission Control Dashboard Frontend Implemented

### Added
- **Next.js Dashboard**: Created `mission-control-dashboard/` project with Next.js 16.1.6, TypeScript, and shadcn/ui.
- **Kanban Board**: Fully functional Kanban with drag-and-drop using @dnd-kit.
  - 5 columns: Backlog, To Do, In Progress, Review, Done
  - Task cards with domain badges, priority indicators, agent avatars
  - Drop targets for column reordering
- **Agent Status Page**: Grid view of all 13 agents organized by layer.
  - Strategic Layer: Lelouch
  - Secretary Layer: C.C.
  - Tactical Layer: Lena, Shiroe, Ainz, Meliodas
  - Operational Layer: Killua, Yor, Rimuru, Albedo, Kazuma, Senku, Demiurge
  - Real-time status indicators (online/busy/idle/offline)
  - Skills and domain badges
- **Activity Feed**: Live stream with filter chips, statistics panel, and agent rankings.
- **Agent Avatars**: Generated 11/13 anime-style portraits (Senku & Demiurge pending quota reset).
- **Custom Theme**: Isekai Crossover Legion dark theme with:
  - Code Geass red accent (`--geass-red`)
  - Overlord gold accent (`--overlord-gold`)
  - Glassmorphism UI components
  - Status indicator animations
  - Custom scrollbars

### Verified
- `npm run build` passes with 0 errors
- Kanban drag-drop works correctly
- Agent avatars render with fallback system
- Dark theme renders correctly
- Responsive layout functions on desktop

### Screenshots
- Kanban Board: `docs/assets/screenshots/kanban_board.png`
- Agents Page: `docs/assets/screenshots/agents_page.png`
- Activity Feed: `docs/assets/screenshots/activity_feed.png`

### Reference
- Session: Execute HANDOVER_FRONTEND.md

---

## [2026-02-10] - Implemented Mission Control Backend Logic

### Added
- **Backend Functions**: Created 7 TypeScript files in `database/`:
  - `agents.ts`: heartbeat, updateStatus, list, get, claimTask, releaseTask
  - `tasks.ts`: CRUD, claim, move, execution logging
  - `boards.ts`: list, get, create, update
  - `agentMessages.ts`: send, acknowledge, listUnacknowledged
  - `activity.ts`: log, list
  - `comments.ts`: create with @mention subscription
  - `subscriptions.ts`: listUnacknowledged, acknowledge
- **Seed Script**: Created `seed.ts` to populate 4 Boards and 13 Agents

### Verified
- `npx convex run agents:list` returns all 13 agents with correct roles
- All functions deployed successfully to `ceaseless-bullfrog-373`

### Reference
- Session: Implementing Mission Control Backend Logic

---

## [2026-02-10] - Refined Lelouch Persona

### Changed
- **Lelouch Persona**: Shifted from "Supreme Commander" to "Strategic Partner & System Architect" in `docs/PERSONAS.md`.
  - Now emphasizes "First Among Equals" dynamic with Domain Leads.
  - Added "Lelouch Module" (Crisis Mode) for unilateral decisions only when necessary.
  - Added mitigation for AI over-summarization (mandatory citations).
- **Architecture**: Updated hierarchy in `docs/ARCHITECTURE.md` to reflect Lelouch's "Orchestrator" role.

### Added
- **Escalation Protocol**: Added Direct Escalation Channel for Demiurge (Security) to User for system integrity issues, bypassing Lelouch.
- **Nickname Protocol**: Added "Lulu" as a permitted nickname for User & C.C. only (Strictly forbidden for others).

### Reference
- Session: Refine Lelouch Persona
