import { Mail } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WHATSAPP_MESSAGES, CONTACT } from "@/lib/site"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.2v12.93a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .73-5.07V8.1a5.79 5.79 0 0 0-.73-.05A5.79 5.79 0 1 0 15.56 14V8.4a7.5 7.5 0 0 0 4.36 1.4V6.6a4.28 4.28 0 0 1-3.32-.78z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.57V8.43L15.82 12z" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contacto" className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
            Reservas y consultas
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Reservá tu turno o consultá disponibilidad
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/80">
            Contame qué te gustaría trabajar —postura, TPA o estética integral— y
            buscamos juntas el mejor camino para vos.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton message={WHATSAPP_MESSAGES.reservar}>
              Reservar turno por WhatsApp
            </WhatsAppButton>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Mail className="size-4" />
              Enviar un email
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 border-t border-primary-foreground/15 pt-8">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {CONTACT.email}
            </a>
            <div className="flex items-center gap-3">
              <a
                href={CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${CONTACT.instagram.handle}`}
                className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={CONTACT.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`TikTok ${CONTACT.tiktok.handle}`}
                className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
              >
                <TikTokIcon className="size-4" />
              </a>
              <a
                href={CONTACT.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`YouTube ${CONTACT.youtube.handle}`}
                className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
              >
                <YoutubeIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
