const steps = [
  { n: "۱", title: "شناخت نیاز", desc: "در یک تماس کوتاه هدف کسب‌وکار، مخاطب و بودجه را بررسی می‌کنیم." },
  { n: "۲", title: "طراحی و تایید", desc: "قبل از برنامه‌نویسی، ساختار و طراحی را نشان می‌دهیم تا با هم تایید کنیم." },
  { n: "۳", title: "توسعه و تست", desc: "پروژه را مرحله‌به‌مرحله می‌سازیم و در هر مرحله نتیجه را با شما مرور می‌کنیم." },
  { n: "۴", title: "راه‌اندازی و پشتیبانی", desc: "پس از تحویل، سایت را روی دامنه منتشر و پشتیبانی آن را ادامه می‌دهیم." },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: "64px 0", background: "#fff", borderRadius: 28 }}>
      <div style={{ padding: "48px 32px" }}>
        <h2 style={{ textAlign: "center" }}>مسیر پروژه با ما</h2>
        <p style={{ textAlign: "center", color: "var(--color-muted)", margin: "0 auto 40px", maxWidth: 640 }}>
          بدون سردرگمی و بدون غافلگیری: شما از ابتدا می‌دانید پروژه کجای مسیر است.
        </p>
        <ol
          className="grid process-grid"
          style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 20, listStyle: "none", padding: 0, margin: 0 }}
        >
          {steps.map((s) => (
            <li key={s.n} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--color-primary)",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 20,
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto 16px",
                }}
              >
                {s.n}
              </div>
              <h3>{s.title}</h3>
              <p style={{ margin: 0, color: "var(--color-muted)", fontSize: 15 }}>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
