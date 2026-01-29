import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                    <div className="w-32 h-32 bg-linear-to-br from-blue-600 to-indigo-600 rounded-full mx-auto flex items-center justify-center text-white text-5xl">
                        MC
                    </div>
                </div>

                <h1 className="text-5xl md:text-6xl mb-4 text-gray-900">
                    Hi I'm <span className="text-blue-600">Manan Chakma</span>
                </h1>

                <p className="text-2xl md:text-3xl text-gray-700 mb-8">
                    Full Stack Software Developer
                </p>

                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Passionate about creating scalable applications and solving complex problems.
                </p>

                <div className="flex gap-4 justify-center mb-12">
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Get In Touch
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                        View Work
                    </a>
                </div>

                <div className="flex gap-6 justify-center">
                    <a
                        href="https://github.com/Manan-Chakma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <FaGithub size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/manan-chakma/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <FiLinkedin size={28} />
                    </a>
                    <a
                        href="mailto:mananchakma32@gmail.com"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <MdOutlineMail size={28} />
                    </a>
                </div>
            </div>
        </section>
    )
}