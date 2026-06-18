"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section relative">
      <div className="mx-auto max-w-6xl container-px">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of building, automating, and shipping at scale."
          description="From production engineering at Infor to leading workflow automation in chip design, every role has sharpened my ability to debug, ship, and improve systems end-to-end."
        />

        <div className="relative">
          {/* timeline line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/0 via-violet-400/35 to-cyan-400/0 md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => {
              const onLeft = i % 2 === 0;
              return (
                <li key={exp.id} className="relative">
                  {/* dot */}
                  <div
                    aria-hidden
                    className="absolute left-4 top-3 z-10 -translate-x-1/2 md:left-1/2"
                  >
                    <span className="relative grid h-3 w-3 place-items-center">
                      <span className="absolute inset-0 rounded-full bg-violet-400/30 blur-[6px]" />
                      <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 ring-2 ring-[#050509]" />
                    </span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className={`md:grid md:grid-cols-2 md:gap-10 ${
                      onLeft ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div
                      className={`pl-10 md:pl-0 ${
                        onLeft ? "md:pr-10 md:text-right" : "md:pl-10"
                      }`}
                    >
                      <div className="glass-strong p-5 md:p-6">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-white/55">
                          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5">
                            <Briefcase className="h-3 w-3" />
                            {exp.company}
                          </span>
                          {exp.location && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5">
                              <MapPin className="h-3 w-3" />
                              {exp.location}
                            </span>
                          )}
                          <span className="text-white/40">{exp.duration}</span>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-white">
                          {exp.role}
                        </h3>

                        <div className="mt-4 space-y-3">
                          <div>
                            <div className="text-[11px] font-semibold uppercase tracking-wider text-violet-200/70">
                              Responsibilities
                            </div>
                            <ul
                              className={`mt-1.5 space-y-1.5 text-sm leading-relaxed text-white/70 ${
                                onLeft
                                  ? "md:[&>li]:flex-row-reverse md:text-right"
                                  : ""
                              }`}
                            >
                              {exp.responsibilities.map((r) => (
                                <li
                                  key={r}
                                  className="flex items-start gap-2"
                                >
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400/70" />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="text-[11px] font-semibold uppercase tracking-wider text-cyan-200/70">
                              Achievements
                            </div>
                            <ul
                              className={`mt-1.5 space-y-1.5 text-sm leading-relaxed text-white/70 ${
                                onLeft
                                  ? "md:[&>li]:flex-row-reverse md:text-right"
                                  : ""
                              }`}
                            >
                              {exp.achievements.map((a) => (
                                <li key={a} className="flex items-start gap-2">
                                  <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                                  <span>{a}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div
                            className={`flex flex-wrap gap-1.5 pt-1 ${
                              onLeft ? "md:justify-end" : ""
                            }`}
                          >
                            {exp.badges.map((b) => (
                              <span
                                key={b}
                                className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-white/65"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden className="hidden md:block" />
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
