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
import { Input } from "@/components/ui/input"
import { Plus, Minus, Ellipsis } from "lucide-react"

export function TicketToRideScoreCard() {
    const TRAINS = ["1 train", "2 trains", "3 trains", "4 trains", "5 trains", "6 trains", "7 trains", "stations"]

    return (
        <Card>
            <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-col gap-2">
                    <CardTitle>Player 1</CardTitle>
                    <CardDescription>Edit your player name and colour.</CardDescription>
                </div>
                <Button variant="ghost" size="icon">
                    <Ellipsis />
                </Button>
            </CardHeader>

            {/* Trains and Stations Calculator */}
            <CardContent className="flex flex-col gap-2">
                <CardTitle>Trains and Stations Calculator</CardTitle>
                <CardDescription>Count your train routes and remaining unused stations.</CardDescription>
                {TRAINS.map( item => (
                    <div className="flex flex-row w-full">
                        <span className="flex justify-center items-center w-[100px]">{item}</span>
                        <div className="flex flex-row gap-4 justify-center w-full">
                            <Button variant="secondary" size="icon">
                                <Minus />
                            </Button>
                            <Input className="w-9 h-9 no-spinner" placeholder="0" type="number" />
                            <Button variant="secondary" size="icon">
                                <Plus />
                            </Button>
                        </div>
                    </div>
                ))}
            </CardContent>

            {/* Destination Calculator */}
            <CardContent>
                <CardTitle>Destination Calculator</CardTitle>
                <CardDescription>Input a positive/negative value for completed/incomplete destinations tickets.</CardDescription>
                {/* Form goes here */}
            </CardContent>


            <CardContent>
                <CardTitle>Longest Path</CardTitle>
                <CardDescription>Input the length of your longest consecutive train path.</CardDescription>
                {/* Form goes here */}
            </CardContent>
        </Card>
    )
}