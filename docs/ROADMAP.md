# Mission Control Roadmap

## Vision
To create a high-fidelity, real-time command center where 7 autonomous AI agents (Isekai Crossover Legion) collaborate seamlessly to execute complex user objectives across multiple domains, with scalable architecture that spawns new agents on demand.

## Planned Features

### High Priority
- [ ] **Phase 1: Core Agents** — Deploy @lelouch, @cc, @meliodas, @demiurge
  - Schema changes: `createdBy`, `parentTaskId`, `acceptanceCriteria`, `requiredSkills` on tasks
  - Schema changes: `skills`, `behavior`, `healthMetrics` on agents
  - KB + cc-reports directories on VPS
  - CLIproxy fallback wiring
- [ ] **Phase 2: Trading Team** — Deploy @shiroe, @rimuru, @senku
  - Autonomous iteration loop for trading strategy research
  - Seed KB with existing data catalog
- [/] **Frontend Dashboard**: Real-time Kanban board using Next.js and shadcn/ui.
  - **Status**: Core MVP implemented in `mission-control-dashboard/`
  - [x] Kanban Board with drag-drop
  - [x] Agent Status grid
  - [x] Activity Feed with filters
  - [x] 11/13 Agent avatars
  - [ ] Connect to Convex real-time subscriptions
  - [ ] Generate remaining 2 avatars (Senku, Demiurge)
- [ ] **Telegram Integration**: Direct approval flow and notifications for the User.
- [ ] **C.C. Daily Digest**: Automated daily status report via Telegram.

### Medium Priority
- [ ] **Agent Memory Expansion**: Knowledge Base (KB) for persistent learning across sessions.
- [ ] **Model Tiering Dashboard**: Visual indicator of which model each agent is using.
- [ ] **Autonomous Trading Loop**: End-to-end research → backtest → validate loop without human intervention.

---

## Known Issues

### Non-Critical
- **Node.js Compatibility**: Convex CLI requires Node.js v20+ for certain RegExp features.
  - **Discovered**: 2026-02-10 (During backend deployment)
  - **Impact**: Deployments fail on default Node 18 environments.
  - **Workaround**: Use NVM to switch to Node 20.2.0+.
  - **Fix**: Update `setup.md` to mandate Node 20+.

---

## Technical Debt

### Medium Priority
- **Manual Seed Process**: Database seeding currently requires manual execution of `seed:defaultSeed`.
  - **Goal**: Implement automatic migrations/seeding.
- **Hardcoded Snippets**: Some persona logic is duplicated between `PERSONAS.md` and `snippets/`.
  - **Goal**: Create a single source of truth for agent prompts.
- **13→7 Agent Migration**: Dashboard currently shows 13 agents but only 7 are active.
  - **Goal**: Update seed.ts to reflect 7 active + 6 dormant agents.

---

## Recently Completed
- [x] **Multi-Agent Architecture Redesign**: 7 active agents, KB, model tiering, autonomous loops. (2026-02-10)
- [x] **Frontend Dashboard MVP**: Kanban, Agents, Activity pages implemented with 11 avatars. (2026-02-10)
- [x] **Backend Logic Initialized**: 7 core modules (agents, tasks, boards, etc.) implemented. (2026-02-10)
- [x] **Lelouch Refinement**: Persona updated to "Strategic Partner" with "Crisis Module". (2026-02-10)
- [x] **Database Seeded**: 13 Agents and 4 Boards created in Convex. (2026-02-10)
