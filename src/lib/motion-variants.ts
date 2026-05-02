import type { Variants } from "framer-motion";

/**
 * SGS Motion Design System - "SGS Motion DNA"
 *
 * Este sistema define a identidade de movimento premium do SGS.
 * Focado em: Precisao Tecnica, Solidez de Engenharia e Fluidez Digital.
 */

export const transitions = {
  // Easing sofisticado (Padrao Internacional)
  expo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inertia: [0.23, 1, 0.32, 1] as [number, number, number, number],
  smooth: [0.45, 0, 0.55, 1] as [number, number, number, number],

  // Spring configs
  spring: { type: "spring" as const, stiffness: 260, damping: 20 },
  smoothSpring: { type: "spring" as const, stiffness: 120, damping: 24, mass: 0.8 },

  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,
    extraSlow: 1.2,
  },
} as const;

export const variants = {
  // Revelacao de mascara (Premium Look)
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

  // Entrada tecnica de elementos (Simula formacao de circuitos/dados)
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

  // Cards com "Borda Viva" e Profundidade Dinamica
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
      borderColor: "rgba(2, 132, 199, 0.2)",
      transition: { duration: transitions.duration.normal, ease: transitions.inertia }
    },
  },

  // Botao com efeito de profundidade
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
  },

  // Slide horizontal entries
  slideInLeft: {
    hidden: { x: -60, opacity: 0 },
    visible: (i: number = 0) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: transitions.duration.slow,
        ease: transitions.expo,
      },
    }),
  },

  slideInRight: {
    hidden: { x: 60, opacity: 0 },
    visible: (i: number = 0) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: transitions.duration.slow,
        ease: transitions.expo,
      },
    }),
  },

  // Scale reveal
  scaleReveal: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number = 0) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: transitions.duration.slow,
        ease: transitions.expo,
      },
    }),
  },

  // Stagger container
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: (stagger: number = 0.08) => ({
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.1,
      },
    }),
  },

  // Stagger child
  staggerChild: {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: transitions.duration.slow,
        ease: transitions.expo,
      },
    },
  },

  // Float animation for cards
  floatCard: {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  // Progress line
  progressLine: {
    hidden: { scaleX: 0, originX: 0 },
    visible: (i: number = 0) => ({
      scaleX: 1,
      transition: {
        delay: i * 0.2,
        duration: transitions.duration.extraSlow,
        ease: transitions.expo,
      },
    }),
  },

  // Chip enter
  chipEnter: {
    hidden: { scale: 0.6, opacity: 0 },
    visible: (i: number = 0) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4 + i * 0.08,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
  },

  // Hero text reveal (more dramatic)
  heroTextReveal: {
    hidden: { clipPath: 'inset(100% 0% 0% 0%)', y: 60, opacity: 0 },
    visible: (i: number = 0) => ({
      clipPath: 'inset(0% 0% 0% 0%)',
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 1,
        ease: transitions.expo,
      },
    }),
  },

  // Panel slide from right
  panelSlide: {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 24, mass: 0.8 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: transitions.expo },
    },
  },

  // Glow pulse
  glowPulse: {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
} satisfies Record<string, Variants>;

// Page transition config
export const pageTransition = {
  initial: { opacity: 0, y: 10, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: transitions.duration.normal, ease: transitions.expo },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: transitions.expo },
  },
};
