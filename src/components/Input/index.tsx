"use client";

import clsx from "clsx";

export interface InputProps {
  id?: string;
  name?: string;
  type?: "text" | "email" | "password" | "tel" | "url";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  animation?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface TextareaProps {
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  animation?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
}

export interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

const inputClasses =
  "border-border bg-input text-foreground focus:ring-primary hover:border-primary/50 w-full rounded-lg border p-3 transition-all duration-300 focus:border-transparent focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed";

export function Input({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  className,
  animation,
  required = false,
  disabled = false,
}: InputProps) {
  return (
    <div className={animation}>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={clsx(inputClasses, className)}
      />
    </div>
  );
}

export function Textarea({
  id,
  name,
  placeholder,
  value,
  onChange,
  className,
  animation,
  rows = 5,
  required = false,
  disabled = false,
}: TextareaProps) {
  return (
    <div className={animation}>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        disabled={disabled}
        className={clsx(inputClasses, "resize-none", className)}
      />
    </div>
  );
}

export function Label({
  htmlFor,
  children,
  className,
  required = false,
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx("mb-2 block text-sm font-medium", className)}
    >
      {children}
      {required && <span className="text-destructive ml-1">*</span>}
    </label>
  );
}

export function InputGroup({
  children,
  animation,
}: {
  children: React.ReactNode;
  animation?: string;
}) {
  return <div className={animation}>{children}</div>;
}

export default Input;
