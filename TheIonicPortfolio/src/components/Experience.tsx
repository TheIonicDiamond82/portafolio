import React from 'react'
import { experiencesData } from '../data/experience'

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experiencia"
      className="relative overflow-hidden bg-[#08080D] px-6 py-24 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16">
          <span className="mb-4 block font-mono text-sm font-medium uppercase tracking-[0.2em] text-[#A855F7]">
            04 / experiencia
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-[#F5F3FF] sm:text-5xl">
            Trayectoria profesional.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[#A1A1AA] sm:text-lg">
            Roles orientados a la consultoría técnica, arquitectura de software e instrucción tecnológica.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#272333] ml-2 md:ml-32 space-y-12">
          {experiencesData.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-10 group">
              {/* Timeline Node */}
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#8B5CF6] transition-all duration-300 group-hover:bg-[#A855F7] group-hover:scale-125 group-hover:shadow-[0_0_12px_#A855F7]" />

              {/* Period Display */}
              <div className="md:absolute md:-left-36 md:top-0.5 text-xs font-mono font-medium text-[#A855F7] mb-2 md:mb-0 md:text-right md:w-28">
                {item.period}
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl border border-[#272333] bg-[#12121C] p-6 transition-all duration-300 hover:border-[#8B5CF6]/40 hover:bg-[#181824] hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <h3 className="text-xl font-bold text-[#F5F3FF]">
                    {item.position}
                  </h3>
                  <span className="text-sm font-mono text-[#22D3EE]">
                    @{item.company}
                  </span>
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <ul className="mb-4 space-y-2 text-sm text-[#71717A]">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#8B5CF6] font-mono">&gt;</span>
                        <span className="text-[#A1A1AA]">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Tags */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-[#272333]">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#272333] bg-[#0D0D15] px-2.5 py-1 text-xs font-mono text-[#C084FC]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection