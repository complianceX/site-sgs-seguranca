import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterOverlay } from "@/components/layout/NewsletterOverlay";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { ConsentScripts } from "@/lib/ConsentScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sgsseguranca.com.br"),
  title: "SGS - Gestão de Segurança do Trabalho e Governança Documental",
  description: "Plataforma completa para controlar segurança do trabalho, documentos oficiais, evidências, treinamentos, exames e indicadores em um ambiente SaaS seguro.",
  applicationName: "SGS Segurança",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SGS - Gestão de Segurança do Trabalho",
    description: "Organize documentos oficiais, evidências de campo e governança de SST em uma plataforma SaaS segura.",
    url: "https://sgsseguranca.com.br",
    siteName: "SGS Segurança",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SGS Segurança - Gestão de SST com evidências em campo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SGS - Gestão de Segurança do Trabalho",
    description: "Governança documental, evidências de campo e prazos de SST em uma plataforma SaaS segura.",
    images: ["/opengraph-image"],
  },
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
