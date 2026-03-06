"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, ShieldCheck, Map, Database, Zap, ArrowUpRight } from "lucide-react";
import TiltCard from "./TiltCard";

const impacts = [
    {
        title: "Production Mobile Applications",
        description: "Developed and maintained cross-platform Flutter applications used in real environments. Built scalable architecture using Provider and GetX for efficient state management.",
        icon: <Smartphone className="w-6 h-6" />,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        title: "Authentication & Security",
        description: "Implemented multi-role authentication with OTP verification and admin approval workflow. Integrated Firebase Authentication and secure file uploads using Firebase Storage.",
        icon: <ShieldCheck className="w-6 h-6" />,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
    {
        title: "Location & Map Integration",
        description: "Implemented Google Maps API to enable geolocation tracking and location-based services in real-world mobile solutions.",
        icon: <Map className="w-6 h-6" />,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
    },
    {
        title: "Dynamic Data Systems",
        description: "Designed API-driven state-city dropdown modules with intelligent state reset handling for complex user registration flows.",
        icon: <Database className="w-6 h-6" />,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        title: "Performance Optimization",
        description: "Reduced unnecessary widget rebuilds by optimizing state management and widget tree structure, ensuring fluid 60FPS experiences.",
        icon: <Zap className="w-6 h-6" />,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
    },
];

export default function Impact() {
    return (
        <section id="impact" className="section-padding relative overflow-hidden bg-slate-950/20">
            <div className="container-tight">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Impact & <span className="text-gradient">Contributions</span></h2>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Real-world technical solutions and architectural improvements implemented across production environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {impacts.map((item, idx) => (
                        <TiltCard key={idx}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group h-full"
                            >
                                <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 h-full hover:border-primary/20 transition-all duration-500 shadow-2xl relative overflow-hidden">
                                    {/* Decorative Icon Background */}
                                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                                            <div className="text-primary group-hover:text-white transition-colors">{item.icon}</div>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed text-balance text-sm mb-8">
                                            {item.description}
                                        </p>

                                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-mono text-[10px] uppercase tracking-widest font-bold">
                                            Technical Impact
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
        </section>
    );
}
