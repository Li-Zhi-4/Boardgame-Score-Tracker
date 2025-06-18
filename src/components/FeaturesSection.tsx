import { FileSpreadsheet, Calculator, Users, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"


export function FeaturesSection() {
    const FEATURES = {
        "FileSpreadsheet": 
            [
                "Create or choose scoring templates tailored to specific games with support for multiple scoring categories, bonuses, and penalties.", 
                "Customizable Score Sheets",
                <FileSpreadsheet />
            ],
        "Calculator": 
            [
                "Instantly calculate scores and breakdown game data by category for each player. Highlight the winner and review data-driven game strategy.",
                "Auto-Calculation & Summary",
                <Calculator />
            ],
        "Users": 
            [
                "Enable synchronous score entries from player’s individual devices (or take turns with one device), with real-time syncing.",
                "Multi-Player Entry & Sync",
                <Users />
            ],
        "BarChart2": 
            [
                "Review game history including scores, and players. Show trends and insights for strategy.",
                "Game History & Stats",
                <BarChart2 />
            ]
    }

    /**
     * Think about the width of these sections and how they should align with each other.
     * This one is 768px and the other if aroun 680px and it looks a little weird having two different widths.
     */
    return (
        <div className="flex flex-col gap-16 items-center py-16 px-6 bg-neutral-50 md:px-16">

            <div className="flex flex-col gap-6 items-center md:max-w-[768px]">
                <div className="flex flex-col gap-2 items-center">
                    <span className="text-base font-bold text-blue-500">Features</span>
                    <h2 className="text-4xl font-semibold text-center">Scoring made simple, so you can skip the spreadsheet.</h2>
                </div>
                <p className="text-muted-foreground text-base text-center">Built for board gamers, this app features customizable score sheets, real-time multiplayer input, automatic calculations, and game history tracking.</p>
            </div>

            
            <div className="grid grid-flow-row grid-cols-2 gap-12 max-w-[680px]">
                {Object.entries(FEATURES).map( ([key, value]) => (
                    <div className="flex flex-col gap-3 items-center w-full h-fit md:items-start" key={key}>
                        <Button variant="default" size="icon" className="bg-linear-to-t from-blue-500 to-blue-400">
                            {value[2]}
                        </Button>
                        <h3 className="text-base font-semibold text-neutral-950 text-center md:text-left">{value[1]}</h3>
                        <p className="text-muted-foreground text-base text-center md:text-left">{value[0]}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}