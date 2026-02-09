# Architecture

## System Overview

OpenClaw Mission Control is a real-time, multi-agent task management platform. It consists of:
1. **React Dashboard** (Vercel) — Real-time Kanban with agent integration
2. **Convex Backend** (Cloud) — Serverless database + functions
3. **Agent Gateway** (VPS) — Autonomous agent heartbeat manager
4. **LLM Provider** (VPS) — CLIproxy for model access

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  React Dashboard│◄───►│  Convex Cloud   │◄───►│  VPS Gateway    │
│  (Vercel)       │     │  (Database+API) │     │  (PM2 Agents)   │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                                                ┌────────▼────────┐
                                                │  LLM Provider   │
                                                │  (CLIproxy)     │
                                                └─────────────────┘
```

---

## The 8-Phase Heartbeat Protocol

Every agent follows this loop on each wake cycle:

| Phase | Name | Action |
|-------|------|--------|
| 1 | Wake Up | Update status to `online`, load board-specific resources |
| 2 | Check Mentions | Process pending @mentions with hierarchical prompt |
| 3 | Check Messages | Handle agent-to-agent communication |
| 4 | Route | Select best board context (priority scoring) |
| 5 | Pre-Claim Check | Verify task has sufficient documentation/SOP |
| 6 | Claim | Lock and claim high-priority tasks |
| 7 | Execute | Run sandboxed commands via task-executor |
| 8 | Sleep | Update status to `idle`, report completion |

> **Standby Optimization**: High-frequency agents (like Lelouch @ 1min) skip Phase 4 if no inbox work and routing was done recently (<15min).

---

## 4-Layer Organizational Hierarchy

```
┌─────────────────────────────────────┐
│         FAIQ (User/Visionary)       │
│         Final Authority             │
└─────────────────┬───────────────────┘
                  │
┌─────────────────▼───────────────────┐
│      LELOUCH (Supreme Strategist)   │
│   Strategic Partner, Orchestrator   │
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

### Layer Responsibilities:
- **Strategic (Lelouch)**: Global context, orchestration, "Crisis Mode" decisions
- **Secretary (C.C.)**: User reminders, logistics, simple tactical tasks
- **Tactical (Leads)**: Domain-specific management (Office, Trading, Personal, Deployment)
- **Operational (Specialists)**: Execution (Backend, Frontend, Research, Data)

---

## Skill-Based Routing

Agents are not locked to boards. On every heartbeat:
1. Scan **ALL** boards
2. Calculate **Expertise Match Score** (0.0 - 1.0)
3. Weight global priority + skill relevance
4. Route to the "winning" board

This ensures no skill is left idle — specialists migrate to where they're needed most.

---

## Key VPS Gateway Components

| Component | Purpose |
|-----------|---------|
| `cron-manager.js` | Dynamic agent scheduling with Priority Scan |
| `heartbeat.js` | 8-phase agent lifecycle |
| `task-executor.js` | Sandboxed command execution |
| `agent-coordinator.js` | Inter-agent messaging |
| `multi-board-router.js` | Board priority routing |
| `telegram-webhook.js` | Real-time Telegram integration |

---

## Escalation Flow

```
Specialist → (SOP Gap) → Lead → (Strategic Gap) → Lelouch → (Vision Gap) → User
Demiurge (Security/Integrity) --------------------------→ (Critical Fail) → User
```

All "Context Gaps" escalate upward. "Integrity Risks" escalate directly via Demiurge.
