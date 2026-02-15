"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "accent";
type ButtonSize = "default" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-sable-50 hover:bg-primary-400 focus-visible:ring-primary-400",
  secondary:
    "bg-transparent text-primary-400 border border-primary-500 hover:bg-primary-500/10 focus-visible:ring-primary-400",
  accent:
    "bg-accent-500 text-sable-950 font-semibold hover:bg-accent-400 hover:shadow-gold-glow focus-visible:ring-accent-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-10 px-5 text-body",
  lg: "h-12 px-6 text-body-lg",
  xl: "h-[48px] px-8 text-body-lg font-semibold",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "default", className = "", children, href, ...props }, ref) => {
    const classes = `
      inline-flex items-center justify-center gap-2
      rounded-button font-inter font-medium
      transition-all duration-150 ease-out
      hover:-translate-y-[2px]
      active:translate-y-0
      disabled:opacity-50 disabled:pointer-events-none
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${className}
    `.trim();

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
