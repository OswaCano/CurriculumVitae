import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaPrint } from "react-icons/fa";

const sections = ["Profile", "Projects", "Skills", "Education"];

export default function App() {
    const [activeSection, setActiveSection] = useState("Profile");

    const renderSection = () => {
        switch (activeSection) {
            case "Profile":
                return (
                    <motion.div
                        key="Profile"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6"
                    >
                        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Profile</h2>
                        <p className="mb-2">
                            Full-stack developer with experience creating web applications for personal use. Currently studying computer engineering. Looking to learn about the IT industry.
                        </p>
                        <p className="mb-2">
                            I have experience in web development, including both frontend and backend technologies, including in AI technologies and SQL and NoSQL databases.
                        </p>
                        <p>
                            I consider that I have skills such as commitment, leadership, teamwork, being organized and punctual, and I am always willing to learn new things.
                        </p>
                    </motion.div>
                );
            case "Projects":
                return (
                    <motion.div
                        key="Projects"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6"
                    >
                        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
                        <div className="space-y-4">
                            <div className="card bg-white rounded-xl shadow-md p-4">
                                <h3 className="text-lg font-semibold">PrediBets – Betting predictor chatbot (in progress)</h3>
                                <p className="text-sm text-gray-600">Made with - FastAPI + NestJS + React + MongoDB</p>
                                <a className="text-blue-600 hover:underline" href="https://github.com/OswaCano/PrediBets" target="_blank" rel="noopener noreferrer">Repository</a>
                                <div>
                                    <img src="./predibets1.png" alt="PrediBets Screenshot" className="mt-2 rounded-lg shadow-md w-full max-w-md" />
                                </div>
                            </div>
                            <div className="card bg-white rounded-xl shadow-md p-4">
                                <h3 className="text-lg font-semibold">QC Informa – Social network designed for students</h3>
                                <p className="text-sm text-gray-600">Made with - NestJS + React + Postgres</p>
                                <a className="text-blue-600 hover:underline" href="https://github.com/OswaCano/QC-Informa" target="_blank" rel="noopener noreferrer">Repository</a>
                                <div>
                                    <img src="./qcInforma1.png" alt="QC Informa Screenshot" className="mt-2 rounded-lg shadow-md w-full max-w-md" />
                                </div>
                                <div>
                                    <img src="./qcInforma2.png" alt="QC Informa Screenshot" className="mt-2 rounded-lg shadow-md w-full max-w-md" />
                                </div>
                                <div>
                                    <img src="./qcInforma3.png" alt="QC Informa Screenshot" className="mt-2 rounded-lg shadow-md w-full max-w-md" />
                                </div>

                            </div>
                        </div>
                    </motion.div>
                );
            case "Skills":
                return (
                    <motion.div
                        key="Skills"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6"
                    >
                        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Skills</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-white rounded-xl shadow-md p-4">
                                <h3 className="text-lg font-semibold mb-2 text-blue-600">Languages</h3>
                                <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                                    <li>JavaScript</li>
                                    <li>PHP</li>
                                    <li>Python</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-4">
                                <h3 className="text-lg font-semibold mb-2 text-blue-600">Frameworks</h3>
                                <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                                    <li>Laravel</li>
                                    <li>React / Vue</li>
                                    <li>Node.js</li>
                                    <li>NestJS</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-4">
                                <h3 className="text-lg font-semibold mb-2 text-blue-600">Databases</h3>
                                <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                                    <li>MongoDB</li>
                                    <li>MySQL</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-4">
                                <h3 className="text-lg font-semibold mb-2 text-blue-600">Others</h3>
                                <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                                    <li>Git / GitHub</li>
                                    <li>Google Teams</li>
                                    <li>Figma</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                );
            case "Education":
                return (
                    <motion.div
                        key="Education."
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6"
                    >
                        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
                        <ul className="list-disc pl-6 text-sm text-gray-700">
                            <li>CUCEI - Computer Engineering (Studying) since 2022</li>
                        </ul>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 font-sans">
            <div className="max-w-4xl mx-auto py-12 px-6">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center mb-8"
                >
                    <img
                        src="./fotoPerfil.JPEG"
                        alt="profile"
                        className="rounded-full w-28 h-28 mb-4 shadow-lg"
                    />
                    <h1 className="text-4xl font-bold mb-1 text-center">Brayan Oswaldo Cano López</h1>
                    <p className="text-gray-500 text-lg">Full Stack Developer</p>
                </motion.div>

                <nav className="flex justify-center gap-6 border-b pb-4 mb-6">
                    {sections.map((section) => (
                        <button
                            key={section}
                            onClick={() => setActiveSection(section)}
                            className={`text-lg font-medium transition-colors duration-300 ${
                                activeSection === section ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-500"
                            }`}
                        >
                            {section}
                        </button>
                    ))}
                </nav>

                {/* Sección activa */}
                {renderSection()}
            </div>

            <footer className="bg-white border-t py-4 mt-8">
                <div className="max-w-4xl mx-auto flex justify-center gap-6">
                    <a href="https://www.instagram.com/oswa_cano/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-6 h-6 text-gray-600 hover:text-pink-500" />
                    </a>
                    <a href="https://github.com/OswaCano" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-6 h-6 text-gray-600 hover:text-black" />
                    </a>
                    <a href="https://linkedin.com/in/oswaldo-cano-847735323" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                    </a>
                    <button onClick={handlePrint}>
                        <FaPrint className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                    </button>
                </div>
            </footer>
        </div>
    );
}