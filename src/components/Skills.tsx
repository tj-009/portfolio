"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Bot,
  Server,
  Layout,
  Database,
  Wrench,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

const groupIcons: Record<string, LucideIcon> = {
  Languages: Code2,
  "AI & Automation": Bot,
  Backend: Server,
  Frontend: Layout,
  Databases: Database,
  Tools: Wrench,
  "Software Engineering": GraduationCap,
};

const groupAccents: Record<string, string> = {
  Languages: "from-violet-500/20 to-violet-500/5",
  "AI & Automation": "from-cyan-500/20 to-cyan-500/5",
  Backend: "from-emerald-500/20 to-emerald-500/5",
  Frontend: "from-pink-500/20 to-pink-500/5",
  Databases: "from-amber-500/20 to-amber-500/5",
  Tools: "from-sky-500/20 to-sky-500/5",
  "Software Engineering": "from-fuchsia-500/20 to-fuchsia-500/5",
};

export default function Skills() {
  return (
    <section id="skills" className="section relative">
      <div className="mx-auto max-w-6xl container-px">
        <SectionHeading
          eyebrow="Skills & Stack"
          title="A toolkit shaped by enterprise systems, automation, and AI."
          description="A practical, opinionated stack — built around Java, Python, AI agents, and the ecosystems that ship real software."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {Object.entries(skills).map(([group, items], i) => {
            const Icon = groupIcons[group] ?? Code2;
            const accent =
              groupAccents[group] ?? "from-violet-500/20 to-violet-500/5";
            const isWide = group === "AI & Automation";
            return (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 ${
                  isWide ? "md:col-span-2" : ""
                }`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accent} blur-3xl`}
                />
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-violet-200">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-wide text-white">
                    {group}
                  </h3>
                  <span className="ml-auto text-[11px] text-white/40">
                    {items.length} skills
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.15 }}
                      className="rounded-md border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] px-2.5 py-1 text-[12px] font-medium text-white/80 hover:border-violet-400/30 hover:text-white"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
