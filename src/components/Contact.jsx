import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks! Your message has been sent.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative w-full bg-[#0a0a0f] py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-10 px-6 md:grid-cols-2">
        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-3xl font-bold">Let’s build something</h2>
          <p className="mt-2 text-white/70">
            Have a project in mind or just want to say hi? Drop a message.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-white/70">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-fuchsia-500/20 focus:ring"
                placeholder="Ada Lovelace"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/70">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-fuchsia-500/20 focus:ring"
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/70">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-fuchsia-500/20 focus:ring"
                placeholder="Tell me about your idea..."
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-fuchsia-500 px-5 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  )
}
