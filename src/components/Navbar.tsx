"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { id: "hero", href: "/", label: "~/inicio" },
  { id: "sobre-mi", href: "/#sobre-mi", label: "~/sobre-mi" },
  { id: "proyectos", href: "/proyectos", label: "~/proyectos" },
  { id: "certificados", href: "/#certificados", label: "~/certificados" },
  { id: "contacto", href: "/#contacto", label: "~/contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  // El menú del celu se cierra con Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isActive = (item: (typeof navItems)[number]) =>
    pathname === "/proyectos" ? item.id === "proyectos" : active === item.id;

  const linkClass = (item: (typeof navItems)[number]) =>
    `transition-colors hover:text-accent-light ${isActive(item) ? "text-accent-light" : "text-muted"}`;

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 font-mono text-sm">
        <Link href="/" className="shrink-0 font-heading font-bold text-foreground">
          samuel<span className="text-accent-light">.</span>dev
        </Link>

        {/* Desde tablet (md) entran todos los links en una fila. */}
        <ul className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className={linkClass(item)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          className="rounded-md border border-accent/50 px-3 py-1.5 text-xs text-accent-light transition-colors hover:bg-accent hover:text-white md:hidden"
        >
          {menuOpen ? "✕ cerrar" : "≡ menu"}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            id="menu-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="border-t border-border px-6 py-2 font-mono text-sm md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 ${linkClass(item)}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
