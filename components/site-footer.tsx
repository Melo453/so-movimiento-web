import { Mail } from "lucide-react"
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"
import { BUSINESS_NAME, CONTACT } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background py-12">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-heading text-lg font-semibold text-foreground">
              {BUSINESS_NAME}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Movimiento consciente, trabajo postural y entrenamiento
              personalizado para conectar con tu cuerpo y encontrar tu mejor
              versión.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Contacto
            </p>

            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4" />
              {CONTACT.email}
            </a>

            <div className="mt-2 flex items-center gap-3">
              <a
                href={CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <FaInstagram className="size-5" />
              </a>

              <a
                href={CONTACT.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <FaTiktok className="size-5" />
              </a>

              <a
                href={CONTACT.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <FaYoutube className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. Todos los
            derechos reservados.
          </p>
          <p>{CONTACT.location}</p>
        </div>
      </div>
    </footer>
  )
}