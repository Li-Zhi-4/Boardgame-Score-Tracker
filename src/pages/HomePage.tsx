import { NavigationBar } from "@/components/NavigationBar"
import { Hero } from "@/components/Hero"
import { GamesSection } from "@/components/GamesSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { Footer } from "@/components/Footer"

export function HomePage() {
    return (
        <div className="overflow-x-hidden">
            <NavigationBar />
            <Hero />
            <GamesSection />
            <FeaturesSection />
            <Footer />
        </div>
    )
}