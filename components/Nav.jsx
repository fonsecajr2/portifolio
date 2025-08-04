"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/resume", name: "Resume" },
    { path: "/contact", name: "Contact" },
];

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <nav className="flex gap-8">
            {
                links.map((link , index) => {
                    return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent trasition-all`}>{link.name}</Link>
                })
            }
        </nav>
    );
};

export default Nav;