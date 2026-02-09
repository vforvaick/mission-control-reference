# Mission Control Roadmap

## Vision
To create a high-fidelity, real-time command center where autonomous AI agents (Isekai Crossover Legion) collaborate seamlessly to execute complex user objectives across multiple domains.

## Planned Features

### High Priority
- [ ] **Frontend Dashboard**: Real-time Kanban board using Next.js 14 and shadcn/ui.
  - **Addresses**: Need for visual oversight of agent activity.
- [ ] **Real-time Heartbeat Monitoring**: Visual indicators for agent 'online/working/idle' states.
- [ ] **Telegram Integration**: Direct approval flow and notifications for the User.

### Medium Priority
- [ ] **Agent Memory Expansion**: Vector-based long-term memory for agents to recall past task patterns.
- [ ] **Cross-Agent Delegation**: Automated orders from Area Leads to Specialists based on expertise match.

---

## Known Issues

### Non-Critical
- **Node.js Compatibility**: Convex CLI requires Node.js v20+ for certain RegExp features.
  - **Discovered**: 2026-02-10 (During backend deployment)
  - **Impact**: Deployments fail on default Node 18 environments.
  - **Workaround**: Use NVM to switch to Node 20.2.0+.
  - **Fix**: Update `setup.md` to mandate Node 20+.
  - **Session**: Refine Lelouch Persona

---

## Technical Debt

### Medium Priority
- **Manual Seed Process**: Database seeding currently requires manual execution of `seed:defaultSeed`.
  - **Discovered**: 2026-02-10
  - **Goal**: Implement automatic migrations/seeding.
- **Hardcoded Snippets**: Some persona logic is duplicated between `PERSONAS.md` and `snippets/`.
  - **Goal**: Create a single source of truth for agent prompts.

---

## Recently Completed
- [x] **Backend Logic Initialized**: 7 core modules (agents, tasks, boards, etc.) implemented. (2026-02-10)
- [x] **Lelouch Refinement**: Persona updated to "Strategic Partner" with "Crisis Module". (2026-02-10)
- [x] **Database Seeded**: 13 Agents and 4 Boards created in Convex. (2026-02-10)
