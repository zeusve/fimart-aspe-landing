import { memo } from "react";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CTAVariant = "whatsapp" | "phone" | "whatsapp-arrow";

interface CTAButtonProps {
  variant?: CTAVariant;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  fullWidth?: boolean;
}

const configs = {
  whatsapp: {
    href: WHATSAPP_LINK,
    icon: MessageCircle,
    showArrow: false,
    isExternal: true,
  },
  "whatsapp-arrow": {
    href: WHATSAPP_LINK,
    icon: MessageCircle,
    showArrow: true,
    isExternal: true,
  },
  phone: {
    href: "tel:+34652667953",
    icon: Phone,
    showArrow: false,
    isExternal: false,
  },
} as const;

const CTAButton = memo(({
  variant = "whatsapp",
  children,
  className,
  ariaLabel,
  fullWidth = false,
}: CTAButtonProps) => {
  const config = configs[variant];
  const Icon = config.icon;

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold",
        "shadow-lg shadow-primary/25 hover:shadow-primary/40",
        "transition-all duration-300 text-base px-8 h-12",
        fullWidth && "w-full sm:w-auto",
        className
      )}
    >
      <a
        href={config.href}
        target={config.isExternal ? "_blank" : undefined}
        rel={config.isExternal ? "noopener noreferrer" : undefined}
        className="flex items-center justify-center gap-2"
        aria-label={ariaLabel}
      >
        <Icon className="w-5 h-5" aria-hidden="true" />
        <span>{children}</span>
        {config.showArrow && (
          <ArrowRight className="w-5 h-5 hidden sm:block" aria-hidden="true" />
        )}
      </a>
    </Button>
  );
});

CTAButton.displayName = "CTAButton";

export default CTAButton;
