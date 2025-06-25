import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

import { NavigationBar } from "@/components/NavigationBar"
import { HeroBanner } from "@/components/HeroBanner"
import { TicketToRideScoreCard } from "@/components/TicketToRideComponents/TicketToRideScoreCard"
import { Footer } from "@/components/Footer"

import ticketToRideImage from '/src/assets/ticket-to-ride.svg'

export function TicketToRideCalculatorPage() {

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
                <div className="flex justify-between">
                    <Tabs defaultValue="player-1" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="player-1">Player 1</TabsTrigger>
                            <TabsTrigger value="player-2">Player 2</TabsTrigger>
                            <TabsTrigger value="results">Results</TabsTrigger>
                        </TabsList>

                        {/* Player 1 Content goes here */}
                        <TabsContent value="player-1" className="flex flex-col sm:flex-row gap-6 pt-6">
                            <TicketToRideScoreCard />

                        </TabsContent>

                        <TabsContent value="player-2">Change your password here.</TabsContent>
                        <TabsContent value="results">Change your password here.</TabsContent>

                    </Tabs>
                    <Button variant="outline">
                        <Plus />
                        Add player
                    </Button>
                </div>
            </div>

            <Footer />
        </div>
    )
}