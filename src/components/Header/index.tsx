"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "./logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const liClasses = clsx(
    "px-4",
    "py-2",
    "rounded-lg",
    "text-lg",
    "font-medium",
    "bg-card/50 hover:bg-card",
    "text-card-foreground",
    "border border-border",
    "transition-all duration-300",
    "hover:scale-105",
    "hover:shadow-lg hover:shadow-primary/20",
    "hover:text-primary",
  );

  const mobileLiClasses = clsx(
    "px-4",
    "py-3",
    "text-lg",
    "font-medium",
    "hover:bg-card/50",
    "transition-all duration-300",
    "border-b",
    "border-border",
    "hover:text-primary",
  );

  return (
    <header
      className={clsx(
        "bg-background/95 backdrop-blur-sm border-b border-border",
        "text-foreground",
        "flex",
        "w-full",
        "items-center",
        "justify-between",
        "px-4 py-3 sm:px-6 sm:py-4",
        "relative",
        "animate-fade-in",
        "sticky top-0 z-50",
      )}
    >
      {/* Logo */}
      <Link href="/" className="shrink-0 animate-slide-in-left">
        <div className="flex flex-col items-center sm:flex-row sm:space-x-3 group">
          <Image
            src={logo}
            alt="Logo"
            width={60}
            height={60}
            className="sm:h-20 sm:w-20 hover:scale-110 transition-all duration-300 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:hue-rotate-180"
          />
          <span
            className={clsx(
              "sm:text-lg text-center text-sm font-extrabold sm:text-left",
              "transition-all duration-300",
              "group-hover:text-primary text-foreground",
              "mt-1 sm:mt-0",
              "bg-linear-to-r from-primary to-secondary bg-clip-text group-hover:text-transparent",
            )}
          >
            BRUNO GUSMÃO MULIM
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:block animate-slide-in-right animation-delay-300">
        <nav>
          <ul className="flex justify-around space-x-4 px-12">
            <li className={clsx(liClasses, "animate-fade-in-up animation-delay-400")}>
              <Link href="/services">Serviços</Link>
            </li>
            <li className={clsx(liClasses, "animate-fade-in-up animation-delay-500")}>
              <Link href="/portfolio">Portfólio</Link>
            </li>
            <li className={clsx(liClasses, "animate-fade-in-up animation-delay-600")}>
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="bg-card/50 hover:bg-card border border-border rounded-lg p-2 transition-all duration-300 focus:ring-2 focus:ring-primary focus:outline-none lg:hidden animate-fade-in animation-delay-400 hover:scale-110"
        aria-label="Toggle menu"
      >
        <div className="flex h-6 w-6 flex-col items-center justify-center">
          <span
            className={clsx(
              "bg-foreground block h-0.5 w-6 transition-all duration-300 ease-out",
              isMenuOpen ? "translate-y-1 rotate-45" : "-translate-y-1",
            )}
          />
          <span
            className={clsx(
              "bg-foreground block h-0.5 w-6 transition-all duration-300 ease-out",
              isMenuOpen ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={clsx(
              "bg-foreground block h-0.5 w-6 transition-all duration-300 ease-out",
              isMenuOpen ? "-translate-y-1 -rotate-45" : "translate-y-1",
            )}
          />
        </div>
      </button>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "bg-background/95 backdrop-blur-sm border-b border-border absolute top-full left-0 z-50 w-full shadow-xl shadow-primary/10 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 transform opacity-100"
            : "invisible -translate-y-2 transform opacity-0",
        )}
      >
        <nav className="py-2">
          <ul className="flex flex-col">
            <li className={mobileLiClasses}>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full"
              >
                Serviços
              </Link>
            </li>
            <li className={mobileLiClasses}>
              <Link
                href="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full"
              >
                Portfólio
              </Link>
            </li>
            <li className={clsx(mobileLiClasses, "border-b-0")}>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay para fechar menu ao clicar fora (mobile) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
