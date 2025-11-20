import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Us', href: '#whyus' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border border-slate-200/60 shadow-sm rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-900 to-slate-700 text-white grid place-items-center text-sm font-bold">OV</div>
              <div className="flex flex-col leading-tight">
                <span className="text-slate-900 font-semibold">Office Vision</span>
                <span className="text-slate-500 text-xs">Melbourne Office Fitouts</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors text-sm">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+611300886658" className="inline-flex items-center gap-2 text-sm text-white bg-slate-900 hover:bg-slate-800 px-3 py-2 rounded-xl transition-colors">
                <Phone size={16} /> 1300 886 658
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl transition-colors">
                <Mail size={16} /> Get a Quote
              </a>
            </div>

            <button className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="px-3 py-2 rounded-lg hover:bg-white">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="px-3 py-2 rounded-lg bg-slate-900 text-white text-center">Get a Quote</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
