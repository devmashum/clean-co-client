import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AdminLayout from "../components/AdminLayout";
import AddService from "../pages/AddService";

import Home from "../pages/Home";
import Error from "../pages/Error";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>,
            },
            {
                path: 'contact',
                element: <Contact></Contact>,
            },
        ]
    },

    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/registration',
        element: <Registration></Registration>
    },
    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: 'addservice',
                element: <AddService></AddService>
            }
        ]
    }

]);

export default routes;
