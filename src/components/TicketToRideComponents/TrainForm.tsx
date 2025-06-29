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
import { Plus, Minus } from "lucide-react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { useState } from "react"


export function TrainForm() {
    const [trains, setTrains] = useState({"1 train": 0, "2 trains": 0, "3 trains": 0, "4 trains": 0, "5 trains": 0, "6 trains": 0, "7 trains": 0, "stations": 0});
    const TRAINS = ["1 train", "2 trains", "3 trains", "4 trains", "5 trains", "6 trains", "7 trains", "stations"];

    // Form Schemas
    const TrainFormSchema = z.object({
        "1 train": z.coerce.number().nonnegative().int(),
        "2 trains": z.coerce.number().nonnegative().int(),
        "3 trains": z.coerce.number().nonnegative().int(),
        "4 trains": z.coerce.number().nonnegative().int(),
        "5 trains": z.coerce.number().nonnegative().int(),
        "6 trains": z.coerce.number().nonnegative().int(),
        "7 trains": z.coerce.number().nonnegative().int(),
        "stations": z.coerce.number().nonnegative().int()
    });

    // Forms
    const form = useForm<z.infer<typeof TrainFormSchema>>({
        resolver: zodResolver(TrainFormSchema),
        defaultValues: {
            "1 train": 0,
            "2 trains": 0,
            "3 trains": 0,
            "4 trains": 0,
            "5 trains": 0,
            "6 trains": 0,
            "7 trains": 0,
            "stations": 0,
        },
    });

    function onTrainSubmit(data: z.infer<typeof TrainFormSchema>) {
        // console.log(data);
        setTrains(data);
        
        toast("Successfully Recorded Data", {
            description: `Points added to trains/stations table`,
            action: {
                label: "undo",
                onClick: () => console.log("Undo")
            }
        })
        console.log(trains);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onTrainSubmit)} className="flex flex-col gap-2 items-end justify-between w-full">
                {TRAINS.map( (item, idx) => (
                    <FormField
                        key={idx}
                        control={form.control}
                        name={TRAINS[idx] as keyof z.infer<typeof TrainFormSchema>}
                        render={({ field }) => (
                            <FormItem className="flex flex-row gap-4 justify-center items-center w-full">
                                <FormLabel className="flex justify-center items-center w-[100px]">{item}</FormLabel>
                                <Button 
                                    variant="secondary"
                                    size="icon"
                                    type="submit"
                                    onClick={() => field.onChange((field.value ?? 0) - 1)}
                                    disabled={(field.value ?? 0) <= 0}
                                >
                                    <Minus />
                                </Button>
                                <FormControl>
                                    <Input 
                                        className="no-spinner w-9 h-9" 
                                        placeholder="0" 
                                        type="number" 
                                        value={field.value ?? 0}
                                        onChange={(e) =>
                                            field.onChange(e.target.value === "" ? undefined : +e.target.value)
                                        }
                                    />
                                </FormControl>
                                <Button 
                                    variant="secondary" 
                                    size="icon"
                                    type="submit"
                                    onClick={() => field.onChange((field.value ?? 0) + 1)}
                                >
                                    <Plus />
                                </Button>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
            </form>
        </Form>
    )
}