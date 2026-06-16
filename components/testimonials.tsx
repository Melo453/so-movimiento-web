import { Quote } from "lucide-react"


const testimonials = [
  {
    quote:
      "Me empecé a mover con más libertad y a prestar atención a cosas de mi postura que antes ni registraba.",
    name: "Mariana R.",
    detail: "TPA y reeducación postural",
  },
  {
    quote:
      "Me gustó sentir que el trabajo era realmente personalizado. No era hacer ejercicios por hacer, sino entender qué necesitaba mi cuerpo.",
    name: "Laura G.",
    detail: "Entrenamiento personalizado",
  },
  {
    quote:
      "Fui por un masaje de relajación y salí con una sensación de calma y liviandad que necesitaba hace tiempo.",
    name: "Claudia M.",
    detail: "Masajes y estética integral",
  },
]

export function Testimonials() {
  return (
    <section className="bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "lab(40 79.47 -100.39)" }}>
            Experiencias
          </span>

          <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Lo que se vive en el espacio
          </h2>

          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Distintas formas de acompañar procesos personales: postura,
            entrenamiento y estética integral.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-3xl border border-border/70 bg-background p-7"
            >
              <Quote className="size-7 text-accent" />

              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-6 border-t border-border/70 pt-4">
                <p className="font-heading text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}