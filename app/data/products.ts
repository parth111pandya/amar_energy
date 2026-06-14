import {
  Droplets, ThermometerSun, Wrench, Battery, Timer, Shield, Zap,
  CheckCircle2, Sun, Clock, Ruler, Factory, Activity, LucideIcon,
} from 'lucide-react'

export type Feature = {
  icon: LucideIcon
  text: string
  tag: string
}

export type Spec = {
  label: string
  value: string
}

export type Product = {
  slug: string
  name: string
  shortName: string
  tagline: string
  description: string
  image: string
  accentFrom: string
  accentTo: string
  catalogueHref?: string
  ctaLabel: string
  ctaType: 'download' | 'contact'
  specs: Spec[]
  features: Feature[]
  useCases: string[]
  capacities?: string[]
}

export const tagColors: Record<string, string> = {
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

export const products: Product[] = [
  {
    slug: 'solar-water-heaters',
    name: 'AMAR Solar Water Heaters',
    shortName: 'Solar Water Heaters',
    tagline: 'Domestic & Residential',
    description:
      'Ideal for routine hot water requirements for bathing, washing, and household chores. Operates on the Thermo-siphon / Natural Convection principle, delivering reliable hot water at 60°C even the next morning.',
    image: '/banner-1.jpg',
    accentFrom: 'from-navy-900',
    accentTo: 'to-navy-950',
    catalogueHref: '/e-catalogue-water-heater.pdf',
    ctaLabel: 'Download Catalogue',
    ctaType: 'download',
    specs: [
      { label: 'Output Temperature', value: '60°C' },
      { label: 'Lifespan', value: '20 Years' },
      { label: 'Maintenance', value: 'Nil' },
      { label: 'Backup Power', value: 'Electrical' },
      { label: 'Water Type', value: 'Hard & Soft' },
      { label: 'Principle', value: 'Thermo-siphon' },
    ],
    features: [
      { icon: ThermometerSun, text: 'Delivers hot water at 60°C', tag: 'Performance' },
      { icon: Sun, text: "World's latest solar heating technology", tag: 'Technology' },
      { icon: Shield, text: 'Specially designed for Indian conditions', tag: 'Local Fit' },
      { icon: Zap, text: 'Highly economical & energy-saving', tag: 'Savings' },
      { icon: CheckCircle2, text: 'Best vacuum insulated borosilicate glass tube', tag: 'Material' },
      { icon: CheckCircle2, text: 'Specially black coated double-layered glass tube', tag: 'Material' },
      { icon: Ruler, text: 'Compact — occupies less space vs flat-plate systems', tag: 'Design' },
      { icon: Droplets, text: 'Suitable for hard water areas', tag: 'Versatility' },
      { icon: Shield, text: 'PUFF insulated SS / MS / AL / CU tank options', tag: 'Build' },
      { icon: Wrench, text: 'Screwless fitting stainless-steel tanks', tag: 'Build' },
      { icon: Battery, text: 'Electrical backup for non-sunny days', tag: 'Reliability' },
      { icon: CheckCircle2, text: 'Nil maintenance after installation', tag: 'Convenience' },
      { icon: Clock, text: 'Long lifespan of 20 years', tag: 'Durability' },
      { icon: Sun, text: 'Available in various capacities', tag: 'Flexibility' },
      { icon: Sun, text: 'Auto sun-tracking via round tube surface', tag: 'Technology' },
      { icon: Timer, text: 'Starts heating water quickly', tag: 'Performance' },
      { icon: ThermometerSun, text: 'Thermo-siphon / Natural Convection principle', tag: 'Mechanism' },
    ],
    useCases: ['Homes & Apartments', 'Individual Bungalows', 'Villas & Farmhouses', 'Small Guesthouses', 'Hostels'],
    capacities: ['100 LPD', '150 LPD', '200 LPD', '250 LPD', '300 LPD', '500 LPD'],
  },
  {
    slug: 'solar-water-heating-systems',
    name: 'AMAR Solar Water Heating Systems',
    shortName: 'Heating Systems',
    tagline: 'Commercial & Industrial',
    description:
      'Industrial-scale solar heating systems built for hotels, hospitals, factories, hostels, and large residential complexes. Same world-class core technology, scaled for high-volume continuous hot water demand.',
    image: '/banner-2.jpg',
    accentFrom: 'from-slate-800',
    accentTo: 'to-slate-900',
    ctaLabel: 'Request Industrial Quote',
    ctaType: 'contact',
    specs: [
      { label: 'Scale', value: 'Industrial' },
      { label: 'Monitoring', value: '24/7 Remote' },
      { label: 'Installation', value: 'Professional' },
      { label: 'Backup', value: 'Hybrid Integration' },
      { label: 'Operation', value: 'Continuous' },
      { label: 'Commissioning', value: 'Included' },
    ],
    features: [
      { icon: Factory, text: 'Scalable capacity for commercial & industrial use', tag: 'Scalability' },
      { icon: Droplets, text: 'Designed for large-volume hot water requirements', tag: 'Capacity' },
      { icon: Shield, text: 'Heavy-duty construction for continuous operation', tag: 'Build' },
      { icon: ThermometerSun, text: 'Maintains consistent temperature throughout the day', tag: 'Performance' },
      { icon: Zap, text: 'Significant energy cost reduction for businesses', tag: 'Savings' },
      { icon: Wrench, text: 'Professional installation & commissioning', tag: 'Service' },
      { icon: Activity, text: '24/7 system monitoring & performance analytics', tag: 'Monitoring' },
      { icon: Battery, text: 'Hybrid backup integration capability', tag: 'Reliability' },
    ],
    useCases: ['Hotels & Resorts', 'Hospitals & Clinics', 'Factories & Industries', 'Hostels & Dormitories', 'Large Housing Societies', 'Educational Institutions'],
    capacities: ['1000 LPD', '2000 LPD', '5000 LPD', '10000 LPD', 'Custom'],
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
