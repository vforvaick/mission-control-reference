# Technical Handover — Mission Control Dashboard

**Project**: Mission Control Dashboard  
**Handover Date**: 2026-02-10  
**Prepared By**: Architect (C.C.)  
**Recipient**: Junior Manager / Developer

---

## 1. Project Overview

Build a real-time Kanban dashboard for the **Isekai Crossover Legion** multi-agent AI system.

**What it does:**
- Display tasks across 4 domains (Office, Trading, Personal, Deployment)
- Show 13 AI agents with live status
- Stream activity feed in real-time

---

## 2. Tech Stack

| Component | Technology | Version |
|-----------|------------|---------|
| Frontend | Next.js (App Router) | 14.x |
| UI Components | shadcn/ui | latest |
| Styling | Tailwind CSS | 3.x |
| Database | Convex (cloud) | 1.x |
| Hosting | Vercel | - |
| Drag & Drop | @dnd-kit | 6.x |

---

## 3. Backend (Already Done ✅)

The backend is **fully operational**. No work needed.

**Deployment**: `ceaseless-bullfrog-373`  
**URL**: `https://ceaseless-bullfrog-373.convex.cloud`

### Available Functions

| Module | Functions |
|--------|-----------|
| `agents` | list, get, heartbeat, updateStatus, claimTask, releaseTask |
| `tasks` | list, get, create, update, move, claim, complete, appendExecutionLog |
| `boards` | list, get, create, update |
| `agentMessages` | send, acknowledge, listUnacknowledged |
| `activity` | list, log |
| `comments` | create, listByTask |
| `subscriptions` | acknowledge, listUnacknowledged |

---

## 4. Frontend Tasks (To Build)

### Phase 1: Project Setup (~30 min)
```bash
# Create Next.js project
npx create-next-app@latest mission-control-dashboard \
  --typescript --tailwind --eslint --app --src-dir=false

cd mission-control-dashboard

# Install shadcn/ui
npx shadcn-ui@latest init
# Choose: dark theme, zinc color, CSS variables: yes

# Install dependencies
npm install convex @dnd-kit/core @dnd-kit/sortable lucide-react
```

### Phase 2: Layout (~1 hour)
- [ ] Create `app/layout.tsx` with ConvexProvider
- [ ] Create `components/layout/sidebar.tsx`
- [ ] Create `components/layout/header.tsx`
- [ ] Apply dark theme globally

### Phase 3: Kanban Board (~2 hours)
- [ ] Create `components/kanban/board.tsx`
- [ ] Create `components/kanban/column.tsx`
- [ ] Create `components/kanban/task-card.tsx`
- [ ] Implement drag-and-drop with @dnd-kit
- [ ] Connect to `tasks:list` and `tasks:move`

### Phase 4: Agent Status (~1 hour)
- [ ] Create `app/agents/page.tsx`
- [ ] Create `components/agents/agent-grid.tsx`
- [ ] Create `components/agents/agent-card.tsx`
- [ ] Connect to `agents:list` (real-time)

### Phase 5: Activity Feed (~1 hour)
- [ ] Create `app/activity/page.tsx`
- [ ] Create `components/activity/activity-feed.tsx`
- [ ] Connect to `activity:list`
- [ ] Add filter chips

### Phase 6: Agent Avatars (~1 hour)
- [ ] Generate 13 character portraits (minimalist anime style)
- [ ] Save to `public/avatars/`
- [ ] Integrate into agent cards

---

## 5. Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_CONVEX_URL=https://ceaseless-bullfrog-373.convex.cloud
```

---

## 6. Design Tokens

Use these in `tailwind.config.js` or `globals.css`:

```css
:root {
  --background: 222.2 84% 4.9%;    /* Near black */
  --foreground: 210 40% 98%;        /* Off white */
  --primary: 0 72% 51%;             /* Red (Code Geass) */
  --secondary: 45 93% 47%;          /* Gold (Overlord) */
  --accent: 262 83% 58%;            /* Purple */
}
```

---

## 7. File Structure

```
mission-control-dashboard/
├── app/
│   ├── layout.tsx          # Root + providers
│   ├── page.tsx            # Kanban (home)
│   ├── agents/page.tsx     # Agent grid
│   └── activity/page.tsx   # Activity feed
├── components/
│   ├── ui/                 # shadcn components
│   ├── kanban/             # Board, Column, TaskCard
│   ├── agents/             # AgentGrid, AgentCard
│   ├── activity/           # ActivityFeed
│   └── layout/             # Sidebar, Header
├── lib/
│   ├── convex.ts           # Client setup
│   └── utils.ts            # shadcn utils
├── public/avatars/         # Agent portraits
└── .env.local
```

---

## 8. Deployment

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Add environment variable: `NEXT_PUBLIC_CONVEX_URL`
5. Deploy

---

## 9. Verification Checklist

- [ ] `npm run build` passes
- [ ] Kanban drag-drop works
- [ ] Tasks update in real-time
- [ ] Agent status shows correct state
- [ ] Activity feed streams live
- [ ] Dark theme renders correctly
- [ ] Responsive on mobile

---

## 10. Reference Docs

| Resource | Location |
|----------|----------|
| Backend Schema | `mission-control-reference/database/schema.ts` |
| Agent Personas | `mission-control-reference/docs/PERSONAS.md` |
| Architecture | `mission-control-reference/docs/ARCHITECTURE.md` |
| Convex Dashboard | https://dashboard.convex.dev/d/ceaseless-bullfrog-373 |

---

## 11. Contact

Any questions? Escalate to **@lelouch** (Supreme Strategist) via Mission Control.

---

*End of Handover Document*
