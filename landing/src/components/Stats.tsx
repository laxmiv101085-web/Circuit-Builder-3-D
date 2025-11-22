'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Circuits Designed", value: "1,250+" },
    { label: "Components", value: "350+" },
    { label: "Student Users", value: "800+" },
];

const useCases = [
    { title: "First-year Lab Projects", color: "from-blue-400 to-blue-600" },
    { title: "Mini & Major Projects", color: "from-purple-400 to-purple-600" },
    { title: "DIY Hobby Circuits", color: "from-cyan-400 to-cyan-600" },
];

export default function Stats() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">

                {/* Use Cases */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0F172A]">Perfect for every stage</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {useCases.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.03 }}
                                className={`h-40 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center p-6 shadow-lg text-white text-center`}
                            >
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-[#0F172A] rounded-3xl p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-20" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="pt-8 md:pt-0 px-4">
                                <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
