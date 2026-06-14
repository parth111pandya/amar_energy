'use client'

import { motion } from 'framer-motion'
import * as Tabs from '@radix-ui/react-tabs'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { products, tagColors } from '../data/products'
import type { Feature } from '../data/products'

function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-8">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          whileHover={{ x: 4 }}
          className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-solar-200 transition-all duration-200"
        >
          <div className="w-8 h-8 rounded-lg bg-solar-50 flex items-center justify-center flex-shrink-0">
            <f.icon className="w-4 h-4 text-solar-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-700 font-medium leading-snug">{f.text}</p>
            <span className={`mt-1 inline-block text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[f.tag] || 'bg-slate-100 text-slate-600'}`}>
              {f.tag}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

const [domestic, industrial] = products

export default function Products() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-solar-100 text-solar-700 text-sm font-semibold rounded-full mb-4">
            Product Lineup
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-navy-900">AMAR Solar Products</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            From domestic bathrooms to industrial complexes engineered for every hot water need.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-14">
          <Tabs.Root defaultValue="domestic">
            <Tabs.List className="flex gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-md mx-auto mb-12">
              <Tabs.Trigger
                value="domestic"
                className="flex-1 py-3 px-4 text-sm font-semibold rounded-xl text-slate-600
                           data-[state=active]:bg-white data-[state=active]:text-solar-600 data-[state=active]:shadow-sm
                           transition-all duration-200"
              >
                🏠 Solar Water Heaters
              </Tabs.Trigger>
              <Tabs.Trigger
                value="industrial"
                className="flex-1 py-3 px-4 text-sm font-semibold rounded-xl text-slate-600
                           data-[state=active]:bg-white data-[state=active]:text-solar-600 data-[state=active]:shadow-sm
                           transition-all duration-200"
              >
                🏭 Heating Systems
              </Tabs.Trigger>
            </Tabs.List>

            {/* Domestic Tab */}
            <Tabs.Content value="domestic">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid lg:grid-cols-5 gap-10 items-start">
                  {/* Product image / hero card */}
                  <div className="lg:col-span-2">
                    <div className="sticky top-24 bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 text-white">
                      <div className="relative h-52 rounded-2xl overflow-hidden mb-6 bg-white/5">
                        <Image
                          src={domestic.image}
                          alt={domestic.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{domestic.name}</h3>
                      <p className="mt-3 text-white/70 text-sm leading-relaxed">
                        {domestic.description.split(' at ')[0]} at{' '}
                        <span className="text-solar-400 font-semibold">60°C</span>
                        {domestic.description.split(' at ')[1] ? ' ' + domestic.description.split(' at ').slice(1).join(' at ').split('60°C').pop() : ''}
                      </p>
                      <div className="mt-6 space-y-3">
                        {domestic.specs.slice(0, 4).map((spec, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-white/60">{spec.label}</span>
                            <span className={`font-bold ${spec.value === 'Nil' ? 'text-green-400' : 'text-solar-400'}`}>
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-col gap-3">
                        <a
                          href={domestic.catalogueHref}
                          download
                          className="flex items-center justify-center gap-2 w-full py-3 bg-solar-500 hover:bg-solar-600 text-white font-semibold rounded-xl transition-colors text-sm"
                        >
                          Download Catalogue
                        </a>
                        <Link
                          href={`/products/${domestic.slug}`}
                          className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors text-sm"
                        >
                          View Full Details <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-solar-500" />
                      <h4 className="font-bold text-navy-900 text-lg">17 Key Specifications</h4>
                    </div>
                    <p className="text-slate-500 text-sm">Every feature is engineered for superior performance and longevity.</p>
                    <FeatureGrid features={domestic.features} />
                  </div>
                </div>
              </motion.div>
            </Tabs.Content>

            {/* Industrial Tab */}
            <Tabs.Content value="industrial">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid lg:grid-cols-5 gap-10 items-start">
                  <div className="lg:col-span-2">
                    <div className="sticky top-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white">
                      <div className="relative h-52 rounded-2xl overflow-hidden mb-6 bg-white/5">
                        <Image
                          src={industrial.image}
                          alt={industrial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{industrial.name}</h3>
                      <p className="mt-3 text-white/70 text-sm leading-relaxed">
                        {industrial.description}
                      </p>
                      <div className="mt-6 space-y-3">
                        {industrial.specs.slice(0, 3).map((spec, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-white/60">{spec.label}</span>
                            <span className="font-bold text-solar-400">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-col gap-3">
                        <button
                          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                          className="flex items-center justify-center gap-2 w-full py-3 bg-solar-500 hover:bg-solar-600 text-white font-semibold rounded-xl transition-colors text-sm"
                        >
                          Request Industrial Quote
                        </button>
                        <Link
                          href={`/products/${industrial.slug}`}
                          className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors text-sm"
                        >
                          View Full Details <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-solar-500" />
                      <h4 className="font-bold text-navy-900 text-lg">Industrial-Grade Features</h4>
                    </div>
                    <p className="text-slate-500 text-sm">Built for scale, continuity, and maximum energy savings.</p>
                    <FeatureGrid features={industrial.features} />
                  </div>
                </div>
              </motion.div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </section>
  )
}
