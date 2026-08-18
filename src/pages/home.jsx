import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useInstances } from "@/services/useInstances"
import { Separator } from "@/components/ui/separator";

// Sample metrics — replace with real data.
const stats = [
    { label: "Total Users", value: "1,204" },
    { label: "Active Sessions", value: "58" },
    { label: "Revenue", value: "$12,430" },
    { label: "Open Tickets", value: "9" },
]

export function Home() {
    const { instances, addInstance } = useInstances();

    const add = () => {
        addInstance({ name: 'name here', domain: 'lkdyr.com', updatedAt: new Date() });
    };

    return (
        <div className="flex flex-col gap-6 p-6">
            <header className="flex items-center gap-2">
                <h1 className="text-lg font-semibold border-l-4 ps-2">Home</h1>
            </header>

            <div className="flex gap-2 flex-col lg:flex-row justify-center items-center">
                <Card className="bg-amber-300 max-w-xs lg:w-3/12">
                    <CardHeader>
                        <CardTitle>Aria2 Instances</CardTitle>

                    </CardHeader>
                </Card>
                <div className="bg-green-400 lg:w-9/12">
                    card section
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.label}>
                        <CardHeader>
                            <CardDescription>{stat.label}</CardDescription>
                            <CardTitle className="text-2xl">{stat.value}</CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Welcome back</CardTitle>
                    <CardDescription>
                        This is a sample home page. Build on top of it.
                    </CardDescription>
                    <CardAction>
                        <Button variant="outline">Refresh</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Replace this content with your actual dashboard widgets, tables,
                        or charts.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button>Get Started</Button>
                </CardFooter>
            </Card>

            <div>
                <pre>
                    {JSON.stringify(instances, null, 2)}
                </pre>
                <Button onClick={add}>Add</Button>
            </div>
        </div>
    )
}
