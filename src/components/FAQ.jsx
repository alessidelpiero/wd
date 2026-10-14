const items = [
  {
    q: "پروژه من چقدر زمان می‌برد؟",
    a: "بسته به حجم و نوع پروژه متفاوت است. بعد از مشاوره اولیه، یک زمان‌بندی مشخص و مرحله‌به‌مرحله به شما اعلام می‌کنیم.",
  },
  {
    q: "آیا بعد از تحویل سایت پشتیبانی دارید؟",
    a: "بله. برای تغییرات، به‌روزرسانی و رفع مشکلات، پشتیبانی جداگانه‌ای ارائه می‌دهیم که می‌توانید در قالب یک قرارداد نگهداری فعال کنید.",
  },
  {
    q: "من فقط یک ایده دارم، می‌توانید کمک کنید؟",
    a: "قطعاً. بسیاری از پروژه‌های ما از همین نقطه شروع شده‌اند. در جلسه مشاوره، ایده را به یک نقشه کار و برآورد مشخص تبدیل می‌کنیم.",
  },
  {
    q: "سایت من در گوگل دیده می‌شود؟",
    a: "تمام سایت‌هایی که می‌سازیم با رعایت اصول سئوی فنی طراحی می‌شوند. برای رتبه‌گیری بهتر، می‌توانیم سئوی محتوایی را هم به پروژه اضافه کنیم.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: "64px 0" }}>
      <h2 style={{ textAlign: "center" }}>سوالات پرتکرار</h2>
      <div style={{ maxWidth: 760, margin: "0 auto", display: "grid", gap: 12 }}>
        {items.map((it) => (
          <details
            key={it.q}
            style={{
              background: "#fff",
              border: "1px solid var(--color-line)",
              borderRadius: 20,
              padding: "16px 20px",
            }}
          >
            <summary style={{ fontWeight: 700, cursor: "pointer" }}>{it.q}</summary>
            <p style={{ color: "var(--color-muted)", marginTop: 10 }}>{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
