import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface HeroBannerProps {
    title:          string;
    description:    string;
    tag:            string;
    imgURL:         string;
}

export function HeroBanner({ title, description, tag, imgURL }: HeroBannerProps) {

    return (
        <div className='flex w-full h-fit pt-32'>
            <div className='flex flex-col sm:flex-row gap-6 justify-between items-center px-6 py-6 sm:px-16 w-full bg-neutral-50'>
                <div className="flex flex-col gap-12 h-full">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/error">Games</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-base font-bold text-blue-500">{tag}</span>
                            <h1 className="text-4xl font-semibold">{title}</h1>
                        </div>
                        <p className="text-muted-foreground text-base">{description}</p>
                    </div>
                </div>
                <img src={imgURL} alt="Ticket to Ride image" className="max-w-[300px] max-h-[300px]"/>
            </div>
        </div>
    )
}