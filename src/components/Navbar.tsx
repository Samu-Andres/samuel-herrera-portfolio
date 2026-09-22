"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

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

  const isActive = (item: (typeof navItems)[number]) =>
    pathname === "/proyectos" ? item.id === "proyectos" : active === item.id;

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 font-mono text-sm">
        <Link href="/" className="font-heading font-bold text-foreground">
          samuel<span className="text-accent-light">.</span>dev
        </Link>
        <ul className="hidden gap-6 sm:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`transition-colors hover:text-accent-light ${
                  isActive(item) ? "text-accent-light" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#contacto"
          className="rounded-md border border-accent/50 px-3 py-1.5 text-xs text-accent-light transition-all hover:bg-accent hover:text-white sm:hidden"
        >
          contacto
        </Link>
      </nav>
    </motion.header>
  );
}
