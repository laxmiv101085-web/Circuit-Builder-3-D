'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Box, Cylinder } from '@react-three/drei';
import { ArrowRight, Play } from 'lucide-react';

const Hero3D = () => {
    return (
        <Canvas camera={{ position: [3, 3, 3], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group rotation={[0, Math.PI / 4, 0]}>
                    {/* Breadboard Base */}
                    <Box args={[4, 0.2, 2.5]} position={[0, 0, 0]}>
                        <meshStandardMaterial color="#f0f0f0" />
                    </Box>

                    {/* 555 Timer IC */}
                    <Box args={[0.8, 0.3, 0.6]} position={[0, 0.25, 0]}>
                        <meshStandardMaterial color="#1a1a1a" />
                    </Box>

                    {/* LED */}
                    <group position={[1.2, 0.2, 0]}>
                        <Cylinder args={[0.15, 0.15, 0.4]} position={[0, 0.2, 0]}>
                            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
                        </Cylinder>
                        <Cylinder args={[0.16, 0.16, 0.1]} position={[0, 0, 0]}>
                            <meshStandardMaterial color="#ef4444" />
                        </Cylinder>
                    </group>

                    {/* Wires */}
                    <Box args={[0.05, 0.05, 1.2]} position={[0.6, 0.3, 0]} rotation={[0, 0, 0]}>
                        <meshStandardMaterial color="#3b82f6" />
                    </Box>
                </group>
            </Float>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
    );
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F6F8] pt-20">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="z-10"
                >
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold tracking-wide">
                        New: 3D Printing Support
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
                        Design Circuits. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            Visualize in 3D.
                        </span> <br />
                        Build Smarter.
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Instant 3D models, labeled wiring, components list, and step-by-step assembly — designed specifically for electronics students and hobbyists.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group">
                            Try Demo
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 rounded-xl bg-white text-gray-700 font-semibold shadow-sm border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                            <Play className="w-5 h-5 text-blue-600" />
                            View 3D Printing
                        </button>
                    </div>
                </motion.div>

                {/* 3D Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-[500px] w-full relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl transform scale-75" />
                    <Hero3D />
                </motion.div>
            </div>
        </section>
    );
}
