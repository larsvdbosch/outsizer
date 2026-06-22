import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "../ui/dropdown-button";
import { SearchInput } from "../ui/search-input";
import { NavLink } from "../ui/nav-link";
import { Container } from "../container";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { signOutAction } from "../../app/actions/auth";

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

export async function Navbar() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return (
        <header className="sticky top-0 z-100">
            <div className="h-16 md:h-20 bg-background border-b border-neutral-100 z-50">
                <Container className="flex items-center h-full">
                    <div className="flex items-center justify-between w-full">
                        <Logo />
                        <SearchInput className="hidden md:block" />
                        <div className="flex gap-4">
                            {session ? (
                                <>
                                    <DropdownMenu label="Account" item={[
                                        { name: "Profiel", href: "/" },
                                        { name: "Instellingen", href: "/" },
                                    ]}>
                                        <form action={signOutAction}>
                                            <button type="submit" className="w-full text-left p-2 hover:bg-gray-100 rounded-sm cursor-pointer">
                                                Uitloggen
                                            </button>
                                        </form>
                                    </DropdownMenu>
                                </>
                            ) : (
                                <>
                                    <Button href="/signin" variant="solid" size="small">
                                        Inloggen
                                    </Button>
                                    <Button href="/signup" variant="black" size="small">
                                        Aanmelden
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </Container>
            </div >
            <div className="h-12 md:h-16 bg-background border-b border-neutral-100 z-50">
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
