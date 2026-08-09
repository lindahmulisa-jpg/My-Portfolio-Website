import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = links.find((l) => {
        const el = document.querySelector(l.href);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 140 && r.bottom > 140;
      });
      if (current) setActive(current.href);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 sm:px-7 ${
          scrolled ? "glass-panel glow-ring w-[92%]" : "w-[96%] border border-transparent"
        }`}
      >
        <a
          href="#home"
          className="font-display text-lg font-extrabold tracking-tight transition-transform duration-300 hover:scale-105"
        >
          Lindah<span className="text-gradient"> S.</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l, i) => (
            <li key={l.href} style={{ animationDelay: `${i * 80}ms` }} className="animate-fade-in">
              <a
                href={l.href}
                className={`nav-link ${active === l.href ? "text-lavender" : "text-muted-foreground"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105 md:inline-block"
          style={{ backgroundImage: "var(--gradient-primary)" }}
        >
          Hire me
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="text-foreground transition-transform duration-300 hover:rotate-90 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`mx-auto overflow-hidden px-4 transition-all duration-500 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="glass-panel mt-3 space-y-3 rounded-3xl p-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="nav-link block text-muted-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
