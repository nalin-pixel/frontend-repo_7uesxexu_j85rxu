import { motion } from 'framer-motion'

export default function About() {
  const items = [
    { title: 'Entrepreneurship', desc: 'Turn ideas into outcomes with lean, modern playbooks.' },
    { title: 'Design Your Life', desc: 'Systems to align your time, work and values.' },
    { title: 'Build in Public', desc: 'Create leverage by sharing the journey as you go.' },
  ]

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              I help creators, founders and teams simplify, start and scale. Through books, podcasts and products, I share pragmatic strategies to build what matters and live with intention.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {items.map((i) => (
                <motion.div key={i.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
                  <h3 className="font-semibold text-white">{i.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{i.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-800/40">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop" alt="Workshop" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
