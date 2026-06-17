import { Sun, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#home' },
    { label: 'Why Solar?', href: '#why-solar' },
    { label: 'Objectives', href: '#objectives' },
    { label: 'Quality QMS', href: '#quality' },
    { label: 'Gallery', href: '#gallery' },
  ],
  Products: [
    { label: 'Solar Water Heaters', href: '#products' },
    { label: 'Solar Water Heating Systems', href: '#products' },
    { label: 'Download E-Catalogue', href: '/e-catalogue-water-heater.pdf' },
    { label: 'Dimension Sheet', href: '/Dimension-Solar.pdf' },
    { label: 'Fitting Instructions', href: '/FITTING-INSTRUCTIONS-1.pdf' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-solar-500 rounded-xl flex items-center justify-center">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">Amar Energy Industries</p>
                <p className="text-xs text-solar-400">Manufacturers & Exporters</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Delivering world class solar water heating solutions from Morbi, Gujarat, India.
              10+ years of innovation, reliability, and transparent partnerships.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-solar-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-400">
                  "ENERGY FARM", Sanala-Ghunda Road, Near Lake,<br />
                  Shakt Sanal, MORBI – 363 641, Gujarat, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-solar-500 flex-shrink-0" />
                <a href="tel:+919825218572" className="text-sm text-slate-400 hover:text-solar-400 transition-colors">
                  +91 98252 18572
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-solar-500 flex-shrink-0" />
                <a href="tel:+919978410572" className="text-sm text-slate-400 hover:text-solar-400 transition-colors">
                  +91 99784 10572
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-solar-500 flex-shrink-0" />
                <a href="mailto:morbi_solar@yahoo.com" className="text-sm text-slate-400 hover:text-solar-400 transition-colors">
                  morbi_solar@yahoo.com
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-solar-400 transition-colors flex items-center gap-1 group"
                      download={link.href.endsWith('.pdf') ? true : undefined}
                    >
                      {link.label}
                      {link.href.endsWith('.pdf') && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Amar Energy Industries. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Proudly Made in India 🇮🇳 · Powered by Solar Innovation
          </p>
        </div>
      </div>
    </footer>
  )
}
