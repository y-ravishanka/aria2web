import { NavLink } from "react-router-dom"

import {
    Plus,
    LayoutDashboard,
    Download,
    Clock,
    CheckCircle2,
    Settings,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const navItems = [
    { title: "Dashboard", url: "/", icon: LayoutDashboard, end: true },
    { title: "Downloading", url: "/downloading", icon: Download },
    { title: "Pending", url: "/pending", icon: Clock },
    { title: "Done / Stopped", url: "/completed", icon: CheckCircle2 },
    { title: "Settings", url: "/settings", icon: Settings },
]

const iconButtonClass =
    "flex size-10 items-center justify-center rounded-md text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"

const AppSidebar = () => {
    return (
        <aside className="flex h-screen w-14 shrink-0 flex-col items-center gap-2 border-r bg-sidebar py-3 text-sidebar-foreground">
            <Tooltip>
                <TooltipTrigger
                    className={cn(iconButtonClass, "cursor-not-allowed opacity-60")}
                    disabled
                >
                    <Plus className="size-5" />
                </TooltipTrigger>
                <TooltipContent side="right">Add (coming soon)</TooltipContent>
            </Tooltip>

            <div className="my-1 h-px w-6 bg-sidebar-border" />

            <nav className="flex flex-col items-center gap-2">
                {navItems.map((item) => (
                    <Tooltip key={item.title}>
                        <TooltipTrigger
                            render={
                                <NavLink
                                    to={item.url}
                                    end={item.end}
                                    className={({ isActive }) =>
                                        cn(
                                            iconButtonClass,
                                            isActive &&
                                            "bg-sidebar-accent text-sidebar-accent-foreground"
                                        )
                                    }
                                />
                            }
                        >
                            <item.icon className="size-5" />
                        </TooltipTrigger>
                        <TooltipContent side="right">{item.title}</TooltipContent>
                    </Tooltip>
                ))}
            </nav>
        </aside>
    );
};

export default AppSidebar;
