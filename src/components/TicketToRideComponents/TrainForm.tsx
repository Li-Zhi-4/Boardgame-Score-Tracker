import { useState, useEffect } from "react"
import {
    Form,
    FormControl,
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
import { type Train } from "./DestinationTable/columns"

export interface TrainObject {
    "1 train": number;
    "2 trains": number;
    "3 trains": number;
    "4 trains": number;
    "5 trains": number;
    "6 trains": number;
    "7 trains": number;
    "8 trains": number;
    "stations": number;
}

interface TrainFormProps {
    trains: Train[],
    setTrains: React.Dispatch<React.SetStateAction<Train[]>>;
}

export function TrainForm({ trains, setTrains }: TrainFormProps) {
    const [trainNumbers, setTrainNumbers] = useState({"1 train": 0, "2 trains": 0, "3 trains": 0, "4 trains": 0, "5 trains": 0, "6 trains": 0, "7 trains": 0, "8 trains": 0, "stations": 0});
    const TRAINS = ["1 train", "2 trains", "3 trains", "4 trains", "5 trains", "6 trains", "7 trains", "8 trains", "stations"];
    const points = [1, 2, 4, 7, 10, 15, 18, 21, 3]

    useEffect(() => {
        onTrainSubmit(trainNumbers);
    }, [trainNumbers]);

    // Form Schemas
    const TrainFormSchema = z.object({
        "1 train": z.coerce.number().nonnegative().int(),
        "2 trains": z.coerce.number().nonnegative().int(),
        "3 trains": z.coerce.number().nonnegative().int(),
        "4 trains": z.coerce.number().nonnegative().int(),
        "5 trains": z.coerce.number().nonnegative().int(),
        "6 trains": z.coerce.number().nonnegative().int(),
        "7 trains": z.coerce.number().nonnegative().int(),
        "8 trains": z.coerce.number().nonnegative().int(),
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
            "8 trains": 0,
            "stations": 0,
        },
    });

    function runToast() {
        toast("Successfully Recorded Data", {
            description: `Points added to trains/stations table`,
            action: {
                label: "undo",
                onClick: () => console.log("Undo")
            }
        })
    }

    function onTrainSubmit(data: z.infer<typeof TrainFormSchema>) {
        // console.log(data);
        const trainPoints = TRAINS.map( (item,idx) => (
            {
                trains: item,
                number: `${data[item as keyof TrainObject]}x`,
                points: data[item as keyof TrainObject]*points[idx]
            }
        ))
        // console.log(trainPoints)
        setTrains(trainPoints)
        
        runToast()
        // console.log(trains);
        console.log(trainNumbers)
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
                                    // onClick={() => field.onChange((field.value ?? 0) - 1)}
                                    onClick={() => {
                                        const newValue = Math.max((field.value ?? 0) - 1, 0);
                                        field.onChange(newValue);
                                        setTrainNumbers((prev) => ({
                                            ...prev,
                                            [item]: newValue,
                                        }));
                                    }}
                                    disabled={(field.value ?? 0) < 0}
                                >
                                    <Minus />
                                </Button>
                                <FormControl>
                                    <Input 
                                        className="no-spinner w-9 h-9" 
                                        placeholder="0" 
                                        type="number" 
                                        value={field.value ?? undefined}
                                        onChange={(e) => {
                                            const value = e.target.value === "" ? undefined : +e.target.value;
                                            field.onChange(value);
                                            setTrainNumbers((prev) => ({
                                                ...prev,
                                                [item]: value ?? undefined, 
                                            }));
                                            runToast()
                                        }}
                                        onFocus={(e) => e.target.select()}  
                                    />
                                </FormControl>
                                <Button 
                                    variant="secondary" 
                                    size="icon"
                                    type="submit"
                                    // onClick={() => field.onChange((field.value ?? 0) + 1)}
                                    onClick={() => {
                                        const newValue = Math.max((field.value ?? 0) + 1, 0);
                                        field.onChange(newValue);
                                        setTrainNumbers((prev) => ({
                                            ...prev,
                                            [item]: newValue,
                                        }));
                                    }}
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