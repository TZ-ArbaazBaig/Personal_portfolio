"use client";

import React, { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";

function Counter({ value, label }: { value: number; label: string }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(0, value, {
            duration: 2.5,
            ease: [0.16, 1, 0.3, 1], // Custom product-style ease
            onUpdate: (val) => setDisplayValue(Math.floor(val)),
        });
        return () => controls.stop();
    }, [value]);

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500 group"
        >
            <div className="text-5xl md:text-6xl font-black tracking-tighter mb-2 flex items-baseline group-hover:scale-105 transition-transform duration-500">
                <span className="text-gradient leading-none">{displayValue}</span>
                <span className="text-primary text-2xl md:text-3xl ml-1">+</span>
            </div>
            <div className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] text-muted-foreground uppercase opacity-40 text-center">
                {label}
            </div>
        </motion.div>
    );
}

export default function Stats() {
    const [githubStats, setGithubStats] = useState({ repos: 0, stars: 0 });

    useEffect(() => {
        fetch("https://api.github.com/users/TZ-ArbaazBaig")
            .then(res => res.json())
            .then(data => {
                if (data.public_repos) {
                    setGithubStats(prev => ({ ...prev, repos: data.public_repos }));
                }
            })
            .catch(err => console.error("Stats GitHub Fetch Error:", err));

        fetch("https://api.github.com/users/TZ-ArbaazBaig/repos?per_page=100")
            .then(res => res.json())
            .then(repos => {
                if (Array.isArray(repos)) {
                    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
                    setGithubStats(prev => ({ ...prev, stars: totalStars }));
                }
            })
            .catch(err => console.error("Stats GitHub Repos Fetch Error:", err));
    }, []);

    const stats = [
        { value: githubStats.repos, label: "GitHub Repositories" },
        { value: githubStats.stars, label: "Total Stars" },
        { value: 8, label: "Technologies" },
        { value: 1, label: "1+ Years Experience" },
    ];

    return (
        <section className="py-16 relative bg-slate-900/50">
            <div className="container-wide">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <Counter value={stat.value} label={stat.label} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
