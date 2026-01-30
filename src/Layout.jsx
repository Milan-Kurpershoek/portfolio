import {Link, Outlet} from "react-router";
import {SiGmail} from "react-icons/si";

function Layout(){
return(
    <div className={"min-h-screen flex flex-col"}>
        <header className="bg-[#6a6b83] text-white text-2xl font-semibold px-6 py-4 shadow-md flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">

            <span className="whitespace-nowrap text-2xl md:text-3xl">Portfolio</span>

            <div className="flex items-center gap-2 text-gray-200 text-base md:text-lg truncate max-w-full">
                <SiGmail size={30} color="#fff" />
                <span className="truncate">
      milan.kurpershoek@gmail.com
    </span>
            </div>

        </header>
        <nav className={"bg-[#76949f] text-white px-6 py-3 flex gap-6"}>
            <Link className={"hover:text-[#86bbbd] transition-colors duration-200"} to={"/Bio"}>Bio</Link>
            <Link className={"hover:text-[#86bbbd] transition-colors duration-200"} to={"/Skills"}>Skills</Link>
            <Link className={"hover:text-[#86bbbd] transition-colors duration-200"} to={"/Projecten"}>Projecten</Link>
        </nav>
        <main className={"flex-1 flex items-center justify-center px-6 py-8 text-white bg-gray-100"}>
            <Outlet></Outlet>
        </main>
        <footer className={"bg-[#6a6b83] text-[#86bbbd] text-center py-4 text-sm"}>
            Milan-Kurpershoek©
        </footer>
    </div>
)
}

export default Layout