"use client";

import { TurnstileWidget } from "@/components/forms/TurnstileWidget";

type ContactFormTurnstileProps = {
  onTokenChange: (token: string) => void;
  resetSignal: number;
};

export function ContactFormTurnstile({ onTokenChange, resetSignal }: ContactFormTurnstileProps) {
  return (
    <TurnstileWidget
      className="flex justify-center"
      onTokenChange={onTokenChange}
      resetSignal={resetSignal}
    />
  );
}
