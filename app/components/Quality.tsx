'use client'

import { motion } from 'framer-motion'
import { Award, CheckSquare, RefreshCw, FlaskConical, Hammer, Gauge, Droplets, ThermometerSun } from 'lucide-react'

const standards = [
  {
    icon: Award,
    title: 'ISO Standards',
    desc: 'Our manufacturing processes and quality controls are aligned with international ISO standards, ensuring consistent product quality and reliability across every unit produced.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'ISO Certified',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: CheckSquare,
    title: '5S Methodology',
    desc: 'We implement the 5S workplace organization system Sort, Set in Order, Shine, Standardize, Sustain across all production floors, maintaining a clean, safe, and efficient manufacturing environment.',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    badge: '5S Compliant',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    icon: RefreshCw,
    title: 'Kaizen Philosophy',
    desc: 'Continuous improvement is embedded in our culture. Kaizen principles drive daily incremental enhancements to processes, reducing waste and elevating product performance over time.',
    color: 'text-solar-600',
    bg: 'bg-solar-50',
    border: 'border-solar-200',
    badge: 'Kaizen Driven',
    badgeColor: 'bg-solar-100 text-solar-700',
  },
]

const testingSteps = [
  {
    step: '01',
    icon: FlaskConical,
    title: 'In-Process Inspection',
    desc: 'Every component undergoes real-time quality checks during assembly to catch defects at the source before they compound downstream.',
  },
  {
    step: '02',
    icon: Hammer,
    title: 'Welding & D.P. Test',
    desc: 'All weld joints are validated using Dye Penetrant (D.P.) testing to ensure structural integrity and zero leakage points.',
  },
  {
    step: '03',
    icon: Gauge,
    title: 'Pressure Testing',
    desc: 'Each tank and collector assembly is pressure-tested beyond operational limits to confirm safe, long-term performance.',
  },
  {
    step: '04',
    icon: Droplets,
    title: 'Water Leak Validation',
    desc: 'Comprehensive water testing confirms that all seals, connections, and joints are completely watertight under real operating conditions.',
  },
  {
    step: '05',
    icon: ThermometerSun,
    title: 'Temperature Validation',
    desc: 'Thermal performance is measured and validated against our 60°C output specification before any unit leaves our facility.',
  },
]

export default function Quality() {
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
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
            Quality Assurance
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-navy-900">
            Quality Management System
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Every AMAR product is built under a rigorous QMS framework because reliability isn&apos;t optional in solar water heating.
          </p>
        </motion.div>

        {/* QMS Standards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {standards.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border p-8 ${s.bg} ${s.border} transition-shadow duration-200 hover:shadow-lg`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5`}>
                <s.icon className={`w-7 h-7 ${s.color}`} />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-bold text-slate-800 text-xl">{s.title}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${s.badgeColor}`}>{s.badge}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testing Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-900">Testing & Inspection Process</h3>
            <p className="text-slate-500 mt-2">Five rigorous validation stages before any unit ships</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-solar-300 to-solar-500 mx-16" />

            <div className="grid md:grid-cols-5 gap-6">
              {testingSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Circle */}
                  <div className={`relative z-10 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg mb-4 ${i === 4 ? 'bg-solar-500' : 'bg-white border-2 border-slate-200'
                    }`}>
                    <step.icon className={`w-7 h-7 ${i === 4 ? 'text-white' : 'text-solar-500'}`} />
                    <span className={`text-xs font-bold mt-0.5 ${i === 4 ? 'text-white/80' : 'text-slate-400'}`}>
                      {step.step}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm leading-tight">{step.title}</h4>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Make in India banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 overflow-hidden rounded-2xl"
        >
          <img
            src="/banner-4.jpg"
            alt="Make in India - Copper Tank health benefits"
            className="w-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
