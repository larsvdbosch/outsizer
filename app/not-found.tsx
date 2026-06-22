import { Hero } from "@/components/hero";

export default function Custom404() {
    return (
        <Hero
            tagline="NOT FOUND"
            heading="Pagina niet gevonden"
            description="De pagina die je zoekt bestaat niet of is veranderd."
            buttonLabel="Ga naar home"
            buttonHref="/"
        />
    )
}