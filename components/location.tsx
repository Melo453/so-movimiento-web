import { MapPin } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WHATSAPP_MESSAGES, CONTACT } from "@/lib/site"

export function Location() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-10 rounded-[2rem] border border-border/70 bg-card p-6 sm:p-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "lab(40 79.47 -100.39)" }}>
              Ubicación
            </span>

            <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              Dónde nos encontramos
            </h2>

            <div className="mt-6 flex items-center gap-3 text-foreground">
              <span className="flex size-10 items-center justify-center rounded-full bg-accent/25 text-accent-foreground">
                <MapPin className="size-5" />
              </span>
              <p className="text-base">{CONTACT.location}</p>
            </div>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              La dirección exacta se confirma al reservar tu turno. Escribime por
              WhatsApp y te paso todos los detalles para llegar.
            </p>

            <div className="mt-8">
              <WhatsAppButton message={WHATSAPP_MESSAGES.consultar} variant="outline">
                Consultar ubicación
              </WhatsAppButton>
            </div>
          </div>

          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-secondary/60">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27258.66433101522!2d-64.19877755649219!3d-31.34978766629466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299c11c6aa00f%3A0xf9528a83724c892d!2sParque%20Liceo%201A%20Secc.%2C%20X5019%20C%C3%B3rdoba%2C%20C%C3%B3rdoba%20Province%2C%20Argentina!5e0!3m2!1sen!2sdk!4v1781520546377!5m2!1sen!2sdk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Córdoba Zona Norte - Barrio Liceo"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}