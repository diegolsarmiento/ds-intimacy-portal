'use client'

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

      {/* 1) Enlace directo (por si prefieren nueva pestaña) */}
      <div className="mt-4">
        <Link
          href="https://conversa.diegosarmiento.com"
          target='_blank'
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
      <section className="text-center space-y-8">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl bg-neutral-100 card-hover">
          <Image
            src="/images/diego-portrait.png"           // update path if needed
            alt="Retrato de Diego Sarmiento"
            fill
            className="object-cover object-center"
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Diego Sarmiento
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
            Ingeniero, escritor y creador de experiencias. Exploro cómo la
            tecnología y el deseo se entrelazan; cómo el diseño puede volverse
            un acto de presencia. Este espacio reúne mis libros, mis talleres y
            una manera más humana de habitar lo digital.
          </p>
        </div>
      </section>

      {/* The Intimacy Code (bloque breve) */}
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
            Un viaje entre el cuerpo y el algoritmo, entre la soledad y la posibilidad
            de sentir a través de la tecnología.  
            Una invitación a reconectar con la sensibilidad, incluso dentro del código.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              target='_blank'
              href="https://www.amazon.com/dp/B0G2G277KX/ref=sr_1_2?crid=2NFYQ6I2DJULY&dib=eyJ2IjoiMSJ9.TJ3q0Ckd1zoUHePRitzP2zYWTZFLOfVKLdkTPBrLjSJsxvolNQARvRZbcV82xthvPH8TfS77P2ZJnghkEYLb3BgRv9EaUkBU01vxboQZ6Dlj_Sn6sMp7F1YrD4hsaGdNhZyWwjKzomiMOsc9J_sVcDiZqj1C0VCKHlpkdRwCupErClfXIktyFLIqau7V-w8YHMdctQ9kBZCVo9gYUB0I8bWNusdeNKDYmDlQcxoJC4g.4V6TFVbT2TOaFbeVEvMd9O16A6Gw8Jxr0KWNU2Qj6Lw&dib_tag=se&keywords=the+intimacy+code&qid=1763239810&sprefix=the+intimacy+code%2Caps%2C130&sr=8-2"
              className="border px-5 py-2.5 rounded-md text-sm border-glow"
            >
              Leer más
            </Link>

            <Link
              href="/#newsletter"
              className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100"
            >
              Unirse al círculo
            </Link>
          </div>
        </div>

        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 card-hover">
          <Image
            src="/images/intimacy-code-cover.png"   // ← update path if different
            alt="Portada del libro The Intimacy Code"
            fill
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Quemado, pero No Vencido + Chatbot */}
      <section
         id="quemado"
        className="grid gap-8 md:grid-cols-2 md:items-start border-t pt-16"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 card-hover">
          <Image
            src="/images/quemado-cover.png"   // ← put the correct path
            alt="Quemado, pero No Vencido book cover"
            fill
            className="object-cover object-center"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Quemado, pero No Vencido
          </h2>

          <p className="mt-4 opacity-80 text-base leading-relaxed">
            Escrito desde las cenizas del agotamiento, este libro habla de la
            vulnerabilidad, la reinvención y el fuego que queda cuando parece
            que todo se apaga. Incluye un chatbot con quien puedes conversar,
            preguntar o simplemente acompañarte en tu propio proceso.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              target='_blank'
              href="https://www.amazon.com/Quemado-pero-Vencido-Redefiniendo-Agotamiento-ebook/dp/B0FQHHZ46G/ref=sr_1_1?crid=1CF57LNA7V8HL&dib=eyJ2IjoiMSJ9.5ofB_yduiiawby3nFOlYw-0xIhRPCBAorBmvWQ8dnSjDlFMA-DKkqk_mRhdDemtFhVDP1p5SQ4aVWZ650ETqWA.zvEseATK6ZXEkdE_tALXR75k6bCPoB3WXPlH1W44vDA&dib_tag=se&keywords=quemado+pero+no+vencido&qid=1763240253&sprefix=quemado+pero+no+vencido%2Caps%2C117&sr=8-1"
              className="border px-5 py-2.5 rounded-md text-sm border-glow"
            >
              Leer más
            </Link>
          </div>

          <div className="mt-6">
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
