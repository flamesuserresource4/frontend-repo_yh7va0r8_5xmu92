import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white">
      {/* Hero with interactive Spline scene */}
      <Hero />

      {/* Projects in a bento grid */}
      <Projects />

      {/* Experience timeline */}
      <Experience />

      {/* Contact with 3D scene */}
      <Contact />

      <footer className="border-t border-white/10 bg-black/40 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Crafted with care — Interactive Portfolio
      </footer>
    </div>
  )
}

export default App
