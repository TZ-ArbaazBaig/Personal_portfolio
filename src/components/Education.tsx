"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import TiltCard from "./TiltCard";

const education = [
    {
        degree: "Master of Computer Applications (MCA)",
        institution: "B.S. Abdur Rahman Crescent Institute of Science & Technology",
        period: "Oct 2022 – May 2024",
        score: "Score: 82%",
        icon: <GraduationCap className="w-6 h-6" />,
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "The New College (Autonomous), Chennai",
        period: "Jun 2019 – Mar 2022",
        score: "Score: 78.89%",
        icon: <Award className="w-6 h-6" />,
    },
];

export default function Education() {
    return (
        <section id="education" className="section-padding relative overflow-hidden">
            <div className="container-tight">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Academic <span className="text-gradient">Background</span></h2>
                    <p className="text-muted-foreground leading-relaxed">My foundation in computer science and specialized higher education.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, idx) => (
                        <TiltCard key={idx}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group h-full"
                            >
                                <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 h-full hover:border-primary/20 transition-all duration-500 shadow-2xl flex flex-col">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                        <div className="text-primary">{edu.icon}</div>
                                    </div>

                                    <div className="flex items-center gap-2 text-primary text-[10px] font-mono tracking-widest uppercase mb-4">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {edu.period}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight">{edu.degree}</h3>
                                    <p className="text-muted-foreground font-medium mb-6 flex-1">
                                        {edu.institution}
                                    </p>

                                    <div className="pt-6 border-t border-white/5">
                                        <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm font-bold text-foreground">
                                            {edu.score}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 -left-64 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] -z-10" />
        </section>
    );
}
