import { Hero } from "@/components/section/hero";

export default function Home() {
  return (
    <main>
      <Hero
        hasTagline={true}
        tagline="BETA JUST RELEASED"
        heading="Het kledingplatform voor outsizers"
        description="Voor iedereen die passende kleding wilt kopen. Nu in beta."
        buttonLabel="Probeer het nu"
        buttonHref="/aanmelden"
      />
    </main>
  );
}
