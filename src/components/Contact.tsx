"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = React.useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = React.useState(false);

    React.useEffect(() => {
        emailjs.init("F-rVcPDPTAPbhyiyb");
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSending(true);
        try {
            await emailjs.sendForm(
                "service_u455uuf",
                "template_8ndx3xs",
                formRef.current,
                "F-rVcPDPTAPbhyiyb"
            );
            alert("Message sent successfully!");
            formRef.current.reset();
        } catch (error: any) {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Please try again or contact me directly via email.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Text & Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                                Let's build the <br />
                                <span className="text-gradient">next generation</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
                                Whether you have a specific project in mind or just want to
                                discuss the future of mobile tech, I'm always open to connecting.
                            </p>

                            <div className="space-y-10">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:border-primary/50 transition-all duration-500 shadow-xl shadow-black/20">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.2em] mb-1">Email</div>
                                        <div className="text-xl font-bold tracking-tight">arbaazbaig98@gmail.com</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:border-primary/50 transition-all duration-500 shadow-xl shadow-black/20">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.2em] mb-1">Location</div>
                                        <div className="text-xl font-bold tracking-tight">Chennai, Tamil Nadu, India</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 flex items-center gap-8">
                                <Link href="https://github.com/TZ-ArbaazBaig" target="_blank" className="text-muted-foreground hover:text-primary transition-colors active:scale-95">
                                    <Github className="w-6 h-6" />
                                </Link>
                                <Link href="https://www.linkedin.com/in/arbaaz-baig-84b0782a6/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors active:scale-95">
                                    <Linkedin className="w-6 h-6" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-10 md:p-12 rounded-[3.5rem] border border-white/5 shadow-2xl"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.3em] ml-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full bg-slate-900/40 border border-white/5 rounded-2xl px-8 py-5 text-base focus:outline-none focus:border-primary/30 focus:bg-slate-900/60 transition-all placeholder:text-muted-foreground/20"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.3em] ml-2">Professional Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full bg-slate-900/40 border border-white/5 rounded-2xl px-8 py-5 text-base focus:outline-none focus:border-primary/30 focus:bg-slate-900/60 transition-all placeholder:text-muted-foreground/20"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.3em] ml-2">Your Message</label>
                                <textarea
                                    name="message"
                                    required
                                    placeholder="Write your message"
                                    rows={4}
                                    className="w-full bg-slate-900/40 border border-white/5 rounded-2xl px-8 py-5 text-base focus:outline-none focus:border-primary/30 focus:bg-slate-900/60 transition-all resize-none placeholder:text-muted-foreground/20"
                                />
                            </div>

                            <MagneticButton className="w-full">
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="w-full py-6 bg-primary text-background font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSending ? "SENDING..." : "SEND MESSAGE"}
                                    {!isSending && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                </button>
                            </MagneticButton>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute -bottom-64 -right-64 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -z-10" />
        </section>
    );
}
