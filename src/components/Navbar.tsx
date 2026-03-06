"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X, Terminal, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-8"
      }`}>
      <div className="container-tight">
        <div className={`glass rounded-2xl md:rounded-[2rem] px-6 py-4 flex items-center justify-between transition-all duration-500 ${isScrolled ? "bg-slate-900/40 shadow-2xl shadow-black/20" : "bg-transparent border-transparent"
          }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02] active:scale-95 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 group-hover:bg-primary/30 transition-all" />
              <div className="w-10 h-10 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-black tracking-tighter text-white z-10">AB</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-widest uppercase leading-none">ARBAAZ BAIG</span>
              <span className="text-[9px] font-mono text-primary tracking-[0.3em] uppercase mt-1">Mobile Arch.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("trigger-ai-chat"))}
                className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-all active:scale-95 flex items-center gap-2"
              >
                Let's Talk <MessageSquare className="w-4 h-4 text-primary" />
              </button>
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden p-2 text-foreground active:scale-90 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 p-8 glass rounded-3xl border border-white/10 md:hidden flex flex-col items-center gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="w-full h-px bg-white/5 my-2" />
            <button
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent("trigger-ai-chat"));
              }}
              className="w-full py-4 bg-primary text-background font-bold rounded-2xl text-center flex items-center justify-center gap-2"
            >
              CHAT WITH AI <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
