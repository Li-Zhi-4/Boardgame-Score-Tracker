
export function GamesSection() {
    const GAMES = {
        "Strategy": ["Ticket to Ride", "Wingspan","Terraforming Mars"],
        "Family Games": ["Qwirkle", "Kingdomino"],
        "Cooperative": ["Pandemic", "Forbidden Island", "The Crew"],
        "Card Games": ["Scythe: The Rise of Fenris", "Race for the Galaxy", "Phase 10"]
    }

    return (
        <div className="flex flex-col gap-16 items-center py-16 px-6">

            <div className="flex flex-col gap-6 items-center">
                <div className="flex flex-col gap-2 items-center">
                    <span className="text-base font-bold text-blue-500">Games</span>
                    <h2 className="text-4xl font-semibold text-center">Tailored Calculators for Top Board Games</h2>
                </div>
                <p className="text-muted-foreground text-base text-center">From strategy epics to party favourites, these calculators are ready to handle the math for you.</p>
            </div>

            
            <div className="grid grid-flow-row grid-cols-2 gap-12 md:grid-cols-4">
                {Object.entries(GAMES).map( ([key, value]) => (
                    <div className="flex flex-col gap-3 w-full h-fit" key={key}>
                        <h3 className="text-base font-semibold text-neutral-950 text-center">{key}</h3>
                        <ul>
                            {value.map( (game, idx) => (
                                <li className="text-xs/5 font-bold text-neutral-500 text-center" key={idx}>{game.toUpperCase()}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            
        </div>
    )
}