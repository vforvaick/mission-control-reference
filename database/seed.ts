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

    // 2. Create Agents
    const agents = [
      // Strategic
      {
        name: "Lelouch Lamperouge",
        handle: "@lelouch",
        role: "Supreme Strategist",
        boardIds: [officeBoard, tradingBoard, personalBoard, deploymentBoard],
        status: "online",
      },
      {
        name: "C.C.",
        handle: "@cc",
        role: "Chief of Staff",
        boardIds: [officeBoard, tradingBoard, personalBoard, deploymentBoard],
        status: "idle",
      },
      // Tactical (Leads)
      {
        name: "Vladilena Milizé",
        handle: "@lena",
        role: "Office Lead",
        boardIds: [officeBoard],
        leadBoardId: officeBoard,
        status: "idle",
      },
      {
        name: "Shiroe",
        handle: "@shiroe",
        role: "Trading Lead",
        boardIds: [tradingBoard],
        leadBoardId: tradingBoard,
        status: "idle",
      },
      {
        name: "Ainz Ooal Gown",
        handle: "@ainz",
        role: "Personal Lead",
        boardIds: [personalBoard],
        leadBoardId: personalBoard,
        status: "idle",
      },
      {
        name: "Meliodas",
        handle: "@meliodas",
        role: "Deployment Lead",
        boardIds: [deploymentBoard],
        leadBoardId: deploymentBoard,
        status: "idle",
      },
      // Specialists
      {
        name: "Killua Zoldyck",
        handle: "@killua",
        role: "Backend Specialist",
        boardIds: [deploymentBoard, officeBoard],
        status: "sleeping",
      },
      {
        name: "Yor Forger",
        handle: "@yor",
        role: "Frontend Specialist",
        boardIds: [deploymentBoard],
        status: "sleeping",
      },
      {
        name: "Rimuru Tempest",
        handle: "@rimuru",
        role: "Data Analyst",
        boardIds: [tradingBoard],
        status: "sleeping",
      },
      {
        name: "Albedo",
        handle: "@albedo",
        role: "Admin Specialist",
        boardIds: [officeBoard],
        status: "sleeping",
      },
      {
        name: "Satou Kazuma",
        handle: "@kazuma",
        role: "QA Specialist",
        boardIds: [deploymentBoard],
        status: "sleeping",
      },
      {
        name: "Ishigami Senku",
        handle: "@senku",
        role: "Research Specialist",
        boardIds: [deploymentBoard, tradingBoard, officeBoard, personalBoard],
        status: "sleeping",
      },
      {
        name: "Demiurge",
        handle: "@demiurge",
        role: "Security Auditor",
        boardIds: [deploymentBoard],
        status: "sleeping",
      },
    ];

    for (const agent of agents) {
      await ctx.db.insert("agents", {
        ...agent,
        createdAt: Date.now(),
        lastHeartbeat: Date.now(),
        // @ts-ignore
        status: agent.status,
      });
    }

    console.log("✅ Seed complete: 4 Boards, 13 Agents created.");
  },
});
