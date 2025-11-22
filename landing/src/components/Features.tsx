'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Layers, ListOrdered } from 'lucide-react';

const features = [
    {
        icon: <Box className="w-8 h-8 text-white" />,
        title: "Auto-Labeled 3D Circuits",
        description: "Automatically generate a 3D representation of your circuit from a simple schematic or list.",
        color: "bg-blue-500"
    },
    {
        icon: <Layers className="w-8 h-8 text-white" />,
        title: "Component List & Cost",
        description: "Get an instant Bill of Materials (BOM) with estimated pricing in INR for your local market.",
        color: "bg-cyan-500"
    },
    {
        icon: <ListOrdered className="w-8 h-8 text-white" />,
        title: "Step-by-Step Build Guide",
        description: "Follow clear, numbered instructions to assemble your project on a breadboard without errors.",
        color: "bg-indigo-500"
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Everything you need to build</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From concept to reality, we provide the tools to make electronics easier to understand and build.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
