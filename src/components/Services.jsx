const services = [
  {
    title: "طراحی وب‌سایت شرکتی",
    desc: "معرفی حرفه‌ای کسب‌وکار شما با پیام روشن و فرم‌های درخواست که بازدیدکننده را به مشتری تبدیل می‌کند.",
    for: "شرکت‌ها، مشاوران، کلینیک‌ها و خدمات حرفه‌ای",
  },
  {
    title: "فروشگاه اینترنتی",
    desc: "پرداخت آنلاین، مدیریت محصولات و سفارش‌ها، و تجربه خرید ساده روی موبایل و دسکتاپ.",
    for: "فروشندگانی که می‌خواهند ۲۴ ساعته بفروشند",
  },
  {
    title: "نرم‌افزار تحت وب سفارشی",
    desc: "سامانه‌های مدیریتی، داشبورد و ابزارهایی که دقیقاً مطابق فرایند کاری شما ساخته می‌شوند.",
    for: "کسب‌وکارهایی که با اکسل و کاغذ کار را سخت کرده‌اند",
  },
  {
    title: "سئو و نگهداری",
    desc: "بهینه‌سازی برای گوگل، به‌روزرسانی امنیتی و پشتیبانی مداوم تا سایت شما همیشه در دسترس بماند.",
    for: "کسب‌وکارهایی که سایت دارند اما بازدیدی نمی‌گیرند",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "64px 0" }}>
      <h2 style={{ textAlign: "center" }}>خدمات ما</h2>
      <p style={{ textAlign: "center", color: "var(--color-muted)", margin: "0 auto 40px", maxWidth: 640 }}>
        هر پروژه از نیاز شما شروع می‌شود. این‌ها خدماتی هستند که بیشتر مشتریان ما به آن‌ها نیاز دارند.
      </p>
      <div
        className="grid services-grid"
        style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}
      >
        {services.map((s) => (
          <article key={s.title} className="card">
            <h3>{s.title}</h3>
            <p style={{ margin: "0 0 12px", color: "var(--color-muted)", fontSize: 15 }}>{s.desc}</p>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "var(--color-primary)" }}>
              مناسب برای: {s.for}
            </p>
          </article>
        ))}
      </div>
      <div className="flex justify-center" style={{ marginTop: 32 }}>
        <a href="#contact" className="btn">
          پروژه‌ام را برای بررسی ثبت می‌کنم
        </a>
      </div>
    </section>
  );
}
