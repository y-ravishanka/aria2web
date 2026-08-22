import { useState } from "react"
import { ChevronUp, ChevronDown, Plus, Bold } from "lucide-react"
import { useInstances } from "@/services/useInstances"
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AddInstance from "@/components/addInstance";

export function Home() {
    const { instances, addInstance } = useInstances();
    const [expandedId, setExpandedId] = useState(null);

    const add = () => {
        addInstance({ name: 'name here', domain: 'lkdyr.com', updatedAt: new Date() });
    };

    const toggle = (id) => {
        setExpandedId((current) => (current === id ? null : id));
    };

    return (
        <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-6">
            <header className="flex items-center gap-2">
                <h1 className="text-lg font-semibold border-l-4 ps-2">Home</h1>
            </header>

            <div className="flex gap-4 flex-col lg:flex-row sm:gap-6">
                <Card className="flex flex-col gap-2 w-full lg:w-3/12">
                    <CardHeader>
                        <CardTitle className="font-bold text-lg">
                            Instances
                        </CardTitle>
                        <CardDescription>
                            Aria2 Server Instances.
                        </CardDescription>
                        <CardAction>
                            <AddInstance />
                        </CardAction>
                    </CardHeader>
                </Card>

                {/* <div className="flex flex-col gap-2 w-full lg:w-3/12">


                    <div className="rounded-xl border overflow-hidden">
                        {instances.map((instance) => {
                            const isExpanded = expandedId === instance.id;
                            return (
                                <div key={instance.id} className="border-b last:border-b-0">
                                    <button
                                        type="button"
                                        onClick={() => toggle(instance.id)}
                                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-accent"
                                    >
                                        <span className="truncate">{instance.name}</span>
                                        {isExpanded ? (
                                            <ChevronUp className="size-4 shrink-0" />
                                        ) : (
                                            <ChevronDown className="size-4 shrink-0" />
                                        )}
                                    </button>
                                    {isExpanded && (
                                        <div className="px-4 pb-3 flex flex-col gap-2">
                                            <button
                                                type="button"
                                                className="text-sm text-muted-foreground self-center hover:underline"
                                            >
                                                {"< details >"}
                                            </button>
                                            <label className="flex items-center gap-2 text-sm">
                                                <input type="checkbox" />
                                                options
                                            </label>
                                            <label className="flex items-center gap-2 text-sm">
                                                <input type="checkbox" />
                                                options
                                            </label>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <button
                        type="button"
                        onClick={add}
                        className="text-sm text-muted-foreground hover:underline self-start"
                    >
                        + Add instance
                    </button>
                </div> */}

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full lg:w-9/12 content-start">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="aspect-video rounded-xl border"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
