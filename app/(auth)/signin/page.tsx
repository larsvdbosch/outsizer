import { Logo } from "@/components/ui/logo";
import { signInAction } from "../../actions/auth";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
    return (
        <main className="bg-[#FAFAFA] flex flex-col items-center justify-center min-h-screen">
            <Logo className="mb-8" />
            <form action={signInAction} className="flex flex-col gap-4">
                <input className="input-form" type="email" name="email" placeholder="Email" required />
                <input className="input-form" type="password" name="password" placeholder="Wachtwoord" required />
                <Button className="w-full justify-center" type="submit" variant="solid" size="large">
                    Inloggen
                </Button>
            </form>
        </main>
    )
}