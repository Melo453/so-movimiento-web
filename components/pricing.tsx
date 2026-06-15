import { Check } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WHATSAPP_MESSAGES } from "@/lib/site"

export function Pricing() {
  return (
    <section id="precios" className="bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-accent-foreground">
            Precios
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Invertí en tu bienestar
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Valores claros y opciones para acompañarte de forma sostenida.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Clase de entrenamiento */}
          <div className="flex flex-col rounded-3xl border border-accent/60 bg-background p-8 shadow-sm">
            <h3 className="font-heading text-xl text-foreground">
              Clase individual
            </h3>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="font-heading text-4xl text-foreground">
                $13.000
              </span>
              <span className="text-sm text-muted-foreground">/ clase</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sesión de entrenamiento personalizado adaptada a tu objetivo.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              {[
                "Trabajo 100% personalizado",
                "Descuentos abonando mensual por 4 u 8 clases",
                "Seguimiento de tu evolución",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <WhatsAppButton message={WHATSAPP_MESSAGES.reservar} className="w-full">
                Reservar turno por WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          {/* Estética */}
          <div className="flex flex-col rounded-3xl border border-border/70 bg-card p-8">
            <h3 className="font-heading text-xl text-foreground">
              Tratamientos de estética
            </h3>
            <p className="mt-4 font-heading text-3xl text-foreground">
              A consultar
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Tratamientos de estética: consultar por WhatsApp según objetivo y
              tratamiento.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              {[
                "Estética facial y corporal",
                "Atención personalizada",
                "Valores según objetivo y tratamiento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.estetica}
                variant="outline"
                className="w-full"
              >
                Consultar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
