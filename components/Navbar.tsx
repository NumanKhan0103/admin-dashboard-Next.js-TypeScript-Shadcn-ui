import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import ThemeToggler from '@/components/ThemeToggler';


const Navbar = () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <Link href="/" className="flex items-center">
                    <div className="relative h-10 w-10 mr-2">
                        <div className="bg-primary text-primary-foreground rounded-lg p-2 h-full w-full flex items-center justify-center font-bold text-xl">
                            AD
                        </div>
                    </div>
                    <span className="hidden md:block font-bold">Admin Dashboard</span>
                </Link>

                <div className="ml-auto flex items-center space-x-4">
                    <ThemeToggler />
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>AD</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href="/profile">Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/auth">Logout</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;