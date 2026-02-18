import Header from '../components/layout/Header.jsx'
import Hero from '../components/sections/Hero.jsx'
import TryItNow from '../components/sections/TryItNow.jsx'
import InfoSection from '../components/sections/InfoSection.jsx'
import Footer from '../components/layout/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TryItNow />
        <InfoSection />
      </main>
      <Footer />
    </>
  )
}
