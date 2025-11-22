'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';
import Circuit555 from './Circuit555';

const components = [
    { name: "NE555 timer IC", qty: "1" },
    { name: "LED (5mm)", qty: "1" },
    { name: "Resistor 1 kΩ", qty: "1" },
    { name: "Resistor 10 kΩ", qty: "1" },
    { name: "Capacitor 10 µF (16V)", qty: "1" },
    { name: "Breadboard", qty: "1" },
    { name: "Jumper wires", qty: "8–10" },
    { name: "9V battery + clip", qty: "1" },
];

const steps = [
    "Place the NE555 IC on the breadboard.",
    "Connect pin 1 to ground and pin 8 to +9V.",
    "Tie pin 4 (RESET) to +9V.",
    "Connect pins 2 and 6 together.",
    "Add a 10 kΩ resistor between pin 7 and pin 8.",
    "Add a 1 kΩ resistor between pin 7 and pin 6.",
    "Place the 10 µF capacitor between pin 2 and ground (negative to ground).",
    "Connect pin 3 to LED through a resistor, LED negative to ground.",
    "Power with 9V — the LED blinks."
];

export default function RealExample() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide">
                        Real Example
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">555 Timer LED Blinker</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        The classic NE555 in astable mode generates a square wave, causing the LED to blink continuously.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: 3D Visualization (Takes up 7 cols) */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <Circuit555 />
                            <p className="text-center text-sm text-gray-400 mt-3">Interactive 3D View • Drag to Rotate</p>
                        </motion.div>

                        {/* Components List below 3D view */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-blue-600" />
                                Components List
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {components.map((comp, idx) => (
                                    <div key={idx} className="flex flex-col bg-white p-3 rounded-xl border border-gray-200 text-center">
                                        <span className="text-gray-700 font-medium text-sm">{comp.name}</span>
                                        <span className="text-gray-400 text-xs mt-1">x{comp.qty}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Steps (Takes up 5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                            Build Steps
                        </h3>
                        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                                        {idx + 1}
                                    </div>
                                    <p className="text-gray-600 pt-1 text-sm leading-relaxed">{step}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded-xl text-yellow-800 text-sm font-medium">
                            💡 Note: Output frequency depends on R1, R2, and capacitor values.
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
