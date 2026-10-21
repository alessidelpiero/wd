import { useState } from "react";
import { siteConfig } from "../siteConfig";

const inputStyle = {
  width: "100%",
  background: "var(--color-input-bg)",
  border: "1px solid var(--color-input-border)",
  borderRadius: 11,
  padding: "11px 13px",
  fontFamily: "inherit",
  fontSize: 15,
};

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // اگر endpoint تنظیم شده باشد، فرم به سرویس ارسال می‌شود
    if (siteConfig.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(siteConfig.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("bad response");
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    // در غیر این صورت، ایمیل آماده با اطلاعات فرم باز می‌شود
    const body = [
      `نام: ${data.name}`,
      `تماس: ${data.phone}`,
      `نوع خدمت: ${data.service}`,
      "",
      data.message,
    ].join("\n");
    const subject = `درخواست مشاوره از ${data.name}`;
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
    form.reset();
  };

  return (
    <section id="contact" style={{ padding: "64px 0 80px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <h2>تماس با ما </h2>
        <p style={{ color: "var(--color-muted)", margin: "0 0 32px" }}>
          فرم زیر را پر کنید. بعد از بررسی، با شما تماس می‌گیریم و مشاوره اولیه را رایگان انجام می‌دهیم.
        </p>
      </div>

      <div style={{ background: "#fff", border: "1px solid var(--color-line)", borderRadius: 28, padding: 32, maxWidth: 760, margin: "0 auto" }}>
        {status === "sent" ? (
          <div style={{ textAlign: "center", padding: "20px 0" }} role="status">
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--color-primary)", color: "#fff", display: "grid", placeItems: "center", margin: "0 auto 16px", fontSize: 28 }}>✓</div>
            <h3>درخواست شما ثبت شد</h3>
            <p style={{ color: "var(--color-muted)" }}>به‌زودی با شما تماس می‌گیریم.</p>
            <button className="btn" onClick={() => setStatus("idle")} style={{ marginTop: 12 }}>ارسال درخواست دیگر</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="grid form-grid" style={{ gap: 16 }}>
              <div>
                <label htmlFor="name">نام و نام خانوادگی</label>
                <input id="name" name="name" placeholder="نام شما" required style={inputStyle} />
              </div>
              <div>
                <label htmlFor="phone">شماره تماس یا ایمیل</label>
                <input id="phone" name="phone" placeholder="۰۹۱۲… یا example@mail.com" required style={inputStyle} />
              </div>
            </div>

            <label htmlFor="service">نوع خدمت مورد نیاز</label>
            <select id="service" name="service" defaultValue="" required style={inputStyle}>
              <option value="" disabled>یکی را انتخاب کنید</option>
              <option>وب‌سایت شرکتی</option>
              <option>فروشگاه اینترنتی</option>
              <option>نرم‌افزار تحت وب</option>
              <option>سئو و نگهداری</option>
              <option>مشاوره و نمی‌دانم از کجا شروع کنم</option>
            </select>

            <label htmlFor="message">درباره پروژه‌تان بنویسید</label>
            <textarea id="message" name="message" rows="4" placeholder="هدف کسب‌وکار، مخاطبان و زمان مورد نظر شما..." required style={inputStyle} />

            {status === "error" && (
              <p role="alert" style={{ color: "#a25017", fontSize: 14, marginTop: 12 }}>
                ارسال انجام نشد. لطفاً دوباره تلاش کنید یا مستقیماً به {siteConfig.contactEmail} ایمیل بزنید.
              </p>
            )}

            <div style={{ marginTop: 20, textAlign: "center" }}>
              <button type="submit" className="btn" disabled={status === "sending"}>
                {status === "sending" ? "در حال ارسال..." : "ارسال درخواست مشاوره"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
