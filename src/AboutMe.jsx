import profileImg from "../public/IMG-20240725-WA0001.jpg"
import {SiGithub} from 'react-icons/si';

function AboutMe (){
    return(
        <section className="flex flex-col md:flex-row items-center md:items-start bg-[#6a6b83] text-white p-8 md:p-16 gap-8 md:gap-12">

            <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-[#86bbbd]">
                <img src={profileImg} alt="Profiel Foto" className="w-full h-full object-cover"/>
            </div>

            <div className="flex flex-col justify-center space-y-4 md:space-y-6 max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-[#86bbbd]">Over Milan</h1>
                <h2 className="text-xl md:text-2xl font-semibold text-[#76949f]">Creative Software Developer</h2>
                <p className="text-base md:text-lg leading-relaxed text-gray-100">
                    Mijn naam is Milan Kurpershoek en ik ben een tweedejaarsstudent Creative Media and Game Technologies.
                    Ik ben opgeleid om op een creatieve manier problemen op te lossen en ideeën werkelijkheid te maken,
                    middels mijn fullstack development vaardigheden.
                </p>
                <a
                    href="https://github.com/Milan-Kurpershoek"
                    className="transition-colors duration-300 hover:text-[#86bbbd] hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiGithub size={60} color="#181717" />
                </a>
            </div>
        </section>

    )
}

export default AboutMe