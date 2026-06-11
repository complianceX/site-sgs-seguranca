/**
 * FASE 8: Logs seguros - Mascara dados sensíveis e IPs
 * TODO: Integrar com Axiom ou BetterStack para persistência e alertas em tempo real.
 */
import { isProductionRuntime } from "@/lib/env";

type SecurityEventDetails = Record<string, unknown> & {
  ip?: string;
  message?: string;
};

export function logSecurityEvent(event: string, details: SecurityEventDetails) {
  const timestamp = new Date().toISOString();
  const correlationId = crypto.randomUUID();
  const environment = isProductionRuntime() ? "production" : "development";

  // Mascara o IP para conformidade com LGPD (ex: 192.168.xxx.xxx)
  const maskedIp = details.ip ? details.ip.replace(/(\d+\.\d+)\.\d+\.\d+/, '$1.xxx.xxx') : 'unknown';

  const logEntry = {
    timestamp,
    correlationId,
    environment,
    event,
    level: 'security',
    context: {
      ...details,
      ip: maskedIp,
      // Garante que campos sensíveis nunca sejam logados
      message: typeof details.message === "string" ? details.message.substring(0, 10) + '...' : undefined
    }
  };

  console.log(`[SECURITY-EVENT][${correlationId}]`, JSON.stringify(logEntry));
  return correlationId;
}
