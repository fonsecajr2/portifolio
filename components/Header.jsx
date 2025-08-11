import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-3 pb-5 xl:py-6 text-white ">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or Title can be added here */}
                <Link href={"/"} >
                    <h1 className="text-4xl font-semibold">
                        Fonseca Jr<span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* Desktop Nac and Hire me Button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href={"/contact"}>
                        <Button className="">Hire me</Button>
                    </Link>
                </div>
                
                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;