import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  outputFileTracingRoot: process.cwd(),

  // FASE 1 & 12: Redução de Fingerprinting e Hardening de Build
  poweredByHeader: false,
  reactStrictMode: true,

  // FASE 1 & 2: Headers de Segurança e CSP Forte
  async headers() {
    const devScriptPolicy = process.env.NODE_ENV !== "production" ? " 'unsafe-eval'" : "";

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "0",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests; script-src 'self' 'unsafe-inline'${devScriptPolicy} https://challenges.cloudflare.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; media-src 'self' blob:; font-src 'self' data: https:; connect-src 'self' https://challenges.cloudflare.com https://*.sgsseguranca.com.br https://www.google-analytics.com https://region1.google-analytics.com; frame-src https://challenges.cloudflare.com; child-src https://challenges.cloudflare.com; worker-src 'self' blob:; manifest-src 'self';`,
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
  // Otimização de imagens se necessário
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
