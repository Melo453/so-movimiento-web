import { ImageIcon } from "lucide-react"


export function PhotoPlaceholder({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-secondary/60 p-6 text-center ${className ?? ""}`}
      role="img"
      aria-label={label}
    >
      <span className="flex size-12 items-center justify-center rounded-full bg-background/70 text-primary">
        <ImageIcon className="size-5" />
      </span>
      <span className="max-w-[18rem] text-pretty font-sans text-xs leading-relaxed text-secondary-foreground/80">
        {label}
      </span>
    </div>
  )
}
