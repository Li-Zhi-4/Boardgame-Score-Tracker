import { useState } from "react"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Plus, Minus, Ellipsis } from "lucide-react"

export function TicketToRideScoreCard() {
    const [destValue, setDestValue] = useState(undefined);

    const TRAINS = ["1 train", "2 trains", "3 trains", "4 trains", "5 trains", "6 trains", "7 trains", "stations"];
    const DESTINATIONS: number[] = [];
    
    const FormSchema = z.object({
        points: z.coerce.number().int().optional()
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            points: undefined,
        },
    })


    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
        if (typeof data["points"] === "number") {
            DESTINATIONS.push(data["points"]);
            toast("Successfully Recorded Destination Ticket", {
                description: `${data["points"]} points added to total`,
                action: {
                    label: "undo",
                    onClick: () => console.log("Undo")
                }
            })
        }
        form.setValue("points", undefined);
        console.log(DESTINATIONS);
    }

    return (
        <Card>
            <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-col gap-2">
                    <CardTitle>Player 1</CardTitle>
                    <CardDescription>Edit your player name and colour.</CardDescription>
                </div>
                <Button variant="ghost" size="icon">
                    <Ellipsis />
                </Button>
            </CardHeader>

            {/* Trains and Stations Calculator */}
            <CardContent className="flex flex-col gap-2">
                <CardTitle>Trains and Stations Calculator</CardTitle>
                <CardDescription>Count your train routes and remaining unused stations.</CardDescription>
                {TRAINS.map( (item, idx) => (
                    <div className="flex flex-row w-full" key={idx}>
                        <span className="flex justify-center items-center w-[100px]">{item}</span>
                        <div className="flex flex-row gap-4 justify-center w-full">
                            <Button variant="secondary" size="icon">
                                <Minus />
                            </Button>
                            <Input id={item} className="w-9 h-9 no-spinner" placeholder="0" type="number" />
                            <Button variant="secondary" size="icon">
                                <Plus />
                            </Button>
                        </div>
                    </div>
                ))}
            </CardContent>

            {/* Destination Calculator */}
            <CardContent className="flex flex-col gap-2">
                <CardTitle>Destination Calculator</CardTitle>
                <CardDescription>Input a positive/negative value for completed/incomplete destinations tickets.</CardDescription>
                {/* Form goes here */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row gap-2 items-end justify-between w-full">
                        <FormField
                            control={form.control}
                            name="points"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Points</FormLabel>
                                    <FormControl>
                                        <Input 
                                            className="no-spinner" 
                                            placeholder="Input points" 
                                            type="number" 
                                            value={field.value ?? ""}
                                            onChange={(e) =>
                                                field.onChange(e.target.value === "" ? undefined : +e.target.value)
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" variant="default">Add</Button>
                    </form>
                </Form>
            </CardContent>


            <CardContent>
                <CardTitle>Longest Path</CardTitle>
                <CardDescription>Input the length of your longest consecutive train path.</CardDescription>
                {/* Form goes here */}
            </CardContent>
        </Card>
    )
}