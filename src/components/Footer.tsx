"use client";

import React from "react";
import { Terminal, Github, Linkedin, Twitter, Heart } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-12 pb-20 border-t border-white/5 bg-slate-950 px-6 relative overflow-hidden">
            <div className="container-wide">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-16">
                    {/* Brand Col */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02] active:scale-95 group mb-6">
                            <div className="w-10 h-10 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors">
                                <span className="text-xs font-black tracking-tighter text-white z-10">AB</span>
                            </div>
                            <span className="text-sm font-black tracking-widest uppercase leading-none">ARBAAZ BAIG</span>
                        </Link>
                        <p className="text-muted-foreground max-w-xs leading-relaxed text-sm mb-8">
                            Flutter Developer crafting high-performance mobile applications and
                            intelligent digital experiences.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="https://github.com/TZ-ArbaazBaig" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/arbaaz-baig-84b0782a6/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Nav Col */}
                    <div>
                        <h4 className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-muted-foreground/40 mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground/30 uppercase">
                        &copy; {currentYear} — ARBAAZ BAIG. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-muted-foreground/30 uppercase">
                        Built with <Heart className="w-3 h-3 text-red-500/50" /> in Next.js
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        </footer>
    );
}
