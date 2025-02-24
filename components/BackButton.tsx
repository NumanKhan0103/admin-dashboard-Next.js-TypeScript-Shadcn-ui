import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import { BackButtonProps } from "@/interfaces/backButton";

export default function BackButton({text, link}: BackButtonProps) {
    return (
    <>
    <Link href={link} className="text-gray-500 hover:underline flex items-center gap-1 font-bold mb-5">
        <ArrowLeftCircle className="size-4" /> {text}
    </Link>       
    </>
    )
}