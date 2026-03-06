"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    distance?: number;
    strength?: number;
}

export default function MagneticButton({
    children,
    className = "",
    distance = 0.6,
    strength = 40,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;

        mouseX.set(deltaX * distance);
        mouseY.set(deltaY * distance);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                x: springX,
                y: springY,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
