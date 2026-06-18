"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Download,
  MapPin,
  Send,
  Copy,
  Check,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personal } from "@/lib/data";

export default function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 1600);
    } catch {
      // ignore
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const body = encodeURIComponent(
      `Hi Tanishk,\n\n${message}\n\n— ${name}${from ? ` (${from})` : ""}`
    );
    const subj = encodeURIComponent(
      subject || `Portfolio inquiry from ${name || "a recruiter"}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subj}&body=${body}`;
    setTimeout(() => setSubmitting(false), 600);
  };

  const items = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phoneRaw}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "tanishk-jain",
      href: personal.linkedin,
    },
    {
      icon: MapPin,
      label: "Based in",
      value: personal.location,
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="section relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="orb h-[500px] w-[500px] left-1/2 top-10 -translate-x-1/2 bg-violet-600/20" />
      </div>

      <div className="mx-auto max-w-6xl container-px">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build, evaluate, or improve something intelligent."
          description="Open to AI freelance contracts, evaluation programs, and engineering collaborations. Quick to respond, easy to work with."
          align="center"
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
          {/* Info card */}
          <div className="lg:col-span-2">
            <div className="glass-strong h-full p-6 md:p-7">
              <div className="flex items-center gap-2">
                <span className="relative inline-flex">
                  <span className="ping-slow h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm text-emerald-300">
                  {personal.availability}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Reach out directly
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Prefer email? Send a note and I&apos;ll typically reply within
                24 hours. For AI freelance work, mention the program or
                role so I can tailor my response.
              </p>

              <div className="mt-6 space-y-2.5">
                {items.map((it) => (
                  <div
                    key={it.label}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-violet-200">
                        <it.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-white/45">
                          {it.label}
                        </div>
                        {it.href ? (
                          <a
                            href={it.href}
                            target={
                              it.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              it.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-sm font-medium text-white/90 hover:text-white"
                          >
                            {it.value}
                          </a>
                        ) : (
                          <div className="text-sm font-medium text-white/90">
                            {it.value}
                          </div>
                        )}
                      </div>
                    </div>
                    {(it.label === "Email" || it.label === "Phone") && (
                      <button
                        onClick={() => copy(it.label, it.value)}
                        aria-label={`Copy ${it.label}`}
                        className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-violet-400/40 hover:text-white"
                      >
                        {copiedField === it.label ? (
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <a
                href={personal.resumeUrl}
                download
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-gradient-to-r from-violet-600/90 to-cyan-500/90 px-4 py-2.5 text-sm font-medium text-white shadow-[0_0_30px_-12px_rgba(124,58,237,0.7)] transition hover:shadow-[0_0_36px_-6px_rgba(124,58,237,0.8)]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Form card */}
          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="glass-strong h-full p-6 md:p-7"
            >
              <h3 className="text-xl font-semibold text-white">
                Send a message
              </h3>
              <p className="mt-1 text-sm text-white/60">
                Tell me a bit about your team and what you&apos;re working on.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  label="Your name"
                  required
                  value={name}
                  onChange={setName}
                  placeholder="Recruiter, PM, founder…"
                />
                <Field
                  label="Email"
                  type="email"
                  required
                  value={from}
                  onChange={setFrom}
                  placeholder="you@company.com"
                />
              </div>
              <div className="mt-4">
                <Field
                  label="Subject"
                  value={subject}
                  onChange={setSubject}
                  placeholder="AI freelance opportunity"
                />
              </div>
              <div className="mt-4">
                <label className="text-[12px] font-medium text-white/65">
                  Message <span className="text-rose-400">*</span>
                </label>
                <motion.textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What kind of work, timelines, and any context you can share."
                  className="mt-1.5 w-full resize-y rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-violet-400/40 focus:bg-white/[0.04]"
                />
              </div>

              <div className="mt-5 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[12px] text-white/45">
                  This opens your default email client with a prefilled draft.
                </p>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_30px_-12px_rgba(124,58,237,0.7)] transition hover:shadow-[0_0_36px_-6px_rgba(124,58,237,0.8)] disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? "Opening…" : "Send message"}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[12px] font-medium text-white/65">
        {label}
        {required && <span className="text-rose-400"> *</span>}
      </span>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-violet-400/40 focus:bg-white/[0.04]"
      />
    </label>
  );
}
