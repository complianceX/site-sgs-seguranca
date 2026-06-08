interface MeshGradientProps {
  className?: string;
}

export function MeshGradient({ className = "" }: MeshGradientProps) {
  const blobs = [
    { size: 600, x: "15%", y: "20%", color: "rgba(29, 91, 141, 0.06)", duration: "16s", delay: "-2s" },
    { size: 500, x: "70%", y: "10%", color: "rgba(34, 197, 94, 0.04)", duration: "20s", delay: "-6s" },
    { size: 450, x: "80%", y: "60%", color: "rgba(59, 130, 246, 0.04)", duration: "18s", delay: "-4s" },
    { size: 350, x: "20%", y: "70%", color: "rgba(29, 91, 141, 0.03)", duration: "22s", delay: "-8s" },
  ];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute animate-sgs-float ${i > 1 ? "hidden md:block" : ""}`}
          style={{
            width: blob.size,
            height: blob.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            filter: "blur(60px)",
            left: blob.x,
            top: blob.y,
            animationDuration: blob.duration,
            animationDelay: blob.delay,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
