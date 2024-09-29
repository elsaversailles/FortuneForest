import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "./ui/button";

const LandingPage = () => {
    return (
        <div className="fixed inset-0 overflow-hidden -z-10">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('bg-image.webp')",
                    opacity: 0.5
                }}
            ></div>
            <main className="relative z-10 h-full flex flex-col items-center justify-between">
                <div className="text-center mt-20">
                    <motion.h1
                        className="mb-4 flex items-center justify-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            className="text-7xl font-inter font-extrabold text-green-600 mr-4"
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                        >
                            Welcome to
                        </motion.span>
                        <motion.span
                            className="text-7xl font-extrabold text-green-800 font-['Bubblegum_Sans'] leading-tight relative"
                            initial={{ x: 100 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
                        >
                            <span className="relative">
                                F<span className="relative inline-block">
                                    <motion.span
                                        className="absolute inset-0 flex items-center justify-center"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                    >
                                        <svg className="w-12 h-12" viewBox="0 0 24 24">
                                            <defs>
                                                <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#FFD700" />
                                                    <stop offset="100%" stopColor="#FFA500" />
                                                </linearGradient>
                                            </defs>
                                            <circle cx="12" cy="12" r="10" fill="url(#coinGradient)" stroke="#DAA520" strokeWidth="1" />
                                            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#8B4513" fontSize="14" fontWeight="bold">$</text>
                                        </svg>
                                    </motion.span>
                                    <span className="relative z-10 text-transparent">o</span>
                                </span>rtuneF<span className="relative inline-block">
                                    <motion.span
                                        className="absolute inset-0 flex items-center justify-center"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                    >
                                        <svg className="w-12 h-12" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" fill="url(#coinGradient)" stroke="#DAA520" strokeWidth="1" />
                                            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#8B4513" fontSize="14" fontWeight="bold">$</text>
                                        </svg>
                                    </motion.span>
                                    <span className="relative z-10 text-transparent">o</span>
                                </span>rest
                            </span>
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-green-700 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Play, Explore, and Reforest. Turn your game rewards into real-world trees!
                    </motion.p>
                </div>
                <div className="w-full flex justify-between items-end overflow-hidden">
                    <img src="tree.gif" alt="Left tree" className="w-1/3 h-auto -mb-10 -ml-10" />
                    <img src="tree.gif" alt="Center tree" className="w-1/4 h-auto mb-0" />
                    <img src="tree.gif" alt="Right tree" className="w-1/3 h-auto -mb-10 -mr-10" />
                </div>
            </main>
        </div>
    );
};

export default LandingPage;