import React from 'react';
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="bg-[#75b957] shadow-lg shadow-[#5a9042]/30">
            <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <img src="/fortuneforest.jpg" alt="FortuneForest logo" className="w-10 h-10 mr-3 rounded-full shadow-md border-2 border-white" />
                        <h1 className="text-3xl font-extrabold text-white tracking-tight font-['Bubblegum_Sans']">
                            <span className="text-green-300">F</span>ortune<span className="text-green-300">F</span>orest
                        </h1>
                    </div>
                    <nav className="flex items-center space-x-4">
                        <Button variant="secondary" className="bg-white text-[#75b957] hover:bg-opacity-90 transition-all duration-300 shadow-md">
                            Login
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#75b957] transition-all duration-300 shadow-md">
                            Sign Up
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;