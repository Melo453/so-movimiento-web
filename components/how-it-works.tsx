import { WhatsAppButton } from "@/components/whatsapp-button"
import { WHATSAPP_MESSAGES } from "@/lib/site"

const steps = [
  {
    number: "01",
    title: "Consultás por WhatsApp",
    description:
      "Escribime y me contás qué buscás. Resolvemos tus dudas sin compromiso.",
  },
  {
    number: "02",
    title: "Conocemos tu cuerpo",
    description:
      "Observo tu postura y tus apoyos para entender desde dónde partimos.",
  },
  {
    number: "03",
    title: "Diseñamos tu proceso",
    description:
      "Definimos las sesiones según tu historia, tu nivel y tus objetivos.",
  },
  {
    number: "04",
    title: "Avanzamos juntas",
    description:
      "Acompaño tu evolución y vamos ajustando el trabajo a medida que progresás.",
  },
]

export function HowItWorks() {
  return (
    <section id="proceso" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent-foreground">
            Cómo funciona
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Empezar es simple
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-border/70 bg-card p-6"
            >
              <span className="font-heading text-3xl text-accent">
                {step.number}
              </span>
              <h3 className="mt-4 font-heading text-lg text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <WhatsAppButton message={WHATSAPP_MESSAGES.reservar}>
            Reservar turno por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
