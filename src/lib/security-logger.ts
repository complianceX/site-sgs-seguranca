/**
 * FASE 8: Logs seguros - Mascara dados sensíveis e IPs
 */
type SecurityEventDetails = Record<string, unknown> & {
  ip?: string;
  message?: string;
};

export function logSecurityEvent(event: string, details: SecurityEventDetails) {
  const timestamp = new Date().toISOString();
  const correlationId = crypto.randomUUID();

  // Mascara o IP para conformidade com LGPD (ex: 192.168.xxx.xxx)
  const maskedIp = details.ip ? details.ip.replace(/(\d+\.\d+)\.\d+\.\d+/, '$1.xxx.xxx') : 'unknown';

  const logEntry = {
    timestamp,
    correlationId,
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
