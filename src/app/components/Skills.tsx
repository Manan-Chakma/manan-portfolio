import {
    RiNextjsFill,
    RiTailwindCssFill,
    RiJavascriptFill,
} from "react-icons/ri";
import { FaPython, FaWindows, FaUbuntu, FaGit } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { MdCss } from "react-icons/md";
import {
    SiOdoo,
    SiMysql,
    SiJira,
    SiPycharm,
    SiPostman,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

const skills = [
    { icon: RiNextjsFill, name: "Next.js" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS" },
    { icon: SiOdoo, name: "Odoo" },
    { icon: FaPython, name: "Python" },
    { icon: RiJavascriptFill, name: "JavaScript" },
    { icon: TiHtml5, name: "HTML5" },
    { icon: MdCss, name: "CSS" },
    { icon: BiLogoPostgresql, name: "PostgreSQL" },
    { icon: SiMysql, name: "MySQL" },
    { icon: FaGit, name: "Git" },
    { icon: SiJira, name: "Jira" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiPycharm, name: "PyCharm" },
    { icon: VscVscode, name: "VS Code" },
    { icon: FaUbuntu, name: "Ubuntu" },
    { icon: FaWindows, name: "Windows" },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl mb-12 text-gray-900 text-center">
                    Skills & Tools
                </h2>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
                    {skills.map(({ icon: Icon, name }) => (
                        <div
                            key={name}
                            className="flex flex-col items-center gap-3 group cursor-default"
                        >
                            <Icon
                                size={55}
                                className="text-gray-700 transition-transform duration-200 group-hover:scale-110"
                            />
                            <span className="text-sm text-gray-600">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
