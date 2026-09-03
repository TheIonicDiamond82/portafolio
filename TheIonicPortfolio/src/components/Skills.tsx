const skillGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces modernas y experiencias web.',
    icon: '⌘',
    skills: [
      'React',
      'Next.js',
      'Angular',
      'Vue',
      'Ionic',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
    ],
  },
  {
    title: 'Backend',
    description: 'APIs, servicios y soluciones empresariales.',
    icon: '{}',
    skills: [
      'Node.js',
      'C#',
      '.NET',
      'REST APIs',
      'Firebase',
      'SQL',
    ],
  },
  {
    title: 'Data & AI',
    description: 'Datos, machine learning e inteligencia artificial.',
    icon: 'AI',
    skills: [
      'Python',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Machine Learning',
      'Data Science',
      'NLP',
    ],
  },
  {
    title: 'Tools & Cloud',
    description: 'Herramientas para desarrollo y despliegue.',
    icon: '>>',
    skills: [
      'Git',
      'GitHub',
      'AWS',
      'Streamlit',
      'Tableau',
      'VS Code',
    ],
  },
]

function Skills() {
  return (
    <section
      id="habilidades"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
         {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px]"
      />

      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-sm text-[#A855F7]">
            02 / habilidades
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tecnologías que
            <span className="text-[#A855F7]"> convierto en soluciones.</span>
          </h2>

          <div className="mt-5 h-px w-20 bg-gradient-to-r from-[#8B5CF6] to-transparent" />

          <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
            Un stack multidisciplinario que combina desarrollo de software,
            inteligencia artificial y análisis de datos para construir
            soluciones completas.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D15]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#8B5CF6]/30 hover:shadow-[0_10px_40px_rgba(139,92,246,0.08)] sm:p-7"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#8B5CF6]/5 blur-3xl transition-all duration-500 group-hover:bg-[#8B5CF6]/10" />

              {/* Card Header */}
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 font-mono text-sm font-semibold text-[#C084FC] shadow-[0_0_20px_rgba(139,92,246,0.05)]">
                    {group.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-zinc-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                <span className="font-mono text-xs text-zinc-700">
                  0{index + 1}
                </span>
              </div>

              {/* Skills */}
              <div className="relative mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/5 bg-white/[0.025] px-3 py-1.5 font-mono text-xs text-zinc-400 transition-all duration-300 hover:border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/10 hover:text-[#C084FC]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* Tech Stack Footer */}
        <div className="mt-10 rounded-2xl border border-[#8B5CF6]/10 bg-[#0D0D15]/50 p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A855F7]">
                Stack
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                Desarrollo · IA · Datos · Cloud
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AI', 'Data'].map(
                (technology) => (
                  <span
                    key={technology}
                    className="font-mono text-xs text-zinc-600"
                  >
                    <span className="text-[#8B5CF6]">#</span>
                    {technology.toLowerCase().replace('.', '')}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills