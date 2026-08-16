import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/appSidebar"

const Layout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="h-screen overflow-y-auto">
                <Outlet />
            </SidebarInset>
        </SidebarProvider>
    );
};

export default Layout;