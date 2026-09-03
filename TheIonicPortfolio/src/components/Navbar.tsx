import { useState } from 'react'

const navigationItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav className="mx-auto mt-4 w-[calc(100%-2rem)] max-w-7xl">
        <div className="border border-white/10 bg-[#0D0D15]/80 px-4 py-3 shadow-[0_0_30px_rgba(139,92,246,0.08)] backdrop-blur-xl md:px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a
              href="#inicio"
              onClick={handleNavigation}
              className="group flex items-center gap-2"
              aria-label="TheIonic - Inicio"
            >
              <span className="text-xl font-bold tracking-tight text-white">
                The<span className="text-[#A855F7]">Ionic</span>
              </span>

              <span className="hidden font-mono text-xs text-zinc-500 sm:inline">
                &lt;/dev&gt;
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-[#A855F7]/10 hover:text-[#C084FC]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contacto"
              className="hidden rounded-lg border border-[#8B5CF6]/50 bg-[#8B5CF6]/10 px-4 py-2 text-sm font-semibold text-[#C084FC] shadow-[0_0_20px_rgba(139,92,246,0.12)] transition-all duration-300 hover:border-[#A855F7] hover:bg-[#8B5CF6]/20 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] md:block"
            >
              Hablemos
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className="rounded-lg border border-white/10 p-2 text-zinc-300 transition-colors hover:border-[#8B5CF6]/50 hover:text-[#C084FC] md:hidden"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              </span>

              <div className="flex h-5 w-5 flex-col justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    isMenuOpen ? 'translate-y-2 rotate-45' : ''
                  }`}
                />

                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />

                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              isMenuOpen
                ? 'mt-4 max-h-96 border-t border-white/10 pt-4'
                : 'max-h-0'
            }`}
          >
            <div className="flex flex-col gap-1 pb-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigation}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-[#A855F7]/10 hover:text-[#C084FC]"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contacto"
                onClick={handleNavigation}
                className="mt-2 rounded-lg border border-[#8B5CF6]/40 bg-[#8B5CF6]/10 px-4 py-3 text-center text-sm font-semibold text-[#C084FC] transition-all duration-300 hover:bg-[#8B5CF6]/20 hover:text-white"
              >
                Hablemos
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar