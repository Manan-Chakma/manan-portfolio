'use client'

import { useState } from 'react';
import { PdfModal } from '@/app/components/PdfModal';
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { SiLeetcode, SiHackerrank, SiCodeforces } from "react-icons/si";
import Tooltip from '@mui/material/Tooltip';
import { TiAttachment } from "react-icons/ti";


import Image from 'next/image'

export function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pdfUrl = '/Manan_Chakma_Resume.pdf';
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden">
                        <Image
                            className="object-cover w-full h-full"
                            src="/profile.jpg"
                            width={150}
                            height={150}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                {/* <div className="w-32 h-32 bg-linear-to-br from-blue-600 to-indigo-600 rounded-full mx-auto flex items-center justify-center text-white text-5xl">
                        MC
                    </div> */}

                <h1 className="text-5xl md:text-6xl mb-4 text-gray-900">
                    Hi I'm <span className="text-blue-600">Manan Chakma</span>
                </h1>

                <p className="text-2xl md:text-3xl text-gray-700 mb-8">
                    Software Engineer
                </p>

                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                    Passionate about creating scalable applications and solving complex problems.
                    I am currently seeking Graduate Software Engineer or Software Engineer roles in Australia where I can contribute my knowledge, grow as a professional, and deliver value to the organization.
                </p>

                <div className="flex gap-4 justify-center mb-12">
                    <button
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex gap-1"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <TiAttachment size={23} /> Preview CV

                    </button>
                    <PdfModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} pdfUrl={pdfUrl} />
                    <a
                        href="#projects"
                        className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                        View Work
                    </a>
                </div>

                <div className="flex gap-6 justify-center">
                    <Tooltip title="Github">
                        <a
                            href="https://github.com/Manan-Chakma"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <FaGithub size={28} />
                        </a>
                    </Tooltip>

                    <Tooltip title="Linkedin">
                        <a
                            href="https://www.linkedin.com/in/manan-chakma/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <FiLinkedin size={28} />
                        </a>
                    </Tooltip>

                    <Tooltip title="Hackerrank">
                        <a
                            href="https://www.hackerrank.com/profile/mananchakma32"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <SiHackerrank size={28} />
                        </a>
                    </Tooltip>

                    <Tooltip title="Leetcode">
                        <a
                            href="https://leetcode.com/u/Manan-Chakma/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <SiLeetcode size={28} />
                        </a>
                    </Tooltip>

                    <Tooltip title="Codeforces">
                        <a
                            href="https://codeforces.com/profile/chow03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <SiCodeforces size={28} />
                        </a>
                    </Tooltip>

                    <Tooltip title="Mailto">
                        <a
                            href="mailto:mananchakma32@gmail.com"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <MdOutlineMail size={28} />
                        </a>
                    </Tooltip>
                </div>
            </div>
        </section>
    )
}