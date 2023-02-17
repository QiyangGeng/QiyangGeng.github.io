import Home from "./pages/Home"
import Test from "./pages/Test"
import NotFound from "./pages/NotFound"
import {Navigate} from "react-router-dom";

const routes = [
    {
        path: "*",
        name: "Wildcard",
        component: <Navigate to={"/404"} replace={true}/>,
    },
    {
        path: "/404",
        name: "Page Not Found",
        component: <NotFound/>,
    },
    {
        path: "/",
        name: "Home",
        component: <Home/>,
    },
    {
        path: "/Stationary",
        name: "Stationary",
        component: <Test/>,
        main: true
    },
    {
        path: "/Stationary/Wiki",
        name: "Wiki",
        component: <Test/>,
    },
    {
        path: "/Stationary/List Builder",
        name: "List Builder",
        component: <Test/>,
    },
    {
        path: "/Stationary/Scavenge",
        name: "Scavenge",
        component: <Test/>,
    },
];

export default routes;
