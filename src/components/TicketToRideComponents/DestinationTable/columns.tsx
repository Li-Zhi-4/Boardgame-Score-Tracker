import { type ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { BadgeCheck, BadgeX, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type TotalPoints = {
    objectives: string,
    status: string,
    points: number
}

export type Destination = {
    id: string,
    route: string,
    type: string,
    status: boolean,
    points: number,
}


export const TotalColumns: ColumnDef<TotalPoints>[] = [
    {
        accessorKey: "objectives",
        header: () => <div>Objectives</div>,
        cell: ({ row }) => {
            return (
                row.getValue("objectives") === "Total" ? 
                <div className="font-bold">{row.getValue("objectives")}</div> : 
                <div>{row.getValue("objectives")}</div>
            )
        }
    },
    {
        accessorKey: "status",
        header: () => <div className="text-center">Status</div>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    {row.getValue("status") ? <Badge variant="outline">{row.getValue("status")}</Badge> : <></>}
                </div>
            )
        }
    },
    {
        accessorKey: "points",
        header: () => <div className="text-center">Points</div>,
        cell: ({ row }) => {
            return (
                row.getValue("objectives") === "Total" ? 
                <div className="flex justify-center font-bold">{row.getValue("points")}</div> : 
                <div className="flex justify-center">{row.getValue("points")}</div>
            )
        }
    }
]

export const DestinationColumns: ColumnDef<Destination>[] = [
    {
        accessorKey: "route",
        header: "Destination Tickets"
    },
    {
        accessorKey: "type",
        header: () => <div className="text-center">Type</div>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <Badge variant="outline">{row.getValue("type")}</Badge>
                </div>
            )
        }
    },
    {
        accessorKey: "status",
        header: () => <div className="text-center">Status</div>,
        cell: ({ row }) => {
            const status = row.getValue("status")
            return (
                <div className="flex justify-center">
                    <Badge variant="outline" className={status ? "bg-green-50 border border-green-600 text-green-600" : "bg-red-50 border border-red-600 text-red-600"}>
                        {status ? <BadgeCheck /> : <BadgeX />}
                        {status ? "complete" : "incomplete"}
                    </Badge>
                </div>
            )
        }
    },
    {
        accessorKey: "points",
        header: () => <div className="text-center">Points</div>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    {row.getValue("points")}
                </div>
            )
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const destination = row.original

            return (
                <div className="flex justify-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(destination.id)}>
                                Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>View payment details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        },
    },
]