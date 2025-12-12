import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "路屿",
    template: "%s | 路屿",
  },
  description: "认知写作者｜框架探索者｜叙事理论实践者",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <head>
        <script async crossOrigin="anonymous" src="https://tweakcn.com/live-preview.min.js" />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <Header />
        <main className="mx-auto max-w-3xl px-4 pt-24 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
