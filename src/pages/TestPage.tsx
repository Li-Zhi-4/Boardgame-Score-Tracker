import { NavigationBar } from "@/components/NavigationBar"
import { Counter } from "@/components/Counter"

export function TestPage() {

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <NavigationBar />
            <Counter></Counter>
        </div>
    )
}