'use client'

import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown, Megaphone, Leaf, TrendingUp, Zap, Cpu, Palette, DollarSign, Activity, Eye } from 'lucide-react'

const objectives = [
  {
    id: 'promote',
    icon: Megaphone,
    title: 'Promote Solar Energy',
    color: 'text-solar-600',
    bg: 'bg-solar-50',
    body: 'Actively spread awareness about the economic and environmental benefits of solar energy across residential, commercial, and industrial sectors. We conduct outreach programs, demos, and educational campaigns to accelerate solar adoption across India.',
  },
  {
    id: 'conserve',
    icon: Leaf,
    title: 'Conserve Natural Resources',
    color: 'text-green-600',
    bg: 'bg-green-50',
    body: 'Every solar unit we install displaces fossil fuel consumption, reducing carbon footprints and conserving India\'s precious natural reserves. Our goal is to protect the environment for future generations through cleaner energy alternatives.',
  },
  {
    id: 'commercialize',
    icon: TrendingUp,
    title: 'Commercialize Solar Technology',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    body: 'We bridge the gap between cutting-edge solar R&D and everyday consumers. By making advanced solar technology commercially accessible and affordable, we drive mass adoption across income levels and geographies.',
  },
  {
    id: 'bridge',
    icon: Zap,
    title: 'Bridge the Supply Gap',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    body: 'India\'s energy demand far outstrips supply. Amar Energy actively contributes to filling this gap by deploying scalable solar water heating solutions that reduce pressure on the power grid during peak demand hours.',
  },
]

const advantages = [
  { icon: Cpu, title: 'Best Technology', desc: 'World\'s latest solar water heating technology, purpose-built for Indian climatic conditions.' },
  { icon: Palette, title: 'Superior Design', desc: 'Aesthetically refined systems with screwless SS tanks and compact footprints compared to flat-plate systems.' },
  { icon: DollarSign, title: 'Financial Strength', desc: 'Zero upfront cost models and flexible financing remove barriers to solar adoption for all customers.' },
  { icon: Activity, title: 'Real-Time Assessments', desc: '24/7 remote monitoring systems to track performance and flag issues before they impact hot water supply.' },
  { icon: Eye, title: 'Full Transparency', desc: 'Honest, open communication from site assessment through installation and lifetime servicing no hidden costs.' },
]

export default function Objectives() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-navy-900/10 text-navy-900 text-sm font-semibold rounded-full mb-4">
            Our Purpose
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-navy-900">
            Objectives & Advantage
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Four core pillars drive everything we do and five distinct advantages set AMAR apart in a crowded market.
          </p>
        </motion.div>

        {/* Objectives Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-navy-900 mb-6">Core Objectives</h3>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {objectives.map((obj, i) => (
              <Accordion.Item
                key={obj.id}
                value={obj.id}
                className="border border-slate-200 rounded-2xl overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className={`w-full flex items-center gap-4 px-6 py-5 text-left group hover:bg-slate-50 transition-colors`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${obj.bg}`}>
                      <obj.icon className={`w-5 h-5 ${obj.color}`} />
                    </div>
                    <span className="flex-1 font-semibold text-slate-800 text-base">{obj.title}</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="AccordionContent overflow-hidden">
                  <div className="px-6 pb-5 pt-1 text-slate-600 leading-relaxed pl-20">
                    {obj.body}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>

        {/* ESTPL Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-navy-900">The Amar Energy Industries Advantage</h3>
            <p className="text-slate-500 mt-2">What makes our partnership proposition unmatched</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-solar-200 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-solar-400 to-solar-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <adv.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm">{adv.title}</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
