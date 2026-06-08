import { MessageCircle } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import { whatsappUrl } from "@/lib/landing-data";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[0.85fr_1.15fr] gap-3 border-t border-sgs-border/50 bg-white/80 p-4 backdrop-blur-xl md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-sgs-whatsapp text-sm font-bold text-white shadow-lg shadow-sgs-whatsapp/10"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
      <DemoForm
        triggerLabel="Agendar demo"
        showArrow
        triggerClassName="h-13 w-full rounded-xl bg-sgs-blue px-6 text-sm font-bold text-white shadow-lg shadow-sgs-blue/10"
      />
    </div>
  );
}
