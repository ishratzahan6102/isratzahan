import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact-me',
                element: <Contact></Contact>
            }
            ,
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])