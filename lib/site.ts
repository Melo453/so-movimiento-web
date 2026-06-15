
export const WHATSAPP_NUMBER = "5493515143771"

export const WHATSAPP_MESSAGES = {
  reservar:
    "Hola Sonia, quiero consultar por un turno en S.O. Movimiento en Consciencia",
  consultar:
    "Hola Sonia, quería consultar disponibilidad para las clases de movimiento y TPA.",
  estetica:
    "Hola Sonia, quería consultar por los tratamientos de estética integral.",
} as const

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const CONTACT = {
  email: "soniaosinaga@hotmail.com.ar",
  instagram: { handle: "@Soniaisinaga_", url: "https://instagram.com/soniaosinaga_" },
  tiktok: { handle: "@soniaosinaga545", url: "https://tiktok.com/@soniaosinaga545" },
  youtube: { handle: "@soniaosinga2160", url: "https://youtube.com/@soniaosinaga2160" },
  location: "Córdoba,Argentina - Zona Norte, Barrio Liceo",
}

export const BUSINESS_NAME = "S.O. Movimiento en Consciencia"
