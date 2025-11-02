"use client";

import clsx from "clsx";
import Link from "next/link";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "muted";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const buttonVariants = {
  primary: "bg-primary text-primary-foreground hover:shadow-primary/20",
  secondary: "bg-secondary text-secondary-foreground hover:shadow-secondary/20",
  muted: "bg-muted text-muted-foreground hover:bg-muted/80",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-3 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = clsx(
    "font-semibold rounded-lg transition-all duration-300",
    "hover:scale-105 hover:shadow-lg transform",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
    buttonVariants[variant],
    buttonSizes[size],
    className,
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}

export default Button;
