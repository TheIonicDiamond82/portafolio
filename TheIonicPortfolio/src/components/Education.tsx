import React from 'react'

interface EducationItem {
  degree: string
  institution: string
  period: string
  description?: string
  type: 'academic' | 'certification'
}

const educationData: EducationItem[] = [
  {
    degree: 'Maestría en Inteligencia Artificial',
    institution: 'Universidad Internacional de La Rioja (UNIR)',
    period: '2024 - 2025',
    type: 'academic',
  },
  {
    degree: 'Ingeniería en Sistemas Computacionales',
    institution: 'Instituto Tecnológico Nacional de México — Campus Culiacán',
    period: '2019 - 2023',
    type: 'academic',
  },
  {
    degree: 'Carrera Técnica en Programación',
    institution: 'CBTis 224',
    period: '2016 - 2019',
    type: 'academic',
  },
  {
    degree: 'Continuing Education Certificate in Cybersecurity',
    institution: 'MIU City University Miami',
    period: 'Certificación',
    type: 'certification',
  },
  {
    degree: 'Diplomado en Soft Skills y Habilidades Directivas',
    institution: 'UNIR',
    period: 'Diplomado',
    type: 'certification',
  },
  {
    degree: 'CCNA Routing and Switching: Introducción a Redes',
    institution: 'Cisco®',
    period: 'Certificación',
    type: 'certification',
  },
]

const Education: React.FC = () => {
  const academicList = educationData.filter((item) => item.type === 'academic')
  const certificationList = educationData.filter((item) => item.type === 'certification')

  return (
    <section
      id="educacion"
      className="relative overflow-hidden bg-[#0D0D15] px-6 py-24 sm:px-8 lg:px-12"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#8B5CF6]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16">
          <span className="mb-4 block font-mono text-sm font-medium uppercase tracking-[0.2em] text-[#A855F7]">
            05 / educación
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-[#F5F3FF] sm:text-5xl">
            Formación y Certificaciones.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[#A1A1AA] sm:text-lg">
            Sólida base académica combinada con especializaciones en Inteligencia Artificial, Redes y Ciberseguridad.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Columna 1: Formación Académica */}
          <div>
            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-[#F5F3FF]">
              <span className="text-[#8B5CF6] font-mono">&gt;</span> Formación Académica
            </h3>
            <div className="space-y-6">
              {academicList.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#272333] bg-[#12121C] p-6 transition-all duration-300 hover:border-[#8B5CF6]/40 hover:bg-[#181824]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-[#F5F3FF]">
                        {item.degree}
                      </h4>
                      <p className="mt-1 text-sm font-mono text-[#22D3EE]">
                        {item.institution}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-md border border-[#272333] bg-[#0D0D15] px-2.5 py-1 font-mono text-xs text-[#C084FC]">
                      {item.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna 2: Certificaciones y Especializaciones */}
          <div>
            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-[#F5F3FF]">
              <span className="text-[#8B5CF6] font-mono">&gt;</span> Certificaciones &amp; Cursos
            </h3>
            <div className="space-y-6">
              {certificationList.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#272333] bg-[#12121C] p-6 transition-all duration-300 hover:border-[#8B5CF6]/40 hover:bg-[#181824]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-[#F5F3FF]">
                        {item.degree}
                      </h4>
                      <p className="mt-1 text-sm font-mono text-[#22D3EE]">
                        {item.institution}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-md border border-[#272333] bg-[#0D0D15] px-2.5 py-1 font-mono text-xs text-[#A855F7]">
                      {item.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education