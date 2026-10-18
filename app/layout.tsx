// app/layout.tsx
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
});

export const metadata: Metadata = {
  title: "Fauzan Azhima - Portfolio",
  description: "Software Engineer & Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${monaSans.variable} font-sans bg-[#fafafa] text-zinc-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}