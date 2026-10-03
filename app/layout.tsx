
import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/Common/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Divya Drishti College of Nursing & Medical Science",
    template: "%s | Divya Drishti College",
  },
  description:
    "Explore Divya Drishti College of Nursing & Medical Science, academic programs, admission information, campus facilities and student resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-800 antialiased">
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}