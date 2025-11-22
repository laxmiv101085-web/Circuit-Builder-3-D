import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold text-[#0F172A]">CircuitBuilder 3D</h3>
                        <p className="text-sm text-gray-500 mt-1">© 2023 All rights reserved.</p>
                    </div>

                    <div className="flex gap-8 mb-6 md:mb-0">
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy</a>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="p-2 rounded-full bg-white border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-all">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
