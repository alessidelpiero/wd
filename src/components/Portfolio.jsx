import { siteConfig } from "../siteConfig";

export default function Portfolio() {
  const projects = siteConfig.projects;
  if (projects.length === 0) return null;

  return (
    <section id="portfolio" style={{ padding: "64px 0" }}>
      <h2 style={{ textAlign: "center" }}>نمونه‌کارها</h2>
      <p style={{ textAlign: "center", color: "var(--color-muted)", margin: "0 auto 40px", maxWidth: 640 }}>
        چند پروژه‌ای که برای کسب‌وکارهای واقعی ساخته‌ایم.
      </p>
      <div className="grid portfolio-grid" style={{ gap: 20 }}>
        {projects.map((p) => (
          <article key={p.title} className="card" style={{ background: "#fff", border: "1px solid var(--color-line)" }}>
            <span style={{ fontSize: 13, color: "var(--color-primary)", fontWeight: 600 }}>{p.type}</span>
            <h3 style={{ marginTop: 8 }}>{p.title}</h3>
            <p style={{ margin: 0, color: "var(--color-muted)", fontSize: 14 }}>{p.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
