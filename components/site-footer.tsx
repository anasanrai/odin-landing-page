import Link from "next/link";

const footerLinks = [
  {
    title: "Solutions",
    links: [
      { href: "/solutions", label: "Browse library" },
      { href: "/services", label: "Implementation" },
      { href: "/pricing", label: "Pricing" },
      { href: "/book", label: "Book a call" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { href: "/jarvis", label: "Jarvis AI" },
      { href: "/app", label: "Client portal" },
      { href: "/admin", label: "Admin" },
      { href: "/contact", label: "Support" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-transparent via-white/5 to-white/10 py-12">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="glass-soft p-6">
            <p className="text-sm uppercase tracking-[0.32em] text-white/60">
              n8nGalaxy
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              AI automation and chatbot studio for teams that ship fast.
            </p>
            <p className="mt-4 text-sm text-white/70">
              Crafted with a premium galaxy lamp aesthetic — glass, glow, and
              clarity for every workflow.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {column.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} n8nGalaxy. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
