import clsx from "clsx";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animation?: string;
  variant?: "default" | "muted";
}

const cardVariants = {
  default: "bg-card text-card-foreground border-border",
  muted: "bg-muted text-muted-foreground",
};

export function Card({
  children,
  className,
  hover = true,
  animation,
  variant = "default",
}: CardProps) {
  const cardClasses = clsx(
    "rounded-lg border p-6 transition-all duration-300",
    cardVariants[variant],
    {
      "hover:scale-105 hover:shadow-xl hover:shadow-card/20 group":
        hover && variant === "default",
      "hover:bg-muted/80 hover:scale-105": hover && variant === "muted",
    },
    animation,
    className,
  );

  return <div className={cardClasses}>{children}</div>;
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={clsx("mb-4", className)}>{children}</div>;
}

export function CardTitle({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <h3
      className={clsx(
        "text-xl font-semibold",
        {
          "group-hover:text-primary transition-colors duration-300": hover,
        },
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("text-card-foreground/80", className)}>{children}</div>
  );
}

export default Card;
