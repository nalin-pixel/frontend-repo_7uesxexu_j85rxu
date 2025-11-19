import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Media from './components/Media'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* subtle radial highlight */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent_60%)]" />

      <Header />
      <main>
        <Hero />
        <About />
        <Media />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
