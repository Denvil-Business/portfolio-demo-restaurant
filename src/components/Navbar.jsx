import { useState } from 'react'

const links = [
  { label: 'Philosophie', href: '#philosophie' },
  { label: 'Menu', href: '#menu' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-heading text-2xl md:text-3xl text-gold tracking-wider">
          Le Comptoir Doré
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream/70 hover:text-gold text-sm font-light tracking-widest uppercase transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Réserver
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-px bg-gold transition-transform duration-300 ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`w-6 h-px bg-gold transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-gold transition-transform duration-300 ${open ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/70 hover:text-gold text-sm tracking-widest uppercase transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-6 py-3 border border-gold text-gold text-sm tracking-widest uppercase text-center hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Réserver
          </a>
        </div>
      </div>
    </nav>
  )
}
