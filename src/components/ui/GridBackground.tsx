import { memo } from "react";
import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  variant?: "lines" | "dots";
  size?: number;
  className?: string;
}

const GridBackground = memo(({
  variant = "lines",
  size = 60,
  className
}: GridBackgroundProps) => {
  const patterns = {
    lines: `
      linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
      linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
    `,
    dots: `radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)`,
  };

  return (
    <div
      className={cn("absolute inset-0 opacity-5", className)}
      aria-hidden="true"
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage: patterns[variant],
          backgroundSize: `${size}px ${size}px`
        }}
      />
    </div>
  );
});

GridBackground.displayName = "GridBackground";

export default GridBackground;
