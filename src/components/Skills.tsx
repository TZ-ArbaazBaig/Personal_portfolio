"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Code2, Database, Globe, Cpu, Layout, Boxes, GitBranch, Map } from "lucide-react";

const skills = {
    primary: {
        title: "Flutter",
        level: "Expert",
        description: "Specialized in building high-performance, complex cross-platform mobile applications with custom architectures.",
        icon: <Smartphone className="w-10 h-10" />,
        color: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-500/30",
        glow: "shadow-blue-500/10",
    },
    medium: [
        {
            name: "Dart",
            icon: <Code2 className="w-6 h-6" />,
            color: "from-blue-600/10 to-transparent",
            description: "Core language for Flutter development, optimized for UI-first experiences."
        },
        {
            name: "Firebase",
            icon: <Database className="w-6 h-6" />,
            color: "from-orange-500/10 to-transparent",
            description: "NoSQL DB, specialized in authentication, hosting, and real-time syncing."
        },
        {
            name: "REST APIs",
            icon: <Globe className="w-6 h-6" />,
            color: "from-emerald-500/10 to-transparent",
            description: "Architecting clean endpoints and seamless data flow between mobile & web."
        },
    ],
    small: [
        { name: "React", icon: <Layout className="w-5 h-5" /> },
        { name: "Next.js", icon: <Cpu className="w-5 h-5" /> },
        { name: "Python", icon: <Boxes className="w-5 h-5" /> },
        { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
        { name: "Maps API", icon: <Map className="w-5 h-5" /> },
    ],
};

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative bg-slate-950/40">
            <div className="container-wide">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        A modern stack focused on building scalable, performant, and intelligent digital products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-auto">
                    {/* Large Card: Flutter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`md:col-span-4 lg:col-span-3 lg:row-span-2 glass-card rounded-[3rem] p-10 flex flex-col justify-between border ${skills.primary.border} bg-gradient-to-br ${skills.primary.color} relative overflow-hidden group shadow-2xl ${skills.primary.glow}`}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                            <Smartphone className="w-48 h-48" />
                        </div>
                        <div className="relative z-10 w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                            {skills.primary.icon}
                        </div>
                        <div className="relative z-10">
                            <div className="text-sm font-mono text-primary mb-2 uppercase tracking-[0.2em] font-bold">{skills.primary.level}</div>
                            <h3 className="text-4xl font-black mb-4 tracking-tight">{skills.primary.title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                                {skills.primary.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Medium Cards */}
                    {skills.medium.map((skill, idx) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`md:col-span-2 lg:col-span-3 glass-card rounded-[2.5rem] p-8 flex flex-col justify-between border border-white/5 bg-gradient-to-br ${skill.color} hover:border-primary/30 transition-all duration-500 overflow-hidden relative group min-h-[220px]`}
                        >
                            <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">
                                {React.cloneElement(skill.icon as React.ReactElement, { className: "w-32 h-32" } as any)}
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <div className="text-primary">{skill.icon}</div>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold tracking-tight mb-2">{skill.name}</h4>
                                <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">
                                    {skill.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Small Cards */}
                    {skills.small.map((skill, idx) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="md:col-span-1 lg:col-span-1 row-span-1 glass-card rounded-[2rem] p-4 flex flex-col items-center justify-center gap-3 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all group"
                        >
                            <div className="text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all">
                                {skill.icon}
                            </div>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
