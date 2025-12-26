import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function MainNav() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md">
      <div className="section-shell">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-cyan-400/30 via-cyan-300/20 to-amber-300/25 shadow-[0_0_25px_rgba(39,197,255,0.45)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(39,197,255,0.6),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(246,199,105,0.55),transparent_45%)]" />
            </div>
            <div className="leading-tight">
              <span className="block text-sm uppercase tracking-[0.28em] text-white/70">
                n8nGalaxy
              </span>
              <span className="gradient-text-cyan text-xl font-semibold text-white">
                Automation Studio
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/jarvis"
              className="btn-ghost hidden text-sm font-semibold text-white/85 sm:inline-flex"
            >
              Jarvis AI
            </Link>
            <Link
              href="/book"
              className="btn-primary text-sm font-semibold"
              aria-label="Book a discovery call"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
