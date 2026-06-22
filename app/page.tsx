import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Hero
        tagline="BETA JUST RELEASED"
        heading="Het kledingplatform voor outsizers"
        description="Voor iedereen die passende kleding wilt kopen. Nu in beta."
        buttonLabel="Probeer het nu"
        buttonHref="/aanmelden"
      />
    </div>
  );
}
