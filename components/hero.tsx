import { Button } from "./button";
import { Container } from "./container";
import { Heading } from "./heading";
import { Section } from "./section";
import { Tagline } from "./tagline";

type HeroProps = {
    children?: React.ReactNode;
    tagline: string;
    heading: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
}

export function Hero({ tagline, heading, description, buttonLabel, buttonHref }: HeroProps) {
    return (
        <Section className="mx-4 lg:mx-8 bg-slate-950 rounded-b-4xl">
            <Container>
                <div className="flex flex-col items-center justify-center gap-8">
                    <Tagline>{tagline}</Tagline>
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
