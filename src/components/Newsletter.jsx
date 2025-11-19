import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Stay in the loop</h2>
            <p className="mt-4 text-slate-300">Get new essays, podcast drops and product updates directly in your inbox.</p>
          </div>
          <div>
            {submitted ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-200">Thanks! You’re on the list.</div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-slate-800/40 p-3 flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-transparent px-4 py-3 text-white placeholder-slate-400 outline-none"
                  required
                />
                <button type="submit" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
