export default function Hero() {
  return (
    <section id="top" style={{ padding: "80px 0 64px", textAlign: "center" }}>
      <p
        style={{
          display: "inline-block",
          background: "var(--color-card)",
          color: "var(--color-primary)",
          borderRadius: 100,
          padding: "6px 16px",
          fontSize: 14,
          fontWeight: 600,
          marginBottom: 20,
        }}
      >
        طراحی وب، فروشگاه اینترنتی و نرم‌افزار سفارشی
      </p>
      <h1>وب‌سایتی که مشتری می‌آورد، نه فقط نمایش داده می‌شود</h1>
      <p
        style={{
          color: "var(--color-muted)",
          maxWidth: 680,
          margin: "0 auto 36px",
          lineHeight: 2,
          fontSize: 18,
        }}
      >
        ما برای کسب‌وکارها سایت، فروشگاه و نرم‌افزار می‌سازیم که هدف مشخص دارند:
        دیده‌شدن در گوگل، جذب درخواست و تبدیل بازدیدکننده به مشتری.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="#contact" className="btn">
          درخواست مشاوره رایگان ←
        </a>
        <a
          href="#services"
          className="btn"
          style={{ background: "transparent", color: "var(--color-primary)", border: "1px solid var(--color-primary)" }}
        >
          خدمات ما
        </a>
      </div>
      <ul
        className="flex flex-wrap justify-center gap-6"
        style={{ marginTop: 40, padding: 0, listStyle: "none", color: "var(--color-muted)", fontSize: 15 }}
      >
        <li>✓ طراحی واکنش‌گرا برای موبایل</li>
        <li>✓ سئو و سرعت بارگذاری</li>
        <li>✓ پشتیبانی بعد از تحویل</li>
      </ul>
    </section>
  );
}
