import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin, Phone, ShieldCheck } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import logoSgs from "@/assets/logo-sgs.webp";

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
    ],
  }),
});

const whatsappNumber = "5531986937268";
const whatsappMessage = "Olá, equipe SGS. Quero falar sobre o sistema.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fbfcfe] text-[#142033] font-sans">
      <header className="sticky top-0 z-50 border-b border-[#dbe4ee]/50 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:h-20 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoSgs} alt="SGS Segurança" className="h-11 w-auto md:h-14" />
            <span className="hidden border-l border-[#dbe4ee] pl-3 text-sm font-semibold text-[#5b6878] sm:inline">
              Contato
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm font-semibold text-[#5b6878] transition-colors hover:text-[#1d5b8d]">
              Início
            </Link>
            <Link to="/faq" className="text-sm font-semibold text-[#5b6878] transition-colors hover:text-[#1d5b8d]">
              FAQ
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="border-b border-[#dbe4ee]/50 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1d5b8d]/10 bg-[#1d5b8d]/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1d5b8d]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Fale conosco
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-[#0d2033] md:text-5xl">
                Como podemos ajudar?
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#5b6878]">
                Estamos prontos para entender sua necessidade e mostrar como o SGS pode
                transformar a gestão de SST da sua empresa.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fbfcfe] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-[#0d2033]">Canais de atendimento</h2>

                <div className="space-y-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-[#dbe4ee] bg-white p-5 transition-all hover:border-[#25D366]/30 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#5b6878]">
                        WhatsApp
                      </p>
                      <p className="text-sm font-bold text-[#0d2033]">(31) 98693-7268</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contato@sgsseguranca.com.br"
                    className="flex items-center gap-4 rounded-2xl border border-[#dbe4ee] bg-white p-5 transition-all hover:border-[#1d5b8d]/30 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1d5b8d]/10 text-[#1d5b8d]">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#5b6878]">
                        E-mail
                      </p>
                      <p className="text-sm font-bold text-[#0d2033]">
                        contato@sgsseguranca.com.br
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:privacidade@sgsseguranca.com.br"
                    className="flex items-center gap-4 rounded-2xl border border-[#dbe4ee] bg-white p-5 transition-all hover:border-[#1d5b8d]/30 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1d5b8d]/10 text-[#1d5b8d]">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#5b6878]">
                        Privacidade e LGPD
                      </p>
                      <p className="text-sm font-bold text-[#0d2033]">
                        privacidade@sgsseguranca.com.br
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-[#dbe4ee] bg-white p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5b6878]/10 text-[#5b6878]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#5b6878]">
                        Operação
                      </p>
                      <p className="text-sm font-bold text-[#0d2033]">
                        Belo Horizonte / MG
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#dbe4ee] bg-[#f4f8fc] p-6">
                  <p className="text-sm leading-relaxed text-[#5b6878]">
                    <strong className="text-[#0d2033]">Horário de atendimento:</strong>
                    <br />
                    Segunda a sexta, das 8h às 18h.
                    <br />
                    Respondemos mensagens de WhatsApp em até 2 horas úteis.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#dbe4ee] bg-white p-8 shadow-sm">
                <h2 className="mb-2 text-2xl font-bold text-[#0d2033]">
                  Solicitar demonstração
                </h2>
                <p className="mb-8 text-sm text-[#5b6878]">
                  Preencha o formulário e agende uma conversa personalizada.
                </p>
                <DemoForm
                  triggerLabel="Abrir formulário"
                  showArrow
                  triggerClassName="w-full h-13 rounded-xl bg-[#1d5b8d] px-8 text-sm font-bold text-white shadow-lg shadow-[#1d5b8d]/20 transition-all hover:bg-[#16486f] hover:scale-[1.02] active:scale-[0.98]"
                />
                <p className="mt-4 text-center text-xs text-[#5b6878]">
                  Seu contato está protegido pela nossa{" "}
                  <Link to="/privacidade" className="underline hover:text-[#1d5b8d]">
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
