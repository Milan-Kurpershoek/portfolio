import {SiGithub} from "react-icons/si";
import projectOne from "../public/img.png"
import projectTwo from "../public/img_1.png"
import projectThree from "../public/img_2.png"


function Projects (){
    return(
        <section className="bg-[#6a6b83] text-white p-8 md:p-16">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Project 1 */}
                <div className="bg-[#57576d] rounded-xl shadow-lg overflow-hidden flex flex-col">
                    <div className="w-full h-48 md:h-64 overflow-hidden">
                        <img src={projectOne} alt="Foto Project One" className="w-full h-full object-cover"/>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1">
                        <h4 className="text-2xl md:text-3xl font-bold text-[#86bbbd] mb-2">My First Front-End</h4>

                        <p className="text-gray-100 mb-2">
                            Mijn eerste front-end applicatie.
                        </p>

                        <p className="text-gray-100 mb-2">
                            <span className="font-semibold text-[#86bbbd]">Technologie:</span> HTML, CSS, Visual Studio Code
                        </p>

                        <ul className="list-disc list-inside text-gray-100 mb-4 space-y-1">
                            <li>Basis van HTML geleerd</li>
                            <li>Basis van CSS geleerd</li>
                            <li>Responsive maken van een applicatie</li>
                        </ul>

                        <div className="flex gap-4 mt-auto">
                            <a
                                href="https://milan-kurpershoek.github.io/prg01-eindopdracht/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#86bbbd] text-[#1f1f1f] px-4 py-2 rounded-lg font-semibold hover:bg-[#5fa7a9] transition-colors duration-300"
                            >
                                Live Project
                            </a>
                            <a
                                href="https://github.com/Milan-Kurpershoek/prg01-eindopdracht"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-110"
                            >
                                <SiGithub size={36} color="#181717" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="bg-[#57576d] rounded-xl shadow-lg overflow-hidden flex flex-col">
                    <div className="w-full h-48 md:h-64 overflow-hidden">
                        <img src={projectTwo} alt="Foto Project Two" className="w-full h-full object-cover"/>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1">
                        <h4 className="text-2xl md:text-3xl font-bold text-[#86bbbd] mb-2">My First Game</h4>

                        <p className="text-gray-100 mb-2">
                            Mijn eerste game, waarbij ik de principes van Object-Oriented Programming heb toegepast.
                        </p>

                        <p className="text-gray-100 mb-2">
                            <span className="font-semibold text-[#86bbbd]">Technologie:</span> Excaliber, Javascript
                        </p>

                        <ul className="list-disc list-inside text-gray-100 mb-4 space-y-1">
                            <li>Hoe je object georienteerd programmeert</li>
                        </ul>

                        <div className="flex gap-4 mt-auto">
                            <a
                                href="https://milan-kurpershoek.github.io/prg4-eindproject-2025/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#86bbbd] text-[#1f1f1f] px-4 py-2 rounded-lg font-semibold hover:bg-[#5fa7a9] transition-colors duration-300"
                            >
                                Live Project
                            </a>
                            <a
                                href="https://github.com/Milan-Kurpershoek/prg4-eindproject-2025"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-110"
                            >
                                <SiGithub size={36} color="#181717" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="bg-[#57576d] rounded-xl shadow-lg overflow-hidden flex flex-col">
                    <div className="w-full h-48 md:h-64 overflow-hidden">
                        <img src={projectThree} alt="Foto Project Three" className="w-full h-full object-cover"/>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1">
                        <h4 className="text-2xl md:text-3xl font-bold text-[#86bbbd] mb-2">Prehistoric World</h4>

                        <p className="text-gray-100 mb-2">
                            Een Full-Stack applicatie, waarbij ik een RESTfull Webservice moest maken met een bijbehorende front-end pagina.
                        </p>

                        <p className="text-gray-100 mb-2">
                            <span className="font-semibold text-[#86bbbd]">Technologie:</span> Express, React, MongoDB, TailwindCSS
                        </p>

                        <ul className="list-disc list-inside text-gray-100 mb-4 space-y-1">
                            <li>Basis van Express geleerd</li>
                            <li>Basis van React geleerd</li>
                        </ul>

                        <div className="flex gap-4 mt-auto">
                            <a
                                href="http://145.24.237.147:8000/prehistoric-animals/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#86bbbd] text-[#1f1f1f] px-4 py-2 rounded-lg font-semibold hover:bg-[#5fa7a9] transition-colors duration-300"
                            >
                                Live Project
                            </a>
                            <a
                                href="https://github.com/Milan-Kurpershoek/prehistoric-world-react-front-end"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-110"
                            >
                                <SiGithub size={36} color="#181717" />
                            </a>
                            <a
                                href="https://github.com/Milan-Kurpershoek/prehistoric-world-restful-webservice"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-110"
                            >
                                <SiGithub size={36} color="#181717" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    )
}

export default Projects