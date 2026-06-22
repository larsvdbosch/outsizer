import { Button } from "../ui/button";
import { Container } from "../container";
import { Heading } from "../ui/heading";
import { Section } from "../section";
import { Tagline } from "../ui/tagline";

type HeroProps = {
    children?: React.ReactNode;
    hasTagline?: boolean;
    tagline?: string;
    heading: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
}

export function Hero({ tagline, heading, description, buttonLabel, buttonHref, hasTagline = false }: HeroProps) {
    return (
        <Section className="mx-4 lg:mx-8 bg-[#0B0A09] rounded-b-4xl">
            <Container>
                <div className="flex flex-col items-center justify-center gap-8">
                    {hasTagline && <Tagline href="/changelog">{tagline}</Tagline>}
                    <Heading as="h1" className="text-center text-white max-w-2xl">
                        {heading}
                    </Heading>
                    <p className="text-[#A1A1A1] text-center leading-[150%]">
                        {description}
                    </p>
                    <Button href={buttonHref} size="large">
                        {buttonLabel}
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
