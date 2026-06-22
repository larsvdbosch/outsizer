import { Logo } from "@/components/ui/logo";
import { signUpAction } from "../../actions/auth";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
    return (
        <main className="bg-[#FAFAFA] flex flex-col items-center justify-center min-h-screen">
            <Logo className="mb-8" />
            <form action={signUpAction} className="flex flex-col gap-4">
                <input className="input-form" type="text" name="name" placeholder="Naam" required />
                <input className="input-form" type="email" name="email" placeholder="Email" required />
                <input className="input-form" type="password" name="password" placeholder="Wachtwoord" required />
                <Button className="w-full justify-center" type="submit" variant="solid" size="large">
                    Aanmelden
                </Button>
            </form>
        </main>
    )
}