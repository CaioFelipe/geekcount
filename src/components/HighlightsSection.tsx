import type { LucideIcon } from 'lucide-react'
import { Crown, Gamepad2, Swords, Tv } from 'lucide-react'

interface HighlightPillar {
  id: string
  title: string
  description: string
  icon: LucideIcon
  accentHex: string
  iconColorHex: string
  shadowClass: string
}

const PILLARS: HighlightPillar[] = [
  {
    id: 'cosplay',
    title: 'Cosplay',
    description: 'Desfile e encontro aberto para cosplayers e fãs de personagens.',
    icon: Crown,
    accentHex: '#22D3EE',
    iconColorHex: '#07050E',
    shadowClass: 'shadow-[5px_5px_0px_#22D3EE]',
  },
  {
    id: 'anime',
    title: 'Anime',
    description: 'Espaço dedicado à cultura pop japonesa, trilhas e referências.',
    icon: Tv,
    accentHex: '#7C3AED',
    iconColorHex: '#F8FAFC',
    shadowClass: 'shadow-[5px_5px_0px_#7C3AED]',
  },
  {
    id: 'games',
    title: 'Games',
    description: 'Estações para jogar, desafiar amigos e curtir clássicos e atuais.',
    icon: Gamepad2,
    accentHex: '#B6FF00',
    iconColorHex: '#07050E',
    shadowClass: 'shadow-[5px_5px_0px_#B6FF00]',
  },
  {
    id: 'batalhas',
    title: 'Batalhas',
    description: 'Disputas e torneios ao vivo com premiação e torcida na arena.',
    icon: Swords,
    accentHex: '#22D3EE',
    iconColorHex: '#07050E',
    shadowClass: 'shadow-[5px_5px_0px_#22D3EE]',
  },
]

/**
 * Below-the-fold showcase of the 4 official Geek Friends event pillars.
 */
export function HighlightsSection() {
  return (
    <section
      id="destaques"
      className="relative isolate border-t border-[#7C3AED]/45 bg-[#0A0714] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold tracking-[0.22em] uppercase text-[#B6FF00]">
            PROGRAMAÇÃO GEEK FRIENDS
          </p>
          <h2 className="font-display arcade-headline-shadow mt-3 text-3xl font-bold uppercase tracking-[-0.02em] text-[#F8FAFC] sm:text-4xl">
            O QUE TE ESPERA NO EVENTO
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#F8FAFC]/75 sm:text-base">
            Encontro cultural promovido pelo UNEGEEK XP na UNEMAT Campus Sinop reunindo
            comunidade acadêmica e fãs de cultura pop.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.id}
                className={`flex flex-col rounded-xl border-2 border-[#F8FAFC]/85 bg-[#120D21] p-6 transition-transform duration-200 hover:-translate-y-0.5 ${pillar.shadowClass}`}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-[#07050E]"
                  style={{ backgroundColor: pillar.accentHex }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: pillar.iconColorHex }}
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-display mt-5 text-xl font-bold uppercase tracking-wide text-[#F8FAFC]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#F8FAFC]/75">
                  {pillar.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
