'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Phone } from 'lucide-react'

export default function Hero() {
  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollDown = () => {
    document.querySelector('#why-solar')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(120deg, oklch(0.28 0.04 200) 0%, oklch(0.22 0.05 220) 55%, oklch(0.18 0.04 240) 100%)' }}
      aria-label="Hero section"
    >
      {/* Glow orbs amar_energy_2 style */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: 'linear-gradient(135deg, oklch(0.82 0.17 80), oklch(0.62 0.22 35))' }}
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 w-[380px] h-[380px] rounded-full blur-3xl"
        style={{ backgroundColor: 'oklch(0.58 0.22 25 / 0.3)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8181B]/20 border border-[#C8181B]/30 text-[#FF6B6B] text-xs font-medium tracking-widest uppercase mb-6">
                  Make in India
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Harness the{' '}
                <span className="text-[#C8181B]">Power of the Sun</span>{' '}
                for Free Hot Water
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-6 text-white/70 text-lg leading-relaxed max-w-lg"
              >
                Amar Energy Industries has been manufacturing world-class solar water
                heating systems from Morbi, Gujarat for over a decade delivering
                hot water at 60°C with zero fuel cost, every day.
              </motion.p>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-6 border-l-2 border-[#C8181B] pl-4"
              >
                <p className="text-white/50 text-sm italic">
                  ॥ तं सूर्य जगत्कर्तारं महातेजः प्रदीपनम् ॥
                </p>
                <p className="text-white/40 text-xs mt-1">
                  The sun&apos;s brilliance protects the entire universe.
                </p>
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <button
                  onClick={scrollToProducts}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8181B] hover:bg-[#a81416] text-white font-semibold rounded-md transition-colors"
                >
                  Explore Products
                  <ArrowDown className="w-4 h-4" />
                </button>
                <a
                  href="/e-catalogue-water-heater.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-md border border-white/20 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Catalogue
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-8 flex items-center gap-2 text-white/50 text-sm"
              >
                <Phone className="w-4 h-4 text-[#C8181B]" />
                <a href="tel:+919825218572" className="hover:text-white transition-colors">
                  +91 98252 18572
                </a>
                <span className="text-white/20">·</span>
                <a href="tel:02822291509" className="hover:text-white transition-colors">
                  (02822) 291509
                </a>
              </motion.div>
            </div>

            {/* Right: 4 Stat Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '60°C', label: 'Hot Water Temperature', color: '#C8181B' },
                { value: '20 Yrs', label: 'Product Lifespan', color: '#2D7A2D' },
                { value: '1–2 Yrs', label: 'Investment Payback', color: '#F5A623' },
                { value: '24×7', label: 'Hot Water Supply', color: '#0A4040' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col gap-2"
                >
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-white/60 text-sm leading-tight">{stat.label}</span>
                  <div className="w-8 h-1 rounded-full mt-1" style={{ backgroundColor: stat.color }} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <button
          onClick={scrollDown}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
