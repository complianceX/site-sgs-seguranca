import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    ignores: [".next/**", "node_modules/**", ".claude/**"],
  },

  // Regras personalizadas de acessibilidade
  {
    rules: {
      // Garante que elementos interativos tenham labels (essencial para leitores de tela)
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
