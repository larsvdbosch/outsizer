import { Hero } from "@/components/section/hero";
import { Navbar } from "@/components/section/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        hasTagline={true}
        tagline="BETA JUST RELEASED"
        heading="Het kledingplatform voor outsizers"
        description="Voor iedereen die passende kleding wilt kopen. Nu in beta."
        buttonLabel="Probeer het nu"
        buttonHref="/aanmelden"
      />
    </>
  );
}
