import { FaCode, FaRocket, FaUsers } from "react-icons/fa";

export function About() {
    return (
        <section id="about" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl mb-12 text-center text-gray-900">About Me</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <p className="text-lg text-gray-700 mb-6">
                            I am an MS Computer Science graduate from Edith Cowan University (ECU) with a strong foundation in software development, problem solving, and analytical thinking.
                        </p>

                        <p className="text-lg text-gray-700 mb-6">
                            During my studies, I worked on academic and practical projects using Python, .NET, R and Bash Script.
                            Additionally, I gained valuable experience through the professional placement at WAPOL in the final semester of my academic journey.
                        </p>

                        <p className="text-lg text-gray-700 mb-6">
                            Prior to my postgraduate studies, I worked full-time as a Software Engineer for over two and half years, where I developed strong expertise in Python, JavaScript, and PostgreSQL.
                            I worked extensively on Python based Odoo platform, contributing to both frontend (Owl.js) and backend (Python).
                            I contributed to ERP modules such as Sales, Purchasing, Invoicing, Billing, and POS.
                            Additionally, my experience with Apache Cordova strengthened my proficiency in JavaScript and jQuery, enhancing my adaptability across multiple technologies and frameworks.

                        </p>
                    </div>

                    <div className="grid gap-6">
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 bg-blue-100 rounded-lg">
                                    <FaCode className="text-blue-600" size={24} />
                                </div>
                                <h3 className="text-xl text-gray-900">Clean Code</h3>
                            </div>
                            <p className="text-gray-600">Writing maintainable, scalable, and well-documented code is my priority.</p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 bg-blue-100 rounded-lg">
                                    <FaRocket className="text-indigo-600" size={24} />
                                </div>
                                <h3 className="text-xl text-gray-900">Fast Learner</h3>
                            </div>
                            <p className="text-gray-600">Quickly adapting to new technologies and frameworks to deliver cutting-edge solutions.</p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 bg-blue-100 rounded-lg">
                                    <FaUsers className="text-purple-600" size={24} />
                                </div>
                                <h3 className="text-xl text-gray-900">Team Player</h3>
                            </div>
                            <p className="text-gray-600">Collaborating effectively with designers, developers, and stakeholders.</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}