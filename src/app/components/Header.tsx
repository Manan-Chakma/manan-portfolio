'use client'
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
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
                {isMenuOpen ? <MdOutlineClose size={24} /> : <HiOutlineMenu size={24} />}
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