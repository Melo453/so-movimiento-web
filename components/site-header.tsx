"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WHATSAPP_MESSAGES } from "@/lib/site"

const navItems = [
  { label: "Sobre el espacio", href: "#sobre" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
      onScroll()
      window.addEventListener("scroll", onScroll, { passive: true })
      return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "pointer-events-auto fixed inset-x-0 top-0 z-[999998] border-b bg-background/95 backdrop-blur-md transition-all duration-300",
        scrolled
          ? "border-border/60 shadow-sm"
          : "border-border/40 shadow-none",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
            S.O.
          </span>
          <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Movimiento en Consciencia
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.reservar}
            className="px-5 py-2.5 text-[13px]"
          >
            Reservar turno
          </WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => {
            setOpen((v) => !v)
          }}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="pointer-events-auto relative z-[999999] inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-[9998] border-t border-border/60 bg-background shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-base text-foreground/90 transition-colors hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2">
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.reservar}
                className="w-full"
              >
                Reservar turno por WhatsApp
              </WhatsAppButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}