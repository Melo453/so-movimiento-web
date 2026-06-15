const faqs = [
  {
    question: "¿Necesito experiencia previa para empezar?",
    answer:
      "No. Cada sesión se adapta a tu cuerpo, tu historia y tus posibilidades. La idea es acompañarte desde donde estás, sin exigencias ni rutinas generales.",
  },
  {
    question: "¿Qué es la Terapia Postural Activa?",
    answer:
      "Es un trabajo de reeducación postural que invita a escuchar el cuerpo, reconocer hábitos, fortalecer músculos profundos de sostén y recuperar nuevas posibilidades de movimiento.",
  },
  {
    question: "¿Las sesiones son individuales?",
    answer:
      "Sí. El trabajo es personalizado para poder observar mejor tus necesidades, adaptar cada propuesta y acompañar tu proceso de forma más cuidada.",
  },
  {
    question: "¿También se realizan tratamientos estéticos y masajes?",
    answer:
      "Sí. Además del trabajo postural y el entrenamiento, el espacio ofrece masajes de relajación, tratamientos faciales, corporales y estética integral.",
  },
  {
    question: "¿Dónde queda el espacio?",
    answer:
      "El espacio está en Córdoba Capital, Zona Norte / Barrio Liceo. La dirección exacta se confirma al reservar el turno por WhatsApp.",
  },
  {
    question: "¿Cómo puedo reservar un turno?",
    answer:
      "Podés escribir por WhatsApp para consultar disponibilidad, contar qué estás buscando y coordinar el día y horario más conveniente.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent-foreground">
            Preguntas frecuentes
          </span>

          <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Dudas comunes antes de empezar
          </h2>

          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Algunas respuestas simples para conocer mejor el espacio, el tipo de
            acompañamiento y la forma de reservar.
          </p>
        </div>

        <div className="mt-10 divide-y divide-border/70 rounded-3xl border border-border/70 bg-background">
          {faqs.map((faq) => (
            <div key={faq.question} className="p-6">
              <h3 className="font-heading text-lg font-medium text-foreground">
                {faq.question}
              </h3>

              <p className="mt-3 leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}