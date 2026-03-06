"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";

type LogEntry = {
    command: string;
    output: string | React.ReactNode;
};

const COMMANDS = {
    whoami: "Arbaaz Baig – Flutter Developer focused on building scalable mobile applications and AI-powered tools.",
    skills: (
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
            <div className="text-primary">Flutter / Dart</div>
            <div className="text-primary">React / Next.js</div>
            <div className="text-accent">Python / AI</div>
            <div className="text-muted-foreground">Firebase / Cloud</div>
        </div>
    ),
    projects: "Featured: Slayer Gemini AI, Task Manager. (Explore the projects section above for more details)",
    experience: "Flutter Developer, Software Developer Intern",
    impact: "• Production Mobile Apps (Flutter/Dart)\n• Authentication & Security (OTP/Admin Workflows)\n• Map Integration (Google Maps API)\n• Performance Optimization (60FPS)",
    github: "github.com/TZ-ArbaazBaig",
    contact: "arbaazbaig98@gmail.com",
    clear: "",
    help: "Available commands: whoami, skills, projects, impact, experience, github, contact, clear",
};

export default function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<LogEntry[]>([
        { command: "help", output: COMMANDS.help },
    ]);
    const [mounted, setMounted] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const runCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let output: string | React.ReactNode = "";

        if (cleanCmd === "clear") {
            setHistory([]);
            return;
        }

        if (cleanCmd in COMMANDS) {
            output = COMMANDS[cleanCmd as keyof typeof COMMANDS];
        } else if (cleanCmd !== "") {
            output = `zsh: command not found: ${cleanCmd}`;
        }

        setHistory(prev => [...prev, { command: cmd, output }]);
    };

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        runCommand(input);
        setInput("");
    };

    if (!mounted) return null;

    const suggestions = ["whoami", "experience", "skills", "projects", "github", "contact", "clear"];

    return (
        <section className="section-padding relative">
            <div className="container-tight">
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Interactive <span className="text-gradient">Console</span></h2>
                    <p className="text-muted-foreground text-sm">Explore my technical DNA through a real terminal experience.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
                >
                    {/* Header */}
                    <div className="bg-slate-900/80 px-4 py-2 flex items-center justify-between border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                            </div>
                            <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest ml-2">zsh — 80×24</span>
                        </div>
                    </div>

                    {/* Body */}
                    <div
                        ref={scrollRef}
                        className="p-6 h-[380px] overflow-y-auto font-mono text-xs md:text-sm selection:bg-primary/30 bg-slate-950/60 leading-relaxed"
                    >
                        {history.map((entry, i) => (
                            <div key={i} className="mb-4 last:mb-0">
                                <div className="flex gap-2">
                                    <span className="text-primary font-bold">➜</span>
                                    <span className="text-accent">~</span>
                                    <span className="text-foreground">{entry.command}</span>
                                </div>
                                {entry.output && (
                                    <div className="mt-1 text-muted-foreground/80 pl-6 border-l border-white/5 ml-1 whitespace-pre-wrap">
                                        {entry.output}
                                    </div>
                                )}
                            </div>
                        ))}

                        <form onSubmit={handleCommand} className="flex gap-2 items-center mt-4">
                            <span className="text-primary font-bold">➜</span>
                            <span className="text-accent">~</span>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                spellCheck={false}
                                className="bg-transparent border-none outline-none flex-1 text-foreground caret-primary"
                                placeholder="type help..."
                            />
                        </form>
                    </div>

                    {/* Suggestions Footer */}
                    <div className="bg-slate-900/40 px-6 py-3 border-t border-white/5 flex items-center gap-3 overflow-x-auto scrollbar-hide">
                        <span className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-tighter shrink-0">Suggestions:</span>
                        {suggestions.map((s) => (
                            <button
                                key={s}
                                onClick={() => runCommand(s)}
                                className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all shrink-0"
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
