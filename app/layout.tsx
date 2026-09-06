import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kruththik S S | Food Technology & AI-Assisted Builder",
  description:
    "Portfolio of Kruththik S S - Food Technology Undergraduate, AI-Assisted Builder, and Student Community Leader at NIFTEM-K.",
  openGraph: {
    title: "Kruththik S S | Portfolio",
    description:
      "Food Technology Undergraduate, AI-Assisted Builder, and Student Community Leader at NIFTEM-K.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
        {children}
      </body>
    </html>
  );
}