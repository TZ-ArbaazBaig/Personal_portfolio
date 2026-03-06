"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Smartphone, Globe, Shield, ArrowRight } from "lucide-react";
import TiltCard from "./TiltCard";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import PhoneMockup from "./PhoneMockup";

const projects = [
    {
        title: "Slayer Gemini AI",
        description: "A specialized Flutter application focusing on seamless AI interaction. It leverages Google's Gemini Pro API for high-speed, intelligent conversations.",
        tech: ["Flutter", "Dart", "Gemini API", "AI/ML"],
        repo: "https://github.com/TZ-ArbaazBaig/Slayer_Gemini_AI",
        icon: <Smartphone className="w-5 h-5" />,
        color: "from-indigo-600",
        type: "mobile",
    },
    {
        title: "Task Manager",
        description: "A Flutter productivity application that allows users to schedule tasks with reminders using native system notifications and background execution.",
        tech: ["Flutter", "Dart", "Notifications", "Architecture"],
        repo: "https://github.com/TZ-ArbaazBaig/Task_manager",
        icon: <Smartphone className="w-5 h-5" />,
        color: "from-emerald-500",
        type: "mobile",
    },
    {
        title: "Crime Report System",
        description: "A web-based system that allows users to report crimes and enables administrators to monitor and manage reports efficiently.",
        tech: ["JavaScript", "HTML", "CSS", "PHP"],
        repo: null,
        icon: <Globe className="w-5 h-5" />,
        color: "from-rose-500",
        type: "web",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative bg-slate-950/40">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            A curated selection of mobile and web applications focusing on performance,
                            architecture, and innovative AI integrations.
                        </p>
                    </div>
                    <Link
                        href="https://github.com/TZ-ArbaazBaig"
                        target="_blank"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 font-bold transition-colors group px-6 py-3 rounded-xl bg-primary/5 border border-primary/20"
                    >
                        GitHub Repositories <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {projects.map((project, idx) => (
                        <TiltCard key={idx} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="group relative h-full"
                            >
                                <div className="glass-card h-full rounded-[3rem] overflow-hidden border border-white/5 flex flex-col hover:border-primary/30 transition-all duration-700 shadow-2xl bg-slate-950/40">
                                    {/* Project Visual Area */}
                                    <div className={`relative h-[500px] w-full bg-gradient-to-br ${project.color}/20 to-transparent overflow-hidden flex items-center justify-center pt-20 group-hover:pt-16 transition-all duration-700`}>
                                        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px]" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/90" />

                                        <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_25px_25px_rgba(0,0,0,0.4)] px-4 w-full flex justify-center">
                                            {project.type === "mobile" ? (
                                                <PhoneMockup color="bg-slate-950">
                                                    <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6">
                                                        <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:bg-primary/10 transition-colors">
                                                            {project.icon}
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="text-sm font-bold tracking-tight mb-1">{project.title}</div>
                                                            <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Mobile App</div>
                                                        </div>
                                                        <div className="mt-8 grid grid-cols-3 gap-3 w-full opacity-40">
                                                            {[1, 2, 3, 4, 5, 6].map(i => (
                                                                <div key={i} className="aspect-square rounded-xl bg-white/5 border border-white/5" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </PhoneMockup>
                                            ) : (
                                                <div className="w-full max-w-[450px] aspect-[16/10] bg-slate-950 rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-2xl transform">
                                                    {/* Browser Header */}
                                                    <div className="h-8 bg-slate-900/80 border-b border-white/5 flex items-center px-4 gap-1.5">
                                                        <div className="w-2 h-2 rounded-full bg-rose-500/50" />
                                                        <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                                                        <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                                                    </div>
                                                    {/* Browser Content */}
                                                    <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-slate-950 px-8">
                                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:bg-primary/10 transition-colors">
                                                            {project.icon}
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="text-sm font-bold tracking-tight mb-1">{project.title}</div>
                                                            <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Web Application</div>
                                                        </div>
                                                        <div className="mt-4 flex gap-2 opacity-30">
                                                            <div className="w-24 h-2 rounded-full bg-white/5" />
                                                            <div className="w-16 h-2 rounded-full bg-white/5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-10 md:p-12 flex flex-col flex-1 bg-slate-950/40 backdrop-blur-sm border-t border-white/5">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-primary/20 transition-colors">
                                                    {project.icon}
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold">
                                                        {project.type === "mobile" ? "Mobile System" : "Web System"}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                {project.repo ? (
                                                    <Link href={project.repo} target="_blank" className="p-3 rounded-xl bg-white/5 border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/20 transition-all">
                                                        <Github className="w-5 h-5" />
                                                    </Link>
                                                ) : (
                                                    <span title="Private Repository" className="p-3 rounded-xl bg-white/5 border border-white/5 text-muted-foreground/30 cursor-help">
                                                        <Shield className="w-5 h-5" />
                                                    </span>
                                                )}
                                                <button className="p-3 rounded-xl bg-white/5 border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/20 transition-all">
                                                    <ExternalLink className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-medium line-clamp-2">
                                            {project.description}
                                        </p>

                                        <div className="mt-auto">
                                            <div className="flex flex-wrap gap-2.5 mb-10">
                                                {project.tech.map((t) => (
                                                    <span key={t} className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold tracking-widest uppercase text-primary">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            {project.repo ? (
                                                <MagneticButton>
                                                    <Link
                                                        href={project.repo}
                                                        target="_blank"
                                                        className="w-full py-5 rounded-2xl bg-white/5 border border-white/5 text-xs font-black tracking-[0.2em] uppercase flex items-center justify-center gap-3 group-hover:bg-primary group-hover:text-background transition-all duration-500 shadow-xl group-hover:shadow-primary/20"
                                                    >
                                                        View on GitHub <Github className="w-5 h-5" />
                                                    </Link>
                                                </MagneticButton>
                                            ) : (
                                                <div className="w-full py-5 rounded-2xl bg-white/5 border border-white/5 text-xs font-black tracking-[0.2em] uppercase flex items-center justify-center gap-3 text-muted-foreground cursor-not-allowed">
                                                    Private Repository <Shield className="w-5 h-5" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
