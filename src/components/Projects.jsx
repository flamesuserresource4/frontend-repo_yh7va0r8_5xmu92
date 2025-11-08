import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Design Copilot',
    desc: 'Real-time generative UI assistant powered by LLMs and procedural 3D.',
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop',
    span: 'md:col-span-2',
  },
  {
    title: 'Holographic Dashboard',
    desc: 'Data visualization in a cyberpunk aesthetic with volumetric effects.',
    img: 'https://images.unsplash.com/photo-1551281044-8bf4e74e8a19?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Spatial Portfolio',
    desc: 'A narrative portfolio with scroll-synced animations and 3D scenes.',
    img: 'https://images.unsplash.com/photo-1545231027-637d2f6210f4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Realtime Collaboration',
    desc: 'Multiplayer canvas with CRDT syncing and delightful micro-interactions.',
    img: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop',
    span: 'md:col-span-2',
  },
]

function ProjectCard({ p }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${
        p.span || ''
      }`}
    >
      <img
        src={p.img}
        alt={p.title}
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
        <p className="mt-1 text-sm text-white/70">{p.desc}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0a0a0f] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-white/70">
              A curated selection of things I loved building.
            </p>
          </div>
          <a
            href="#"
            className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 md:block"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
