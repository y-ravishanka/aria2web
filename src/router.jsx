import { createBrowserRouter } from "react-router-dom"
import Layout from "@/layouts/layout"
import { Home } from "@/pages/home"
import { CardDemo } from "@/pages/cardDemo"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "login",
                element: <CardDemo />,
            },
        ],
    },
])

export default router;
