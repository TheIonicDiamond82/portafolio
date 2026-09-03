//import React, { useEffect, useRef, useState } from 'react'
import { useEffect, useRef, useState } from 'react'


function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    const numParticles = Math.min(Math.floor(width / 12), 100)
    const particles: Array<{
      x: number
      y: number
      z: number
      vx: number
      vy: number
      radius: number
    }> = []

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        p1.x += p1.vx
        p1.y += p1.vy

        if (p1.x < 0 || p1.x > width) p1.vx *= -1
        if (p1.y < 0 || p1.y > height) p1.vy *= -1

        const depthAlpha = 1 - p1.z / 1000

        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(168, 85, 247, ${depthAlpha * 0.7})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 130) {
            const lineAlpha = (1 - distance / 130) * depthAlpha * 0.25
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
    />
  )
}

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedName, setTypedName] = useState('')
  const fullName = 'TheIonic'

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setIsVisible(true)
    })

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setTypedName(fullName.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 70)

    return () => {
      cancelAnimationFrame(animationFrame)
      clearInterval(typingInterval)
    }
  }, [])

  return (
    <section
      id="inicio"
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-[#08080D] px-6 pb-16 pt-28 sm:pt-36"
    >
      {/* Background Canvas */}
      <NetworkCanvas />

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[#8B5CF6]/15 blur-[140px]" />
        <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-[#A855F7]/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(168,85,247,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div
        className={`relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr] transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Content */}
        <div className="max-w-3xl">
          {/* Status */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 px-4 py-2 font-mono text-xs text-[#C084FC] shadow-[0_0_20px_rgba(139,92,246,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A855F7] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A855F7]" />
            </span>
            Disponible para nuevos proyectos
          </div>

          {/* Greeting */}
          <p className="mb-3 font-mono text-sm text-[#A855F7] sm:text-base">
            &gt; Hola, soy
          </p>

          {/* Name */}
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl min-h-[1.2em]">
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">
              {typedName}
            </span>
            <span className="ml-1 inline-block w-1 h-8 sm:h-10 lg:h-12 bg-[#A855F7] animate-pulse align-middle" />
          </h1>

          {/* Professional Title */}
          <h2 className="mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-zinc-300 sm:text-2xl">
            M. C. en IA &amp;{' '}
            <span className="text-[#C084FC]">
              Ing. Jesús Eduardo Uriarte Avelar
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            M. C. en Inteligencia Artificial · Ingeniero en Sistemas
            Computacionales · Consultor Técnico · Desarrollador de Software ·
            Ciencia de Datos
          </p>

          {/* CTA Principal */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#8B5CF6] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A855F7] hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]"
            >
              Ver mis proyectos
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/5 hover:text-white"
            >
              Contactarme
            </a>
          </div>

          {/* Botones de Descarga de CV Rediseñados con movimiento en el icono */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* CV Español */}
            <a
              href="/CV's/Currículum Vitae - Español.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-between gap-3 overflow-hidden rounded-xl border border-white/10 bg-[#12121C]/80 px-4 py-3 font-mono text-xs text-zinc-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 hover:text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#C084FC] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#8B5CF6] group-hover:text-white">
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                <span className="font-semibold tracking-wide">CV (Español)</span>
              </div>
              <span className="text-[#A855F7] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Resume Inglés */}
            <a
              href="/CV's/Resume - English.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-between gap-3 overflow-hidden rounded-xl border border-white/10 bg-[#12121C]/80 px-4 py-3 font-mono text-xs text-zinc-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A855F7]/50 hover:bg-[#A855F7]/10 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#A855F7]/30 bg-[#A855F7]/10 text-[#C084FC] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#A855F7] group-hover:text-white">
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                <span className="font-semibold tracking-wide">Resume (English)</span>
              </div>
              <span className="text-[#A855F7] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Visual / Tarjeta de Habilidades Interactiva */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto aspect-square max-w-md">
            {/* Resplandor ambiental de fondo */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#8B5CF6]/20 via-[#A855F7]/20 to-transparent blur-3xl animate-pulse" />

            {/* Anillos de órbita decorativos */}
            <div className="absolute inset-4 rounded-full border border-[#8B5CF6]/30 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-12 rounded-full border border-dashed border-[#C084FC]/20 animate-[spin_15s_linear_infinite_reverse]" />

            {/* Núcleo Central / Tarjeta Principal */}
            <div className="group absolute inset-20 flex flex-col items-center justify-between overflow-hidden rounded-3xl border border-[#8B5CF6]/40 bg-[#12121C]/90 p-6 shadow-[0_0_50px_rgba(139,92,246,0.2)] backdrop-blur-xl transition-all duration-500 hover:border-[#A855F7] hover:shadow-[0_0_70px_rgba(168,85,247,0.35)]">

              {/* Brillo dinámico en esquina superior */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#8B5CF6]/20 blur-2xl transition-all duration-500 group-hover:bg-[#A855F7]/40" />

              {/* Header de la tarjeta */}
              <div className="flex w-full items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase">
                    System Active
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold text-[#C084FC]">
                  v2.5
                </span>
              </div>

              {/* Ícono central con gradiente */}
              <div className="my-auto text-center">
                <div className="relative inline-block font-mono text-5xl font-black tracking-tight text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] bg-clip-text transition-transform duration-300 group-hover:scale-110">
                  &lt;/&gt;
                </div>
                <p className="mt-2 font-mono text-xs font-semibold tracking-widest text-zinc-300 uppercase">
                  AI & Software Eng.
                </p>

                {/* Pequeña barra de nivel/progreso */}
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  <div className="h-1.5 w-6 rounded-full bg-[#8B5CF6]" />
                  <div className="h-1.5 w-6 rounded-full bg-[#A855F7]" />
                  <div className="h-1.5 w-6 rounded-full bg-[#C084FC]" />
                  <div className="h-1.5 w-6 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Footer con métricas sutiles */}
              <div className="grid w-full grid-cols-3 gap-2 border-t border-white/10 pt-3 text-center font-mono text-[9px] text-zinc-400">
                <div>
                  <span className="block text-[#C084FC] font-bold">MODEL</span>
                  LLMs / ML
                </div>
                <div>
                  <span className="block text-[#C084FC] font-bold">STACK</span>
                  React / TS
                </div>
                <div>
                  <span className="block text-[#C084FC] font-bold">DATA</span>
                  Python / SQL
                </div>
              </div>
            </div>

            {/* Flotante 1: React / Frontend */}
            <div className="absolute top-4 left-2 flex items-center gap-2 rounded-xl border border-[#8B5CF6]/40 bg-[#12121C]/90 px-3.5 py-2.5 font-mono text-xs text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#8B5CF6]/20 text-[#C084FC]">
                ⚛
              </span>
              <div>
                <div className="text-[11px] font-bold">React</div>
                <div className="text-[9px] text-zinc-400">Frontend</div>
              </div>
            </div>

            {/* Flotante 2: TypeScript */}
            <div className="absolute top-10 right-0 flex items-center gap-2 rounded-xl border border-[#A855F7]/40 bg-[#12121C]/90 px-3.5 py-2.5 font-mono text-xs text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#A855F7] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#A855F7]/20 text-[#C084FC]">
                TS
              </span>
              <div>
                <div className="text-[11px] font-bold">TypeScript</div>
                <div className="text-[9px] text-zinc-400">Typed Code</div>
              </div>
            </div>

            {/* Flotante 3: AI & Machine Learning */}
            <div className="absolute bottom-12 left-0 flex items-center gap-2 rounded-xl border border-[#C084FC]/40 bg-[#12121C]/90 px-3.5 py-2.5 font-mono text-xs text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C084FC] hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#C084FC]/20 text-[#C084FC]">
                🧠
              </span>
              <div>
                <div className="text-[11px] font-bold">IA / ML</div>
                <div className="text-[9px] text-zinc-400">Data Science</div>
              </div>
            </div>

            {/* Flotante 4: Architecture / Cloud */}
            <div className="absolute -bottom-2 right-6 flex items-center gap-2 rounded-xl border border-white/10 bg-[#12121C]/90 px-3.5 py-2.5 font-mono text-xs text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-[#C084FC]">
                ⚡
              </span>
              <div>
                <div className="text-[11px] font-bold">Consulting</div>
                <div className="text-[9px] text-zinc-400">Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#sobre-mi"
        aria-label="Desplazarse a la sección Sobre mí"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 transition-colors hover:text-[#A855F7] md:flex z-10"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="h-8 w-px bg-gradient-to-b from-[#8B5CF6]/60 to-transparent" />
      </a>
    </section>
  )
}

export default Hero