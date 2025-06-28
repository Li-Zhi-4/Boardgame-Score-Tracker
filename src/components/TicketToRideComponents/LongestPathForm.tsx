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

interface LongestPathFormProps {
    longestPath: number,
    setLongestPath: React.Dispatch<React.SetStateAction<number>>;
}

export function LongestPathForm({ longestPath, setLongestPath }: LongestPathFormProps) {

    // Form Schemas
    const LongestPathFormSchema = z.object({
        path_length: z.coerce.number().int().nonnegative().optional()
    });

    // Forms
    const LongestPathForm = useForm<z.infer<typeof LongestPathFormSchema>>({
        resolver: zodResolver(LongestPathFormSchema),
        defaultValues: {
            path_length: undefined,
        },
    });


    function onLongestPathSubmit(data: z.infer<typeof LongestPathFormSchema>) {
        // console.log(data);
        if (typeof data["path_length"] === "number") {
            setLongestPath(data["path_length"]);
            toast("Successfully Recorded Longest Path", {
                description: `Path length of ${data["path_length"]} recorded`,
                action: {
                    label: "undo",
                    onClick: () => console.log("Undo")
                }
            })
        }
        LongestPathForm.setValue("path_length", undefined);
        // console.log(longestPath);
    }

    return (
        <Form {...LongestPathForm}>
            <form onSubmit={LongestPathForm.handleSubmit(onLongestPathSubmit)} className="flex flex-row gap-2 items-end justify-between w-full">
                <FormField 
                    control={LongestPathForm.control}
                    name="path_length"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Path Length</FormLabel>
                            <FormControl>
                                <Input 
                                    className="no-spinner" 
                                    placeholder="Input path length" 
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