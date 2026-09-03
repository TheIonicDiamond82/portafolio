import React from 'react'

function About() {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/5 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-[#A855F7]">
            01 / sobre-mi
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Construyendo soluciones,
            <span className="text-[#A855F7]"> no solo código.</span>
          </h2>

          <div className="mt-6 h-px w-full bg-white/10" />
        </div>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg leading-8 text-zinc-300">
              Soy un desarrollador de software mexicano con experiencia en la
              creación de aplicaciones, sitios web, APIs y soluciones
              tecnológicas orientadas a resolver necesidades reales de negocio.
            </p>

            <p className="leading-8 text-zinc-400">
              Mi trayectoria comenzó en el desarrollo de software y
              posteriormente se expandió hacia áreas como arquitectura,
              consultoría técnica, bases de datos, liderazgo técnico e
              innovación tecnológica. He trabajado con tecnologías como React,
              Next.js, Angular, Vue, Ionic, Node.js, C# y .NET.
            </p>

            <p className="leading-8 text-zinc-400">
              Mi formación como Ingeniero en Sistemas Computacionales y Maestro
              en Inteligencia Artificial me ha permitido combinar el desarrollo
              de software con áreas como Machine Learning, Ciencia de Datos,
              Business Intelligence y análisis de información.
            </p>

            <p className="leading-8 text-zinc-400">
              Actualmente continúo desarrollando soluciones que conectan
              tecnología, datos e inteligencia artificial, buscando siempre
              mantener un equilibrio entre una buena experiencia de usuario,
              calidad técnica y valor para el negocio.
            </p>
          </div>

          {/* Profile Card con Animación de Flotado */}
          <div className="relative transition-transform duration-500 hover:[animation-play-state:paused]">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-[#8B5CF6]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D15]/80 p-6 backdrop-blur-xl animate-[float_5s_ease-in-out_infinite]">
              {/* Keyframes embebidos para compatibilidad inmediata */}
              <style>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-12px); }
                }
              `}</style>

              {/* Decorative Code */}
              <div className="mb-6 flex items-center gap-2 border-b border-white/5 pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />

                <span className="ml-2 font-mono text-xs text-zinc-600">
                  profile.ts
                </span>
              </div>

              <div className="font-mono text-sm leading-7">
                <p>
                  <span className="text-[#A855F7]">const</span>{' '}
                  <span className="text-[#C084FC]">developer</span>{' '}
                  <span className="text-zinc-500">=</span>{' '}
                  <span className="text-zinc-500">{'{'}</span>
                </p>

                <div className="ml-4">
                  <p>
                    <span className="text-zinc-500">name:</span>{' '}
                    <span className="text-green-400">
                      &quot;Jesús Eduardo&quot;
                    </span>
                    ,
                  </p>

                  <p>
                    <span className="text-zinc-500">alias:</span>{' '}
                    <span className="text-green-400">
                      &quot;TheIonic&quot;
                    </span>
                    ,
                  </p>

                  <p>
                    <span className="text-zinc-500">role:</span>{' '}
                    <span className="text-green-400">
                      &quot;Computer Systems Engineer&quot;
                    </span>
                    ,
                  </p>

                  <p>
                    <span className="text-zinc-500">focus:</span>{' '}
                    <span className="text-green-400">
                      &quot;Software · AI · Data&quot;
                    </span>
                    ,
                  </p>

                  <p>
                    <span className="text-zinc-500">mindset:</span>{' '}
                    <span className="text-green-400">
                      &quot;Always learning&quot;
                    </span>
                  </p>
                </div>

                <p className="text-zinc-500">{'}'}</p>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-[#8B5CF6]/20">
                  <p className="font-mono text-2xl font-bold text-[#C084FC]">
                    AI
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Inteligencia Artificial
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-[#8B5CF6]/20">
                  <p className="font-mono text-2xl font-bold text-[#C084FC]">
                    Web
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Software Development
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-[#8B5CF6]/20">
                  <p className="font-mono text-2xl font-bold text-[#C084FC]">
                    Data
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Data Science &amp; BI
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-[#8B5CF6]/20">
                  <p className="font-mono text-2xl font-bold text-[#C084FC]">
                    Dev
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Technical Leadership
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-[#0D0D15]/50 p-6 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-zinc-400">
              Me interesa crear productos donde el desarrollo de software, los
              datos y la inteligencia artificial trabajen juntos para generar
              soluciones útiles y escalables.
            </p>

            <a
              href="#habilidades"
              className="group inline-flex shrink-0 items-center gap-2 font-mono text-sm text-[#A855F7] transition-colors hover:text-[#C084FC]"
            >
              Explorar habilidades
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About