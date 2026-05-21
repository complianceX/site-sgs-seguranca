# Site institucional SGS Segurança

Site de marketing do **SGS — Sistema de Gestão de Segurança do Trabalho**, construído com Next.js 16 (App Router), React 19 e Tailwind CSS 4.

## Requisitos

- Node.js 20+
- npm 10+

## Configuração local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável | Uso |
|----------|-----|
| `LEADS_WEBHOOK_URL` | Webhook HTTPS para receber leads (obrigatório em produção) |
| `LEAD_WEBHOOK_SECRET` | Bearer token do webhook |
| `TURNSTILE_SECRET_KEY` / `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile anti-spam |
| `UPSTASH_REDIS_REST_*` | Rate limit distribuído em produção |
| `NEXT_PUBLIC_GA_ID` | Google Analytics (somente após consentimento) |
| `NEXT_PUBLIC_SCHEDULING_URL` | Link de agendamento (Calendly, etc.) |
| `NEXT_PUBLIC_WHATSAPP_URL` | WhatsApp comercial |

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |
| `npm run lint` | ESLint |
| `npm run security-check` | `npm audit` |

## Estrutura principal

- `src/app/` — rotas (páginas, API, sitemap, robots, RSS)
- `src/components/` — UI, seções, layout
- `src/data/` — conteúdo estático (home, blog, navegação)
- `src/lib/` — SEO, analytics, leads, segurança

## Deploy

O projeto está preparado para deploy em Vercel, Cloudflare Pages ou ambiente Node compatível com Next.js 16.

Em produção, configure todas as variáveis obrigatórias de leads e Turnstile antes de publicar formulários.

## Repositório

GitHub: [complianceX/site-sgs-seguranca](https://github.com/complianceX/site-sgs-seguranca)
