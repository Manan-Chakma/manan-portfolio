import { FaGithub, FaHeart } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <div className="text-2xl mb-2">
                            <span className="text-blue-400">{'<'}</span>
                            Manan Chakma
                            <span className="text-blue-400">{'/>'}</span>
                        </div>
                        <p className="text-gray-400">Full Stack Software Developer</p>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                            <FiLinkedin size={24} />
                        </a>
                        <a
                            href="mailto:mananchakma32@gmail.com"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                            <MdOutlineMail size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p className="flex items-center justify-center gap-2">
                        Made with <FaHeart size={16} className="text-red-500 fill-red-500" /> by Manan Chakma © 2026
                    </p>
                </div>
            </div>
        </footer>
    );
}
