interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "primary" | "muted";
  className?: string;
}

const variantStyles = {
  accent: "bg-accent-500 text-sable-950",
  primary: "bg-primary-500 text-sable-50",
  muted: "bg-sable-700 text-sable-300",
};

export default function Badge({ children, variant = "accent", className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center rounded-pill px-3 py-1
        text-xs font-semibold font-inter uppercase tracking-wider
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
