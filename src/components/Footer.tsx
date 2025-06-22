import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import logo from '/src/assets/logo.svg'

export function Footer() {
    const LINKS = ["Games", "Features", "About", "Contact"];
    const LINKS2 = ["Privacy Policy", "Terms of Service", "Cookie Settings"];

    return (
        <div className="flex flex-col gap-12 px-16 items-center justify-center w-full h-[500px]">
            {/* Links */}
            <div className="flex flex-col gap-4 items-center">
                <img src={logo} alt="logo" />
                <ul className="flex flex-row items-center">
                    {LINKS.map( (link, idx) => (
                        <li key={idx}>
                            <Button variant="link" asChild>
                                <Link to="/">{link}</Link>
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Copyright */}
            <div className="flex flex-col gap-6 pt-6 items-center w-full border-t border-neutral-200">
                <p className="px-4 text-neutral-500">Copyright 2025 © Endgame</p>
                <ul className="flex flex-row items-center">
                    {LINKS2.map( (link, idx) => (
                        <li className="text-muted-foreground text-xs" key={idx}>
                            <Button variant="link" asChild className="text-neutral-500">
                                <Link to="/">{link}</Link>
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}