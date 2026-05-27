import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carol Jacob",
  description: "Carol Jacob - Biotechnology portfolio",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  icons: {
    icon: "/carol-jacob-icon.svg",
  },
  openGraph: {
    title: "Carol Jacob",
    description: "Carol Jacob - Biotechnology portfolio",
    url: "https://caroljacob.github.io",
    siteName: "Carol Jacob",
    images: [
      {
        url: "/social-preview.svg",
        width: 1200,
        height: 630,
        alt: "Carol Jacob — Biotechnology portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carol Jacob",
    description: "Carol Jacob - Biotechnology portfolio",
    images: ["/social-preview.svg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative isolate overflow-x-hidden bg-background text-foreground antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
