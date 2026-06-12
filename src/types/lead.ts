export type LeadSource = "contact" | "newsletter" | "resource";

export type LeadFormData = {
  source: LeadSource;
  name: string;
  company?: string;
  email: string;
  whatsapp?: string;
  message?: string;
  resourceTitle?: string;
  honeypot: string;
  turnstileToken: string;
  analyticsEvent?: string;
  analyticsParams?: Record<string, string>;
};

export type LeadResponse = {
  success: boolean;
  error?: string;
  referenceId?: string;
  delivery?: "webhook" | "local";
  fallbackEmail?: string;
  fallbackSubject?: string;
};
