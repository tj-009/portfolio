"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  BugPlay,
  Wand2,
  SearchCode,
  ThumbsUp,
  Brain,
  ScanEye,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { aiCapabilities } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Gauge,
  BugPlay,
  Wand2,
  SearchCode,
  ThumbsUp,
  Brain,
  ScanEye,
  Cpu,
};

export default function AIEvaluation() {
  return (
    <section id="ai-evaluation" className="section relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="orb h-[460px] w-[460px] -left-32 top-20 bg-violet-600/25" />
        <div className="orb h-[420px] w-[420px] -right-24 bottom-10 bg-cyan-500/20" />
      </div>

      <div className="mx-auto max-w-6xl container-px">
        <SectionHeading
          eyebrow="AI Evaluation & Prompt Engineering"
          title="Built for AI training, evaluation, and human-feedback workflows."
          description="A focused capability surface for AI teams: I evaluate model outputs, debug AI-generated code, design structured prompts, and produce high-signal human feedback that improves model performance."
        />

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {aiCapabilities.map((c, i) => {
            const Icon = iconMap[c.icon] ?? Cpu;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.03] to-white/[0.005] p-5 transition hover:border-violet-400/30"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-violet-500/15 to-cyan-500/10 opacity-0 blur-2xl transition group-hover:opacity-100"
                />
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-cyan-500/10 text-violet-200">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {c.description}
                </p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-violet-500/20 via-cyan-400/20 to-transparent" />
              </motion.div>
            );
          })}
        </div>

        {/* Process strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid grid-cols-1 gap-4 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 md:grid-cols-3 md:p-8"
        >
          {[
            {
              k: "Step 01",
              t: "Read carefully",
              d: "Parse the prompt, instructions, and AI output with precision.",
            },
            {
              k: "Step 02",
              t: "Evaluate critically",
              d: "Check correctness, edge cases, hallucinations, and reasoning quality.",
            },
            {
              k: "Step 03",
              t: "Feedback that scales",
              d: "Structured, reproducible feedback that improves model behavior.",
            },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-violet-200/70">
                {s.k}
              </div>
              <div className="mt-2 text-base font-semibold text-white">
                {s.t}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                {s.d}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
