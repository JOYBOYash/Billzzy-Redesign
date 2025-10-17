import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Switched to Inter as primary (sans-serif) and JetBrains Mono for code (similar to Geist Mono but more common; adjust if needed)
import "./globals.css";

const inter = Inter({
  variable: "--font-inter", // Primary font variable for Inter (sans-serif)
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Common weights for SaaS/modern UI
  display: "swap", // Improves loading performance
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono", // Mono font variable
  subsets: ["latin"],
  weight: ["400", "500"], // Standard mono weights
  display: "swap",
});

export const metadata: Metadata = {
  title: "Billzzy",
  description: "Empowering Your Sales, Simplifying Your Workflow - Streamline your billing process and boost productivity with automated address entry and smart order management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={` max-w-screen ${inter.variable} ${jetbrainsMono.variable} antialiased`} // Updated to use Inter as primary; apply in globals.css as font-family: var(--font-inter), sans-serif;
      >
        {children}
      </body>
    </html>
  );
}
