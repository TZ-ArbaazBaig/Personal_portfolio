"use client";

import React from "react";
import { motion } from "framer-motion";

interface PhoneMockupProps {
    children?: React.ReactNode;
    color?: string;
}

export default function PhoneMockup({ children, color = "bg-slate-900" }: PhoneMockupProps) {
    return (
        <div className="relative mx-auto group/phone">
            {/* Phone Body */}
            <div className={`relative w-[280px] h-[580px] rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden ${color} transition-transform duration-700 group-hover/phone:scale-[1.02] group-hover/phone:-rotate-1`}>
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20 mr-auto ml-4" />
                </div>

                {/* Speaker Grill */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/5 rounded-full z-30" />

                {/* Screen Content */}
                <div className="absolute inset-0 z-10 flex flex-col pt-16 px-4">
                    {children}
                </div>

                {/* Glare effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent z-20 pointer-events-none" />
            </div>

            {/* Side Buttons */}
            <div className="absolute -left-2 top-24 w-1 h-12 bg-slate-700 rounded-l-md" />
            <div className="absolute -left-2 top-40 w-1 h-16 bg-slate-700 rounded-l-md" />
            <div className="absolute -left-2 top-60 w-1 h-16 bg-slate-700 rounded-l-md" />
            <div className="absolute -right-2 top-32 w-1 h-24 bg-slate-700 rounded-r-md" />

            {/* Bottom Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full z-30" />
        </div>
    );
}
