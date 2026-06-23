import { Hero } from "@/components/section/hero";
import { Navbar } from "@/components/section/navbar";

export default function Custom404() {
    return (
        <>
            <Navbar />
            <Hero
                hasTagline={false}
                heading="Pagina niet gevonden"
                description="De pagina die je zoekt bestaat niet of is veranderd."
                buttonLabel="Ga naar home"
                buttonHref="/"
            />
        </>
    )
}