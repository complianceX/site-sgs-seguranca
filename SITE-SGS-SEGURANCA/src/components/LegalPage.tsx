import { Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, Mail, ShieldCheck } from "lucide-react";
import logoSgs from "@/assets/logo-sgs.webp";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  badge: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
  relatedLink: {
    to: "/privacidade" | "/termos";
    label: string;
  };
};

export function LegalPage({
  badge,
  title,
  description,
  lastUpdated,
  sections,
  relatedLink,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-border/50 bg-background/90 backdrop-blur-md">
        <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoSgs} alt="SGS Segurança" className="h-10 w-auto" />
            <span className="hidden sm:inline text-sm font-semibold text-muted-foreground border-l border-border/60 pl-3">
              Documentos legais
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>
        </nav>
      </header>

      <main>
        <section className="border-b border-border/50 bg-secondary/30">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                <ShieldCheck className="h-4 w-4" />
                {badge}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-5">
                {title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
              <p className="mt-6 text-sm font-semibold text-muted-foreground">
                Última atualização: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
            <aside className="lg:sticky lg:top-8 space-y-6">
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-base font-bold">Nesta página</h2>
                </div>
                <nav className="space-y-3">
                  {sections.map((section) => (
                    <a
                      key={section.title}
                      href={`#${slugify(section.title)}`}
                      className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="rounded-2xl border border-border/50 bg-secondary/40 p-6">
                <h2 className="text-base font-bold mb-3">Precisa falar conosco?</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Solicitações sobre privacidade e proteção de dados podem ser enviadas ao canal oficial.
                </p>
                <a
                  href="mailto:privacidade@sgsseguranca.com.br"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  privacidade@sgsseguranca.com.br
                </a>
              </div>
            </aside>

            <article className="space-y-6">
              {sections.map((section) => (
                <section
                  key={section.title}
                  id={slugify(section.title)}
                  className="rounded-2xl border border-border/50 bg-card p-6 md:p-8 scroll-mt-8"
                >
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold mb-2">Documento relacionado</h2>
                  <p className="text-sm text-muted-foreground">
                    Consulte também o outro documento legal aplicável ao uso do SGS Segurança.
                  </p>
                </div>
                <Link
                  to={relatedLink.to}
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
                >
                  {relatedLink.label}
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
