import { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const filters = ['Todos', 'Web', 'Desarrollo', 'Data Science', 'AI'] as const

type ProjectFilter = (typeof filters)[number]

function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('Todos')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-[#0D0D15] px-6 py-24 sm:px-8 lg:px-12"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-86 w-56 -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <span className="mb-4 block font-mono text-sm font-medium uppercase tracking-[0.2em] text-[#A855F7]">
            03 / proyectos
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-[#F5F3FF] sm:text-5xl">
            Trabajo que habla por sí mismo.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#A1A1AA] sm:text-lg">
            Una selección de proyectos donde convergen desarrollo de software,
            arquitectura, inteligencia artificial y análisis de datos.
          </p>
        </div>

        {/* Filters */}
        <div
          className="mb-10 flex flex-wrap gap-3"
          role="group"
          aria-label="Filtrar proyectos por categoría"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-[#8B5CF6] bg-[#8B5CF6]/10 text-[#C084FC] shadow-[0_0_20px_rgba(139,92,246,0.12)]'
                    : 'border-[#272333] bg-[#12121C] text-[#A1A1AA] hover:border-[#6D28D9] hover:text-[#F5F3FF]'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* Project grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                category={project.category}
                image={project.image}
                demo={project.demo}
                github={project.github}
                private={project.private}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#272333] bg-[#12121C] px-6 py-16 text-center">
            <p className="font-mono text-sm text-[#71717A]">
              No hay proyectos disponibles en esta categoría.
            </p>
          </div>
        )}

        {/* Bottom statement */}
        <div className="mt-16 border-t border-[#272333] pt-8">
          <p className="font-mono text-sm text-[#71717A]">
            <span className="text-[#8B5CF6]">&gt;</span>{' '}
            Más proyectos y experimentos disponibles en GitHub.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects