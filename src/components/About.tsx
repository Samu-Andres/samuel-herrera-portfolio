"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "./TerminalWindow";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Git",
];

export function About() {
  return (
    <section id="sobre-mi" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="font-mono text-sm text-accent-light">
              <span className="text-muted">samuel@portfolio:~$</span> cat sobre-mi.md
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              Sobre mí
            </h2>
          </div>

          <a
            href="https://drive.google.com/drive/folders/1NLCq9PYofNagUiGNk5FqcJJxez-yeIO4"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-1 flex items-center gap-2 rounded-md border border-accent/50 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-light transition-all hover:bg-accent hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M9 13h6" />
              <path d="M9 17h6" />
            </svg>
            ver CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TerminalWindow title="sobre-mi.md">
            <div className="space-y-4 text-sm leading-relaxed text-foreground/85 sm:text-base">
              <p>
                Soy <span className="text-accent-light font-semibold">Samuel Andrés Herrera</span>,
                tengo 27 años y vivo en Río Gallegos, Santa Cruz, Argentina.
                Estoy en la instancia de rendir mi tesis final para recibirme como
                Técnico Superior en Diseño y Programación Web.
              </p>
              <p>
                Me dedico a construir productos digitales de punta a punta: desde
                la interfaz hasta la lógica de backend y la base de datos. Me
                interesa el detalle en la experiencia de usuario tanto como la
                solidez del código detrás de escena.
              </p>
              <div className="pt-2">
                <p className="mb-3 text-xs text-muted">{"// stack"}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-accent-light transition-colors hover:border-accent-light hover:bg-accent/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
