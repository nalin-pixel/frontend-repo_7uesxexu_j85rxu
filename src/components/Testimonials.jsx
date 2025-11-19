import { motion } from 'framer-motion'

const quotes = [
  {
    quote: 'Richie’s work shifted how I think about time and value. Practical, inspiring and actionable.',
    author: 'Founder, SaaS Company'
  },
  {
    quote: 'These frameworks helped our team move faster with less stress. Highly recommend.',
    author: 'Product Lead'
  },
  {
    quote: 'Real stories, real tactics. The podcast is a masterclass for builders.',
    author: 'Creator & Coach'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What people say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <p className="text-slate-200">“{q.quote}”</p>
              <footer className="mt-4 text-sm text-slate-400">— {q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
