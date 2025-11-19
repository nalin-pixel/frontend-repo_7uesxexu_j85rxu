import { motion } from 'framer-motion'

const books = [
  {
    title: 'ANTI-TIME MANAGEMENT',
    subtitle: 'Reclaim your time and revolutionize the way you live.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    cta: 'Read More',
  },
  {
    title: 'THE POWER OF STARTING SOMETHING STUPID',
    subtitle: 'Make dreams happen by starting before you’re ready.',
    image: 'https://images.unsplash.com/photo-1761398319100-a7418ae466fc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUSEUlMjBQT1dFUiUyME9GJTIwU1RBUlRJTkd8ZW58MHwwfHx8MTc2MzU5MjgyMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    cta: 'Explore',
  },
]

const podcast = {
  title: 'Podcast: The Richie Norton Show',
  desc: 'Practical conversations on entrepreneurship, performance and purpose with world-class guests.',
  image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1400&auto=format&fit=crop',
}

export default function Media() {
  return (
    <section id="media" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Books & Podcast</h2>
          <a href="#" className="hidden md:inline-flex items-center rounded-full border border-white/20 text-white px-4 py-2 text-sm font-semibold hover:bg-white/10 transition">Browse all</a>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {books.map((b) => (
            <motion.article key={b.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-800/40">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={b.image} alt={b.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold leading-tight">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{b.subtitle}</p>
                <div className="mt-4">
                  <button className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-lg transition">{b.cta}</button>
                </div>
              </div>
            </motion.article>
          ))}

          <motion.article initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-800/40 md:col-span-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={podcast.image} alt={podcast.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="text-white font-semibold leading-tight">{podcast.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{podcast.desc}</p>
              <div className="mt-4">
                <button className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-lg transition">Listen</button>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
