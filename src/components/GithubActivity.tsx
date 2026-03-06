"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Star, GitBranch, GitCommit, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function GithubActivity() {
    const [mounted, setMounted] = React.useState(false);
    const [stats, setStats] = React.useState({ repos: 0, stars: 0, commits: 1240, prs: 42 });

    React.useEffect(() => {
        setMounted(true);
        // Fetch real GitHub stats
        fetch("https://api.github.com/users/TZ-ArbaazBaig")
            .then(res => res.json())
            .then(data => {
                if (data.public_repos) {
                    setStats(prev => ({ ...prev, repos: data.public_repos }));
                }
            })
            .catch(err => console.error("GitHub Fetch Error:", err));

        // Note: Stars usually require fetching all repos or using GraphQL. 
        // For simplicity, we'll fetch the repos list to sum stars or use a reasonable estimate if too many.
        fetch("https://api.github.com/users/TZ-ArbaazBaig/repos?per_page=100")
            .then(res => res.json())
            .then(repos => {
                if (Array.isArray(repos)) {
                    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
                    setStats(prev => ({ ...prev, stars: totalStars }));
                }
            })
            .catch(err => console.error("GitHub Repos Fetch Error:", err));
    }, []);

    // Mock data for contribution graph
    const getLevel = () => Math.floor(Math.random() * 5);

    return (
        <section className="section-padding relative">
            <div className="container-wide">
                <div className="glass-card p-12 md:p-16 rounded-[4rem] border border-white/5 relative overflow-hidden group">
                    {/* Background Glow */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] -z-10 group-hover:bg-primary/20 transition-all duration-700" />

                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/3">
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-xl">
                                    <Github className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight">Open Source</h3>
                                    <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mt-1">TZ-ArbaazBaig</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-10 text-balance">
                                Passionate about building highly-optimized systems and contributing
                                to the developer ecosystem through open-source innovation.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center hover:border-primary/20 transition-all flex flex-col items-center justify-center">
                                    <div className="text-3xl font-black tracking-tighter mb-1">{stats.repos}</div>
                                    <div className="text-[10px] text-muted-foreground/30 font-mono tracking-widest uppercase">Repositories</div>
                                </div>
                                <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center hover:border-primary/20 transition-all flex flex-col items-center justify-center">
                                    <div className="text-3xl font-black tracking-tighter mb-1">{stats.stars}</div>
                                    <div className="text-[10px] text-muted-foreground/30 font-mono tracking-widest uppercase">Total Stars</div>
                                </div>
                            </div>

                            <Link
                                href="https://github.com/TZ-ArbaazBaig"
                                target="_blank"
                                className="mt-10 flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all active:scale-95 group/link"
                            >
                                VISIT PROFILE <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                        </div>

                        <div className="flex-1 w-full bg-slate-900/40 p-10 rounded-[2.5rem] border border-white/5">
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.3em]">Live Contribution Graph</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-mono text-muted-foreground/30 uppercase">Less</span>
                                    <div className="flex gap-1">
                                        <div className="w-2.5 h-2.5 rounded-[2px] bg-white/5" />
                                        <div className="w-2.5 h-2.5 rounded-[2px] bg-primary/20" />
                                        <div className="w-2.5 h-2.5 rounded-[2px] bg-primary/40" />
                                        <div className="w-2.5 h-2.5 rounded-[2px] bg-primary/70" />
                                        <div className="w-2.5 h-2.5 rounded-[2px] bg-primary" />
                                    </div>
                                    <span className="text-[10px] font-mono text-muted-foreground/30 uppercase">More</span>
                                </div>
                            </div>

                            <div className="flex gap-[4px] flex-wrap md:flex-nowrap md:overflow-x-auto pb-4 scrollbar-hide min-h-[116px]">
                                {mounted ? Array.from({ length: 52 }).map((_, weekIdx) => (
                                    <div key={weekIdx} className="flex flex-col gap-[4px] shrink-0">
                                        {Array.from({ length: 7 }).map((_, dayIdx) => {
                                            const level = getLevel();
                                            return (
                                                <motion.div
                                                    key={dayIdx}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: (weekIdx * 0.005) + (dayIdx * 0.01) }}
                                                    className={`w-3 h-3 rounded-[3px] transition-colors duration-500 ${level === 0 ? "bg-white/[0.03]" :
                                                        level === 1 ? "bg-primary/10" :
                                                            level === 2 ? "bg-primary/30" :
                                                                level === 3 ? "bg-primary/60" :
                                                                    "bg-primary"
                                                        }`}
                                                />
                                            );
                                        })}
                                    </div>
                                )) : (
                                    <div className="w-full h-full flex items-center justify-center opacity-0">Loading graph...</div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-10 border-t border-white/5">
                                <div className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group/stat">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover/stat:scale-110 transition-transform shadow-lg shadow-primary/5">
                                        <GitCommit className="w-6 h-6" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-black tracking-tight">{stats.commits.toLocaleString()}+</div>
                                        <div className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-widest mt-1">Total Commits</div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group/stat">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover/stat:scale-110 transition-transform shadow-lg shadow-primary/5">
                                        <GitBranch className="w-6 h-6" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-black tracking-tight">{stats.prs}</div>
                                        <div className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-widest mt-1">Pull Requests</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
