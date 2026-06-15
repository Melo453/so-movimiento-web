import { Activity, Sparkles, UserRound } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WHATSAPP_MESSAGES } from "@/lib/site"

const services = [
  {
    icon: UserRound,
    title: "Entrenamiento personalizado",
    description:
      "Sesiones individuales para trabajar postura, movilidad, fuerza profunda, flexibilidad, equilibrio y coordinación, respetando tu nivel y tu historia.",
    items: [] as string[],
    message: WHATSAPP_MESSAGES.consultar,
    cta: "Consultar disponibilidad",
  },
  {
    icon: Activity,
    title: "TPA — Terapia Postural Activa",
    description:
      "TPA es una invitación a escucharte, comprender tu cuerpo y recuperar posibilidades de movimiento. A través de movimientos guiados, cuidados y conscientes, trabajamos la postura, la fuerza profunda, la flexibilidad, la respiración y la propiocepción para construir un movimiento más sano, estable y funcional.",
    items: [] as string[],
    message: WHATSAPP_MESSAGES.consultar,
    cta: "Consultar disponibilidad",
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Estética integral",
    description:
      "Tratamientos faciales y corporales para acompañar tu bienestar y el cuidado de tu cuerpo:",
    items: [
      "Masajes de relajación y armonización",
      "Masaje con piedras calientes",
      "Estética facial: crio radiofrecuencia, pulsos magnéticos, radiofrax, limpiezas, microneedling, masajes y drenajes faciales, tratamientos de hidratación",
      "Estética corporal: flacidez, celulitis, drenaje corporal, aparatología y maderoterapia",
    ],
    message: WHATSAPP_MESSAGES.estetica,
    cta: "Consultar por WhatsApp",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent-foreground">
            Servicios
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Tres formas de trabajar tu cuerpo
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Desde el entrenamiento postural y la TPA hasta la estética integral.
            Elegí por dónde empezar; cada sesión es individual.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  service.featured
                    ? "border-accent/60 bg-accent/15"
                    : "border-border/70 bg-card"
                }`}
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-heading text-xl text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                {service.items.length > 0 && (
                  <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {service.items.length === 0 && <div className="flex-1" />}
                <div className="mt-6">
                  <WhatsAppButton
                    message={service.message}
                    variant="outline"
                    className="w-full px-5 py-2.5 text-[13px]"
                  >
                    {service.cta}
                  </WhatsAppButton>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
