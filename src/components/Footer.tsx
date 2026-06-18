"use client";

import { Mail, Linkedin, Phone, Sparkles } from "lucide-react";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10 mt-8">
      <div className="mx-auto max-w-6xl container-px">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-[0_0_20px_-6px_rgba(124,58,237,0.7)]">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-white/90">
                Tanishk<span className="text-violet-300">.</span>Jain
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
              Software Engineer & AI Automation Engineer. Building intelligent
              systems with structured reasoning and disciplined evaluation.
            </p>
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-white/45">
              Get in touch
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 text-white/75 hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5" /> {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personal.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-white/75 hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5" /> {personal.phone}
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/75 hover:text-white"
                >
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-white/45">
              Quick links
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
              <li>
                <a href="#about" className="text-white/75 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-white/75 hover:text-white">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/75 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#ai-evaluation"
                  className="text-white/75 hover:text-white"
                >
                  AI Skills
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/75 hover:text-white">
                  Stack
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/75 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/40 md:flex-row">
          <div>© {new Date().getFullYear()} Tanishk Jain. All rights reserved.</div>
          <div>Built with Next.js, Tailwind CSS, and Framer Motion.</div>
        </div>
      </div>
    </footer>
  );
}
