
import type { Metadata } from "next";
import { Fira_Sans, Saira_Stencil_One } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "../components/Home/Navbar/ResponsiveNav";

const font = Fira_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: "--font-body",
});

const font2 = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Veena's Portfolio",
  description: "My personal portfolio build using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.variable} ${font2.variable}`}>
      <body className={font.className}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}