"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1500 }) {
    const points = useRef<THREE.Points>(null!);

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        const { mouse } = state;
        if (points.current) {
            points.current.rotation.x += 0.0005;
            points.current.rotation.y += 0.0005;

            // Subtle cursor follow
            points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, mouse.x * 0.2, 0.1);
            points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, mouse.y * 0.2, 0.1);
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particlesPosition, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#00f2fe"
                sizeAttenuation={true}
                transparent={true}
                alphaTest={0.5}
                opacity={0.6}
            />
        </points>
    );
}

export default function Scene() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 bg-[#030014]">
            {mounted && (
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <ambientLight intensity={0.5} />
                    <Particles />
                </Canvas>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014]" />
        </div>
    );
}
