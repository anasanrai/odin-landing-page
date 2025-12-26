import type { Metadata } from "next";
import Link from "next/link";

const solutions = [
  {
    slug: "customer-ai-concierge",
    title: "Customer AI Concierge",
    tagline: "Voice + chat concierge that books calls and syncs notes.",
    effort: "Setup: 3-5 days",
    tools: ["OpenAI", "Supabase", "Slack", "HubSpot"],
  },
  {
    slug: "webhook-safety-hub",
    title: "Webhook Safety Hub",
    tagline: "Secure webhooks with masked URLs, retries, and audit trails.",
    effort: "Setup: 2 days",
    tools: ["Supabase RLS", "Cron", "Signed payloads"],
  },
  {
    slug: "revops-scoring-engine",
    title: "RevOps Scoring Engine",
    tagline: "Lead scoring, routing, and pipeline alerts with evidence.",
    effort: "Setup: 4-6 days",
    tools: ["Clearbit", "OpenAI", "Salesforce", "Email"],
  },
  {
    slug: "csat-intelligence-loop",
    title: "CSAT Intelligence Loop",
    tagline: "Summarize tickets, track sentiment, and trigger playbooks.",
    effort: "Setup: 3-4 days",
    tools: ["Zendesk", "Amplitude", "LLM guardrails"],
  },
];

export const metadata: Metadata = {
  title: "Solutions | n8nGalaxy",
  description:
    "Browse premium automation and AI chatbot solutions crafted by n8nGalaxy. Transparent scope, effort, and outcomes.",
};

export default function SolutionsPage() {
  return (
    <div className="section-shell space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-white/60">
          Solutions library
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Production-grade automations, ready to tailor.
        </h1>
        <p className="max-w-2xl text-white/70">
          Explore curated blueprints with clear effort, outcomes, and safety.
          Every solution is RLS-friendly, server-rendered, and guarded with
          audit logs and retries.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {solutions.map((solution) => (
          <article
            key={solution.slug}
            className="glass-card hover-lift glow-hover p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="pill text-xs text-white/80">{solution.effort}</p>
              <span className="text-xs uppercase tracking-[0.18em] text-white/60">
                {solution.tools.length} tools
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              {solution.title}
            </h2>
            <p className="mt-2 text-sm text-white/70">{solution.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {solution.tools.map((tool) => (
                <span key={tool} className="pill text-xs text-white/85">
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Link href={`/solutions/${solution.slug}`} className="btn-ghost">
                View details
              </Link>
              <Link href="/book" className="btn-primary">
                Request install
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="glass-soft p-6">
        <p className="text-sm uppercase tracking-[0.24em] text-white/60">
          Need something custom?
        </p>
        <p className="mt-2 text-lg font-semibold text-white">
          Tell us your stack, constraints, and outcomes. We will scope it with
          clear effort and risk upfront.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-ghost">
            Talk to a human
          </Link>
          <Link href="/jarvis" className="btn-primary">
            Try Jarvis AI
          </Link>
        </div>
      </div>
    </div>
  );
}
