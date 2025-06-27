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



export function DestinationForm() {
    const DESTINATIONS: number[] = [];

    // Form Schemas
    const DestinationFormSchema = z.object({
        points: z.coerce.number().int().optional()
    });

    // Forms
    const form = useForm<z.infer<typeof DestinationFormSchema>>({
        resolver: zodResolver(DestinationFormSchema),
        defaultValues: {
            points: undefined,
        },
    });

    function onDestinationSubmit(data: z.infer<typeof DestinationFormSchema>) {
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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onDestinationSubmit)} className="flex flex-row gap-2 items-end justify-between w-full">
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
    )
}