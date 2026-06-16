import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="bg-card/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-border/70 bg-secondary">
            <Image
              src="/espacio_tpa3.jpeg"
              alt="Espacio de trabajo de S.O. Movimiento en Consciencia"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "lab(40 79.47 -100.39)" }}>
            El espacio
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            El cuerpo también habla
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Muchas veces el dolor aparece como una señal: una forma del cuerpo
              de pedir atención después de años de tensiones, hábitos,
              adaptaciones y compensaciones. El trabajo postural abre un espacio
              de escucha, cuidado y reeducación para volver a moverte con más
              confianza.
            </p>
            <p>
              En S.O. Movimiento en Consciencia cada sesión es personalizada y se
              ajusta a tu historia, tu ritmo y tus posibilidades. No hay rutinas
              prearmadas: hay un proceso personal, pensado para tu cuerpo.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Sesiones individuales",
              "Sesiones grupales",
              "Reeducación postural",
              "Ambiente calmo y profesional",
              "Enfoque atento y humano",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}