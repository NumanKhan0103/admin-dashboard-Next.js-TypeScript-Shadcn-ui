import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import React from "react";

interface DashboardCardProps {
    title: string;
    count: number;
    icon : React.ReactElement<LucideIcon>;
}

export default function DashboardCard({ title, count, icon} : DashboardCardProps) {
    return (
        <Card
        role="region" // Indicates this is a distinct section
         aria-label={title}
         className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
            <CardContent>
                <h3 aria-label={`${title} card`}  className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">{title}</h3>
                <div className="flex gap-5 justify-center items-center">
                   { icon}
                    <h3 aria-label={`Count: ${count}`} className="text-5xl font-semibold text-slate-500 dark:text-slate-200">{ count }</h3>
                </div>
                </CardContent>
            </Card>
    )
}

