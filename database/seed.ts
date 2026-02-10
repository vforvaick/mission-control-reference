import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const defaultSeed = mutation({
  args: {},
  handler: async (ctx) => {
    // 1. Create Boards
    const officeBoard = await ctx.db.insert("boards", {
      name: "Office Operations",
      slug: "office",
      description: "Admin, Finance, Legal, HR",
      icon: "🏢",
      color: "#3b82f6", // blue
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    const tradingBoard = await ctx.db.insert("boards", {
      name: "Trading Console",
      slug: "trading",
      description: "Crypto, Forex, Strategy, Analysis",
      icon: "📈",
      color: "#10b981", // green
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    const personalBoard = await ctx.db.insert("boards", {
      name: "Personal Life",
      slug: "personal",
      description: "Health, Learning, Travel, Family",
      icon: "🏠",
      color: "#f59e0b", // amber
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    const deploymentBoard = await ctx.db.insert("boards", {
      name: "Deployment Center",
      slug: "deployment",
      description: "DevOps, Coding, Infrastructure, CI/CD",
      icon: "🚀",
      color: "#6366f1", // indigo
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    const allBoards = [officeBoard, tradingBoard, personalBoard, deploymentBoard];

    // 2. Create Active Agents (7)
    const activeAgents = [
      // Strategic Layer
      {
        name: "Lelouch Lamperouge",
        handle: "@lelouch",
        role: "Supreme Strategist + Personal Assistant",
        layer: "strategic",
        skills: ["orchestration", "brainstorming", "resource-planning", "crisis-management", "reminders", "scheduling"],
        behavior: "methodical",
        boardIds: allBoards,
        status: "online",
      },
      // Analyst Layer
      {
        name: "C.C.",
        handle: "@cc",
        role: "Silent Analyst",
        layer: "analyst",
        skills: ["health-monitoring", "resource-analysis", "daily-digest", "data-fetching", "kb-curation"],
        behavior: "analytical",
        boardIds: allBoards,
        status: "idle",
      },
      // Leads
      {
        name: "Meliodas",
        handle: "@meliodas",
        role: "DevOps Lead",
        layer: "lead",
        skills: ["backend", "frontend", "devops", "docker", "ci-cd", "database", "ssh-monitoring", "prototyping"],
        behavior: "aggressive",
        boardIds: [deploymentBoard, officeBoard],
        leadBoardId: deploymentBoard,
        status: "idle",
      },
      {
        name: "Shiroe",
        handle: "@shiroe",
        role: "Trading Architect",
        layer: "lead",
        skills: ["quantitative-analysis", "strategy-architecture", "iteration-loops", "market-research"],
        behavior: "analytical",
        boardIds: [tradingBoard],
        leadBoardId: tradingBoard,
        status: "idle",
      },
      // Specialists
      {
        name: "Demiurge",
        handle: "@demiurge",
        role: "Security Auditor",
        layer: "specialist",
        skills: ["code-audit", "vulnerability-scan", "guardrails", "risk-assessment"],
        behavior: "methodical",
        boardIds: allBoards,
        status: "sleeping",
      },
      {
        name: "Rimuru Tempest",
        handle: "@rimuru",
        role: "Data Engineer + Backtester",
        layer: "specialist",
        skills: ["data-collection", "backtesting", "parquet-management", "data-validation"],
        behavior: "methodical",
        boardIds: [tradingBoard],
        status: "sleeping",
      },
      {
        name: "Ishigami Senku",
        handle: "@senku",
        role: "Research Specialist",
        layer: "specialist",
        skills: ["literature-search", "pattern-discovery", "strategy-ideation", "experimentation"],
        behavior: "creative",
        boardIds: allBoards,
        status: "offline", // on-demand only
      },
    ];

    // 3. Create Dormant Agents (6) — available for future scaling
    const dormantAgents = [
      {
        name: "Killua Zoldyck",
        handle: "@killua",
        role: "Backend Specialist",
        layer: "specialist",
        skills: ["backend", "api-development", "database"],
        behavior: "aggressive",
        dormant: true,
        boardIds: [deploymentBoard, officeBoard],
        status: "offline",
      },
      {
        name: "Yor Forger",
        handle: "@yor",
        role: "Frontend Specialist",
        layer: "specialist",
        skills: ["frontend", "ui-ux", "react", "css"],
        behavior: "methodical",
        dormant: true,
        boardIds: [deploymentBoard],
        status: "offline",
      },
      {
        name: "Vladilena Milizé",
        handle: "@lena",
        role: "Office Lead",
        layer: "lead",
        skills: ["project-management", "admin", "coordination"],
        behavior: "methodical",
        dormant: true,
        boardIds: [officeBoard],
        leadBoardId: officeBoard,
        status: "offline",
      },
      {
        name: "Ainz Ooal Gown",
        handle: "@ainz",
        role: "Personal Lead",
        layer: "lead",
        skills: ["personal-management", "learning", "health-tracking"],
        behavior: "cautious",
        dormant: true,
        boardIds: [personalBoard],
        leadBoardId: personalBoard,
        status: "offline",
      },
      {
        name: "Albedo",
        handle: "@albedo",
        role: "Admin Specialist",
        layer: "specialist",
        skills: ["documentation", "admin", "reporting"],
        behavior: "methodical",
        dormant: true,
        boardIds: [officeBoard],
        status: "offline",
      },
      {
        name: "Satou Kazuma",
        handle: "@kazuma",
        role: "QA Specialist",
        layer: "specialist",
        skills: ["testing", "qa", "bug-hunting"],
        behavior: "creative",
        dormant: true,
        boardIds: [deploymentBoard],
        status: "offline",
      },
    ];

    const allAgents = [...activeAgents, ...dormantAgents];

    for (const agent of allAgents) {
      await ctx.db.insert("agents", {
        ...agent,
        createdAt: Date.now(),
        lastHeartbeat: Date.now(),
        // @ts-ignore
        status: agent.status,
      });
    }

    console.log(`✅ Seed complete: 4 Boards, ${activeAgents.length} Active Agents, ${dormantAgents.length} Dormant Agents.`);
  },
});
