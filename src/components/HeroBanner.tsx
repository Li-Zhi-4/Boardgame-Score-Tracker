import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ticketToRideImg from '/src/assets/ticket-to-ride.svg'


export function HeroBanner() {

    return (
        <div className='flex w-full h-screen pt-32'>
            <div className='flex flex-col sm:flex-row gap-6 justify-between items-center px-6 py-6 sm:px-16 w-full h-fit bg-neutral-50'>
                <div className="flex flex-col gap-12">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/error">Games</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Ticket to Ride</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-base font-bold text-blue-500">Strategy</span>
                            <h1 className="text-4xl font-semibold">Ticket to Ride</h1>
                        </div>
                        <p className="text-muted-foreground text-base">Ticket to Ride is a strategic board game where players collect train cards to claim routes and complete destination tickets across a map of cities.</p>
                    </div>
                </div>
                <img src={ticketToRideImg} alt="Ticket to Ride image" className="max-w-[300px] max-h-[300px]"/>
            </div>
        </div>
    )
}