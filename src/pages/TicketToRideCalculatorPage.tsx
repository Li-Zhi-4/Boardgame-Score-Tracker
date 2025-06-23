import { NavigationBar } from "@/components/NavigationBar"
import { HeroBanner } from "@/components/HeroBanner"
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
            <Footer />
        </div>
    )
}