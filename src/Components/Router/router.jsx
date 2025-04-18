import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Show_All_Jobs from "../Home/Show_All_Jobs/Show_All_Jobs";
import Jobs_Details from "../Pages/Jobs_Details/Jobs_Details";
import Add_Jobs from "../Pages/Add_Jobs/Add_Jobs";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import MyApplyJobs from "../Pages/JobApply/MyApplyJobs/MyApplyJobs";


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
            },
            {
                path: "/showAllJobs",
                element: <Show_All_Jobs></Show_All_Jobs>
            },
            {
                path: "/post-job",
                element: <Add_Jobs></Add_Jobs>
            },
            {
                path: "/jobs_details/:id",
                element: <Jobs_Details></Jobs_Details>,
                loader: ({ params }) => fetch(`http://localhost:4000/allJobs/${params.id}`)
            },
            {
                path: "/jobs_apply/:id",
                element: <JobApply></JobApply>,
                loader: ({ params }) => fetch(`http://localhost:4000/allJobs/${params.id}`)
            
            },
            {
                path: "/myapplication",
                element: <MyApplications></MyApplications>
            
            },
            {
                path: "/myjobspost",
                element: <MyApplyJobs></MyApplyJobs>
            
            },
          
            
        ]


    },

])