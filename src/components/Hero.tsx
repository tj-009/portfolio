"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Sparkles,
  Cpu,
  GitBranch,
  ScanSearch,
} from "lucide-react";
import NeuralBackground from "./NeuralBackground";
import { personal } from "@/lib/data";

const floatingChips = [
  { label: "Claude AI", icon: Sparkles, x: "6%", y: "18%", delay: 0.2 },
  { label: "MCP Agents", icon: Cpu, x: "82%", y: "22%", delay: 0.4 },
  { label: "Sumo Logic", icon: ScanSearch, x: "10%", y: "78%", delay: 0.6 },
  { label: "GitLab + JIRA", icon: GitBranch, x: "84%", y: "74%", delay: 0.8 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28"
    >
      {/* Backdrop layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="orb h-[420px] w-[420px] -left-20 -top-20 bg-violet-600/40" aria-hidden />
        <div className="orb h-[480px] w-[480px] -right-24 top-10 bg-cyan-500/30" aria-hidden />
        <NeuralBackground />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#050509]" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-6xl container-px">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-violet-200/90 backdrop-blur"
        >
          <span className="relative inline-flex">
            <span className="ping-slow h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          {personal.availability}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[4rem]"
        >
          Software Engineer{" "}
          <span className="text-white/30">|</span>{" "}
          <span className="text-gradient">AI Automation Engineer</span>{" "}
          <span className="text-white/30">|</span>{" "}
          <span className="text-gradient-static">AI Coding Contributor</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
        >
          I build AI-powered automation systems, analyze complex engineering
          workflows, and help improve intelligent systems through structured
          evaluation, debugging, and human feedback.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-white/45 md:text-[15px]"
        >
          Software Engineer with experience in Java, Python, AI Agents,
          Automation, Cloud Systems, CI/CD, and Large Language Model workflows.
          Passionate about solving complex problems, building intelligent tools,
          and improving AI systems through structured reasoning and evaluation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(124,58,237,0.7)] transition hover:shadow-[0_0_36px_-4px_rgba(124,58,237,0.8)]"
          >
            View Projects
            <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
          </a>
          <a
            href={personal.resumeUrl}
            download
            className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-2.5 text-sm text-white/85 backdrop-blur transition hover:border-violet-400/40 hover:text-white"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/8 bg-transparent px-5 py-2.5 text-sm text-white/70 transition hover:border-cyan-300/40 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>

        {/* Highlight strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { k: "Currently", v: "Infor" },
            { k: "Specialty", v: "AI Agents + MCP" },
            { k: "Stack", v: "Java + Python" },
            { k: "Focus", v: "AI Eval + Debugging" },
          ].map((s) => (
            <div
              key={s.k}
              className="glass px-4 py-3 text-left"
            >
              <div className="text-[11px] uppercase tracking-wider text-white/45">
                {s.k}
              </div>
              <div className="mt-1 text-sm font-medium text-white/90">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating capability chips, hidden on small screens to keep clean */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatingChips.map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: c.delay }}
            style={{ left: c.x, top: c.y }}
            className="absolute"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                delay: c.delay,
              }}
              className="glass flex items-center gap-2 px-3 py-2 text-xs text-white/80"
            >
              <c.icon className="h-3.5 w-3.5 text-violet-300" />
              {c.label}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
