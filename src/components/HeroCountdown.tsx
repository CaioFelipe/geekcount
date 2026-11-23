import { Fragment, useState } from 'react'
import { Instagram, Pause, Play } from 'lucide-react'
import { useCountdown } from '../hooks/useCountdown'
import { INSTAGRAM_URL } from './Header'
import { LightningBackdropAccent, PixelCornerOrnament } from './UnegeekBrandParts'

interface CountdownUnit {
  id: 'days' | 'hours' | 'minutes' | 'seconds'
  label: string
  value: string
  shadowClass: string
}

/**
 * Full-viewport Hero section with 4-unit live countdown and Arcade Cyber-Pop atmosphere.
 */
export function HeroCountdown() {
  const { days, hours, minutes, seconds, isFinished } = useCountdown()
  const [isGridPaused, setIsGridPaused] = useState(false)

  const units: CountdownUnit[] = [
    {
      id: 'days',
      label: 'DIAS',
      value: days,
      shadowClass: 'shadow-[5px_5px_0px_#B6FF00] sm:shadow-[6px_6px_0px_#B6FF00]',
    },
    {
      id: 'hours',
      label: 'HORAS',
      value: hours,
      shadowClass: 'shadow-[5px_5px_0px_#B6FF00] sm:shadow-[6px_6px_0px_#B6FF00]',
    },
    {
      id: 'minutes',
      label: 'MIN',
      value: minutes,
      shadowClass: 'shadow-[5px_5px_0px_#7C3AED] sm:shadow-[6px_6px_0px_#7C3AED]',
    },
    {
      id: 'seconds',
      label: 'SEG',
      value: seconds,
      shadowClass: 'shadow-[5px_5px_0px_#7C3AED] sm:shadow-[6px_6px_0px_#7C3AED]',
    },
  ]

  return (
    <section
      id="contagem"
      className="relative isolate flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-hidden bg-[#07050E] px-4 pt-8 pb-20 sm:px-6 sm:py-12"
    >
      {/* Atmosphere & Retro Perspective Grid Layer (z-0, never -z-10) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 34%, rgba(124, 58, 237, 0.24) 0%, rgba(18, 13, 33, 0.55) 42%, rgba(7, 5, 14, 1) 78%)',
          }}
        />

        {/* Perspective Grid Floor */}
        <div className="arcade-grid-wrapper absolute inset-x-0 bottom-0 h-[33%] sm:h-[44%] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/85 to-transparent" />
          <div
            className={`arcade-grid-plane ${isGridPaused ? 'grid-paused' : ''}`}
          />
        </div>

        {/* Flanking Lightning Bolts */}
        <LightningBackdropAccent
          side="left"
          className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 opacity-85"
        />
        <LightningBackdropAccent
          side="right"
          className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 opacity-85"
        />

        {/* 8-bit Pixel Corner Ornaments */}
        <PixelCornerOrnament
          position="top-left"
          color="#B6FF00"
          className="absolute left-3 top-3 h-8 w-8 sm:left-5 sm:top-5 sm:h-11 sm:w-11"
        />
        <PixelCornerOrnament
          position="top-right"
          color="#22D3EE"
          className="absolute right-3 top-3 h-8 w-8 sm:right-5 sm:top-5 sm:h-11 sm:w-11"
        />
        <PixelCornerOrnament
          position="bottom-left"
          color="#B6FF00"
          className="hidden sm:block absolute bottom-5 left-5 h-11 w-11"
        />
        <PixelCornerOrnament
          position="bottom-right"
          color="#22D3EE"
          className="absolute bottom-3 right-3 h-8 w-8 sm:bottom-5 sm:right-5 sm:h-11 sm:w-11"
        />
      </div>

      {/* Main Content Foreground */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <h1 className="font-display arcade-headline-shadow text-3xl font-bold uppercase leading-[1.06] tracking-[-0.02em] text-[#F8FAFC] sm:text-5xl lg:text-[3.5rem]">
          {isFinished ? (
            <>
              O GEEK FRIENDS
              <br />
              COMEÇOU
            </>
          ) : (
            <>
              CONTAGEM REGRESSIVA
              <br />
              PARA O GEEK FRIENDS
            </>
          )}
        </h1>

        <p className="mt-3.5 text-xs font-bold tracking-[0.14em] uppercase sm:mt-4 sm:text-base">
          <span className="text-[#22D3EE]">5 DE DEZEMBRO ÀS 16H</span>
          <span className="mx-2 text-[#F8FAFC]/45" aria-hidden="true">
            ·
          </span>
          <span className="text-[#F8FAFC]">UNEMAT SINOP</span>
        </p>

        {/* 4-Unit Arcade Countdown */}
        <div
          className="mt-7 grid w-full max-w-[300px] grid-cols-2 gap-4 sm:mt-9 sm:flex sm:w-auto sm:max-w-none sm:items-start sm:justify-center sm:gap-3.5 md:gap-5"
          role="timer"
          aria-live="off"
          aria-label="Tempo restante para o Geek Friends"
        >
          {units.map((unit, index) => (
            <Fragment key={unit.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-28 w-full items-center justify-center rounded-xl border-2 border-[#F8FAFC] bg-[#0D0919]/95 px-3 sm:h-32 sm:w-32 md:h-36 md:w-36 ${unit.shadowClass}`}
                >
                  <span className="font-mono text-5xl font-bold tabular-nums tracking-tight text-[#F8FAFC] sm:text-6xl md:text-[4.25rem]">
                    {unit.value}
                  </span>
                </div>
                <span className="mt-3 font-display text-xs font-bold tracking-[0.22em] uppercase text-[#F8FAFC] sm:mt-3.5 sm:text-sm">
                  {unit.label}
                </span>
              </div>

              {index < units.length - 1 && (
                <div
                  className="hidden h-32 items-center justify-center sm:flex md:h-36"
                  aria-hidden="true"
                >
                  <span className="font-mono text-4xl font-bold text-[#B6FF00] md:text-5xl">
                    :
                  </span>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Primary Conversion CTA (Direct to Instagram, No Email Form) */}
        <div className="mt-8 sm:mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border-2 border-[#07050E] bg-[#B6FF00] px-6 py-3.5 text-left text-[#07050E] shadow-[5px_5px_0px_#7C3AED] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#7C3AED] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none sm:px-8 sm:py-4"
          >
            <Instagram className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" strokeWidth={2.25} aria-hidden="true" />
            <span className="flex flex-col">
              <span className="font-display text-sm font-bold leading-tight tracking-wide uppercase sm:text-base">
                ACOMPANHAR NO INSTAGRAM
              </span>
              <span className="text-xs font-bold leading-tight text-[#07050E]/85 sm:text-sm">
                @unegeekxp
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Motion Pause Control (Bottom-Left) */}
      <button
        type="button"
        onClick={() => setIsGridPaused((prev) => !prev)}
        aria-pressed={isGridPaused}
        aria-label={isGridPaused ? 'Retomar animação de fundo' : 'Pausar animação de fundo'}
        title={isGridPaused ? 'Retomar animação de fundo' : 'Pausar animação de fundo'}
        className="absolute bottom-4 left-4 z-20 inline-flex cursor-pointer items-center gap-2 rounded-xl border-2 border-[#F8FAFC]/80 bg-[#120D21]/90 px-3 py-2 text-xs font-semibold text-[#B6FF00] shadow-[3px_3px_0px_#7C3AED] transition-colors hover:border-[#B6FF00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B6FF00] sm:bottom-6 sm:left-16"
      >
        {isGridPaused ? (
          <Play className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
        ) : (
          <Pause className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
        )}
        <span className="hidden sm:inline">{isGridPaused ? 'Retomar' : 'Pausar'}</span>
      </button>
    </section>
  )
}
