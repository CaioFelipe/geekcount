import { Instagram } from 'lucide-react'
import { UnegeekMonogram } from './UnegeekBrandParts'

export const INSTAGRAM_URL = 'https://www.instagram.com/unegeekxp/'

/**
 * Sticky top navigation bar matching the Arcade Cyber-Pop aesthetic.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-30 h-16 w-full border-b border-[#7C3AED]/60 bg-[#120D21]/92 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#contagem"
          className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B6FF00] rounded-lg"
        >
          <UnegeekMonogram size={38} className="shrink-0" />
          <span className="font-display text-lg font-bold tracking-[0.04em] uppercase text-[#F8FAFC] sm:text-xl">
            UNEGEEK <span className="text-[#B6FF00]">XP</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          <a
            href="#contagem"
            className="text-sm font-semibold text-[#F8FAFC] transition-colors hover:text-[#B6FF00]"
          >
            Contagem
          </a>
          <a
            href="#destaques"
            className="text-sm font-medium text-[#F8FAFC]/75 transition-colors hover:text-[#B6FF00]"
          >
            Destaques
          </a>
          <a
            href="#evento"
            className="text-sm font-medium text-[#F8FAFC]/75 transition-colors hover:text-[#B6FF00]"
          >
            O Evento
          </a>
        </nav>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-[#07050E] bg-[#B6FF00] px-3.5 py-2 text-xs font-bold text-[#07050E] shadow-[3px_3px_0px_#7C3AED] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#7C3AED] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none sm:px-4 sm:text-sm"
        >
          <Instagram className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden="true" />
          <span>Seguir @unegeekxp</span>
        </a>
      </div>
    </header>
  )
}
