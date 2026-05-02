"use client";

import { useEffect, useState } from "react";

/**
 * useReducedMotion Hook
 * Detecta se o usuário prefere movimentos reduzidos via sistema operacional.
 * Essencial para acessibilidade (WCAG).
 */
export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = () => setShouldReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return shouldReduceMotion;
}
