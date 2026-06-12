import { Lock, EyeOff, CheckCircle2, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const ethics = [
  { icon: Lock, title: "Consentimento Explicito", text: "O uso da Sophie requer consentimento do usuário e do tenant. Você tem controle total." },
  { icon: EyeOff, title: "Sanitização de Dados", text: "Dados sensíveis (PII) são removidos antes de qualquer processamento por IA, garantindo a privacidade." },
  { icon: CheckCircle2, title: "Assistência, não Decisão", text: "A IA apoia a análise, mas a decisão final permanece sempre com o profissional de SST." },
  { icon: ShieldCheck, title: "Histórico Auditável", text: "Todo uso de IA é registrado e possui política de retenção configurável para governança." },
];

export function SophieEthics() {
  return (
    <section className="bg-slate-50 rounded-3xl p-8 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <FadeIn direction="up">
          <h2 className="text-3xl font-bold mb-8 text-center">IA Ética, Segura e Privada</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-12">
          {ethics.map((item, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1} className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
