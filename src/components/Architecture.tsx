"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Database, MapPin, Gauge } from "lucide-react";

const architectures = [
    {
        title: "Authentication System",
        description: "Implemented multi-role authentication with OTP verification and admin approval workflow for enterprise-grade security.",
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        tags: ["Firebase Auth", "Role-Based Access", "OTP"],
    },
    {
        title: "Dynamic API Modules",
        description: "Built REST API–driven state-city dropdown modules with intelligent state reset handling and optimized caching.",
        icon: <Zap className="w-8 h-8 text-amber-500" />,
        tags: ["RESTful", "Dynamic Logic", "State Management"],
    },
    {
        title: "Real-Time Data",
        description: "Integrated Firebase Firestore for real-time synchronization and secure file management across multiple platforms.",
        icon: <Database className="w-8 h-8 text-blue-500" />,
        tags: ["Firestore", "Real-time", "Cloud Storage"],
    },
    {
        title: "Location Services",
        description: "Implemented Google Maps API for geolocation tracking, proximity-based searches, and location-based features.",
        icon: <MapPin className="w-8 h-8 text-rose-500" />,
        tags: ["Google Maps", "Geolocation", "Tracking"],
    },
    {
        title: "Performance",
        description: "Reduced unnecessary widget rebuilds using efficient state management and optimized widget trees for 60fps performance.",
        icon: <Gauge className="w-8 h-8 text-emerald-500" />,
        tags: ["Optimization", "60 FPS", "State Efficiency"],
    },
];

export default function Architecture() {
    return (
        <section id="architecture" className="section-padding bg-slate-950/20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container-wide relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Architecture <span className="text-gradient">Highlights</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A showcase of technical problem-solving and architectural decisions made across complex production systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {architectures.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-primary/5 transition-colors duration-500">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {item.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
