import Image from "next/image"

const photos = [
  {
    src: "/sonia_tpa.jpeg",
    alt: "Práctica corporal en S.O. Movimiento en Consciencia",
    span: "lg:col-span-2 lg:row-span-2",
    position: "50% 50%",
  },
  {
    src: "/espacio_tpa2.jpeg",
    alt: "Sonia acompañando una sesión personalizada",
    span: "",
    position: "50% 40%",
  },
  {
    src: "/espacio_tpa.jpeg",
    alt: "Sesión de entrenamiento postural",
    span: "",
    position: "35% 35%",
  },
  {
    src: "/espacio-trabajo.jpeg",
    alt: "Trabajo corporal y movimiento consciente",
    span: "lg:col-span-2",
    position: "50% 30%",
  },
]

export function Gallery() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "lab(40 79.47 -100.39)" }}>
            Galería
          </span>

          <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            El espacio en imágenes
          </h2>

          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Imágenes del espacio, las sesiones y el trabajo corporal que se
            realiza en S.O. Movimiento en Consciencia.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-2xl border border-border/70 bg-secondary ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                style={{ objectPosition: photo.position }}
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}