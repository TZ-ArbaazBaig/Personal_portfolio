"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Mobile Application Developer – Flutter",
        company: "ThetaZero Pvt Ltd",
        period: "Feb 2025 – Present",
        location: "India",
        description: "Leading mobile innovation through scalable architecture and advanced feature implementation.",
        responsibilities: [
            "Developed cross-platform mobile apps using Flutter and Dart.",
            "Implemented multi-role authentication with OTP login and admin approval workflows.",
            "Built REST API–driven modules with dynamic state-city dropdown logic.",
            "Integrated Firebase services (Authentication, Firestore, Storage).",
            "Implemented Google Maps API for location-based services.",
            "Used Provider and GetX for scalable state management.",
            "Built complex multi-step forms with validation and file uploads.",
            "Collaborated with backend teams to improve API reliability.",
        ],
        color: "bg-primary",
    },
    {
        role: "Software Developer Intern",
        company: "Incepta Solutions, Canada",
        period: "Summer 2024 (2 Months)",
        location: "Canada",
        description: "Gained hands-on experience in enterprise application development and CRM ecosystems.",
        responsibilities: [
            "Worked with Salesforce, completing Trailhead modules to strengthen understanding of the platform.",
            "Built a small application for managing student applications, gaining practical experience in application development.",
            "Learned process management within the Salesforce ecosystem.",
        ],
        color: "bg-surface",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding relative overflow-hidden bg-slate-950/20">
            <div className="container-tight">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Professional <span className="text-gradient">Journey</span></h2>
                    <p className="text-muted-foreground">My career path in software engineering and product development.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Desktop Indicator Dot */}
                                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-slate-900 border-2 border-primary -translate-x-1/2 z-10 hidden md:block" />

                                {/* Content Card */}
                                <div className="md:w-1/2 w-full pl-8 md:pl-0">
                                    <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 group hover:border-primary/20 transition-all duration-500">
                                        <div className="flex items-center gap-2 text-primary text-[10px] font-mono tracking-widest uppercase mb-4">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {exp.period}
                                        </div>

                                        <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">{exp.role}</h3>
                                        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground/60 mb-6">
                                            <span className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5" /> {exp.company}</span>
                                            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {exp.location}</span>
                                        </div>

                                        <p className="text-muted-foreground leading-relaxed text-balance text-sm md:text-base mb-6">
                                            {exp.description}
                                        </p>

                                        {exp.responsibilities.length > 0 && (
                                            <ul className="space-y-3">
                                                {exp.responsibilities.map((resp, i) => (
                                                    <li key={i} className="flex gap-3 text-sm text-muted-foreground/80 leading-relaxed font-medium">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                                                        {resp}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                <div className="md:w-1/2 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
