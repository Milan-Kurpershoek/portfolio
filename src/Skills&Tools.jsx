import {
    SiCss3, SiExpress, SiFigma, SiGithubpages, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiPhp, SiPhpstorm, SiReact, SiSqlite
} from "react-icons/si";
import {DiVisualstudio} from "react-icons/di";

function SkillsAndTools (){
    return(
        <section className="bg-[#6a6b83] text-white p-8 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                <div className="flex flex-col items-center">
                    <h3 className="text-3xl md:text-6xl font-bold text-[#86bbbd] mb-4">Talen</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <SiHtml5 size={60} color="#E34F26" />
                        <SiCss3 size={60} color="#663399" />
                        <SiJavascript size={60} color="#F7DF1E" />
                        <SiPhp size={60} color="#777BB4" />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-3xl md:text-6xl font-bold text-[#86bbbd] mb-4">Frameworks</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <SiLaravel size={60} color="#FF2D20" />
                        <SiExpress size={60} color="#000000" />
                        <SiReact size={60} color="#61DAFB" />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-3xl md:text-6xl font-bold text-[#86bbbd] mb-4">Tools</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <SiFigma size={60} color="#F24E1E" />
                        <SiGithubpages size={60} color="#222222" />
                        <DiVisualstudio size={60} color="#000" />
                        <SiPhpstorm size={60} color="#000000" />
                        <SiMysql size={60} color="#000000" />
                        <SiSqlite size={60} color="#003B57" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsAndTools