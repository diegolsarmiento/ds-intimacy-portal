import Link from 'next/link'

export default function SpanishLanding() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24 space-y-24">
      {/* Intro */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Diego Sarmiento
        </h1>
        <p className="mt-4 text-base md:text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
          Ingeniero, escritor y creador de experiencias.  
          Exploro cómo la tecnología y el deseo se entrelazan, cómo la conexión
          puede sentirse —no solo medirse— y cómo el diseño puede volverse un
          acto de presencia.  
          Este espacio reúne mis libros, mis talleres y una forma más humana de
          habitar lo digital.
        </p>
      </section>

      {/* The Intimacy Code */}
      <section id="intimacy-code" className="grid gap-8 md:grid-cols-2 md:items-center border-t pt-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">The Intimacy Code</h2>
          <p className="mt-4 opacity-80 text-base leading-relaxed">
            Una reflexión sobre la intimidad en tiempos de pantallas.  
            <em>The Intimacy Code</em> es un viaje entre el cuerpo y el algoritmo,
            entre la soledad y la posibilidad de sentir a través de la tecnología.  
            Es una invitación a reconectar con la sensibilidad, incluso dentro
            del código.
          </p>
          <Link href="/book" className="inline-block mt-6 border px-5 py-2.5 rounded-md text-sm">
            Leer más
          </Link>
        </div>
        <div className="rounded-2xl bg-neutral-100 aspect-[3/4]" />
      </section>

      {/* Quemado, pero No Vencido */}
      <section id="quemado" className="grid gap-8 md:grid-cols-2 md:items-center border-t pt-16">
        <div className="rounded-2xl bg-neutral-100 aspect-[3/4]" />
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Quemado, pero No Vencido</h2>
          <p className="mt-4 opacity-80 text-base leading-relaxed">
            Escrito desde las cenizas del agotamiento, este libro habla de la
            vulnerabilidad, la reinvención y el fuego que queda cuando parece
            que todo se apaga.  
            Combina reflexión, práctica y un chatbot con quien puedes conversar,
            preguntar, o simplemente acompañarte en tu propio proceso de regreso
            a ti.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="https://chatbot-link-aqui" className="border px-5 py-2.5 rounded-md text-sm">
              Hablar con el chatbot
            </Link>
            <Link href="/contact" className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100">
              Saber más
            </Link>
          </div>
        </div>
      </section>

      {/* Experiencias */}
      <section id="experiencias" className="border-t pt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Experiencias y Talleres</h2>
        <p className="mt-4 opacity-80 text-base leading-relaxed max-w-3xl">
          Espacios diseñados para repensar cómo sentimos, creamos y comunicamos
          en lo digital.  
          Desde charlas sobre intimidad y diseño emocional, hasta laboratorios
          donde la creatividad se convierte en una forma de conexión.
        </p>
        <div className="mt-6">
          <Link href="/experiences" className="border px-5 py-2.5 rounded-md text-sm">
            Ver más
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t pt-16 text-center">
        <p className="opacity-80 text-base leading-relaxed">
          Si algo de esto te resuena, escríbeme.  
          La conversación siempre es el primer paso para entendernos.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 border px-6 py-2.5 rounded-md text-sm"
        >
          Escribir a Diego
        </Link>
      </section>
    </main>
  )
}
