'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Enter a valid phone number').max(15),
  product: z.string().min(1, 'Please select a product'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '"ENERGY FARM", Sanala-Ghunda Road,\nNear Lake, Shakt Sanal, MORBI – 363 641',
    color: 'text-solar-500',
    bg: 'bg-solar-50',
  },
  {
    icon: Phone,
    label: 'Mobile',
    value: '+91 98252 18572\n+91 99784 10572',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'morbi_solar@yahoo.com',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 6:00 PM\nSunday: Closed',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200))
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-navy-900">Contact Us</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            Ready to switch to solar? Fill in your details and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Amar Energy Industries</h3>
              <p className="text-white/60 text-sm mb-8">
                Manufacturers & Exporters of Solar Water Heating Systems
              </p>
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4 mb-6 last:mb-0">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${info.bg}`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">{info.label}</p>
                    <p className="text-sm text-white/90 whitespace-pre-line leading-relaxed">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4004.3377558431484!2d70.8065250756515!3d22.779254179345017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959f2c98d3137c7%3A0x634bb9329b48c07a!2sAmar%20Energy%20Industries!5e1!3m2!1sen!2sae!4v1781472838140!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amar Energy Industries Location Morbi, Gujarat"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Message Sent!</h3>
                  <p className="text-slate-500 mt-2">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <h3 className="text-xl font-bold text-navy-900 mb-6">Send Us a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors
                          ${errors.name ? 'border-red-400 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-solar-400 focus:ring-2 focus:ring-solar-100'}`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors
                          ${errors.email ? 'border-red-400 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-solar-400 focus:ring-2 focus:ring-solar-100'}`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors
                          ${errors.phone ? 'border-red-400 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-solar-400 focus:ring-2 focus:ring-solar-100'}`}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                    </div>

                    {/* Product */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Product Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register('product')}
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors appearance-none bg-white
                          ${errors.product ? 'border-red-400 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-solar-400 focus:ring-2 focus:ring-solar-100'}`}
                      >
                        <option value="">Select a product…</option>
                        <option value="domestic">Amar Solar Water Heaters</option>
                        <option value="industrial">Amar Solar Water Heating Systems</option>
                        <option value="both">Both Products</option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                      {errors.product && <p className="mt-1 text-xs text-red-500">{errors.product.message}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Tell us about your hot water requirements, installation site, or any questions…"
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors resize-none
                        ${errors.message ? 'border-red-400 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-solar-400 focus:ring-2 focus:ring-solar-100'}`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-solar-500 hover:bg-solar-600 disabled:bg-slate-300 text-white font-bold rounded-xl transition-colors shadow-lg shadow-solar-500/20"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    By submitting, you agree to be contacted by Amar Energy Industries regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
