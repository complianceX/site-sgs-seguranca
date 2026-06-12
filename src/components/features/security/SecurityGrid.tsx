"use client";

import { Server, Lock, Key, EyeOff, FileLock, Database } from "lucide-react";
import { MotionCard } from "@/components/animations/MotionCard";

const items = [
  { icon: Server, title: "Isolamento multi-tenant", desc: "Arquitetura projetada para separar dados por empresa e reduzir risco de exposição cruzada entre clientes." },
  { icon: Lock, title: "Proteção de dados sensíveis", desc: "Controles de proteção, armazenamento governado e acesso restrito ajudam a manter documentos e evidências sob controle." },
  { icon: Key, title: "Acesso por identidade e permissão", desc: "Requisições e áreas sensíveis dependem de autenticação, contexto da empresa e permissões compatíveis com a função do usuário." },
  { icon: EyeOff, title: "Sanitização via IA", desc: "Fluxos de IA devem passar por minimização e sanitização de dados antes de qualquer processamento externo autorizado." },
  { icon: FileLock, title: "Autenticação endurecida", desc: "Camadas de autenticação, proteção contra abuso e gestão de sessão reduzem risco de acesso indevido." },
  { icon: Database, title: "Infraestrutura Imutável", desc: "Nossos servidores rodam em containers efêmeros e imutáveis, reduzindo a superfície de ataque e garantindo deploy determinístico." },
];

export function SecurityGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
      {items.map((item, i) => (
        <MotionCard key={i} delay={i * 0.05}>
          <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm">
            <item.icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-black mb-4 text-sgs-navy tracking-tight">{item.title}</h3>
          <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
        </MotionCard>
      ))}
    </div>
  );
}
