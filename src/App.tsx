import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroCountdown } from './components/HeroCountdown'
import { HighlightsSection } from './components/HighlightsSection'
import { InstagramCtaSection } from './components/InstagramCtaSection'

export function App() {
  return (
    <div className="min-h-screen bg-[#07050E] text-[#F8FAFC] antialiased">
      <Header />
      <main>
        <HeroCountdown />
        <HighlightsSection />
        <InstagramCtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
