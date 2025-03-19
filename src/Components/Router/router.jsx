import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]


    },

])