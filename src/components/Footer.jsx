const links = [
  { label: "خدمات", href: "#services" },
  { label: "روند کار", href: "#process" },
  { label: "نمونه‌کارها", href: "#portfolio" },
  { label: "سوالات", href: "#faq" },
  { label: "تماس", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-line)", padding: "40px 0", fontSize: 14 }}>
      <div
        className="wrap flex flex-wrap items-center justify-between"
        style={{ gap: 16, color: "var(--color-muted)" }}
      >
        <div>
          <strong style={{ color: "var(--color-primary)", fontSize: 18 }}>شهرمد</strong>
          <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--color-muted2)" }}>
            طراحی وب و توسعه نرم‌افزار · shahrmad.ir
          </p>
        </div>
        <nav aria-label="لینک‌های پایین صفحه" className="flex flex-wrap" style={{ gap: 20 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
