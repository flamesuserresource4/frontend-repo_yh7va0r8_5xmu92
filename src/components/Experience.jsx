import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const items = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Nebula Labs',
    period: '2022 — Present',
    points: [
      'Led development of 3D experiences with WebGL and Spline.',
      'Scaled design system to 40+ components with accessibility baked-in.',
    ],
  },
  {
    role: 'Product Engineer',
    company: 'Orbit Studio',
    period: '2020 — 2022',
    points: [
      'Built interactive data viz and motion-led landing pages.',
      'Collaborated with designers to ship pixel-perfect UI.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Freelance',
    period: '2018 — 2020',
    points: [
      'Delivered modern SPAs and creative websites for startups.',
      'Introduced performance budgets and CI to projects.',
    ],
  },
]

function TimelineItem({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="relative rounded-xl border border-white/10 bg-white/5 p-6 text-white"
    >
      <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
        <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
        {item.period}
      </div>
      <h3 className="text-xl font-semibold">
        {item.role} · <span className="text-white/80">{item.company}</span>
      </h3>
      <ul className="mt-3 space-y-1 text-white/80">
        {item.points.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Experience() {
  const { scrollYProgress } = useScroll()
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="relative w-full bg-[#0a0a0f] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Experience</h2>
          <p className="mt-2 text-white/70">A journey built step by step.</p>
        </div>
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            style={{ scaleY }}
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-fuchsia-400 via-cyan-300 to-transparent md:block"
          />
          {items.map((item, idx) => (
            <TimelineItem key={item.role} item={item} i={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
