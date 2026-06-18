"use client";

import { motion } from "framer-motion";
import {
  Code,
  Bot,
  SearchCheck,
  Building2,
  Terminal,
  Network,
  Workflow,
  Compass,
  FolderTree,
  ClipboardCheck,
  PenLine,
  ScanSearch,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { whyFit } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Code,
  Bot,
  SearchCheck,
  Building2,
  Terminal,
  Network,
  Workflow,
  Compass,
  FolderTree,
  ClipboardCheck,
  PenLine,
  ScanSearch,
};

export default function WhyFit() {
  return (
    <section id="why-fit" className="section relative">
      <div className="mx-auto max-w-6xl container-px">
        <SectionHeading
          eyebrow="Why I'm a Strong Fit for AI Roles"
          title="Engineering depth + AI fluency + an evaluator's mindset."
          description="The exact qualities AI training, evaluation, and prompt engineering teams hire for — wired into how I work every day."
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whyFit.map((f, i) => {
            const Icon = iconMap[f.icon] ?? CheckCircle2;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="group relative flex items-start gap-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:border-violet-400/25"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-violet-500/15 to-cyan-500/10 text-violet-200">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <h3 className="text-[14px] font-semibold text-white">
                      {f.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
