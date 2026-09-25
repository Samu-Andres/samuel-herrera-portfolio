"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section id="proyectos" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-accent-light">
            <span className="text-muted">samuel@portfolio:~$</span> ls ./proyectos
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Proyectos destacados
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/proyectos"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground/80 transition-all hover:border-accent-light hover:text-accent-light"
          >
            ./ver-todos-los-proyectos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
