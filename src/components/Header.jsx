import { useState, useEffect } from "react";
import { siteConfig } from "../siteConfig";

const allLinks = [
  { label: "خدمات", href: "#services", always: true },
  { label: "روند کار", href: "#process", always: true },
  { label: "نمونه‌کارها", href: "#portfolio", show: siteConfig.projects.length > 2 },
  { label: "سوالات", href: "#faq", always: true },
  { label: "تماس", href: "#contact", always: true },
];
const links = allLinks.filter((l) => l.always || l.show);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className="sticky top-0 z-[100] transition-shadow"
      style={{
        background: "var(--color-surface)",
        borderBottom: "1px solid var(--color-line)",
        boxShadow: scrolled ? "0 4px 16px rgba(32,45,40,0.06)" : "none",
      }}
    >
      <div className="wrap flex items-center justify-between" style={{ minHeight: 76, gap: 24 }}>
       <a href="https://shahrmad.ir/" onClick={close} className="flex items-center" style={{ gap: 12, textDecoration: "none" }}>
          <span
    style={{
      width: 44, height: 44, borderRadius: 10,
      background: "#1f5b47", color: "#cfe9a6",
      display: "grid", placeItems: "center",
      fontWeight: 900, fontSize: 22,
    }}
  >
    ش
  </span>
  <span style={{ textAlign: "right" }}>
    <strong style={{ display: "block", fontSize: 22, color: "var(--color-primary)" }}>شهرمد</strong>
    <small style={{ display: "block", fontSize: 12, color: "var(--color-muted)" }}>فناوری در خدمت ارتباط</small>
  </span>

</a>

        <nav aria-label="ناوبری اصلی" className="hidden md:flex" style={{ gap: 28, fontSize: 15 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn hidden sm:inline-flex">درخواست مشاوره رایگان</a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 rounded-full grid place-items-center"
            style={{ background: "var(--color-card)", border: 0, cursor: "pointer" }}
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="wrap md:hidden py-4 flex flex-col gap-3" style={{ borderTop: "1px solid var(--color-line)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close} className="py-2">{l.label}</a>
          ))}
          <a href="#contact" onClick={close} className="btn self-start mt-2">درخواست مشاوره رایگان</a>
        </div>
      )}
    </header>
  );
}
