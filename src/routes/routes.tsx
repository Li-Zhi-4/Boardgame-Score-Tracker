import { HomePage } from "@/pages/HomePage"

import { TicketToRideCalculatorPage } from "@/pages/TicketToRideCalculatorPage"

import { ErrorPage } from "@/pages/ErrorPage"
import { TestPage } from "@/pages/TestPage"


export const routes = [
    { path: "/", element: <HomePage />},

    { path: "/ticket-to-ride-calculator", element: <TicketToRideCalculatorPage />},

    { path: "/error", element: <ErrorPage /> },
    { path: "/test", element: <TestPage /> }
]