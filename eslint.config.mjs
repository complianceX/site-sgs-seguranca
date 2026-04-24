import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  // Importa as configurações base do Next.js
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Regras personalizadas de acessibilidade
  {
    rules: {
      // Garante que elementos interativos tenham labels (essencial para leitores de tela)
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
    },
  },
];

export default eslintConfig;