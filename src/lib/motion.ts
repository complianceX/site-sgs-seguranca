import type { Variants } from "framer-motion";

/**
 * SGS Motion Design System - "SGS Motion DNA"
 *
 * Este sistema define a identidade de movimento premium do SGS.
 * Focado em: Precisão Técnica, Solidez de Engenharia e Fluidez Digital.
 */

export const transitions = {
  // Easing sofisticado (Padrão Internacional)
  expo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inertia: [0.23, 1, 0.32, 1] as [number, number, number, number],
  smooth: [0.45, 0, 0.55, 1] as [number, number, number, number],

  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,
    extraSlow: 1.2,
  },
} as const;

export const variants = {
  // Revelação de máscara (Premium Look)
  maskReveal: {
    hidden: { clipPath: 'inset(100% 0% 0% 0%)', y: 40, opacity: 0 },
    visible: (i: number = 0) => ({
      clipPath: 'inset(0% 0% 0% 0%)',
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: transitions.duration.slow,
        ease: transitions.expo,
      },
    }),
  },

  // Entrada técnica de elementos (Simula formação de circuitos/dados)
  technicalFormation: {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: transitions.duration.extraSlow,
        ease: "easeInOut",
      },
    }),
  },

  // Cards com "Borda Viva" e Profundidade Dinâmica
  cardPremium: {
    rest: {
      scale: 1,
      y: 0,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.02)",
      borderColor: "rgba(241, 245, 249, 1)"
    },
    hover: {
      scale: 1.01,
      y: -12,
      boxShadow: "0px 30px 60px rgba(0,0,0,0.08)",
      borderColor: "rgba(0, 102, 255, 0.2)",
      transition: { duration: transitions.duration.normal, ease: transitions.inertia }
    },
  },

  // Botão com efeito de profundidade
  buttonPremium: {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.03, y: -2, transition: { duration: 0.3, ease: transitions.expo } },
    tap: { scale: 0.97, y: 0 },
  },

  // Badge Pulsante (Indicadores de Risco/Status)
  pulseStatus: {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
} satisfies Record<string, Variants>;
