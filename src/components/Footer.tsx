import { INSTAGRAM_URL } from './Header'
import { UnegeekMonogram } from './UnegeekBrandParts'

/**
 * Institutional footer identifying UNEGEEK XP as a UNEMAT Campus Sinop extension project.
 */
export function Footer() {
  return (
    <footer className="border-t border-[#7C3AED]/45 bg-[#0A0714] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3.5 sm:items-center">
          <UnegeekMonogram size={34} className="mt-0.5 shrink-0 sm:mt-0" />
          <div>
            <p className="font-display text-sm font-bold tracking-wide uppercase text-[#F8FAFC]">
              UNEGEEK XP <span className="text-[#F8FAFC]/50">·</span>{' '}
              <span className="font-semibold text-[#F8FAFC]/85">
                Projeto de Extensão da UNEMAT — Campus Sinop
              </span>
            </p>
            <p className="mt-1 text-xs text-[#F8FAFC]/65">
              Geek Friends · 5 de dezembro de 2026 às 16h
            </p>
          </div>
        </div>

        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#F8FAFC]/75 sm:text-sm"
        >
          <a href="#contagem" className="transition-colors hover:text-[#B6FF00]">
            Contagem
          </a>
          <a href="#destaques" className="transition-colors hover:text-[#B6FF00]">
            Destaques
          </a>
          <a href="#evento" className="transition-colors hover:text-[#B6FF00]">
            O Evento
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#B6FF00] transition-colors hover:text-[#22D3EE]"
          >
            Instagram @unegeekxp
          </a>
        </nav>
      </div>
    </footer>
  )
}
