import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import { TextReveal } from "@/components/animations/TextReveal";
import { MeshGradient } from "@/components/animations/MeshGradient";

export const Route = createFileRoute("/contato")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contato — SGS | Sistema de Gestão de Segurança do Trabalho" },
      {
        name: "description",
        content:
          "Entre em contato com o SGS. Agende uma demonstração, tire dúvidas ou solicite um orçamento personalizado para sua empresa.",
      },
      { property: "og:title", content: "Contato — SGS | Sistema de Gestão de Segurança do Trabalho" },
      {
        property: "og:description",
        content:
          "Entre em contato com o SGS. Agende uma demonstração, tire dúvidas ou solicite um orçamento personalizado para sua empresa.",
      },
    ],
  }),
});

const whatsappNumber = "5531986937268";
const whatsappMessage = "Olá, equipe SGS. Quero falar sobre o sistema.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

function ContactPage() {
  return (
      <main className="relative overflow-hidden">
        <section className="relative border-b border-sgs-border/50 bg-white py-20 md:py-28">
          <MeshGradient className="opacity-15" />
          <div className="mx-auto max-w-7xl px-6 sm:px-8 relative">
            <div className="mx-auto max-w-2xl text-center sgs-reveal">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sgs-blue/10 bg-sgs-blue/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sgs-blue animate-sgs-soft-in">
                <ShieldCheck className="h-3.5 w-3.5" />
                Fale conosco
              </div>
              <TextReveal
                text="Como podemos ajudar?"
                as="h1"
                className="text-4xl font-bold tracking-tight text-sgs-night md:text-5xl"
                stagger={40}
              />
              <p className="mt-6 text-lg leading-relaxed text-sgs-slate">
                Estamos prontos para entender sua necessidade e mostrar como o SGS pode
                transformar a gestão de SST da sua empresa.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-sgs-bg py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 sgs-grid-bg opacity-25" />
          <div className="mx-auto max-w-7xl px-6 sm:px-8 relative">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-8 sgs-reveal-left">
                <h2 className="text-2xl font-black text-sgs-night">Canais de atendimento</h2>

                <div className="space-y-4 sgs-stagger-children">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-sgs-border bg-white p-5 transition-all duration-300 hover:border-sgs-whatsapp/30 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sgs-whatsapp/10 text-sgs-whatsapp transition-all duration-300 group-hover:scale-110 group-hover:bg-sgs-whatsapp/20">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-sgs-slate">
                        WhatsApp
                      </p>
                      <p className="text-sm font-bold text-sgs-night">(31) 98693-7268</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contato@sgsseguranca.com.br"
                    className="group flex items-center gap-4 rounded-2xl border border-sgs-border bg-white p-5 transition-all duration-300 hover:border-sgs-blue/30 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sgs-blue/10 text-sgs-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-sgs-blue/20">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-sgs-slate">
                        E-mail
                      </p>
                      <p className="text-sm font-bold text-sgs-night">
                        contato@sgsseguranca.com.br
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:privacidade@sgsseguranca.com.br"
                    className="group flex items-center gap-4 rounded-2xl border border-sgs-border bg-white p-5 transition-all duration-300 hover:border-sgs-blue/30 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sgs-blue/10 text-sgs-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-sgs-blue/20">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-sgs-slate">
                        Privacidade e LGPD
                      </p>
                      <p className="text-sm font-bold text-sgs-night">
                        privacidade@sgsseguranca.com.br
                      </p>
                    </div>
                  </a>

                  <div className="group flex items-center gap-4 rounded-2xl border border-sgs-border bg-white p-5 transition-all duration-300 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sgs-slate/10 text-sgs-slate transition-all duration-300 group-hover:scale-110">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-sgs-slate">
                        Operação
                      </p>
                      <p className="text-sm font-bold text-sgs-night">
                        Belo Horizonte / MG
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-sgs-border bg-sgs-bg-hover p-6 sgs-reveal transition-all duration-500 hover:shadow-md">
                  <p className="text-sm leading-relaxed text-sgs-slate">
                    <strong className="text-sgs-night">Horário de atendimento:</strong>
                    <br />
                    Segunda a sexta, das 8h às 18h.
                    <br />
                    Respondemos mensagens de WhatsApp em até 2 horas úteis.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-sgs-border bg-white p-8 shadow-sm sgs-reveal-right transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5">
                <h2 className="mb-2 text-2xl font-black text-sgs-night">
                  Solicitar demonstração
                </h2>
                <p className="mb-8 text-sm text-sgs-slate">
                  Preencha o formulário e veja o SGS em ação em 2 minutos.
                </p>
                <DemoForm
                  triggerLabel="Abrir formulário"
                  showArrow
                  triggerClassName="w-full h-13 rounded-xl bg-sgs-blue px-8 text-sm font-bold text-white shadow-lg shadow-sgs-blue/20 transition-all hover:bg-sgs-blue-dark hover:scale-[1.02] active:scale-[0.98]"
                />
                <p className="mt-4 text-center text-xs text-sgs-slate">
                  Seu contato está protegido pela nossa{" "}
                  <Link to="/privacidade" className="underline hover:text-sgs-blue">
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
