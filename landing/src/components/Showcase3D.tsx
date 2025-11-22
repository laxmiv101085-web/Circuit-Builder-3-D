'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Download, Printer } from 'lucide-react';

const Enclosure3D = () => {
    return (
        <Canvas shadows camera={{ position: [0, 2, 4], fov: 50 }}>
            <Stage environment="city" intensity={0.6}>
                <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
                    {/* Base of enclosure */}
                    <boxGeometry args={[3, 2, 0.5]} />
                    <meshStandardMaterial color="#e2e8f0" roughness={0.3} />
                </mesh>
                <mesh position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
                    {/* Walls */}
                    <boxGeometry args={[2.8, 1.8, 0.5]} />
                    <meshStandardMaterial color="#cbd5e1" wireframe />
                </mesh>
            </Stage>
            <OrbitControls autoRotate />
        </Canvas>
    );
};

export default function Showcase3D() {
    return (
        <section className="py-24 bg-[#F5F6F8] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <div className="h-[400px] md:h-[500px] w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 relative">
                            <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <Printer className="w-4 h-4" />
                                Preview Mode
                            </div>
                            <Enclosure3D />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                            From 3D Model to <br />
                            <span className="text-blue-600">3D Printing</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Don't just build on a breadboard. Export a custom-fitted enclosure for your circuit and print it in reality.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">1</div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Export STL</h4>
                                    <p className="text-sm text-gray-500">One-click export compatible with all slicers.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 text-cyan-600 font-bold">2</div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Print It</h4>
                                    <p className="text-sm text-gray-500">Optimized for Ender-3 and Prusa printers. ~3h print time.</p>
                                </div>
                            </div>
                        </div>

                        <button className="px-6 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                            <Download className="w-5 h-5" />
                            Download Sample STL
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
