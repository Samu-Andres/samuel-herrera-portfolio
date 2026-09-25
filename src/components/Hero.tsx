"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "./TerminalWindow";
import { TypingLines } from "./TypingLines";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col items-center justify-center px-6 pt-24 pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-background" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-2xl"
      >
        <TerminalWindow title="samuel@portfolio: ~">
          <div className="font-mono text-sm sm:text-base leading-relaxed text-foreground/90">
            <TypingLines
              lines={[
                { prompt: "samuel@portfolio:~$", text: "whoami" },
                {
                  text: "Herrera Samuel Andrés",
                  className: "text-accent-light font-semibold pl-1",
                },
                { prompt: "samuel@portfolio:~$", text: "cat rol.txt" },
                {
                  text: "Técnico Superior en Diseño y Programación Web",
                  className: "text-muted pl-1",
                },
                { prompt: "samuel@portfolio:~$", text: "" },
              ]}
            />
          </div>
        </TerminalWindow>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#proyectos"
            className="rounded-md border border-accent bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent-light transition-all hover:bg-accent hover:text-white hover:shadow-[0_0_25px_-5px_rgba(109,40,217,0.8)]"
          >
            ./ver-proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground/80 transition-all hover:border-accent-light hover:text-accent-light"
          >
            ./contactar
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-xs text-muted"
      >
        <span>scroll</span>
        <span className="animate-nudge">↓</span>
      </motion.div>
    </section>
  );
}
