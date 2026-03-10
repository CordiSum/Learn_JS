import Header from '../components/layout/Header.jsx'
import Hero from '../components/sections/Hero.jsx'
import TryItNow from '../components/sections/TryItNow.jsx'
import InfoSection from '../components/sections/InfoSection.jsx'
import Footer from '../components/layout/Footer.jsx'
import { Routes, Route, Link } from "react-router-dom";
import BestEmojiVotePage from "../pages/BestEmojiVotePage/BestEmojiVotePage";

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

      <nav style={{ padding: 12 }}>
        <Link to="/emoji-vote">Emoji vote</Link>
      </nav>

      <Routes>
        <Route path="/emoji-vote" element={<BestEmojiVotePage />} />
      </Routes>
    </>
  )
}
