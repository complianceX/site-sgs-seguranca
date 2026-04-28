export function getSchedulingHref() {
  return process.env.NEXT_PUBLIC_SCHEDULING_URL?.trim() || "/contato";
}

export function getSpecialistHref() {
  return process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim() || getSchedulingHref();
}
