import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Proyectos — Samuel Herrera",
  description: "Todos los proyectos de Herrera Samuel Andrés.",
};

export default function ProyectosPage() {
  return (
    <main className="flex-1 px-6 pt-32 pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="font-mono text-sm text-accent-light">
            <span className="text-muted">samuel@portfolio:~$</span> ls -la ./proyectos
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Todos los proyectos
          </h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted">
            ¿Tenés un proyecto en mente? Escribime.
          </p>
          <Link
            href="/#contacto"
            className="rounded-md border border-accent/50 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent-light transition-all hover:bg-accent hover:text-white"
          >
            ./contactar
          </Link>
        </div>
      </div>
    </main>
  );
}
