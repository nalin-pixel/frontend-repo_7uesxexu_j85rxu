import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Background gradient + shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Build, Launch, Live Better.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-slate-300"
            >
              Entrepreneur, author and creator helping people design a life and business they love.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#media" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition">Explore Work</a>
              <a href="#about" className="inline-flex items-center rounded-full border border-white/20 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">Learn More</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-400 text-sm">
              <span>Trusted by founders and creators worldwide</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-800/40 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"
                alt="Portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
