import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

import { Counter } from "@/components/Counter"


export function ErrorPage() {
    
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <Card className="w-[300px]">
                <CardHeader>
                    <CardTitle>Error 404</CardTitle>
                    <CardDescription>Oops! This page doesn’t exist.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild className="w-full">
                        <Link to="/">Go Home</Link>
                    </Button>
                </CardContent>
            </Card>
            <Counter></Counter>
        </div>
    )
}