'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/gallery-mic8142.jpg', alt: 'AMAR Solar Water Heater — Rooftop Installation' },
  { src: '/gallery-mic8158.jpg', alt: 'AMAR Solar Water Heater — Side Profile View' },
  { src: '/gallery-mic8160.jpg', alt: 'AMAR Solar Water Heater — Front View' },
  { src: '/banner-1.jpg', alt: 'Amar Energy Solar Installation Field Overview' },
  { src: '/banner-2.jpg', alt: 'Solar Water Heater Product Detail' },
  { src: '/gallery-1.jpeg', alt: 'Amar Energy Installation in Progress' },
  { src: '/gallery-1.png', alt: 'Amar Energy Solar Installation' },
  { src: '/gallery-2.png', alt: 'Amar Energy Solar Installation' },
  { src: '/gallery-3.png', alt: 'Amar Energy Solar Installation' },
  { src: '/gallery-4.png', alt: 'Amar Energy Solar Installation' },
]

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return
    const timer = setInterval(() => emblaApi.scrollNext(), 4000)
    return () => clearInterval(timer)
  }, [emblaApi])

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-solar-500/20 text-solar-400 text-sm font-semibold rounded-full mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">Photo Gallery</h2>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
            Real installations, real results AMAR solar systems deployed across India.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="embla overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="embla__container flex gap-4">
              {images.map((img, i) => (
                <div key={i} className="embla__slide flex-[0_0_100%] md:flex-[0_0_80%] relative h-80 md:h-[500px]">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement
                        el.style.display = 'none'
                        const parent = el.parentElement
                        if (parent) {
                          parent.style.background = 'linear-gradient(135deg, #0c4a6e, #f97316)'
                          parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white/60 text-lg font-medium">${img.alt}</div>`
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm font-medium text-white/80">{img.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === selectedIndex ? 'bg-solar-500 w-8' : 'bg-white/30 w-2'
                }`}
            />
          ))}
        </div>

        {/* Thumbnail strip */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`relative h-20 w-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${i === selectedIndex ? 'border-solar-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-75'
                }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                onError={(e) => {
                  const el = e.target as HTMLImageElement
                  el.style.display = 'none'
                  const parent = el.parentElement
                  if (parent) parent.style.background = 'linear-gradient(135deg, #0c4a6e, #f97316)'
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
