import type { Metadata } from "next";
import { Cinzel, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heraldex — Claim, Protect & Commercialize Your Group's Identity",
  description:
    "Create, register, and protect your clan's heraldic identity on-chain. Design your blazon, manage member ranks, and sell authenticated merchandise — all in one platform.",
  keywords:
    "heraldex, clan logo, guild crest, gaming identity, blockchain registration, heraldry, esports branding, clan merch",
  openGraph: {
    title: "Heraldex — Your Symbol. Your Dominion.",
    description:
      "The identity platform for gaming clans, guilds, and teams. Design. Register. Protect. Profit.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heraldex — Your Symbol. Your Dominion.",
    description:
      "The identity platform for gaming clans. Design your blazon free.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cinzel.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
