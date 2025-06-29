import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ellipsis } from "lucide-react"

import { type Destination, type Train } from "./DestinationTable/columns"

// Imported forms
import { TrainForm } from "./TrainForm"
import { DestinationForm } from "./DestinationForm"
import { LongestPathForm } from "./LongestPathForm"

interface ScoreCardProps {
    trains: Train[],
    setTrains: React.Dispatch<React.SetStateAction<Train[]>>
    destinations: Destination[],
    setDestinations: React.Dispatch<React.SetStateAction<Destination[]>>,
    longestPath: number,
    setLongestPath: React.Dispatch<React.SetStateAction<number>>
}

export function TicketToRideScoreCard({ trains, setTrains, destinations, setDestinations, longestPath, setLongestPath }: ScoreCardProps) {

    return (
        <Card className="w-full lg:w-auto">
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
                {/* Form goes here */}
                <TrainForm trains={trains} setTrains={setTrains} />
            </CardContent>

            {/* Destination Calculator */}
            <CardContent className="flex flex-col gap-2">
                <CardTitle>Destination Calculator</CardTitle>
                <CardDescription>Input a positive/negative value for completed/incomplete destinations tickets.</CardDescription>
                {/* Form goes here */}
                <DestinationForm destinations={destinations} setDestinations={setDestinations}/>
            </CardContent>


            <CardContent className="flex flex-col gap-2">
                <CardTitle>Longest Path</CardTitle>
                <CardDescription>Input the length of your longest consecutive train path.</CardDescription>
                {/* Form goes here */}
                <LongestPathForm longestPath={longestPath} setLongestPath={setLongestPath} />
            </CardContent>
        </Card>
    )
}