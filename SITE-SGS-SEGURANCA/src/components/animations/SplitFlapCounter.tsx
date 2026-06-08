import { useEffect, useRef, useState } from "react";

interface SplitFlapCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  digitCount?: number;
  decimals?: number;
}

function Digit({ digit, prevDigit }: { digit: number; prevDigit: number }) {
  const [flipping, setFlipping] = useState(false);
  const [display, setDisplay] = useState(prevDigit);

  useEffect(() => {
    if (digit !== prevDigit) {
      setFlipping(true);
      const timeout = setTimeout(() => {
        setDisplay(digit);
        setFlipping(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [digit, prevDigit]);

  return (
    <span className="relative inline-flex h-[1.2em] w-[0.7em] overflow-hidden rounded-md bg-[#0d2033] font-mono font-black text-white">
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          flipping ? "opacity-0 -translate-y-1/2" : "opacity-100 translate-y-0"
        }`}
        style={{ perspective: "300px", backfaceVisibility: "hidden" }}
      >
        {display}
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          flipping ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"
        }`}
        style={{ perspective: "300px", backfaceVisibility: "hidden" }}
      >
        {digit}
      </span>
    </span>
  );
}

export function SplitFlapCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
  digitCount = 0,
  decimals = 0,
}: SplitFlapCounterProps) {
  const ref = useRef<HTMLSpanElement>(null!);
  const multiplier = Math.pow(10, decimals);
  const [displayed, setDisplayed] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const startVal = 0;
          const endVal = Math.round(value * multiplier);
          const duration = 2000;
          const startTime = performance.now();

          function animate(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(startVal + (endVal - startVal) * eased);
            setDisplayed(current);
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, started, multiplier]);

  let formattedString = decimals > 0
    ? (displayed / multiplier).toFixed(decimals)
    : String(displayed);

  if (digitCount > 0 && formattedString.length < digitCount) {
    formattedString = formattedString.padStart(digitCount, "0");
  }

  const characters = formattedString.split("");

  const prevDisplayed = displayed > 0 ? displayed - 1 : 0;
  let prevFormattedString = decimals > 0
    ? (prevDisplayed / multiplier).toFixed(decimals)
    : String(prevDisplayed);

  if (digitCount > 0 && prevFormattedString.length < digitCount) {
    prevFormattedString = prevFormattedString.padStart(digitCount, "0");
  }

  const prevCharacters = prevFormattedString.split("");

  return (
    <span ref={ref} className={`inline-flex items-center gap-0.5 ${className}`}>
      {prefix && <span className="mr-1">{prefix}</span>}
      {characters.map((char, i) => {
        if (char === ".") {
          return (
            <span key={i} className="mx-0.5 text-[0.8em] font-black leading-none">
              ,
            </span>
          );
        }
        const digit = Number(char);
        const prevDigit = Number(prevCharacters[i] ?? char);
        return <Digit key={i} digit={digit} prevDigit={prevDigit} />;
      })}
      {suffix && <span className="ml-1">{suffix}</span>}
    </span>
  );
}
