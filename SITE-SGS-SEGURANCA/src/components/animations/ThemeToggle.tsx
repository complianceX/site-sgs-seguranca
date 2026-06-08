import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="relative h-10 w-10 rounded-md border border-sgs-border bg-white transition-all duration-300 hover:border-sgs-blue/30 hover:shadow-md hover:shadow-sgs-blue/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
    >
      {/* Sol */}
      <svg
        className={`absolute inset-0 m-auto h-5 w-5 text-amber-500 transition-all duration-500 ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>

      {/* Lua */}
      <svg
        className={`absolute inset-0 m-auto h-5 w-5 text-sgs-blue transition-all duration-500 dark:text-blue-300 ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
