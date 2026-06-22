"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/button";
import { DropdownMenu } from "./dropdown-button";
import { SearchInput } from "./search-input";
import { NavLink } from "./nav-link";
import { Container } from "./container";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Feed", href: "/feed" },
    { name: "Fysieke winkels", href: "/fysieke-winkels" },
    { name: "Shirts", href: "/shirts" },
    { name: "Broeken", href: "/broeken" },
    { name: "Schoenen", href: "/schoenen" },
    { name: "Jassen", href: "/jassen" },
    { name: "Sport", href: "/sport" },
    { name: "Fitness", href: "/fitness" },
    { name: "Relax", href: "/relax" },
    { name: "Werk", href: "/werk" },
    { name: "Calculator", href: "/calculator" },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-100">
            <div className="h-20 bg-background border-b border-neutral-100 z-50">
                <Container className="flex items-center h-full">
                    <div className="flex items-center justify-between w-full">
                        <Logo />
                        <SearchInput className="hidden md:block" />
                        <div className="flex gap-4">
                            <Button href="/" variant="black" size="small">
                                Aanmelden
                            </Button>
                            <DropdownMenu label="Account" item={[
                                { name: "Profiel", href: "/" },
                                { name: "Instellingen", href: "/" },
                                { name: "Uitloggen", href: "/" }
                            ]} />
                        </div>
                    </div>
                </Container>
            </div >
            <div className="h-16 bg-background border-b border-neutral-100 z-50">
                <Container className="flex items-center h-full">
                    <div className="flex items-center gap-4 w-full overflow-x-scroll scrollbar-none">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} href={link.href}>
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </Container>
            </div>
        </header >
    );
}
