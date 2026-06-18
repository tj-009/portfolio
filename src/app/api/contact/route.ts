import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !to) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const name = String(body.name ?? "").trim();
    const from = String(body.from ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !from || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > 5000 || name.length > 200 || subject.length > 200) {
      return NextResponse.json(
        { error: "Input exceeds maximum length." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const finalSubject = subject || `Portfolio inquiry from ${name}`;

    const text = [
      `New message from your portfolio contact form.`,
      ``,
      `Name: ${name}`,
      `Email: ${from}`,
      `Subject: ${finalSubject}`,
      ``,
      `Message:`,
      message,
    ].join("\n");

    const html = `
      <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background:#0b0b14; color:#e8ecff; border-radius:14px;">
        <h2 style="margin:0 0 16px; color:#c4b5fd;">New portfolio inquiry</h2>
        <p style="margin:0 0 6px; color:#8b90b3;"><strong style="color:#e8ecff;">From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(from)}&gt;</p>
        <p style="margin:0 0 16px; color:#8b90b3;"><strong style="color:#e8ecff;">Subject:</strong> ${escapeHtml(finalSubject)}</p>
        <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:16px; white-space:pre-wrap; line-height:1.6;">${escapeHtml(message)}</div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [to],
      replyTo: from,
      subject: finalSubject,
      text,
      html,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
