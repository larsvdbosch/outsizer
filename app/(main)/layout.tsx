import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./../globals.css";
import NextTopLoader from 'nextjs-toploader';
import { Navbar } from "@/components/section/navbar";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Outsizer",
    description: "Het platform voor mensen die passende kleding willen vinden.",
};

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NextTopLoader color="var(--color-accent)" height={4} showSpinner={false} />
            <Navbar />
            {children}
        </>
    );
}
