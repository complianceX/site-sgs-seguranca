import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function ContactInfo() {
  return (
    <FadeIn direction="right">
      <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
        <MessageSquare className="w-4 h-4" />
        Canais de Atendimento
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
        Agende uma demonstração do <span className="text-primary">SGS</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed font-medium text-pretty max-w-xl">
        Mostre sua rotina de APR, DDS, PT, evidências e prazos. Vamos indicar como o SGS pode reduzir retrabalho e organizar sua operação de SST.
      </p>

      <div className="space-y-10">
        <ContactItem icon={Mail} label="E-mail" primary="contato@sgsseguranca.com.br" secondary="suporte@sgsseguranca.com.br" />
        <ContactItem icon={Phone} label="WhatsApp Business" primary="Atendimento digital" secondary="Retorno comercial em horário útil" />
        <ContactItem icon={MapPin} label="Localização" primary="São Paulo, SP - Brasil" secondary="Operação 100% Digital" />
      </div>

      <div className="mt-20 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group">
        <div className="relative z-10">
          <h4 className="text-xl font-black text-sgs-navy mb-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-primary" />
            </div>
            Suporte Técnico
          </h4>
          <p className="text-slate-500 font-medium mb-8 leading-relaxed">
            Já é cliente e precisa de ajuda técnica? Acesse nossa central de ajuda ou abra um chamado diretamente pelo seu dashboard.
          </p>
          <a href="mailto:suporte@sgsseguranca.com.br" className="text-primary font-black text-sm uppercase tracking-widest flex items-center gap-3 group/btn">
            Falar com suporte <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-1000"></div>
      </div>
    </FadeIn>
  );
}

type ContactItemProps = {
  icon: typeof Mail;
  label: string;
  primary: string;
  secondary: string;
};

function ContactItem({ icon: Icon, label, primary, secondary }: ContactItemProps) {
  return (
    <div className="flex gap-6 group">
      <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-slate-100">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div>
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</h4>
        <p className="text-lg font-black text-sgs-navy">{primary}</p>
        <p className="text-sm font-bold text-slate-400">{secondary}</p>
      </div>
    </div>
  );
}
