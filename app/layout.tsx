import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat, Dancing_Script } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})
const dancingScript = Dancing_Script({
  variable: '--font-dancing',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'S.O. Movimiento en Consciencia | Entrenamiento postural en Córdoba',
  description:
    'Entrenamiento postural y Terapia Postural Activa (TPA) en Córdoba Zona Norte. Trabajo personalizado de postura, fuerza, flexibilidad y equilibrio, además de estética integral con masajes y tratamientos faciales y corporales.',
  icons: {
    icon: [
      {
        url: '/logo_SO_.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo_SO_.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo_SO_.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo_SO_.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F4EDE5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`light ${montserrat.variable} ${playfair.variable} ${dancingScript.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
