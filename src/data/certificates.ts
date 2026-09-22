export type Certificate = {
  title: string;
  institution: string;
  year: string;
  href: string | null;
};

export const certificates: Certificate[] = [
  {
    title: "Una ambiciosa Introducción a Python (Parte 1)",
    institution: "UNPA-UARG",
    year: "2023",
    href: "https://drive.google.com/file/d/1nQShMdkPgtsaV3b0vlqVQ_T4ITNyeuCE/view?pli=1",
  },
  {
    title: "Creación y Programación de Videojuegos I",
    institution: "UTN",
    year: "s/f",
    href: null,
  },
  {
    title: "Creación y Programación de Videojuegos II",
    institution: "UTN",
    year: "s/f",
    href: null,
  },
];
