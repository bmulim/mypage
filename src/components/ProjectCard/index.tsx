"use client";

import clsx from "clsx";
import Image from "next/image";

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  placeholder?: string;
  placeholderImage?: string;
  animation?: string;
  href?: string;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  description,
  technologies,
  image,
  placeholder,
  placeholderImage,
  animation,
  href,
  onClick,
}: ProjectCardProps) {
  const cardContent = (
    <>
      {/* Project Image/Placeholder */}
      <div className="bg-primary/20 group-hover:bg-primary/30 mb-4 flex h-48 items-center justify-center overflow-hidden rounded-lg transition-colors duration-300">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={300}
            height={192}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : placeholderImage ? (
          <Image
            src={placeholderImage}
            alt={placeholder || title}
            width={300}
            height={192}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="text-primary px-4 text-center font-semibold">
            {placeholder || title}
          </span>
        )}
      </div>

      {/* Project Title */}
      <h3 className="group-hover:text-primary mb-2 text-xl font-semibold transition-colors duration-300">
        {title}
      </h3>

      {/* Project Description */}
      <p className="text-card-foreground/80 mb-4 line-clamp-3">{description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-accent/20 text-accent hover:bg-accent/30 rounded px-2 py-1 text-sm transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  const baseClasses = clsx(
    "bg-card text-card-foreground border-border hover:shadow-primary/20",
    "group transform rounded-lg border p-6 transition-all duration-300",
    "hover:scale-105 hover:shadow-xl",
    animation,
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(baseClasses, "block cursor-pointer")}
      >
        {cardContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={clsx(baseClasses, "w-full cursor-pointer text-left")}
      >
        {cardContent}
      </button>
    );
  }

  return <div className={baseClasses}>{cardContent}</div>;
}

export default ProjectCard;
