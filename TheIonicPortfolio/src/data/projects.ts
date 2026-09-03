export interface Project {
  title: string
  description: string
  technologies: string[]
  category: 'Web' | 'Desarrollo' | 'Data Science' | 'AI'
  image: string
  demo?: string
  github?: string
  private?: boolean
}

export const projects: Project[] = [
  {
    title: 'Pecas Market MX',
    description:
      'Plataforma web de comercio electrónico desarrollada para gestionar productos, clientes y procesos de venta.',
    technologies: ['React', 'Node.js', 'Firebase', 'E-commerce'],
    category: 'Web',
    image: `${import.meta.env.BASE_URL}projects/PecasMarket.jpeg`,
    demo: 'https://pecasmarket.com.mx/',
  },

  {
    title: 'Megapack',
    description:
      'Sistema interno orientado a la gestión de órdenes de compra, inventario y procesos logísticos empresariales.',
    technologies: ['React', 'Firebase', 'JavaScript', 'Web App'],
    category: 'Desarrollo',
    image: `${import.meta.env.BASE_URL}projects/Megapack.PNG`,
    demo: 'https://megapack-73ed8.web.app/',
    private: true,
  },

  {
    title: 'MantenimientoITC',
    description:
      'Sistema para la gestión y seguimiento de solicitudes de mantenimiento de equipos de cómputo.',
    technologies: ['React', 'Firebase', 'Web App', 'CRUD'],
    category: 'Desarrollo',
    image: `${import.meta.env.BASE_URL}projects/MantenimientoITC.PNG`,
    demo: 'https://mantenimiento-itc.web.app',
    private: true,
  },

  {
    title: 'Passcript',
    description:
      'Aplicación web enfocada en la gestión de credenciales mediante una interfaz moderna y orientada a la seguridad.',
    technologies: ['Ionic', 'Angular', 'TypeScript'],
    category: 'Desarrollo',
    image: `${import.meta.env.BASE_URL}projects/Passcript.png`,
    github: 'https://github.com/TheIonicDiamond82/Passcript-Ionic',
  },

  {
    title: 'Proyecto CRUD Mobiliario',
    description:
      'Aplicación web desarrollada en Vue para administrar información de mobiliario mediante operaciones CRUD.',
    technologies: ['Vue', 'JavaScript', 'CRUD', 'Web App'],
    category: 'Web',
    image: `${import.meta.env.BASE_URL}projects/Proyecto CRUD Mobiliario.png`,
    github: 'https://github.com/TheIonicDiamond82/PW_ProyectoFinal',
  },

  {
    title: 'Sistema Control Escolar',
    description:
      'Sistema web desarrollado para administrar información relacionada con procesos de control escolar.',
    technologies: ['Vue', 'JavaScript', 'CRUD', 'Web App'],
    category: 'Desarrollo',
    image: `${import.meta.env.BASE_URL}projects/Sistema Control Escolar.png`,
    github: 'https://github.com/TheIonicDiamond82/Sistema-Control-Escolar',
  },

  {
    title: 'EmoKids',
    description:
      'Prototipo experimental que utiliza inteligencia artificial para interpretar y trabajar con expresiones emocionales.',
    technologies: [
      'Ionic',
      'Angular',
      'TensorFlow.js',
      'Node.js',
      'Firebase',
    ],
    category: 'AI',
    image: `${import.meta.env.BASE_URL}projects/Emokids.png`,
    demo: 'https://emokids-translator.web.app/',
    github: 'https://github.com/TheIonicDiamond82/Traductor-de-emociones',
  },

  {
    title: 'Custom QR Generator',
    description:
      'Aplicación para generar códigos QR personalizados mediante procesamiento de imágenes y una interfaz web interactiva.',
    technologies: ['Python', 'Streamlit', 'Image Processing'],
    category: 'Data Science',
    image: `${import.meta.env.BASE_URL}projects/GeneradorQR.png`,
    demo: 'https://generador-qr-personalizado-cuxfek4gxofkcakbghhxla.streamlit.app/',
    github:
      'https://github.com/TheIonicDiamond82/Generador-QR-Personalizado',
  },

  {
    title: 'Employee Attrition Dashboard',
    description:
      'Dashboard interactivo desarrollado en Tableau para explorar indicadores relacionados con la rotación y fuga de empleados.',
    technologies: ['Tableau', 'Data Visualization', 'Data Analysis'],
    category: 'Data Science',
    image: `${import.meta.env.BASE_URL}projects/Dashboard fuga de empleados.PNG`,
    demo:
      'https://public.tableau.com/app/profile/jesus.eduardo.uriarte.avelar/viz/shared/2PS7KWYBG',
  },
]