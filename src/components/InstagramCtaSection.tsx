import { ArrowUpRight, Calendar, Instagram, MapPin } from 'lucide-react'
import { INSTAGRAM_URL } from './Header'
import { PixelCornerOrnament, UnegeekMonogram } from './UnegeekBrandParts'

/**
 * Official Instagram redirection block replacing email signup from the reference layout.
 */
export function InstagramCtaSection() {
  return (
    <section
      id="evento"
      className="relative isolate border-t border-[#7C3AED]/45 bg-[#07050E] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border-2 border-[#F8FAFC] bg-[#120D21] p-7 pb-14 shadow-[8px_8px_0px_#7C3AED] sm:p-12 sm:pb-14">
        <PixelCornerOrnament
          position="top-right"
          color="#22D3EE"
          className="pointer-events-none absolute right-3.5 top-3.5 h-7 w-7 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
        />
        <PixelCornerOrnament
          position="bottom-left"
          color="#B6FF00"
          className="pointer-events-none absolute bottom-3.5 left-3.5 h-7 w-7 sm:bottom-4 sm:left-4 sm:h-10 sm:w-10"
        />

        <div className="relative z-10 flex flex-col items-start">
          <div className="flex items-center gap-4">
            <UnegeekMonogram size={56} className="shrink-0" />
            <div>
              <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-[#22D3EE]">
                CANAL OFICIAL DO EVENTO
              </p>
              <h2 className="font-display arcade-headline-shadow mt-1 text-2xl font-bold uppercase leading-tight tracking-[-0.02em] text-[#F8FAFC] sm:text-4xl">
                ACOMPANHE TUDO NO INSTAGRAM
              </h2>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#F8FAFC]/80 sm:text-base">
            A programação completa, atrações confirmadas, horários e avisos oficiais do Geek
            Friends são publicados diretamente no perfil @unegeekxp.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[#F8FAFC]/90">
            <div className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#B6FF00]" strokeWidth={2.2} aria-hidden="true" />
              <span>5 de dezembro de 2026 às 16h</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#22D3EE]" strokeWidth={2.2} aria-hidden="true" />
              <span>UNEMAT — Campus Sinop</span>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border-2 border-[#07050E] bg-[#B6FF00] px-5 py-3.5 font-display text-xs font-bold tracking-wide uppercase text-[#07050E] shadow-[5px_5px_0px_#7C3AED] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#7C3AED] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none sm:gap-3 sm:px-6 sm:py-4 sm:text-base"
            >
              <Instagram className="h-5 w-5 shrink-0" strokeWidth={2.25} aria-hidden="true" />
              <span>Abrir @unegeekxp no Instagram</span>
              <ArrowUpRight className="h-5 w-5 shrink-0" strokeWidth={2.25} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
