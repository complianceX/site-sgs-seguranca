"use client";

import { ContactInfo, ContactForm } from "@/components/features/contact";

export function ContactPage() {
  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
