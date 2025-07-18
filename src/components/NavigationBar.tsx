import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import logo from '@/assets/logo.svg'

export function NavigationBar() {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white">
            {/* Mobile Navigation Bar */}
            <div className="md:hidden flex flex-row justify-between items-center px-16 w-full h-[56px] shadow-sm">
                <img src={logo} alt="logo" />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>The Mobile Navigation Bar</SheetTitle>
                            <SheetDescription>
                                The mobile navigation bar will go here once it's designed.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Navigation Bar */}
            <div className="hidden md:flex flex flex-row justify-between items-center px-16 w-full h-[56px] shadow-sm">
                <Link to='/'>
                    <img src={logo} alt="home logo" />
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Games</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink className="w-[300px]" asChild>
                                    <Link to='/ticket-to-ride-calculator'>Ticket to Ride</Link>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to='/error'>Features</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to='/error'>About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to='/error'>Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to='/test'>Test</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div>{/* Log in content will go here */}</div>
            </div>
        </header>
    )
}