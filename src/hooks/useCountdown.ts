import { useEffect, useState } from 'react'

export const EVENT_TARGET_ISO = '2026-12-05T16:00:00-04:00'

export interface CountdownValues {
  days: string
  hours: string
  minutes: string
  seconds: string
  isFinished: boolean
}

function padTwoDigits(value: number): string {
  return String(Math.max(0, value)).padStart(2, '0')
}

function calculateRemaining(targetTimestamp: number): CountdownValues {
  const diffMs = targetTimestamp - Date.now()

  if (diffMs <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      isFinished: true,
    }
  }

  const totalSeconds = Math.floor(diffMs / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    days: padTwoDigits(days),
    hours: padTwoDigits(hours),
    minutes: padTwoDigits(minutes),
    seconds: padTwoDigits(seconds),
    isFinished: false,
  }
}

/**
 * Computes live countdown units synced to America/Cuiaba (UTC-4) for Geek Friends.
 */
export function useCountdown(targetIso: string = EVENT_TARGET_ISO): CountdownValues {
  const targetTimestamp = new Date(targetIso).getTime()
  const [remaining, setRemaining] = useState<CountdownValues>(() =>
    calculateRemaining(targetTimestamp),
  )

  useEffect(() => {
    setRemaining(calculateRemaining(targetTimestamp))

    const intervalId = window.setInterval(() => {
      setRemaining(calculateRemaining(targetTimestamp))
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [targetTimestamp])

  return remaining
}
