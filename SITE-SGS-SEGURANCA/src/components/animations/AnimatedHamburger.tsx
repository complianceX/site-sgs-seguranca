interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export function AnimatedHamburger({ isOpen, onClick }: AnimatedHamburgerProps) {
  return (
    <button
      type="button"
      className="md:hidden relative h-10 w-10 flex items-center justify-center rounded-md bg-sgs-blue/10 text-sgs-blue transition-colors hover:bg-sgs-blue/20 dark:bg-white/10 dark:text-white"
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      onClick={onClick}
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
      >
        {/* Linha Superior */}
        <line
          x1="4" y1="6" x2="20" y2="6"
          className="origin-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: isOpen
              ? "translateY(6px) rotate(45deg)"
              : "translateY(0) rotate(0deg)",
          }}
        />
        {/* Linha do Meio */}
        <line
          x1="4" y1="12" x2="20" y2="12"
          className="transition-all duration-200"
          style={{
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? "scaleX(0)" : "scaleX(1)",
          }}
        />
        {/* Linha Inferior */}
        <line
          x1="4" y1="18" x2="20" y2="18"
          className="origin-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: isOpen
              ? "translateY(-6px) rotate(-45deg)"
              : "translateY(0) rotate(0deg)",
          }}
        />
      </svg>
    </button>
  );
}
