import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { Plus } from "lucide-react"

import { NavigationBar } from "@/components/NavigationBar"
import { HeroBanner } from "@/components/HeroBanner"
import { TicketToRideScoreCard } from "@/components/TicketToRideComponents/TicketToRideScoreCard"
import { 
    TotalColumns,
    type TotalPoints,
    TrainColumns,
    type Train,
    DestinationColumns, 
    type Destination 
} from "@/components/TicketToRideComponents/DestinationTable/columns"
import { DataTable } from "@/components/TicketToRideComponents/DestinationTable/destination-table"
import { Footer } from "@/components/Footer"

import ticketToRideImage from '/src/assets/ticket-to-ride.svg'

function getData(trains: Train[], destinations: Destination[], longestPath: number): TotalPoints[] {
    const totalTrainPoints = trains.reduce((acc, object) => acc + (object.points ?? 0), 0);
    const totalDestinationPoints = destinations.reduce((acc, object) => acc + (object.points ?? 0), 0);
    const longestPathPoints = 0;
    
    return [
        {
            objectives: "Trains and Stations",
            status: totalTrainPoints === 0 ? "not scored" : "scored",
            points: totalTrainPoints
        },
        {
            objectives: "Destination Tickets",
            status: totalDestinationPoints === 0 ? "not scored" : "scored",
            points: totalDestinationPoints
        },
        {
            objectives: "Longest Path Bonus",
            status: longestPath === 0 ? "not scored" : "scored",
            points: longestPathPoints // Will have to compare between all player's longestPath
        },
        {
            objectives: "Total",
            status: "",
            points: totalTrainPoints + totalDestinationPoints + longestPathPoints
        },
    ]
}

function trainData(trains: Train[]): Train[] {
    const totalPoints = {
        trains: "Total",
        number: "",
        points: trains.reduce((acc, object) => acc + (object.points ?? 0), 0)
    }

    return (
        [...trains, totalPoints]
    )
}

function createTrainObject() {
    const TRAINS = ["1 train", "2 trains", "3 trains", "4 trains", "5 trains", "6 trains", "7 trains", "8 trains", "stations"];

    return (
        TRAINS.map( item => (
            {
                trains: item,
                number: "0x",
                points: 0
            }
        ))
    )
}


export function TicketToRideCalculatorPage() {
    const [trains, setTrains] = useState<Train[]>(createTrainObject);
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [longestPath, setLongestPath] = useState<number>(0);

    const trainAndStationData = trainData(trains);
    const totalData = getData(trains, destinations, longestPath);

    return (
        <div className="overflow-x-hidden">
            <NavigationBar />
            <HeroBanner 
                title="Ticket to Ride"
                tag="Strategy"
                description="Ticket to Ride is a strategic board game where players collect train cards to claim routes and complete destination tickets across a map of cities."
                imgURL={ticketToRideImage}
            />

            {/* Calculator Content Section */}
            <div className="flex flex-col px-6 py-16 sm:px-16 gap-6">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Score Calculator</h2>
                <Tabs defaultValue="player-1" className="w-full">
                    <div className="flex justify-between">
                        <TabsList>
                            <TabsTrigger value="player-1">Player 1</TabsTrigger>
                            <TabsTrigger value="player-2">Player 2</TabsTrigger>
                            <TabsTrigger value="results">Results</TabsTrigger>
                        </TabsList>
                        <Button variant="outline">
                            <Plus />
                            Add player
                        </Button>
                    </div>

                    {/* Player 1 Content goes here */}
                    <TabsContent value="player-1" className="flex flex-col lg:flex-row gap-6 pt-6">
                        <TicketToRideScoreCard 
                            trains={trains}
                            setTrains={setTrains}
                            destinations={destinations}
                            setDestinations={setDestinations}
                            longestPath={longestPath}
                            setLongestPath={setLongestPath}
                        />
                        <div className="flex flex-col gap-6 w-full">
                            <DataTable columns={TotalColumns} data={totalData} />
                            <DataTable columns={TrainColumns} data={trainAndStationData} />
                            <DataTable columns={DestinationColumns} data={destinations}/>
                        </div>
                    </TabsContent>

                    <TabsContent value="player-2">Change your password here.</TabsContent>
                    <TabsContent value="results">Change your password here.</TabsContent>
                    
                </Tabs>
            </div>
            <Footer />
            <Toaster className="h-fit bottom-4 right-4 fixed" />
        </div>
    )
}