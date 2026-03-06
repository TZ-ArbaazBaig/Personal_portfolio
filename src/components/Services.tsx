"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Smartphone,
    BrainCircuit,
    Server,
    MessageSquareCode
} from "lucide-react";

const services = [
    {
        title: "Mobile App Development",
        description: "Building premium, high-performance cross-platform applications using Flutter and Dart with native-like feel.",
        icon: <Smartphone className="w-8 h-8 text-primary" />,
    },
    {
        title: "AI Integration",
        description: "Embedding advanced AI models like Gemini and GPT into your applications to automate workflows and enhance UX.",
        icon: <BrainCircuit className="w-8 h-8 text-secondary" />,
    },
    {
        title: "Backend API Development",
        description: "Designing scalable, secure, and efficient RESTful APIs and cloud architectures for mobile and web systems.",
        icon: <Server className="w-8 h-8 text-accent" />,
    },
    {
        title: "Technical Consulting",
        description: "Providing strategic advice on app architecture, security hardening, and digital transformation.",
        icon: <MessageSquareCode className="w-8 h-8 text-primary" />,
    },
];

export default function Services() {
    return (
        <section id="services" className="section-padding relative bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        My <span className="text-gradient-purple">Services</span>
                    </motion.h2>
                    <p className="text-foreground/60 max-w-xl mx-auto">
                        Specialized solutions tailored to bring your digital visions to life
                        with modern technology and premium design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-10 rounded-[2rem] hover:bg-white/5 transition-colors group"
                        >
                            <div className="mb-8 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-foreground/50 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
