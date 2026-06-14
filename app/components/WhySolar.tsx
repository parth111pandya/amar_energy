'use client'

import { motion } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList,
} from 'recharts'
import { Flame, Wind, TrendingUp, CloudRain } from 'lucide-react'

const energyData = [
  { country: 'Canada', value: 8.42 },
  { country: 'USA', value: 8.01 },
  { country: 'Japan', value: 4.20 },
  { country: 'China', value: 1.01 },
  { country: 'India', value: 0.43 },
]

const challenges = [
  {
    icon: Flame,
    title: 'Fossil Fuel Scarcity',
    desc: 'Rapidly depleting reserves of coal, oil, and gas are making conventional energy unsustainable for future generations.',
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
  {
    icon: Wind,
    title: 'Air Pollution',
    desc: 'Burning fossil fuels releases pollutants causing severe respiratory diseases and deteriorating urban air quality across India.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: TrendingUp,
    title: 'Volatile Markets',
    desc: 'Crude oil surpassing $100/barrel makes energy costs unpredictable, straining household and industrial budgets alike.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: CloudRain,
    title: 'Climate Change',
    desc: 'Rising CO₂ emissions are accelerating global warming, extreme weather events, and long-term ecological disruption.',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
]

const barColors = ['#0369a1', '#0369a1', '#0369a1', '#0369a1', '#f97316']

interface TooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}

function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-lg text-sm">
        <p className="font-semibold text-slate-800">{label}</p>
        <p className="text-solar-500 font-bold">{payload[0].value} TOE</p>
        <p className="text-slate-500 text-xs">Per capita energy use</p>
      </div>
    )
  }
  return null
}

export default function WhySolar() {
  return (
    <section className="py-24 bg-slate-50">
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
            The Solar Imperative
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-navy-900">
            Why Choose Solar Energy?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Peak-period power outages and escalating pollution demand a clean, reliable alternative.
            Solar is no longer optional it&apos;s essential.
          </p>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 bg-white rounded-3xl shadow-lg border border-slate-100 p-8"
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-navy-900">Per Capita Energy Use (TOE)</h3>
            <p className="text-slate-500 text-sm mt-1">
              India&apos;s per capita energy use is <span className="font-semibold text-solar-600">0.43 TOE</span> —
              nearly 20× less than Canada. Solar can bridge this gap cleanly.
            </p>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={energyData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="country" tick={{ fill: '#64748b', fontSize: 13, fontWeight: 600 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {energyData.map((entry, index) => (
                  <Cell key={entry.country} fill={barColors[index]} />
                ))}
                <LabelList dataKey="value" position="top" style={{ fill: '#475569', fontSize: 12, fontWeight: 600 }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 flex flex-wrap gap-4 justify-center text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-navy-700 inline-block" />Other Nations</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-solar-500 inline-block" />India (Current)</span>
          </div>
        </motion.div>

        {/* Challenge Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border p-6 ${c.bg} ${c.border}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm mb-4`}>
                <c.icon className={`w-6 h-6 ${c.color}`} />
              </div>
              <h4 className="font-bold text-slate-800 text-lg">{c.title}</h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Solar solution callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 p-10 text-center text-white"
        >
          <p className="text-2xl md:text-3xl font-bold">
            ☀️ Every litre of hot water heated by solar saves <span className="text-solar-400">0.6 litres of diesel</span>
          </p>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Amar Energy&apos;s solar water heaters pay for themselves within 2–3 years and continue
            delivering free hot water for 20 years.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
