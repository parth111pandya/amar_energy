'use client'

import { notFound, useRouter } from 'next/navigation'
import { use } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft, CheckCircle2, ChevronRight, Download, MessageCircle,
} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { getProduct, tagColors } from '../../data/products'

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = getProduct(slug)

  if (!product) notFound()

  const handleContactScroll = () => {
    window.location.href = '/#contact'
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24">

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-solar-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#products" className="hover:text-solar-600 transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-800 font-medium">{product.shortName}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-solar-100 text-solar-700 text-sm font-semibold rounded-full mb-4">
                {product.tagline}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-navy-900 leading-tight">
                {product.name}
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                {product.ctaType === 'download' && product.catalogueHref ? (
                  <a
                    href={product.catalogueHref}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-solar-500 hover:bg-solar-600 text-white font-semibold rounded-xl transition-colors shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    {product.ctaLabel}
                  </a>
                ) : (
                  <button
                    onClick={handleContactScroll}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-solar-500 hover:bg-solar-600 text-white font-semibold rounded-xl transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {product.ctaLabel}
                  </button>
                )}
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 hover:border-solar-300 hover:text-solar-700 font-semibold rounded-xl transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Products
                </Link>
              </div>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className={`bg-gradient-to-br ${product.accentFrom} ${product.accentTo} rounded-3xl p-6 shadow-2xl`}>
                <div className="relative h-72 rounded-2xl overflow-hidden bg-white/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specs Strip */}
        <section className="bg-navy-900 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {product.specs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="text-center"
                >
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{spec.label}</p>
                  <p className="text-solar-400 font-bold text-lg">{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-solar-100 text-solar-700 text-sm font-semibold rounded-full mb-4">
              Specifications
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-navy-900">
              Key Features & Benefits
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Every specification engineered for superior performance and longevity.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {product.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -3 }}
                className="flex items-start gap-3 p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-solar-200 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-solar-50 flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-5 h-5 text-solar-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-700 font-medium leading-snug">{f.text}</p>
                  <span className={`mt-1.5 inline-block text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[f.tag] || 'bg-slate-100 text-slate-600'}`}>
                    {f.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Use Cases + Capacities */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">

              {/* Use Cases */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-black text-navy-900 mb-6">Ideal For</h3>
                <div className="space-y-3">
                  {product.useCases.map((uc, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-solar-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{uc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Capacities */}
              {product.capacities && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-2xl font-black text-navy-900 mb-6">Available Capacities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {product.capacities.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-solar-300 hover:shadow-md transition-all duration-200"
                      >
                        <span className="text-navy-900 font-bold text-sm">{cap}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Get Started?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Contact us today for a personalised quote and free site assessment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleContactScroll}
                className="px-8 py-3 bg-solar-500 hover:bg-solar-600 text-white font-semibold rounded-xl transition-colors shadow-lg"
              >
                Get a Free Quote
              </button>
              <Link
                href="/#products"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors"
              >
                View All Products
              </Link>
            </div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  )
}
