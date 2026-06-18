"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CircleCheck,
  TrendingUp,
  Quote,
  Layers,
  Cpu,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

const filters = [
  { label: "All", value: "all" as const },
  { label: "AI", value: "AI" as const },
  { label: "Automation", value: "Automation" as const },
  { label: "Full-Stack", value: "Full-Stack" as const },
];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="section relative">
      <div className="mx-auto max-w-6xl container-px">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected work — AI agents, automation, and engineering tools."
            description="A curated set of projects spanning production-style AI systems, internal hackathon copilots, and full-stack platforms."
          />
          <div className="-mt-2 mb-10 flex flex-wrap gap-2 md:mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                  filter === f.value
                    ? "border-violet-400/50 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-white shadow-[0_0_20px_-8px_rgba(124,58,237,0.6)]"
                    : "border-white/10 bg-white/[0.02] text-white/65 hover:border-white/20 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 transition hover:border-violet-400/25 ${
                  p.featured && p.id === "ai-incident-agent"
                    ? "lg:col-span-12"
                    : "lg:col-span-6"
                }`}
              >
                {/* Hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100"
                >
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-500/[0.1] via-cyan-500/[0.06] to-transparent" />
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-wider">
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-violet-400/40 bg-violet-500/10 px-2 py-0.5 text-violet-200">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </span>
                  )}
                  {p.category.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-white/60"
                    >
                      {c === "AI" ? (
                        <Cpu className="h-3 w-3" />
                      ) : (
                        <Layers className="h-3 w-3" />
                      )}
                      {c}
                    </span>
                  ))}
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-violet-200/80">{p.tagline}</p>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65 md:text-[15px]">
                  {p.description}
                </p>

                {p.highlight && (
                  <div className="mt-5 flex gap-3 rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-500/[0.07] to-cyan-500/[0.05] p-4">
                    <Quote className="h-4 w-4 shrink-0 text-violet-300" />
                    <p className="text-sm leading-relaxed text-white/80 md:text-[15px]">
                      <span className="italic">{p.highlight}</span>
                    </p>
                  </div>
                )}

                <div
                  className={`mt-5 grid gap-5 ${
                    p.featured && p.id === "ai-incident-agent"
                      ? "md:grid-cols-2"
                      : "grid-cols-1"
                  }`}
                >
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-violet-200/70">
                      Key Features
                    </div>
                    <ul className="mt-2 space-y-1.5 text-sm text-white/72">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-cyan-200/70">
                      Impact
                    </div>
                    <ul className="mt-2 space-y-1.5 text-sm text-white/72">
                      {p.impact.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <TrendingUp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-1.5 border-t border-white/[0.06] pt-4">
                  {p.techStack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center text-sm text-white/55">
            No projects in this category yet.
          </div>
        )}

        <div className="mt-10 text-center text-sm text-white/45">
          Looking for project deep-dives or process write-ups?{" "}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-violet-200 hover:text-white"
          >
            Reach out
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
