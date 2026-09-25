"use client";

import { motion } from "framer-motion";
import { BrowserWindow } from "./BrowserWindow";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group min-w-0"
    >
      <BrowserWindow
        url={project.url}
        className="h-full transition-shadow duration-300 group-hover:shadow-[0_0_40px_-10px_rgba(109,40,217,0.5)] group-hover:border-accent/60"
      >
        <div className="flex h-full flex-col gap-4">
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-accent-light">
              {project.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border bg-white/[0.03] px-2 py-1 text-xs text-accent-light"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-3 pt-2">
            {project.demoHref ? (
              <a
                href={project.demoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-md border border-accent/50 bg-accent/10 px-3 py-2 text-center text-xs font-medium text-accent-light transition-all hover:bg-accent hover:text-white"
              >
                demo →
              </a>
            ) : (
              <span className="flex-1 cursor-not-allowed rounded-md border border-dashed border-border px-3 py-2 text-center text-xs font-medium text-muted">
                próximamente
              </span>
            )}
            {project.repoHref ? (
              <a
                href={project.repoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-md border border-border px-3 py-2 text-center text-xs font-medium text-foreground/80 transition-all hover:border-accent-light hover:text-accent-light"
              >
                repo
              </a>
            ) : (
              <span className="flex-1 cursor-not-allowed rounded-md border border-dashed border-border px-3 py-2 text-center text-xs font-medium text-muted">
                próximamente
              </span>
            )}
          </div>
        </div>
      </BrowserWindow>
    </motion.div>
  );
}
