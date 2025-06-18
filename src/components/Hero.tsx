import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import hero from '/src/assets/hero-image.svg'


export function Hero() {

    return (
        <div className="flex flex-col box-border justify-center min-h-screen h-fit w-full py-32 px-6 md:px-16">

            {/* Title */}
            <div className="flex flex-col gap-6 relative h-full md:flex-row md:items-center">
                
                <div className="flex flex-col gap-12 md:w-2xl">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-5xl font-bold">The Ultimate Board Game Scorekeeper</h1>
                        <p className="text-muted-foreground text-base">No more napkin math, no more scorekeeping stress. Let the math whiz take a break, just tap in the points, and we’ll handle the rest.</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Button variant="default" className="bg-linear-to-r from-blue-500 to-blue-400 cursor-pointer">See games</Button>
                        <Button variant="link" className="text-blue-500 cursor-pointer">
                            Learn more
                            <ArrowRight />
                        </Button>
                    </div>
                </div>

                <div className="h-full w-full">
                    <img src={hero} alt="" className="h-full w-full min-w-[400px] ml-auto mr-[-120px] md:mr-[-180px] md:min-w-[600px]"/>
                </div>
            </div>


        </div>
    )
}