import Link from "next/link";

const solutionPreviews = [
  {
    title: "AI Concierge for Lead Intake",
    category: "Chatbots",
    description:
      "Voice and chat concierge that qualifies leads, syncs to HubSpot, and books calls automatically.",
    badges: ["LLM Guardrails", "HubSpot", "Calendly"],
  },
  {
    title: "Revenue Ops Automation Desk",
    category: "RevOps",
    description:
      "Enrich leads, score intent, route to reps, and trigger playbooks with explainable audit logs.",
    badges: ["Clearbit", "Slack", "RLS safe"],
  },
  {
    title: "Customer Health Monitor",
    category: "Success",
    description:
      "Daily health scoring, churn alerts, and proactive workflows that notify owners before risk rises.",
    badges: ["Notion", "Amplitude", "Email"],
  },
];

const benefits = [
  {
    title: "Solutions-first",
    detail:
      "Browse production-ready automations with transparent scope, effort, and outcomes before you buy.",
  },
  {
    title: "Glass-box safety",
    detail:
      "Guardrails, audit logs, and RLS-friendly data paths keep your AI and webhooks compliant from day one.",
  },
  {
    title: "Ship faster",
    detail:
      "Premium templates + expert implementation so your team gets to value in days, not quarters.",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="section-shell grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-6">
          <div className="pill glow-hover gradient-text-cyan text-sm font-semibold">
            <span className="text-white">NEW</span>
            <span className="text-white/80">Jarvis AI workflow studio</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            <span className="gradient-text-cyan text-glow-cyan">
              n8nGalaxy
            </span>{" "}
            — AI automation & chatbot studio for teams that move fast.
          </h1>
          <p className="max-w-2xl text-lg text-white/75">
            We craft production-grade automations, chatbots, and data pipelines
            with transparent guardrails. Browse solutions, request a custom
            build, or let Jarvis AI draft your next workflow spec.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/solutions" className="btn-primary text-base">
              Explore solutions
            </Link>
            <Link href="/book" className="btn-ghost text-base">
              Book a strategy call
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="glass-soft p-4">
              <p className="text-sm text-white/60">Automation templates</p>
              <p className="mt-2 text-2xl font-semibold text-white">140+</p>
              <p className="text-xs text-white/60">curated & versioned</p>
            </div>
            <div className="glass-soft p-4">
              <p className="text-sm text-white/60">Avg. go-live</p>
              <p className="mt-2 text-2xl font-semibold text-white">5 days</p>
              <p className="text-xs text-white/60">from kickoff to launch</p>
            </div>
            <div className="glass-soft p-4">
              <p className="text-sm text-white/60">Security-first</p>
              <p className="mt-2 text-2xl font-semibold text-white">
                RLS ready
              </p>
              <p className="text-xs text-white/60">Supabase-native</p>
            </div>
          </div>
        </div>

        <div className="glass-card media-frame p-8">
          <div className="relative z-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-white/70">
              Galaxy Lamp Canvas
            </p>
            <p className="text-2xl font-semibold text-white">
              The premium glass aesthetic, tuned for clarity and trust.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/70">Glow palette</p>
                <p className="text-lg font-semibold text-white">Cyan + Gold</p>
                <p className="text-xs text-white/60">#27c5ff / #f6c769</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/70">Glass depth</p>
                <p className="text-lg font-semibold text-white">Blur 18px</p>
                <p className="text-xs text-white/60">Soft gradients + noise</p>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/70">
                Micro-interactions on hover
              </p>
              <p className="text-lg font-semibold text-white">
                Lift, glow, and clarity for every call-to-action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-white/60">
              Solutions-first
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Browse automation blueprints
            </h2>
            <p className="text-white/70">
              Each solution ships with effort, tools, and outcomes so you know
              exactly what you get.
            </p>
          </div>
          <Link href="/solutions" className="btn-ghost">
            View all solutions
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {solutionPreviews.map((solution) => (
            <article
              key={solution.title}
              className="glass-card hover-lift glow-hover p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                {solution.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {solution.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {solution.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {solution.badges.map((badge) => (
                  <span key={badge} className="pill text-xs text-white/85">
                    {badge}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell glass-card p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-white/60">
              Why n8nGalaxy
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Premium delivery, safety-first, automation that lasts.
            </h2>
            <p className="text-white/70">
              A glassmorphic galaxy lamp aesthetic meets disciplined execution:
              RLS-ready Supabase, server-side OpenAI calls, guarded webhooks,
              and transparent status for every workflow.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="pill text-xs text-white/85">Supabase auth</span>
              <span className="pill text-xs text-white/85">Server guards</span>
              <span className="pill text-xs text-white/85">Audit logs</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="glass-soft hover-lift p-4">
                <p className="text-sm font-semibold text-white">
                  {benefit.title}
                </p>
                <p className="mt-2 text-sm text-white/70">{benefit.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
