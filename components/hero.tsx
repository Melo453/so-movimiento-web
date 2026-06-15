import { WhatsAppButton } from "@/components/whatsapp-button"
import { WHATSAPP_MESSAGES } from "@/lib/site"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 lg:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pb-24">
        {/* Texto */}
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Movimiento · Postura · Estética
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Entrenamiento postural y estética integral
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Un espacio de escucha corporal y reeducación postural en Córdoba Zona
            Norte. Trabajamos postura, movilidad, fuerza profunda, equilibrio y
            propiocepción con un proceso personal y cuidado.
          </p>

          <p className="mt-5 max-w-xl font-script text-xl leading-snug text-primary sm:text-2xl">
            Cada movimiento es una oportunidad para escuchar, conectar y
            transformar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton message={WHATSAPP_MESSAGES.reservar}>
              Reservar turno por WhatsApp
            </WhatsAppButton>

            <WhatsAppButton
              message={WHATSAPP_MESSAGES.consultar}
              variant="outline"
            >
              Consultar disponibilidad
            </WhatsAppButton>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border/70 pt-6">
            {[
              { value: "TPA", label: "Terapia Postural Activa" },
              { value: "1 a 1", label: "Trabajo personalizado" },
              { value: "Postura", label: "Movilidad y equilibrio" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-xl text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Video */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/70 bg-secondary shadow-sm">
            <video
              src="/video_tpa.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="pointer-events-none h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border/70 bg-card px-5 py-4 shadow-sm sm:block">
            <p className="font-heading text-sm text-foreground">
              Movimiento sano
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              presencia, autonomía y confianza
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}