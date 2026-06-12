"use client";

import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const whatsappNumber = "5531984734644"; // Número da AJN/SGS
  const message = "Olá! Vim pelo site do SGS e gostaria de agendar uma demonstração.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="group fixed bottom-8 right-8 z-[9990] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition-shadow hover:shadow-[#25D366]/50 lg:h-14 lg:w-14"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageSquare className="h-8 w-8 lg:h-7 lg:w-7" />
      <span className="absolute -left-36 top-1/2 -translate-y-1/2 rounded-lg bg-white px-4 py-2 text-xs font-black uppercase tracking-widest text-sgs-navy shadow-xl opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none hidden lg:block">
        Fale com um especialista
      </span>
    </motion.a>
  );
}
