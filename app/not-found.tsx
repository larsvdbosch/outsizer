import { Hero } from "@/components/section/hero";

export default function Custom404() {
    return (
        <Hero
            hasTagline={false}
            heading="Pagina niet gevonden"
            description="De pagina die je zoekt bestaat niet of is veranderd."
            buttonLabel="Ga naar home"
            buttonHref="/"
        />
    )
}