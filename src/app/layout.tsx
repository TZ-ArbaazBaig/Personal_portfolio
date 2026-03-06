import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code"
});

export const metadata: Metadata = {
  title: "Arbaaz Baig | Flutter Developer & AI Solutions Architect",
  description: "Crafting high-performance mobile applications and intelligent digital experiences with Flutter and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <div className="noise" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

