import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

/* --- Pequeño bloque cliente para mostrar/ocultar el chatbot embebido --- */
function ChatbotBlock() {
  'use client'
  return (
    <div className="rounded-2xl border p-6 md:p-8 card-hover">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">Chatbot — Quemado, pero No Vencido</h3>
      </div>

      <p className="mt-3 text-sm opacity-80">
        Conversa, haz preguntas y encuentra una guía suave para tu proceso.
      </p>

      <div className="mt-4">
        <Link
          href="https://conversa.diegosarmiento.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100"
        >
          Abrir en una pestaña nueva
        </Link>
      </div>
    </div>
  )
}

const AMAZON_INTIMACY = 'https://www.amazon.com/dp/B0G2G277KX'
const AMAZON_QUEMADO = 'https://www.amazon.com/dp/B0FQHHZ46G' // (si este ASIN es correcto)

export default function SpanishLanding() {
  return (
    <main className="section-glow mx-auto max-w-6xl px-4 py-24 space-y-24">
      {/* Intro */}
      <section className="text-center space-y-8">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl bg-neutral-100 card-hover">
          <Image
            src="/images/diego-portrait.png"
            alt="Retrato de Diego Sarmiento"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Diego Sarmiento
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
            Ingeniero, escritor y creador de experiencias. Exploro cómo la tecnología y el deseo se entrelazan; cómo el
            diseño puede volverse un acto de presencia. Este espacio reúne mis libros, mis talleres y una manera más
            humana de habitar lo digital.
          </p>

          <p className="mt-4 text-sm opacity-70 max-w-2xl mx-auto">
            Si quieres invitarme a un taller, charla o laboratorio privado, escríbeme desde la página de contacto.
          </p>
        </div>

        {/* Visual micro-cards (SEO + claridad) */}
        <div className="mx-auto max-w-4xl grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border p-5 card-hover text-left">
            <h3 className="text-sm font-semibold">Libros</h3>
            <p className="mt-2 text-sm opacity-80">
              Intimidad, diseño emocional, presencia y la fricción invisible de las pantallas.
            </p>
          </div>
          <div className="rounded-2xl border p-5 card-hover text-left">
            <h3 className="text-sm font-semibold">Talleres</h3>
            <p className="mt-2 text-sm opacity-80">
              Experiencias prácticas para equipos, comunidades y creadores: lenguaje, confianza y rituales.
            </p>
          </div>
          <div className="rounded-2xl border p-5 card-hover text-left">
            <h3 className="text-sm font-semibold">Rituales (video)</h3>
            <p className="mt-2 text-sm opacity-80">
              Pequeños momentos para bajar el ruido: atmósferas, respiración y reconexión.
            </p>
          </div>
        </div>
      </section>

      {/* The Intimacy Code */}
      <section
        id="intimacy-code"
        className="grid gap-8 md:grid-cols-2 md:items-center border-t pt-16"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            The <span className="text-glow">Intimacy</span> Code
          </h2>

          <p className="mt-4 opacity-80 text-base leading-relaxed">
            Una reflexión sobre la intimidad en tiempos de pantallas.
            Un viaje entre el cuerpo y el algoritmo, entre la soledad y la posibilidad de sentir a través de la tecnología.
            Una invitación a reconectar con la sensibilidad, incluso dentro del código.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={AMAZON_INTIMACY}
              target="_blank"
              rel="noopener noreferrer"
              className="border px-5 py-2.5 rounded-md text-sm border-glow"
            >
              Ver en Amazon
            </Link>

            <Link
              href="/book"
              className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100"
            >
              Página del libro
            </Link>

            <Link
              href="/#newsletter"
              className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100"
            >
              Unirse al círculo
            </Link>
          </div>

          <p className="mt-4 text-sm opacity-70">
            Ideal si sientes que lo digital te acelera por fuera… pero te apaga por dentro.
          </p>
        </div>

        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 card-hover">
          <Image
            src="/images/intimacy-code-cover.png"
            alt="Portada del libro The Intimacy Code"
            fill
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Quemado + Chatbot */}
      <section
        id="quemado"
        className="grid gap-8 md:grid-cols-2 md:items-start border-t pt-16"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 card-hover">
          <Image
            src="/images/quemado-cover.png"
            alt="Portada del libro Quemado, pero No Vencido"
            fill
            className="object-cover object-center"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Quemado, pero No Vencido
          </h2>

          <p className="mt-4 opacity-80 text-base leading-relaxed">
            Escrito desde las cenizas del agotamiento, este libro habla de vulnerabilidad, reinvención y del fuego que queda
            cuando parece que todo se apaga. Incluye un chatbot con quien puedes conversar: para ordenar ideas, respirar, o
            sentirte acompañado sin prisa.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={AMAZON_QUEMADO}
              target="_blank"
              rel="noopener noreferrer"
              className="border px-5 py-2.5 rounded-md text-sm border-glow"
            >
              Ver en Amazon
            </Link>

            <Link
              href="https://conversa.diegosarmiento.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100"
            >
              Abrir el chatbot
            </Link>
          </div>

          <div className="mt-6">
            <ChatbotBlock />
          </div>
        </div>
      </section>

      {/* Videos (solo aquí, donde encaja) */}
      <section id="videos" className="border-t pt-16 space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Rituales en video</h2>
        <p className="mt-4 opacity-80 text-base leading-relaxed max-w-3xl">
          Si te resuena esta forma de hablar del cuerpo y lo digital, aquí tienes atmósferas para bajar el ruido:
          sesiones más largas (playlist) y micro-rituales (shorts).
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-glow overflow-hidden">
            <div className="p-4 border-b border-glow">
              <h3 className="text-sm font-semibold">Soft Heat (playlist)</h3>
              <p className="mt-1 text-sm opacity-70">Sesiones largas para la noche, enfoque y presencia.</p>
            </div>
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                // TODO: reemplaza por tu playlist real
                src="https://www.youtube.com/embed/videoseries?list=PLMSKJY3YjkiHrFNUeCdTLGqDDJHxlcdJb"
                title="Soft Heat Playlist"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-2xl border border-glow overflow-hidden">
            <div className="p-4 border-b border-glow">
              <h3 className="text-sm font-semibold">Shorts (micro-rituales)</h3>
              <p className="mt-1 text-sm opacity-70">Momentos cortos: susurros, prompts y claridad.</p>
            </div>
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                // TODO: pon un video “trailer” o un short representativo
                src="https://www.youtube.com/embed/videoseries?list=PLMSKJY3YjkiHNfFrsJZCFg6wWZHBkOD5W"
                title="Shorts"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <p className="text-xs opacity-60">
          Si prefieres performance máxima, cambiamos los embeds por cards con thumbnail + link.
        </p>
      </section>

      {/* Experiencias (resumen) */}
      <section id="experiencias" className="border-t pt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Experiencias y Talleres</h2>
        <p className="mt-4 opacity-80 text-base leading-relaxed max-w-3xl">
          Espacios para repensar cómo sentimos, creamos y comunicamos en lo digital.
          Desde charlas sobre intimidad y diseño emocional, hasta laboratorios creativos donde la curiosidad y la presencia
          guían el proceso.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/experiences" className="border px-5 py-2.5 rounded-md text-sm border-glow">
            Ver experiencias
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
        <Link
          href="/contact"
          className="inline-block mt-6 border px-6 py-2.5 rounded-md text-sm border-glow"
        >
          Empezar la conversación
        </Link>
      </section>
    </main>
  )
}
