import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxe Car Wash & Lounge | Premium Car Care in Johannesburg",
  description: "Where luxury meets clean. A premium car wash and lounge experience in Sandton, Johannesburg. VIP treatment for your car while you relax in comfort.",
  keywords: "car wash, luxury car wash, car detailing, Johannesburg, Sandton, lounge, premium car care, South Africa",
  authors: [{ name: "Luxe Car Wash & Lounge" }],
  openGraph: {
    title: "Luxe Car Wash & Lounge",
    description: "Where luxury meets clean. Premium car wash and lounge experience.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}