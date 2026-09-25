export type Project = {
  slug: string;
  name: string;
  url: string;
  description: string;
  stack: string[];
  demoHref: string | null;
  repoHref: string | null;
  featured: boolean;
};

// El orden de este array es el orden en que se muestran las cards.
// En el inicio solo aparecen los que tienen featured: true (máximo 3).
export const projects: Project[] = [
  {
    slug: "reservas-canchas",
    name: "Reservas de Canchas",
    url: "reservas-canchas-hesadev.netlify.app",
    description:
      "Plataforma de reservas para clubes de varios deportes: grilla de disponibilidad por horario y cancha, reservas sin necesitar cuenta y un panel para que cada club administre sus canchas, horarios y turnos.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle"],
    demoHref: "https://reservas-canchas-hesadev.netlify.app/",
    repoHref: "https://github.com/Samu-Andres/reservas-canchas",
    featured: true,
  },
  {
    slug: "turnos-peluqueria",
    name: "Turnos Peluquería",
    url: "turnos-peluqueria-dusky.vercel.app",
    description:
      "Plataforma de reservas para peluquerías y barberías: los clientes reservan sin necesitar cuenta, y el dueño administra servicios, staff, horarios y turnos desde un panel propio.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    demoHref: "https://turnos-peluqueria-dusky.vercel.app/",
    repoHref: "https://github.com/Samu-Andres/turnos-peluqueria",
    featured: true,
  },
  {
    slug: "dashboard-gastos",
    name: "Dashboard de Gastos",
    url: "dashboard-gastos-steel.vercel.app",
    description:
      "Dashboard familiar de gastos con cifrado E2E, automatizaciones de presupuesto y sincronización en tiempo real.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase"],
    demoHref: "https://dashboard-gastos-steel.vercel.app/",
    repoHref: "https://github.com/Samu-Andres/dashboard-gastos",
    featured: true,
  },
  {
    slug: "clima",
    name: "Clima",
    url: "weather-app-hesadev.netlify.app",
    description:
      "Aplicación del clima con pronóstico de 5 días, geolocalización, mapa y gráfico de temperatura por hora, usando la API de OpenWeatherMap.",
    stack: ["HTML", "CSS", "JavaScript"],
    demoHref: "https://weather-app-hesadev.netlify.app/",
    repoHref: "https://github.com/Samu-Andres/Weather-Technical-Interview",
    featured: false,
  },
  {
    slug: "pokedex",
    name: "Pokedex",
    url: "pokedex-hesadev.netlify.app",
    description:
      "Pokedex clásica que consume la PokéAPI para buscar Pokémon y ver su ficha detallada: tipos, stats e imagen.",
    stack: ["HTML", "CSS", "JavaScript"],
    demoHref: "https://pokedex-hesadev.netlify.app/",
    repoHref: "https://github.com/Samu-Andres/Pokedex",
    featured: false,
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    url: "próximamente",
    description:
      "Tienda online con catálogo de productos, carrito de compras y panel de administración.",
    stack: ["PHP", "MySQL", "phpMyAdmin", "XAMPP"],
    demoHref: null,
    repoHref: null,
    featured: false,
  },
];
