import { ArrowUpRight, LockKeyhole } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  category: string
  image: string
  demo?: string
  github?: string
  private?: boolean
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1.01.08 1.55 1.07 1.55 1.07.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.91c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.06.36.32.68.95.68 1.92v1.84c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
  category,
  image,
  demo,
  github,
  private: isPrivate = false,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#272333] bg-[#12121C] transition-all duration-500 hover:-translate-y-1 hover:border-[#6D28D9] hover:shadow-[0_20px_60px_rgba(109,40,217,0.15)]">
      {/* Contenedor de Imagen */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#08080D] p-4 flex items-center justify-center">
        <img
          src={image}
          alt={`Vista previa del proyecto ${title}`}
          className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080D]/60 via-transparent to-transparent" />

        {/* Category */}
        <span className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-[#08080D]/80 px-3 py-1.5 font-mono text-xs text-[#C084FC] backdrop-blur-md">
          {category}
        </span>

        {/* Private badge */}
        {isPrivate && (
          <span className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#08080D]/80 px-3 py-1.5 text-xs text-[#A1A1AA] backdrop-blur-md">
            <LockKeyhole size={12} />
            Privado
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-[#F5F3FF] transition-colors group-hover:text-[#C084FC]">
            {title}
          </h3>

          {demo && !isPrivate && (
            <ArrowUpRight
              size={20}
              aria-hidden="true"
              className="shrink-0 text-[#71717A] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A855F7]"
            />
          )}
        </div>

        <p className="mt-3 text-sm leading-7 text-[#A1A1AA]">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-[#272333] bg-[#0D0D15] px-2.5 py-1 font-mono text-[11px] text-[#A1A1AA]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-4 border-t border-[#272333] pt-5">
          {demo && !isPrivate && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C084FC] transition-colors hover:text-white"
            >
              Ver proyecto
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A1A1AA] transition-colors hover:text-white"
              aria-label={`Ver código de ${title} en GitHub`}
            >
              <GitHubIcon />
              GitHub
            </a>
          )}

          {isPrivate && !github && (
            <span className="text-xs text-[#71717A]">
              Proyecto privado
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard