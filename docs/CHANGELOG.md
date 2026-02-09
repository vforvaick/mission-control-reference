# Changelog

All notable changes to the Mission Control Reference will be documented in this file.

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
