'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'

const allImages = [
  // Product / banner images
  { src: '/banner-1.jpg',          alt: 'AMAR Solar Water Heater — Field Installation',        category: 'Installation' },
  { src: '/banner-2.jpg',          alt: 'AMAR Solar Water Heater — Product Detail',            category: 'Product' },
  { src: '/banner-4.jpg',          alt: 'Make in India — Copper Tank Solar System',            category: 'Product' },
  { src: '/gallery-1.jpeg',        alt: 'AMAR Energy Installation in Progress',                category: 'Installation' },
  // Gallery folder images (optimised)
  { src: '/gallery-mic8141.jpg',   alt: 'AMAR Solar Water Heater — Rooftop View',             category: 'Installation' },
  { src: '/gallery-mic8142.jpg',   alt: 'AMAR Solar Water Heater — Front Profile',            category: 'Product' },
  { src: '/gallery-mic8143.jpg',   alt: 'AMAR Solar Water Heater — Angle View',               category: 'Product' },
  { src: '/gallery-mic8144.jpg',   alt: 'AMAR Solar Water Heater — Wide Angle',               category: 'Installation' },
  { src: '/gallery-mic8151.jpg',   alt: 'AMAR Solar Water Heater — Rear View',                category: 'Product' },
  { src: '/gallery-mic8154.jpg',   alt: 'AMAR Solar Water Heater — Close-up Tubes',          category: 'Product' },
  { src: '/gallery-mic8158.jpg',   alt: 'AMAR Solar Water Heater — Side Profile',             category: 'Product' },
  { src: '/gallery-mic8159.jpg',   alt: 'AMAR Solar Water Heater — Full System View',        category: 'Installation' },
  { src: '/gallery-mic8160.jpg',   alt: 'AMAR Solar Water Heater — Front View Close',        category: 'Product' },
  { src: '/gallery-1.png',         alt: 'AMAR Energy Solar Installation',                    category: 'Installation' },
  { src: '/gallery-2.png',         alt: 'AMAR Energy Solar Installation',                    category: 'Installation' },
  { src: '/gallery-3.png',         alt: 'AMAR Energy Solar Installation',                    category: 'Installation' },
  { src: '/gallery-4.png',         alt: 'AMAR Energy Solar Installation',                    category: 'Installation' },
]

const categories = ['All', 'Product', 'Installation']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? allImages
    : allImages.filter((img) => img.category === activeCategory)

  const openLightbox = (src: string) => {
    const idx = filtered.findIndex((img) => img.src === src)
    setLightboxIndex(idx)
  }

  const closeLightbox = () => setLightboxIndex(null)

  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null))

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/amar-solar-logo.png" alt="AMAR Solar" className="h-8 w-auto brightness-0 invert" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-solar-500/20 text-solar-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white">Photo Gallery</h1>
          <p className="mt-3 text-white/50 text-lg">
            Real AMAR solar installations and products across India.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-solar-500 text-white shadow-lg'
                  : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
              }`}
            >
              {cat}
              <span className="ml-2 text-xs opacity-60">
                {cat === 'All' ? allImages.length : allImages.filter((i) => i.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Image grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-slate-800"
                onClick={() => openLightbox(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-solar-500/80 text-white text-xs font-medium mb-1">
                    {img.category}
                  </span>
                  <p className="text-white text-xs leading-snug">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-white/40 py-20">No images in this category.</p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl max-h-[85vh] mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={1800}
                height={1200}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
              <p className="text-center text-white/60 text-sm mt-3">
                {filtered[lightboxIndex].alt} &nbsp;·&nbsp; {lightboxIndex + 1} / {filtered.length}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
