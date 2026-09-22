"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "./TerminalWindow";
import { certificates } from "@/data/certificates";

export function Certificates() {
  return (
    <section id="certificados" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-accent-light">
            <span className="text-muted">samuel@portfolio:~$</span> ls ./certificados
          </p>
          <h2 className="mt-3 mb-8 font-heading text-3xl font-bold sm:text-4xl">
            Certificados
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TerminalWindow title="certificados">
            <ul className="divide-y divide-border">
              {certificates.map((cert) => {
                const content = (
                  <div className="flex items-center justify-between gap-4 py-3.5">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-foreground/90 sm:text-base">
                        {cert.title}
                      </p>
                      <p className="mt-1 text-xs text-muted">{cert.institution}</p>
                    </div>
                    <span className="shrink-0 rounded border border-border bg-white/[0.03] px-2 py-1 text-xs text-accent-light">
                      {cert.year}
                    </span>
                  </div>
                );

                return (
                  <li key={cert.title}>
                    {cert.href ? (
                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-colors hover:text-accent-light"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
