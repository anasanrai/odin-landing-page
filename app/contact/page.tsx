import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | n8nGalaxy",
  description:
    "Contact n8nGalaxy for AI automation, chatbot, and workflow projects. Book a call or send a project brief.",
};

export default function ContactPage() {
  return (
    <div className="section-shell space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-white/60">
          Contact
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Let&apos;s plan your next workflow.
        </h1>
        <p className="max-w-2xl text-white/70">
          Share your stack, data sensitivity, and outcomes. We respond with a
          scoped plan, guardrails, and a path to production within days.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold text-white">
            Send a project brief
          </h2>
          <p className="mt-2 text-sm text-white/70">
            No bots here — every message is reviewed by our architects.
          </p>
          <form className="mt-6 grid gap-4">
            <label className="space-y-2">
              <span className="text-sm text-white/75">Full name</span>
              <input
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-400/30"
                name="name"
                placeholder="Ada Lovelace"
                type="text"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm text-white/75">Work email</span>
              <input
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-400/30"
                name="email"
                placeholder="you@company.com"
                type="email"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm text-white/75">Project summary</span>
              <textarea
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-400/30"
                name="summary"
                placeholder="What do you want to automate? Who are the users? Any security constraints?"
                rows={4}
              />
            </label>
            <div className="flex flex-wrap gap-3">
              <button type="submit" className="btn-primary">
                Send message
              </button>
              <Link href="/book" className="btn-ghost">
                Book a live call
              </Link>
            </div>
          </form>
        </div>

        <div className="glass-soft p-8">
          <h2 className="text-xl font-semibold text-white">
            Direct channels
          </h2>
          <div className="mt-4 space-y-4 text-sm text-white/75">
            <p>
              <span className="font-semibold text-white">Email: </span>
              hello@n8ngalaxy.com
            </p>
            <p>
              <span className="font-semibold text-white">Response time: </span>
              within 24 hours on weekdays.
            </p>
            <p>
              <span className="font-semibold text-white">Office hours: </span>
              Mon–Fri, 9am–6pm PT.
            </p>
          </div>
          <div className="mt-6 space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-white/60">
              What to include
            </p>
            <ul className="space-y-2 text-sm text-white/75">
              <li>• Your stack: CRMs, data warehouse, messaging.</li>
              <li>• Compliance needs: RLS, audit logs, encryption.</li>
              <li>• Desired outcomes and time-to-value targets.</li>
            </ul>
          </div>
          <div className="mt-6 glass-card p-4">
            <p className="text-sm font-semibold text-white">
              Prefer AI assistance?
            </p>
            <p className="text-sm text-white/70">
              Start with Jarvis and draft your workflow spec — we&apos;ll refine
              and implement it with guardrails.
            </p>
            <Link href="/jarvis" className="btn-ghost mt-4 inline-flex">
              Launch Jarvis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
