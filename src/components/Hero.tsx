"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Download, ArrowRight, Send } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="container-tight z-20">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-widest uppercase"
                    >
                        Open to Opportunities
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]"
                    >
                        Arbaaz <span className="text-gradient">Baig</span>
                    </motion.h1>

                    {/* Role */}
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed text-balance"
                    >
                        Flutter Developer crafting <span className="text-foreground font-semibold">high-performance mobile applications</span> and
                        <span className="text-foreground font-semibold"> intelligent digital experiences</span>.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-6 mb-12"
                    >
                        <MagneticButton>
                            <a
                                href="#projects"
                                className="px-10 py-5 bg-primary text-background font-bold rounded-2xl flex items-center gap-2 hover:scale-[1.02] transition-all shadow-xl shadow-primary/20 active:scale-95"
                            >
                                View Projects <ArrowRight className="w-5 h-5" />
                            </a>
                        </MagneticButton>

                        <MagneticButton>
                            <a
                                href="#contact"
                                className="px-10 py-5 bg-white/5 border border-white/10 text-foreground font-bold rounded-2xl flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95 group"
                            >
                                Get in Touch <Send className="w-4 h-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </MagneticButton>

                        <MagneticButton>
                            <Link
                                href="/resume/Arbaaz_Baig_Resume.pdf"
                                target="_blank"
                                download
                                className="px-8 py-5 text-foreground/40 font-bold flex items-center gap-2 hover:text-foreground transition-all active:scale-95"
                            >
                                Resume <Download className="w-4 h-4" />
                            </Link>
                        </MagneticButton>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex items-center gap-8 text-muted-foreground"
                    >
                        <Link href="https://github.com/TZ-ArbaazBaig" target="_blank" className="hover:text-primary transition-colors">
                            <Github className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/arbaaz-baig-84b0782a6/" target="_blank" className="hover:text-primary transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
            <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />
        </section>
    );
}
