"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

export default function MobileNav() {
    const pathname = usePathname();
    
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-12 text-center text-2xl">
                    <Link href={"/"} className="text-3xl font-semibold">
                        <h1>Fonseca Jr<span className="text-accent">.</span></h1>
                    </Link>
                </div>
                <nav className="flex flex-col items-center justify-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link 
                                href={link.path} 
                                key={index} 
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}