"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "./TerminalWindow";

const links = [
  { label: "email", value: "hsamuel638@gmail.com", href: "mailto:hsamuel638@gmail.com" },
  { label: "github", value: "github.com/Samu-Andres", href: "https://github.com/Samu-Andres" },
  {
    label: "linkedin",
    value: "linkedin.com/in/samuel-a-herrera",
    href: "https://www.linkedin.com/in/samuel-a-herrera",
  },
  { label: "redes", value: "linktr.ee/samuel.herrera", href: "https://linktr.ee/samuel.herrera" },
];

export function Contact() {
  return (
    <section id="contacto" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-accent-light">
            <span className="text-muted">samuel@portfolio:~$</span> cat contacto.txt
          </p>
          <h2 className="mt-3 mb-8 font-heading text-3xl font-bold sm:text-4xl">
            Contacto
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TerminalWindow title="contacto.txt">
            <div className="space-y-3">
              <p className="text-sm text-muted">
                ¿Tenés un proyecto en mente? Escribime.
              </p>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-baseline gap-3 rounded-md border border-transparent px-3 py-2.5 text-sm transition-all hover:border-accent/40 hover:bg-accent/10 hover:pl-4"
                >
                  <span className="shrink-0 text-accent-light">$</span>
                  <span className="flex min-w-0 flex-wrap gap-x-3 gap-y-0.5">
                    <span className="text-muted">{link.label}:</span>
                    <span className="min-w-0 text-foreground/90 [overflow-wrap:anywhere]">
                      {link.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </TerminalWindow>
        </motion.div>

        <p className="mt-10 text-center font-mono text-xs text-muted">
          © {new Date().getFullYear()} Herrera Samuel Andrés
        </p>
      </div>
    </section>
  );
}
