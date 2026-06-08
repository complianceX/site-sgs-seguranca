import { useEffect, lazy, Suspense } from "react";
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

const CustomCursor = lazy(() => import("@/components/animations/CustomCursor").then(m => ({ default: m.CustomCursor })));

import appCss from "../styles.css?url";

const siteUrl =
  (typeof import.meta.env.VITE_SITE_URL === "string" && import.meta.env.VITE_SITE_URL) ||
  "https://www.sgsseguranca.com.br";

const ogImage = `${siteUrl.replace(/\/$/, "")}/og.webp`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "SGS Segurança",
      url: siteUrl,
      logo: `${siteUrl}/favicon.svg`,
      description:
        "Plataforma digital para gestão de Saúde e Segurança do Trabalho. APR, DDS, PT, ASO, treinamentos e indicadores de SST.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-31-98693-7268",
        contactType: "sales",
        email: "contato@sgsseguranca.com.br",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belo Horizonte",
        addressRegion: "MG",
        addressCountry: "BR",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "SGS Segurança — Plataforma Digital para Gestão de SST",
      description:
        "Centralize APR, DDS, PT, evidências e indicadores de segurança do trabalho com rastreabilidade total.",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "SGS — Sistema de Gestão de Segurança",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Plataforma digital para gestão de SST com APR, DDS, PT, ASO, treinamentos, ordens de serviço, mobilização e indicadores.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
      },
      author: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "SGS — Sistema de Gestão de Segurança do Trabalho | Plataforma SST" },
      {
        name: "description",
        content:
          "Centralize APR, DDS, PT, ASO, treinamentos, ordens de serviço e indicadores de SST em uma plataforma rastreável. Gestão digital de segurança do trabalho para sua empresa.",
      },
      { name: "author", content: "SGS Segurança" },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "SGS Segurança" },
      { property: "og:title", content: "SGS — Sistema de Gestão de Segurança do Trabalho | Plataforma SST" },
      {
        property: "og:description",
        content:
          "Centralize APR, DDS, PT, ASO, treinamentos e indicadores de SST em uma plataforma rastreável com segurança jurídica.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Painel operacional do SGS para gestão digital de SST" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SGS — Sistema de Gestão de Segurança do Trabalho" },
      {
        name: "twitter:description",
        content:
          "Centralize APR, DDS, PT, ASO e indicadores de SST em uma plataforma rastreável.",
      },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: "Painel operacional do SGS para gestão digital de SST" },
    ],
    links: [
      { rel: "canonical", href: siteUrl },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body className="pb-[env(safe-area-inset-bottom)]">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("sgs-scroll-bar");
    if (!bar) return;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${Math.min(progress, 100)}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="sgs-scroll-bar" className="sgs-scroll-progress" />;
}

function RootComponent() {
  useEffect(() => {
    function observeReveals() {
      const targets = document.querySelectorAll(
        ".sgs-reveal, .sgs-reveal-left, .sgs-reveal-right, .sgs-reveal-scale, .sgs-stagger, .sgs-reveal-border, .sgs-clip-reveal, .sgs-clip-reveal-left, .sgs-clip-reveal-right"
      );
      targets.forEach((el) => {
        if (!el.classList.contains("sgs-observed")) {
          el.classList.add("sgs-observed");
          observer.observe(el);
        }
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sgs-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observeReveals();

    const mutationObserver = new MutationObserver(observeReveals);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-sgs-bg text-sgs-night font-sans selection:bg-sgs-blue/10 selection:text-sgs-blue">
      <ScrollProgress />
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <Header />
      <div className="animate-page-enter">
        <Outlet />
      </div>
      <BackToTop />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
