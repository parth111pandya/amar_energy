'use client'

import { motion } from 'framer-motion'
import * as Tabs from '@radix-ui/react-tabs'
import {
  Droplets, ThermometerSun, Wrench, Battery, Timer, Shield, Zap,
  CheckCircle2, Sun, Clock, Ruler, Factory, Activity,
} from 'lucide-react'
import Image from 'next/image'

const domesticFeatures = [
  { icon: ThermometerSun, text: "Delivers hot water at 60°C", tag: 'Performance' },
  { icon: Sun, text: "World's latest solar heating technology", tag: 'Technology' },
  { icon: Shield, text: "Specially designed for Indian conditions", tag: 'Local Fit' },
  { icon: Zap, text: "Highly economical & energy-saving", tag: 'Savings' },
  { icon: CheckCircle2, text: "Best vacuum insulated borosilicate glass tube", tag: 'Material' },
  { icon: CheckCircle2, text: "Specially black coated double-layered glass tube", tag: 'Material' },
  { icon: Ruler, text: "Compact occupies less space vs flat-plate systems", tag: 'Design' },
  { icon: Droplets, text: "Suitable for hard water areas", tag: 'Versatility' },
  { icon: Shield, text: "PUFF insulated SS / MS / AL / CU tank options", tag: 'Build' },
  { icon: Wrench, text: "Screwless fitting stainless-steel tanks", tag: 'Build' },
  { icon: Battery, text: "Electrical backup for non-sunny days", tag: 'Reliability' },
  { icon: CheckCircle2, text: "Nil maintenance after installation", tag: 'Convenience' },
  { icon: Clock, text: "Long lifespan of 20 years", tag: 'Durability' },
  { icon: Sun, text: "Available in various capacities", tag: 'Flexibility' },
  { icon: Sun, text: "Auto sun-tracking via round tube surface", tag: 'Technology' },
  { icon: Timer, text: "Starts heating water quickly", tag: 'Performance' },
  { icon: ThermometerSun, text: "Thermo-siphon / Natural Convection principle", tag: 'Mechanism' },
]

const industrialFeatures = [
  { icon: Factory, text: "Scalable capacity for commercial & industrial use", tag: 'Scalability' },
  { icon: Droplets, text: "Designed for large-volume hot water requirements", tag: 'Capacity' },
  { icon: Shield, text: "Heavy-duty construction for continuous operation", tag: 'Build' },
  { icon: ThermometerSun, text: "Maintains consistent temperature throughout the day", tag: 'Performance' },
  { icon: Zap, text: "Significant energy cost reduction for businesses", tag: 'Savings' },
  { icon: Wrench, text: "Professional installation & commissioning", tag: 'Service' },
  { icon: Activity, text: "24/7 system monitoring & performance analytics", tag: 'Monitoring' },
  { icon: Battery, text: "Hybrid backup integration capability", tag: 'Reliability' },
]

const tagColors: Record<string, string> = {
  Performance: 'bg-blue-100 text-blue-700',
  Technology: 'bg-purple-100 text-purple-700',
  'Local Fit': 'bg-green-100 text-green-700',
  Savings: 'bg-solar-100 text-solar-700',
  Material: 'bg-teal-100 text-teal-700',
  Design: 'bg-pink-100 text-pink-700',
  Versatility: 'bg-indigo-100 text-indigo-700',
  Build: 'bg-slate-100 text-slate-700',
  Reliability: 'bg-red-100 text-red-700',
  Convenience: 'bg-yellow-100 text-yellow-700',
  Durability: 'bg-emerald-100 text-emerald-700',
  Flexibility: 'bg-cyan-100 text-cyan-700',
  Mechanism: 'bg-violet-100 text-violet-700',
  Scalability: 'bg-sky-100 text-sky-700',
  Capacity: 'bg-blue-100 text-blue-700',
  Service: 'bg-orange-100 text-orange-700',
  Monitoring: 'bg-fuchsia-100 text-fuchsia-700',
}

function FeatureGrid({ features }: { features: typeof domesticFeatures }) {
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
                          src="/banner-1.jpg"
                          alt="AMAR Solar Water Heater"
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const parent = (e.target as HTMLImageElement).parentElement
                            if (parent) parent.className = parent.className + ' flex items-center justify-center'
                          }}
                        />

                      </div>
                      <h3 className="text-xl font-bold">AMAR Solar Water Heaters</h3>
                      <p className="mt-3 text-white/70 text-sm leading-relaxed">
                        Ideal for routine hot water requirements for bathing, washing, and household chores.
                        Operates on the Thermo-siphon / Natural Convection principle, delivering reliable
                        hot water at <span className="text-solar-400 font-semibold">60°C</span> even the next morning.
                      </p>
                      <div className="mt-6 space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Output Temperature</span>
                          <span className="font-bold text-solar-400">60°C</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Lifespan</span>
                          <span className="font-bold text-solar-400">20 Years</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Maintenance</span>
                          <span className="font-bold text-green-400">Nil</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Backup Power</span>
                          <span className="font-bold text-solar-400">Electrical</span>
                        </div>
                      </div>
                      <a
                        href="/e-catalogue-water-heater.pdf"
                        download
                        className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-solar-500 hover:bg-solar-600 text-white font-semibold rounded-xl transition-colors text-sm"
                      >
                        Download Catalogue
                      </a>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-solar-500" />
                      <h4 className="font-bold text-navy-900 text-lg">17 Key Specifications</h4>
                    </div>
                    <p className="text-slate-500 text-sm">Every feature is engineered for superior performance and longevity.</p>
                    <FeatureGrid features={domesticFeatures} />
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
                          src="/banner-2.jpg"
                          alt="AMAR Solar Water Heating System"
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const parent = (e.target as HTMLImageElement).parentElement
                            if (parent) parent.className = parent.className + ' flex items-center justify-center'
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-bold">AMAR Solar Water Heating Systems</h3>
                      <p className="mt-3 text-white/70 text-sm leading-relaxed">
                        Industrial-scale solar heating systems built for hotels, hospitals, factories,
                        hostels, and large residential complexes. Same world-class core technology,
                        scaled for high-volume continuous hot water demand.
                      </p>
                      <div className="mt-6 space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Scale</span>
                          <span className="font-bold text-solar-400">Industrial</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Monitoring</span>
                          <span className="font-bold text-solar-400">24/7 Remote</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Installation</span>
                          <span className="font-bold text-solar-400">Professional</span>
                        </div>
                      </div>
                      <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-solar-500 hover:bg-solar-600 text-white font-semibold rounded-xl transition-colors text-sm"
                      >
                        Request Industrial Quote
                      </button>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-solar-500" />
                      <h4 className="font-bold text-navy-900 text-lg">Industrial-Grade Features</h4>
                    </div>
                    <p className="text-slate-500 text-sm">Built for scale, continuity, and maximum energy savings.</p>
                    <FeatureGrid features={industrialFeatures} />
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
