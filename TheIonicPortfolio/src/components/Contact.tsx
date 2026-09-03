import { ArrowUpRight, Mail } from 'lucide-react'

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1.01.08 1.55 1.07 1.55 1.07.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.91c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.06.36.32.68.95.68 1.92v1.84c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46Z" />
    </svg>
  )
}

function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#08080D] px-6 py-24 sm:px-8 lg:px-12"
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[160px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 block font-mono text-sm font-medium uppercase tracking-[0.2em] text-[#A855F7]">
            06 / contacto
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-[#F5F3FF] sm:text-5xl lg:text-6xl">
            ¿Construimos algo
            <span className="block text-[#A855F7]">juntos?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#A1A1AA] sm:text-lg">
            Estoy abierto a nuevas oportunidades profesionales, proyectos y
            colaboraciones donde la tecnología pueda convertirse en una
            solución de valor.
          </p>

          {/* Main CTA */}
          <div className="mt-9">
            <a
              href="mailto:theionicdiamond82@gmail.com"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#8B5CF6] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#7C3AED] hover:shadow-[0_0_35px_rgba(139,92,246,0.3)]"
            >
              <Mail size={18} aria-hidden="true" />

              Envíame un correo

              <ArrowUpRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Contact cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:theionicdiamond82@gmail.com"
            className="group rounded-2xl border border-[#272333] bg-[#12121C] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6D28D9] hover:bg-[#181824]"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#272333] bg-[#0D0D15] text-[#A855F7]">
                <Mail size={19} aria-hidden="true" />
              </div>

              <ArrowUpRight
                size={17}
                aria-hidden="true"
                className="text-[#71717A] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A855F7]"
              />
            </div>

            <p className="mt-5 font-mono text-xs uppercase tracking-wider text-[#71717A]">
              Email
            </p>

            <p className="mt-2 break-all text-sm font-medium text-[#F5F3FF]">
              theionicdiamond82@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jesus-eduardo-uriarte-avelar-8204131a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-[#272333] bg-[#12121C] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6D28D9] hover:bg-[#181824]"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#272333] bg-[#0D0D15] text-[#A855F7]">
                <LinkedInIcon />
              </div>

              <ArrowUpRight
                size={17}
                aria-hidden="true"
                className="text-[#71717A] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A855F7]"
              />
            </div>

            <p className="mt-5 font-mono text-xs uppercase tracking-wider text-[#71717A]">
              LinkedIn
            </p>

            <p className="mt-2 text-sm font-medium text-[#F5F3FF]">
              Jesús Eduardo Uriarte Avelar
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/TheIonicDiamond82"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-[#272333] bg-[#12121C] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6D28D9] hover:bg-[#181824]"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#272333] bg-[#0D0D15] text-[#A855F7]">
                <GitHubIcon />
              </div>

              <ArrowUpRight
                size={17}
                aria-hidden="true"
                className="text-[#71717A] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A855F7]"
              />
            </div>

            <p className="mt-5 font-mono text-xs uppercase tracking-wider text-[#71717A]">
              GitHub
            </p>

            <p className="mt-2 text-sm font-medium text-[#F5F3FF]">
              @TheIonicDiamond82
            </p>
          </a>
        </div>

        {/* Availability */}
        <div className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-3 rounded-full border border-[#272333] bg-[#12121C]/70 px-5 py-3 backdrop-blur-sm">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#A855F7] shadow-[0_0_12px_rgba(168,85,247,0.8)]"
          />

          <span className="text-sm text-[#A855F7]">
            Desarrollemos el futuro juntos.
          </span>
        </div>

        {/* Technical signature */}
        <div className="mt-16 text-center">
          <p className="font-mono text-xs text-[#71717A]">
            <span className="text-[#8B5CF6]">const</span>{' '}
            <span className="text-[#C084FC]">nextProject</span>{' '}
            <span className="text-[#71717A]">=</span>{' '}
            <span className="text-green-400">'let&apos;s build it'</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact