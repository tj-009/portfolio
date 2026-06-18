"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Linkedin,
  Code2,
  BookOpen,
  Target,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { codingProfiles, stats } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Linkedin,
  Code2,
  BookOpen,
  Target,
};

function AnimatedNumber({ value }: { value: string }) {
  const num = parseInt(value.replace(/\D/g, ""), 10);
  const hasNum = !Number.isNaN(num) && num > 0;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (latest) => Math.floor(latest));

  useEffect(() => {
    if (!hasNum || !inView) return;
    const controls = animate(motionVal, num, {
      duration: 1.2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [hasNum, inView, num, motionVal]);

  if (!hasNum) {
    return <span ref={ref}>{value}</span>;
  }

  const suffix = value.replace(/\d/g, "");
  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function CodingProfiles() {
  return (
    <section className="section relative">
      <div className="mx-auto max-w-6xl container-px">
        <SectionHeading
          eyebrow="Coding Profiles & Stats"
          title="Where I practice, write, and prove the work."
          description="A combination of structured DSA practice, peer-reviewed engineering posts, and curated problem sets."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-4"
            >
              <div className="text-[11px] uppercase tracking-wider text-white/45">
                {s.label}
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                <span className="text-gradient-static">
                  <AnimatedNumber value={s.value} />
                </span>
              </div>
              <div className="mt-1 text-[12px] text-white/50">{s.suffix}</div>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/10 blur-2xl"
              />
            </motion.div>
          ))}
        </div>

        {/* Profiles */}
        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {codingProfiles.map((p, i) => {
            const Icon = iconMap[p.icon] ?? Code2;
            return (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-violet-400/30 hover:bg-white/[0.035]"
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${p.accent} blur-3xl`}
                />
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/85">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {p.name}
                </h3>
                <div className="mt-1 text-[12px] font-mono text-violet-200/80">
                  {p.handle}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {p.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
