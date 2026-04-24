import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterOverlay } from "@/components/layout/NewsletterOverlay";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { ConsentScripts } from "@/components/security/ConsentScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SGS - Gestão de Segurança do Trabalho e Governança Documental",
  description: "Plataforma completa para controlar segurança do trabalho, documentos oficiais, evidências, treinamentos, exames e indicadores em um ambiente SaaS seguro.",
  // FASE 8: Hardening de SEO
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ConsentScripts />
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <NewsletterOverlay />
        <CookieBanner />
      </body>
    </html>
  );
}
