import { memo } from "react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const SectionBadge = memo(({
  children,
  variant = "primary",
  className
}: SectionBadgeProps) => {
  const baseClasses = "inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full border";

  const variantClasses = {
    primary: "text-primary bg-primary/10 border-primary/30",
    secondary: "text-secondary bg-secondary/10 border-secondary/30",
  };

  return (
    <span className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
});

SectionBadge.displayName = "SectionBadge";

export default SectionBadge;
