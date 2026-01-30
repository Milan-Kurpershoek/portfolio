import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout.jsx";
import AboutMe from "./AboutMe.jsx";
import SkillsAndTools from "./Skills&Tools.jsx";
import Projects from "./Projects.jsx";



const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <AboutMe/>,
            },

            {
                path: "/AboutMe",
                element: <AboutMe/>,
            },

            {
                path: "/SkillsAndTools",
                element: <SkillsAndTools/>,
            },

            {
                path: "/Projects",
                element: <Projects/>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
