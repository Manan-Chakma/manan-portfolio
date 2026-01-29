'use client'
import { useState } from "react";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if(element) {
            element.scrollIntoView({behavior: 'smooth'});
            setIsMenuOpen(false);
        }
    }; 

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <nav className="hidden md:flex gap-8 justify-center">
                    <button
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => scrollToSection('about')}
                    >
                        About
                    </button>

                    <button
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => scrollToSection('skills')}
                    >
                        Skills
                    </button>
                    
                    <button
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => scrollToSection('experience')}
                    >
                        Experience
                    </button>

                    <button
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => scrollToSection('projects')}
                    >
                        Projects
                    </button>

                    <button
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </button>
                </nav>
            </div>

            {/* mobile menu button */}
            <button
                className="md:hidden text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {
                    isMenuOpen ? 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    : 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>

                }
            </button>

            {
                isMenuOpen && (
                    <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
                        <button
                            className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                            onClick={() => scrollToSection('about')}
                        >
                            About
                        </button>

                        <button
                            className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                            onClick={() => scrollToSection('skills')}
                        >
                            Skills
                        </button>
                        
                        <button
                            className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                            onClick={() => scrollToSection('experience')}
                        >
                            Experience
                        </button>

                        <button
                            className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                            onClick={() => scrollToSection('projects')}
                        >
                            Projects
                        </button>

                        <button
                            className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact
                        </button>
                    </nav>
                )
            }
        </header>
    );
}