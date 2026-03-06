"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";

const responses: Record<string, string> = {
    projects: "Slayer Gemini AI: A Flutter-based AI chat application integrating Google's Gemini API.\n\nTask Manager: A Flutter productivity application for scheduling tasks.\n\nCrime Report System: A web-based application for reporting and managing crime reports.",
    slayer: "Slayer Gemini AI is a Flutter-based AI chat application that integrates Google's Gemini API to provide conversational AI functionality similar to ChatGPT.",
    task: "The Task Manager is a Flutter productivity application that allows users to schedule tasks with reminders using native notifications.",
    crime: "The Crime Report System is a web-based platform built with HTML, CSS, and JavaScript that allows users to report crimes and administrators to manage them.",
    impact: "Arbaaz has implemented real-world solutions like multi-role OTP authentication, Google Maps integration, scalable architecture using Provider/GetX, and high-performance cross-platform Flutter apps.",
    skills: "Arbaaz specializes in Flutter, Dart, React/Next.js, Python, PHP, and advanced Gemini API integration.",
    experience: "Flutter Developer at ThetaZero Pvt Ltd (Feb 2025 – Present) and Software Developer Intern at Incepta Solutions, Canada (Summer 2024).",
    github: "You can explore Arbaaz's projects on GitHub: https://github.com/TZ-ArbaazBaig",
    contact: "You can reach Arbaaz via the contact form, LinkedIn, or email at arbaazbaig98@gmail.com.",
    default: "I can answer questions about Arbaaz's projects, skills, or professional experience. Try asking about the 'Task Manager' or 'Slayer Gemini AI'.",
};

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: "bot" | "user"; content: string }[]>([
        { role: "bot", content: "Hello. I'm here to provide information about Arbaaz's work and experience. What would you like to know?" },
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);
    const chatRef = useRef<HTMLDivElement>(null);

    // Toggle chat
    const toggleChat = () => setIsOpen(!isOpen);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // Listen for external trigger
        const handleExternalTrigger = () => {
            setIsOpen(true);
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        window.addEventListener("trigger-ai-chat", handleExternalTrigger);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("trigger-ai-chat", handleExternalTrigger);
        };
    }, [isOpen]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.toLowerCase();
        setMessages((prev) => [...prev, { role: "user", content: input }]);
        setInput("");

        setTimeout(() => {
            let reply = responses.default;
            const msg = userMsg.trim();

            if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
                reply = "Hello! How can I help you today?";
            } else if (msg.includes("slayer") || msg.includes("gemini")) {
                reply = responses.slayer;
            } else if (msg.includes("task") || msg.includes("manager")) {
                reply = responses.task;
            } else if (msg.includes("crime") || msg.includes("report")) {
                reply = responses.crime;
            } else if (msg.includes("impact") || msg.includes("contribution") || msg.includes("achieve")) {
                reply = responses.impact;
            } else if (msg.includes("github") || msg.includes("link") || msg.includes("repo") || msg.includes("source")) {
                reply = responses.github;
            } else if (msg.includes("project") || msg.includes("work") || msg.includes("build")) {
                reply = responses.projects;
            } else if (msg.includes("skill") || msg.includes("tech") || msg.includes("stack") || msg.includes("know")) {
                reply = responses.skills;
            } else if (msg.includes("experi") || msg.includes("exp") || msg.includes("work") || msg.includes("career") || msg.includes("job")) {
                reply = responses.experience;
            } else if (msg.includes("contact") || msg.includes("reach") || msg.includes("talk") || msg.includes("email")) {
                reply = responses.contact;
            }

            setMessages((prev) => [...prev, { role: "bot", content: reply }]);
        }, 600);
    };

    return (
        <div className="relative z-50">
            {/* Trigger Button */}
            <button
                onClick={toggleChat}
                className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary text-background flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50 glow-primary active:scale-95 group"
            >
                {isOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <MessageSquare className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform" />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={chatRef}
                        initial={{ opacity: 0, scale: 0.9, y: 32 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 32 }}
                        className="fixed bottom-24 right-4 left-4 md:left-auto md:right-10 md:bottom-32 w-auto md:w-[400px] h-[75vh] max-h-[700px] glass-card rounded-[2.5rem] overflow-hidden flex flex-col z-[100] border border-white/10 shadow-[0_32px_128px_-16px_rgba(0,0,0,0.6)]"
                    >
                        {/* Header */}
                        <div className="bg-slate-900/60 p-6 flex items-center justify-between border-b border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <Bot className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold tracking-tight">AI Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Arbaaz.Bot</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all flex"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-hide bg-slate-950/20"
                        >
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                                        ? "bg-primary text-background font-medium rounded-tr-none shadow-lg shadow-primary/10"
                                        : "bg-white/5 border border-white/5 text-foreground/90 rounded-tl-none"
                                        }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-6 bg-slate-900/40 border-t border-white/5">
                            <form onSubmit={handleSend} className="relative">
                                <input
                                    type="text"
                                    placeholder="Ask about my projects..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-5 pr-12 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:scale-110 transition-transform disabled:opacity-30"
                                    disabled={!input.trim()}
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                            <p className="text-center text-[10px] text-muted-foreground/30 mt-4 uppercase tracking-[0.2em] font-mono">
                                Powered by Gemini.AI
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
