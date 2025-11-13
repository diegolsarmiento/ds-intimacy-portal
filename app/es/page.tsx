'use client'

import Link from 'next/link'
import React from 'react'

/* --- Pequeño bloque cliente para mostrar/ocultar el chatbot embebido --- */
function ChatbotBlock() {
  'use client'
  const [open, setOpen] = React.useState(false)
  return (
    <div className="rounded-2xl border p-6 md:p-8 card-hover">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">Chatbot — Quemado, pero No Vencido</h3>
        <button
          onClick={() => setOpen(v => !v)}
          className="rounded-md border px-4 py-2 text-sm border-glow"
        >
          {open ? 'Ocultar' : 'Abrir'}
        </button>
      </div>

      <p className="mt-3 text-sm opacity-80">
        Conversa, haz preguntas y encuentra una guía suave para tu proceso.
      </p>

      {/* 1) Enlace directo (por si prefieren nueva pestaña) */}
      <div className="mt-4">
        <Link
          href="https://conversa.diegosarmiento.com"
          target="_blank"
          className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100"
        >
          Abrir en una pestaña nueva
        </Link>
      </div>
    </div>
  )
}

export default function SpanishLanding() {
  return (
    <main className="section-glow mx-auto max-w-6xl px-4 py-24 space-y-24">
      {/* Intro */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Diego Sarmiento
        </h1>
        <p className="mt-4 text-base md:text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
          Ingeniero, escritor y creador de experiencias. Exploro cómo la
          tecnología y el deseo se entrelazan; cómo el diseño puede volverse
          un acto de presencia. Este espacio reúne mis libros, mis talleres y
          una manera más humana de habitar lo digital.
        </p>
      </section>

      {/* The Intimacy Code (bloque breve) */}
      <section id="intimacy-code" className="grid gap-8 md:grid-cols-2 md:items-center border-t pt-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            The <span className="text-glow">Intimacy</span> Code
          </h2>
          <p className="mt-4 opacity-80 text-base leading-relaxed">
            Una reflexión sobre la intimidad en tiempos de pantallas. Un viaje
            entre el cuerpo y el algoritmo, entre la soledad y la posibilidad
            de sentir a través de la tecnología. Una invitación a reconectar
            con la sensibilidad, incluso dentro del código.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/book" className="border px-5 py-2.5 rounded-md text-sm border-glow">
              Leer más
            </Link>
            <Link href="/#newsletter" className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100">
              Unirse al círculo
            </Link>
          </div>
        </div>
        <div className="rounded-2xl bg-neutral-100 aspect-[3/4]" />
      </section>

      {/* Quemado, pero No Vencido + Chatbot */}
      <section id="quemado" className="grid gap-8 md:grid-cols-2 md:items-start border-t pt-16">
        <div className="rounded-2xl bg-neutral-100 aspect-[3/4]" />
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Quemado, pero No Vencido</h2>
          <p className="mt-4 opacity-80 text-base leading-relaxed">
            Escrito desde las cenizas del agotamiento, este libro habla de la
            vulnerabilidad, la reinvención y el fuego que queda cuando parece
            que todo se apaga. Incluye un chatbot con quien puedes conversar,
            preguntar o simplemente acompañarte en tu propio proceso.
          </p>
          <div className="mt-6">
            {/* Bloque del chatbot (embed + enlace) */}
            <ChatbotBlock />
          </div>
        </div>
      </section>

      {/* Experiencias (resumen) */}
      <section id="experiencias" className="border-t pt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Experiencias y Talleres</h2>
        <p className="mt-4 opacity-80 text-base leading-relaxed max-w-3xl">
          Espacios para repensar cómo sentimos, creamos y comunicamos en lo digital.
          Desde charlas sobre intimidad y diseño emocional, hasta laboratorios creativos
          donde la curiosidad y la presencia guían el proceso.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/experiences" className="border px-5 py-2.5 rounded-md text-sm border-glow">
            Ver más
          </Link>
          <Link href="/contact" className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100">
            Escribir a Diego
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <section id="cta" className="border-t pt-16 text-center">
        <p className="opacity-80 text-base leading-relaxed">
          Si algo de esto te resuena, conversemos.
        </p>
        <Link href="/contact" className="inline-block mt-6 border px-6 py-2.5 rounded-md text-sm border-glow">
          Empezar la conversación
        </Link>
      </section>
    </main>
  )
}
