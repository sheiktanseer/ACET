import nodemailer from "nodemailer";

/**
 * POST /api/contact
 * Body: { name, email, phone, type, message }
 * Sends an email to the admissions inbox via SMTP.
 */
export async function POST(req) {
  try {
    const { name, email, phone, type, message } = await req.json();

    /* ── Basic validation ── */
    if (!name || !email || !message) {
      return Response.json({ error: "Name, email and message are required." }, { status: 400 });
    }

    /* ── Nodemailer transporter ── */
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,          // e.g. smtp.gmail.com
      port:   parseInt(process.env.SMTP_PORT ?? "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,           // your Gmail / SMTP address
        pass: process.env.SMTP_PASS,           // Gmail App Password (not your login password)
      },
    });

    /* ── Email to college admissions ── */
    await transporter.sendMail({
      from:    `"Annai College Website" <${process.env.SMTP_USER}>`,
      to:      process.env.MAIL_TO ?? "admissions@annaiengineering.edu.in",
      replyTo: email,
      subject: `[Website Enquiry] ${type ? `${type} — ` : ""}${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e">
          <div style="background:#112a52;padding:24px 32px;border-radius:8px 8px 0 0">
            <h2 style="color:#fff;margin:0;font-size:20px">New Website Enquiry</h2>
            <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:13px">
              Annai College of Engineering &amp; Technology
            </p>
          </div>
          <div style="background:#f8f9fc;padding:28px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr>
                <td style="padding:8px 0;color:#64748b;width:130px;vertical-align:top">Full Name</td>
                <td style="padding:8px 0;font-weight:600;color:#0f172a">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#64748b;vertical-align:top">Email</td>
                <td style="padding:8px 0;color:#1a56db"><a href="mailto:${email}" style="color:#1a56db">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding:8px 0;color:#64748b;vertical-align:top">Phone</td>
                <td style="padding:8px 0;color:#0f172a">${phone}</td>
              </tr>` : ""}
              ${type ? `
              <tr>
                <td style="padding:8px 0;color:#64748b;vertical-align:top">Enquiry Type</td>
                <td style="padding:8px 0;color:#0f172a">${type}</td>
              </tr>` : ""}
              <tr>
                <td style="padding:8px 0;color:#64748b;vertical-align:top">Message</td>
                <td style="padding:8px 0;color:#0f172a;white-space:pre-wrap">${message}</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:#fff;border:1px solid #e2e8f0;border-radius:6px;font-size:12px;color:#94a3b8">
              Sent from the contact form at annaiengineering.edu.in
            </div>
          </div>
        </div>
      `,
    });

    /* ── Auto-reply to the enquirer ── */
    await transporter.sendMail({
      from:    `"Annai College Admissions" <${process.env.SMTP_USER}>`,
      to:      email,
      subject: "We received your enquiry — Annai College of Engineering & Technology",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e">
          <div style="background:#112a52;padding:24px 32px;border-radius:8px 8px 0 0">
            <h2 style="color:#fff;margin:0;font-size:20px">Thank You, ${name}!</h2>
            <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:13px">
              Annai College of Engineering &amp; Technology
            </p>
          </div>
          <div style="background:#f8f9fc;padding:28px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px">
            <p style="font-size:14px;line-height:1.7;color:#334155">
              We have received your enquiry and our admissions team will get back to you within
              <strong>24 working hours</strong>.
            </p>
            <p style="font-size:14px;line-height:1.7;color:#334155">
              If your matter is urgent, you can reach us directly:
            </p>
            <ul style="font-size:13px;color:#475569;line-height:2">
              <li>📞 +91 70920 38384</li>
              <li>📞 +91 88070 53849</li>
              <li>✉️ admissions@annaiengineering.edu.in</li>
              <li>📍 Kovilacheri, Kumbakonam – 621 503, Tamil Nadu</li>
            </ul>
            <p style="font-size:13px;color:#94a3b8;margin-top:24px">
              TNEA Counselling Code: <strong style="color:#112a52">3849</strong>
            </p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (err) {
    console.error("[contact API]", err);
    return Response.json(
      { error: "Failed to send email. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
