import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amar Energy Industries',
  description:
    'Amar Energy Industries: Leading manufacturer of solar water heaters and solar water heating systems in Morbi, Gujarat, India. 10+ years of solar expertise.',
  keywords: 'solar water heater, solar energy, Morbi Gujarat, AMAR solar, solar heating system',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
