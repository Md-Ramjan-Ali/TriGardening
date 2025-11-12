import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TriGardening",
  description: "A gardening service platform to help you with all your gardening needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
