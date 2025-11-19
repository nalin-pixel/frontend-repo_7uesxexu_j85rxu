import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Books & Podcast', href: '#media' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-block h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg" />
              <span className="text-white font-semibold tracking-tight">Richie Norton</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                  {n.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition-shadow">Get in touch</a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-white font-semibold">Menu</span>
              <button className="text-white" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {nav.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition-shadow">Get in touch</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
