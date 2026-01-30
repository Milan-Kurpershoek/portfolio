import {createHashRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import AboutMe from "./AboutMe.jsx";
import SkillsAndTools from "./Skills&Tools.jsx";
import Projects from "./Projects.jsx";



const router = createHashRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <AboutMe/>,
            },

            {
                path: "/Bio",
                element: <AboutMe/>,
            },

            {
                path: "/Skills",
                element: <SkillsAndTools/>,
            },

            {
                path: "/Projecten",
                element: <Projects/>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
