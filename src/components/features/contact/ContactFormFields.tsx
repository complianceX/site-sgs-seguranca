"use client";

import { Mail, Phone, User, Building } from "lucide-react";

type ContactFormFieldsProps = {
  onHoneypotChange: (value: string) => void;
};

export function ContactFormFields({ onHoneypotChange }: ContactFormFieldsProps) {
  return (
    <>
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          onChange={(e) => onHoneypotChange(e.target.value)}
        />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <FieldWrapper id="contact-name" label="Nome" icon={User} required>
          <input
            required
            id="contact-name"
            name="name"
            type="text"
            minLength={2}
            maxLength={120}
            placeholder="Seu nome completo"
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all text-sgs-navy"
          />
        </FieldWrapper>
        <FieldWrapper id="contact-company" label="Empresa" icon={Building} optional>
          <input
            id="contact-company"
            name="company"
            type="text"
            maxLength={150}
            placeholder="Empresa"
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all text-sgs-navy"
          />
        </FieldWrapper>
      </div>

      <FieldWrapper id="contact-email" label="E-mail Corporativo" icon={Mail} required>
        <input
          required
          id="contact-email"
          name="email"
          type="email"
          maxLength={160}
          placeholder="seu@email.com.br"
          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all text-sgs-navy"
        />
      </FieldWrapper>

      <FieldWrapper id="contact-whatsapp" label="WhatsApp" icon={Phone} required>
        <input
          required
          id="contact-whatsapp"
          name="whatsapp"
          type="tel"
          inputMode="tel"
          pattern="[0-9+()\-\\s.]{8,30}"
          maxLength={30}
          placeholder="DDD + número"
          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all text-sgs-navy"
        />
      </FieldWrapper>

      <div className="space-y-3">
        <label
          htmlFor="contact-message"
          className="text-[10px] font-black text-slate-400 uppercase tracking-widest"
        >
          Como podemos ajudar?{" "}
          <span className="text-slate-300">(opcional)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          minLength={10}
          maxLength={2000}
          placeholder="Conte-nos um pouco sobre sua necessidade técnica ou comercial..."
          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all resize-none text-sgs-navy"
        />
      </div>
    </>
  );
}

type FieldWrapperProps = {
  id: string;
  label: string;
  icon: typeof Mail;
  children: React.ReactNode;
  required?: boolean;
  optional?: boolean;
};

function FieldWrapper({ id, label, icon: Icon, children, required, optional }: FieldWrapperProps) {
  return (
    <div className="space-y-3">
      <label
        htmlFor={id}
        className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"
      >
        <Icon className="w-3.5 h-3.5 text-primary" /> {label}
        {optional && <span className="text-slate-300 font-normal normal-case">(opcional)</span>}
        {required && <span className="text-sgs-red text-xs">*</span>}
      </label>
      {children}
    </div>
  );
}
