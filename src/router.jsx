import { createBrowserRouter } from "react-router-dom"
import Layout from "@/layouts/layout"
import { Home } from "@/pages/home"
import { CardDemo } from "@/pages/cardDemo"
import { Downloading } from "@/pages/downloading"
import { Pending } from "@/pages/pending"
import { Completed } from "@/pages/completed"
import { Settings } from "@/pages/settings"

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
            {
                path: "downloading",
                element: <Downloading />,
            },
            {
                path: "pending",
                element: <Pending />,
            },
            {
                path: "completed",
                element: <Completed />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
        ],
    },
])

export default router;
