export const skills = [
  { index: "01", title: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { index: "02", title: "Backend", items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Supabase"] },
  { index: "03", title: "AI Engineering", items: ["Python", "LLM APIs", "RAG", "Embeddings", "Vector Databases", "AI Agents", "Structured Output"] },
  { index: "04", title: "Tools & Delivery", items: ["Git", "GitHub", "Docker", "Vercel", "Postman", "Figma"] },
];

export const projects = [
  {
    slug: "panda",
    title: "Panda",
    code: "SCOPE: FULL_STACK",
    year: "YEAR: 2025",
    summary: "An internal rental property management system for properties, units, tenants, leases, documents, maps, and operational workflows.",
    description: "Panda is a full-stack property management platform built with Next.js and PostgreSQL. It supports multi-unit properties, agent and tenant directories, complete lease history, protected document storage, immutable audit logs, map-based search, vacancy tracking, and lease-expiry workflows.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    repository: "https://github.com/95766963/panda-property-management",
    visual: "dashboard",
  },
  {
    slug: "pc-troubleshooting-rag",
    title: "PC Troubleshooting RAG",
    code: "SCOPE: RAG_SYSTEM",
    year: "YEAR: 2025",
    summary: "A document-grounded RAG assistant that answers PC hardware troubleshooting questions using a real staff training guide.",
    description: "This Python RAG system retrieves relevant sections from a PC diagnostics guide and asks Claude to answer only from that evidence with citations. It compares deterministic TF-IDF retrieval against sentence-embedding search: semantic retrieval improved the fixed evaluation set from 8/10 to 10/10 correct results.",
    stack: ["Python", "Claude API", "Scikit-learn", "Sentence Transformers"],
    repository: "https://github.com/95766963/pc-troubleshooting-rag",
    visual: "core",
  },
] as const;

export type Project = (typeof projects)[number];
