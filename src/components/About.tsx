"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Cpu,
  GitMerge,
  LineChart,
  ShieldCheck,
  Wand2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const focuses = [
  {
    icon: Bot,
    title: "Building intelligent automation",
    desc: "Agentic systems that bridge LLMs with real engineering tools.",
  },
  {
    icon: LineChart,
    title: "Analyzing complex systems",
    desc: "Tracing failures across distributed services with calm precision.",
  },
  {
    icon: GitMerge,
    title: "Improving engineering workflows",
    desc: "CI/CD optimization, regression workflows, and developer ergonomics.",
  },
  {
    icon: ShieldCheck,
    title: "Root cause investigation",
    desc: "From symptoms to source: logs, code, MRs, and tickets correlated.",
  },
  {
    icon: Wand2,
    title: "AI-powered productivity tools",
    desc: "Internal copilots that compress hours of triage into minutes.",
  },
  {
    icon: Cpu,
    title: "Software development best practices",
    desc: "Clean architecture, code review discipline, and shipping quality.",
  },
];

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="mx-auto max-w-6xl container-px">
        <SectionHeading
          eyebrow="About Me"
          title="Software engineer building bridges between code and intelligence."
          description="I'm a Software Engineer at Infor with hands-on experience across software engineering, automation, AI agents, cloud migrations, CI/CD optimization, and enterprise-scale systems. I enjoy combining software engineering with AI to create systems that reduce manual effort and improve decision-making."
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {focuses.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-violet-400/25 hover:bg-white/[0.035]"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/[0.08] to-cyan-500/[0.05]" />
              </div>
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-violet-500/15 to-cyan-500/10 text-violet-200">
                  <f.icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
