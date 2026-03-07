"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Smartphone, Server, FileJson, FileCode2, Terminal, MonitorSmartphone, LayoutTemplate, Flame, Wrench, Layout
} from "lucide-react";
import {
    SiFlutter, SiDart, SiFirebase, SiGooglemaps, SiReact,
    SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiNodedotjs,
    SiPython, SiMongodb, SiGit, SiAndroidstudio
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
    {
        title: "Mobile Development",
        icon: <Smartphone className="w-6 h-6" />,
        color: "from-blue-500/10 to-cyan-500/5",
        span: "md:col-span-2 lg:col-span-3",
        skills: [
            { name: "Flutter", icon: <SiFlutter className="w-5 h-5 text-[#02569B]" /> },
            { name: "Dart", icon: <SiDart className="w-5 h-5 text-[#0175C2]" /> },
            { name: "Firebase", icon: <SiFirebase className="w-5 h-5 text-[#FFCA28]" /> },
            { name: "Google Maps API", icon: <SiGooglemaps className="w-5 h-5 text-[#4285F4]" /> },
        ]
    },
    {
        title: "Frontend Development",
        icon: <Layout className="w-6 h-6" />,
        color: "from-violet-500/10 to-fuchsia-500/5",
        span: "md:col-span-2 lg:col-span-3",
        skills: [
            { name: "React", icon: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
            { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-white" /> },
            { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" /> },
            { name: "HTML / CSS", icon: <SiHtml5 className="w-5 h-5 text-[#E34F26]" /> },
        ]
    },
    {
        title: "Backend & APIs",
        icon: <Server className="w-6 h-6" />,
        color: "from-emerald-500/10 to-teal-500/5",
        span: "md:col-span-4 lg:col-span-4",
        skills: [
            { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" /> },
            { name: "Python", icon: <SiPython className="w-5 h-5 text-[#3776AB]" /> },
            { name: "REST APIs", icon: <TbApi className="w-5 h-5 text-[#00E676]" /> },
            { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-[#47A248]" /> },
        ]
    },
    {
        title: "Tools & Platforms",
        icon: <Wrench className="w-6 h-6" />,
        color: "from-orange-500/10 to-amber-500/5",
        span: "md:col-span-4 lg:col-span-2",
        skills: [
            { name: "Git", icon: <SiGit className="w-5 h-5 text-[#F05032]" /> },
            { name: "Firebase", icon: <SiFirebase className="w-5 h-5 text-[#FFCA28]" /> },
            { name: "Android Studio", icon: <SiAndroidstudio className="w-5 h-5 text-[#3DDC84]" /> },
            { name: "VS Code", icon: <VscVscode className="w-5 h-5 text-[#007ACC]" /> },
        ]
    }
];

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

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[140px]">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`${category.span} row-span-2 glass-card rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between border border-white/5 bg-gradient-to-br ${category.color} hover:border-primary/30 transition-all duration-500 overflow-hidden relative group`}
                        >
                            <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">
                                {React.cloneElement(category.icon as React.ReactElement, { className: "w-24 h-24" } as any)}
                            </div>

                            <div className="flex items-center gap-4 mb-4 md:mb-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <div className="text-primary">{category.icon}</div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold tracking-tight">{category.title}</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mt-auto relative z-10">
                                {category.skills.map(skill => (
                                    <div key={skill.name} className="flex items-center gap-3 p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group/badge cursor-default">
                                        <div className="p-2 rounded-xl bg-black/20 group-hover/badge:bg-black/40 transition-colors">
                                            {skill.icon}
                                        </div>
                                        <span className="text-xs md:text-sm font-semibold text-muted-foreground/90 group-hover/badge:text-foreground transition-colors tracking-wide">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
