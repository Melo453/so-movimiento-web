import {
  Dumbbell,
  HeartHandshake,
  PersonStanding,
  Scale,
  Sparkle,
  StretchHorizontal,
} from "lucide-react"

const benefits = [
  {
    icon: PersonStanding,
    title: "Mejor postura",
    description: "Reeducá la forma en que tu cuerpo se sostiene en el día a día.",
  },
  {
    icon: Dumbbell,
    title: "Fuerza profunda",
    description: "Activá la musculatura de sostén que sostiene tus movimientos.",
  },
  {
    icon: StretchHorizontal,
    title: "Flexibilidad y movilidad",
    description: "Liberá tensiones y ampliá tu rango articular con cuidado.",
  },
  {
    icon: Scale,
    title: "Equilibrio y coordinación",
    description: "Ganá estabilidad y control en cada gesto cotidiano.",
  },
  {
    icon: HeartHandshake,
    title: "Respiración y propiocepción",
    description: "Afiná la escucha corporal y la consciencia de tus apoyos.",
  },
  {
    icon: Sparkle,
    title: "Confianza al moverte",
    description: "Recuperá presencia, autonomía y seguridad en tu cuerpo.",
  },
]

export function Benefits() {
  return (
    <section className="bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "lab(40 79.47 -100.39)" }}>
            Beneficios
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Lo que vas a notar en tu cuerpo
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="flex gap-4 rounded-2xl border border-border/70 bg-background p-6"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/25 text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
