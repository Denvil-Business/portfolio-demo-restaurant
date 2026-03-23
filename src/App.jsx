import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Menu from './components/Menu'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-cream">
      <Navbar />
      <Hero />
      <Philosophy />
      <Menu />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}
