export type Certificate = {
  title: string;
  institution: string;
  year: string;
  href: string | null;
};

// Ordenados del más nuevo al más viejo.
export const certificates: Certificate[] = [
  {
    title: "Soporte Informático, Diagnóstico e Infraestructura con IA",
    institution: "Potrero Digital",
    year: "2026",
    href: "https://drive.google.com/file/d/1mGkTIGG85RV5gUJKLu1L_bnAHiSc0Y4I/view",
  },
  {
    title: "Introducción a la Programación",
    institution: "EducaciónIT",
    year: "2024",
    href: "https://drive.google.com/file/d/1rRBqMoMC-z8AbGpsFgs8w-sb1KsHDIxi/view",
  },
  {
    title: "Una ambiciosa Introducción a Python (Parte 1)",
    institution: "UNPA-UARG",
    year: "2023",
    href: "https://drive.google.com/file/d/1nQShMdkPgtsaV3b0vlqVQ_T4ITNyeuCE/view?pli=1",
  },
  {
    title: "Diseño de Videojuegos: Producción y programación integral",
    institution: "UTN.BA",
    year: "2021",
    href: "https://drive.google.com/file/d/1IUgT8wEO-GxQxQEyNnRB_RiJNgjfwT9W/view",
  },
  {
    title: "Desarrollo de Videojuegos",
    institution: "UTN.BA",
    year: "2021",
    href: "https://drive.google.com/file/d/1Z8hiHKsfuo8AeUr28_iHNnqotLet5JZP/view",
  },
];
