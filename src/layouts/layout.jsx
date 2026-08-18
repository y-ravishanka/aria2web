import { Outlet } from "react-router-dom"
import AppSidebar from "@/components/appSidebar"

const Layout = () => {
    return (
        <div className="flex h-screen w-full">
            <AppSidebar />
            <main className="h-screen flex-1 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
