export interface Experience {
  id: string
  company: string
  position: string
  period: string
  description: string
  achievements?: string[]
  technologies?: string[]
}

export const experiencesData: Experience[] = [
  {
    id: 'salud-digna',
    company: 'Salud Digna',
    position: 'Consultor Técnico',
    period: '2026 - Actualidad',
    description:
      'Gestión de los sitios web principales de América Latina, atención de incidencias a pacientes, liderazgo de equipos de desarrollo, implementación de buenas prácticas e innovación continua.',
    technologies: ['C#', '.NET', 'APIs', 'Arquitectura de Software', 'Liderazgo'],
  },
  {
    id: 'epam-neoris',
    company: 'EPAM NEORIS',
    position: 'SD Analyst - HT - DEVELO',
    period: '2024 - 2026',
    description:
      'Consultoría y análisis de solicitudes de desarrollo, desarrollo de software solicitado y creación de APIs en IBM API Connect y otras tecnologías, brindando soluciones de calidad al cliente.',
    technologies: ['IBM API Connect', 'APIs', 'Consultoría', 'C#', '.NET'],
  },
  {
    id: 'neoris-trainee',
    company: 'NEORIS',
    position: 'Desarrollador FullStack - Trainee',
    period: '2022 - 2024',
    description:
      'Desarrollo web, procesos ETL, documentación de software y creación de APIs con manejo de microservicios con la finalidad de optimizar procesos y ofrecer soluciones al cliente.',
    technologies: ['Fullstack', 'Microservicios', 'ETL', 'Web Development'],
  },
  {
    id: 'castaneda-asociados',
    company: 'Castañeda & Asociados Bienes Raíces',
    position: 'Técnico en Programación',
    period: '2019 - 2020',
    description:
      'Desarrollo y administración de landing pages, manejo de marketing en redes sociales y creación de contenido multimedia publicitario para incremento de tráfico.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Admin'],
  },
  {
    id: 'valdez-baluarte',
    company: 'Valdez Baluarte',
    position: 'Auxiliar en Programación',
    period: '2019',
    description:
      'Auxiliar temporal para el desarrollo de una aplicación encargada del monitoreo de camiones de entrega, optimizando la satisfacción del cliente.',
    technologies: ['Software Development', 'Tracking Apps'],
  },
]