'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDown, Menu, X, Sun } from 'lucide-react'

const navLinks = [
  { href: '#home',       label: 'Home',       page: false },
  { href: '#why-solar',  label: 'Why Solar?', page: false },
  { href: '#objectives', label: 'Objectives', page: false },
  { href: '#quality',    label: 'Quality',    page: false },
  { href: '/gallery',    label: 'Gallery',    page: true  },
  { href: '#contact',    label: 'Contact',    page: false },
]

const products = [
  { label: 'Amar Solar Water Heaters',         href: '#products' },
  { label: 'Amar Solar Water Heating Systems', href: '#products' },
]

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/60 backdrop-blur-xl border-white/40 shadow-lg shadow-black/5'
          : 'bg-white/10 backdrop-blur-md border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <button onClick={() => handleNav('#home')} className="flex items-center gap-3 group">
            <Image
              src="/amar-solar-logo.png"
              alt="AMAR Solar Water Heating Systems"
              width={200}
              height={65}
              className="h-14 lg:h-16 w-auto object-contain"
              priority
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.page ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-slate-700 hover:text-solar-600 hover:bg-solar-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-slate-700 hover:text-solar-600 hover:bg-solar-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}

            {/* Products Dropdown */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-slate-700 hover:text-solar-600 hover:bg-solar-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Products <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 w-72 z-50"
                  sideOffset={8}
                >
                  {products.map((p) => (
                    <DropdownMenu.Item
                      key={p.label}
                      onClick={() => handleNav(p.href)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-slate-700 hover:bg-solar-50 hover:text-solar-700 cursor-pointer outline-none transition-colors"
                    >
                      <Sun className="w-4 h-4 text-solar-500 flex-shrink-0" />
                      {p.label}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <button
              onClick={() => handleNav('#contact')}
              className="ml-3 px-5 py-2 bg-solar-500 text-white text-sm font-semibold rounded-lg hover:bg-solar-600 transition-colors shadow-md"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              link.page ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-slate-700 hover:text-solar-600 hover:bg-solar-50 rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="block w-full text-left px-4 py-3 text-slate-700 hover:text-solar-600 hover:bg-solar-50 rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </button>
              )
            ))}
            <div className="border-t border-slate-100 pt-2 mt-2">
              <p className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Products</p>
              {products.map((p) => (
                <button
                  key={p.label}
                  onClick={() => handleNav(p.href)}
                  className="flex items-center gap-2 w-full text-left px-4 py-3 text-slate-700 hover:text-solar-600 hover:bg-solar-50 rounded-lg text-sm transition-colors"
                >
                  <Sun className="w-4 h-4 text-solar-500" />
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
