import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../errorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import AdminRoute from "../routes/AdminRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManagerRoute from "../routes/ManagerRoute";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";

const CreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "/dashboard/manageUser",
                element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
            }
        ]
    }
])

export default CreatedRouter;