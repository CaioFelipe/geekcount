interface MonogramProps {
  size?: number
  className?: string
}

/**
 * Modular SVG recreation of the official UNEGEEK XP 2x2 block monogram (UG / XP).
 */
export function UnegeekMonogram({ size = 40, className = '' }: MonogramProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Monograma UNEGEEK XP"
    >
      {/* Badge Base */}
      <g id="monogram-frame">
        <rect
          x="2.5"
          y="2.5"
          width="59"
          height="59"
          rx="13"
          fill="#F8FAFC"
          stroke="#181230"
          strokeWidth="3.5"
        />
      </g>

      {/* Top-Left: U in Neon Acid Lime (#B6FF00) */}
      <g id="monogram-letter-u">
        <path
          d="M11.5 11H18.5V22.5C18.5 24.4 19.6 25.5 21.2 25.5C22.8 25.5 23.9 24.4 23.9 22.5V11H30.9V22.6C30.9 28.4 26.8 31.6 21.2 31.6C15.6 31.6 11.5 28.4 11.5 22.6V11Z"
          fill="#B6FF00"
          stroke="#181230"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </g>

      {/* Top-Right: G in White with dark outline */}
      <g id="monogram-letter-g">
        <path
          d="M52.5 17.5C51.1 13.6 47.6 11 43.2 11C37.2 11 33.4 15.2 33.4 21.3C33.4 27.4 37.2 31.6 43.2 31.6C48.5 31.6 52.5 28.2 52.8 22.8V20.4H43.1V25.2H46.2C45.7 26.4 44.6 27 43.3 27C40.7 27 39.4 24.8 39.4 21.3C39.4 17.8 40.8 15.6 43.3 15.6C44.9 15.6 46 16.4 46.5 17.8L52.5 17.5Z"
          fill="#F8FAFC"
          stroke="#181230"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      </g>

      {/* Bottom-Left: X in White with dark outline */}
      <g id="monogram-letter-x">
        <path
          d="M11.5 34.5H18.9L21.5 39.1L24.1 34.5H31.3L25.6 43.7L31.7 53H24.2L21.3 48L18.4 53H11.1L17.2 43.7L11.5 34.5Z"
          fill="#F8FAFC"
          stroke="#181230"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      </g>

      {/* Bottom-Right: P inside Electric Violet (#7C3AED) tile */}
      <g id="monogram-tile-p">
        <rect
          x="33.5"
          y="34"
          width="20"
          height="19.5"
          rx="4.5"
          fill="#7C3AED"
          stroke="#181230"
          strokeWidth="2.2"
        />
        <path
          d="M38.2 37.5H44.6C47.7 37.5 49.7 39.3 49.7 42.2C49.7 45.1 47.7 46.9 44.6 46.9H42.2V50.2H38.2V37.5ZM42.2 43.7H44.2C45.3 43.7 46 43.1 46 42.2C46 41.3 45.3 40.7 44.2 40.7H42.2V43.7Z"
          fill="#F8FAFC"
        />
      </g>
    </svg>
  )
}

interface PixelCornerProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  color?: string
  className?: string
}

/**
 * 8-bit pixel-art stepped corner ornament inspired by @unegeekxp story highlights.
 */
export function PixelCornerOrnament({
  position,
  color = '#B6FF00',
  className = '',
}: PixelCornerProps) {
  const rotationMap: Record<PixelCornerProps['position'], string> = {
    'top-left': 'rotate(0)',
    'top-right': 'scale(-1, 1)',
    'bottom-left': 'scale(1, -1)',
    'bottom-right': 'scale(-1, -1)',
  }

  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      <g transform={`translate(22 22) ${rotationMap[position]} translate(-22 -22)`}>
        <rect x="0" y="0" width="24" height="5" fill={color} />
        <rect x="0" y="5" width="5" height="19" fill={color} />
        <rect x="9" y="9" width="10" height="5" fill={color} />
        <rect x="9" y="14" width="5" height="6" fill={color} />
        <rect x="28" y="0" width="5" height="5" fill={color} opacity="0.8" />
        <rect x="0" y="28" width="5" height="5" fill={color} opacity="0.8" />
      </g>
    </svg>
  )
}

interface LightningBackdropProps {
  side: 'left' | 'right'
  className?: string
}

/**
 * Subtle geometric lightning silhouette flanking the Arcade Cyber-Pop hero edges.
 */
export function LightningBackdropAccent({ side, className = '' }: LightningBackdropProps) {
  const isRight = side === 'right'
  return (
    <svg
      width="96"
      height="156"
      viewBox="0 0 96 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d={
          isRight
            ? 'M62 4L14 82H46L30 152L84 68H50L62 4Z'
            : 'M34 4L82 82H50L66 152L12 68H46L34 4Z'
        }
        fill="#7C3AED"
        fillOpacity="0.14"
        stroke="#7C3AED"
        strokeOpacity="0.32"
        strokeWidth="2"
      />
    </svg>
  )
}
