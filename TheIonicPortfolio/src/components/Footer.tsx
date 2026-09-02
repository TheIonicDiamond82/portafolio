import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#272333] bg-[#08080D] px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Identidad de Marca */}
        <div className="flex flex-col items-center sm:items-start">
<a
            href="#inicio"
            className="inline-flex items-center gap-2 font-mono text-lg font-bold tracking-wider text-[#F5F3FF] transition-colors hover:text-[#C084FC]"
          >
            <span className="text-[#A855F7]">&lt;</span>
            TheIonic
            <span className="text-[#A855F7]">/&gt;</span>
          </a>
          <p className="mt-1 text-xs font-mono text-[#71717A]">
            Jesús Eduardo Uriarte Avelar — Software Developer &amp; AI Engineer
          </p>
        </div>

        {/* Links Rápidos */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-[#A1A1AA]">
          <a href="#inicio" className="transition-colors hover:text-[#C084FC]">
            Inicio
          </a>
          <a href="#sobre-mi" className="transition-colors hover:text-[#C084FC]">
            Sobre mí
          </a>
          <a href="#habilidades" className="transition-colors hover:text-[#C084FC]">
            Habilidades
          </a>
          <a href="#proyectos" className="transition-colors hover:text-[#C084FC]">
            Proyectos
          </a>
          <a href="#experiencia" className="transition-colors hover:text-[#C084FC]">
            Experiencia
          </a>
          <a href="#contacto" className="transition-colors hover:text-[#C084FC]">
            Contacto
          </a>
        </div>

        {/* Derechos y Stack */}
        <div className="text-center sm:text-right font-mono text-xs text-[#71717A]">
          <p>© {currentYear} TheIonic. Todos los derechos reservados.</p>
          {/*<p className="mt-1 text-[10px] text-[#71717A]">
            Desarrollado con React, TypeScript &amp; Tailwind CSS
          </p>*/}
        </div>
      </div>
    </footer>
  )
}

export default Footer