# samuel.dev — Portfolio personal

Portfolio de **Herrera Samuel Andrés (Samu Andrés)** — Técnico Superior en Diseño y Programación Web, Río Gallegos, Santa Cruz, Argentina.

Sitio de una sola página con estética de terminal: ventanas de terminal/browser animadas, texto que se tipea en vivo y un acento violeta sobre fondo oscuro.

🔗 Demo en vivo: https://samuel-herrera-portfolio.vercel.app/

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) para las animaciones
- Fuentes: Space Grotesk (headings) y JetBrains Mono (terminal)

## Secciones

- **Hero** — terminal animada con `whoami` / `cat rol.txt`
- **Sobre mí** — bio, stack de tecnologías y link al CV
- **Proyectos** — cards estilo ventana de navegador, con demo y repo
- **Certificados** — cursos y certificaciones
- **Contacto** — email, GitHub, LinkedIn y redes

## Correr en local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Otros scripts disponibles: `npm run build`, `npm run start`, `npm run lint`.

## Editar contenido

No hace falta tocar los componentes para actualizar el contenido del día a día:

- `src/data/projects.ts` — proyectos mostrados en la sección Proyectos
- `src/data/certificates.ts` — certificados y cursos

Los componentes visuales están en `src/components/`, y las páginas en `src/app/`.

## Deploy

Deployado en [Vercel](https://vercel.com): importar el repo, Vercel detecta Next.js automáticamente y no requiere variables de entorno.

## Contacto

- Email: hsamuel638@gmail.com
- GitHub: [github.com/Samu-Andres](https://github.com/Samu-Andres)
- LinkedIn: [linkedin.com/in/samuel-a-herrera](https://www.linkedin.com/in/samuel-a-herrera)
- Redes: [linktr.ee/samuel.herrera](https://linktr.ee/samuel.herrera)
