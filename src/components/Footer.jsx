import { useLanguage } from '../i18n'

export default function Footer() {
  const { t } = useLanguage()
  const navLinks = t('footer.navLinks')
  const navHrefs = t('footer.navHrefs')

  return (
    <footer className="border-t border-gold/10 bg-dark">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl text-gold mb-4">Le Comptoir Doré</h3>
            <p className="text-cream/40 font-light text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cream/60 text-xs tracking-[0.3em] uppercase mb-6">{t('footer.navTitle')}</h4>
            <ul className="space-y-3">
              {navLinks.map((label, i) => (
                <li key={label}>
                  <a
                    href={`#${navHrefs[i]}`}
                    className="text-cream/40 hover:text-gold text-sm font-light transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-cream/60 text-xs tracking-[0.3em] uppercase mb-6">{t('footer.followUs')}</h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 border border-gold/20 flex items-center justify-center hover:bg-gold/10 hover:border-gold/40 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 border border-gold/20 flex items-center justify-center hover:bg-gold/10 hover:border-gold/40 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* X/Twitter */}
              <a
                href="#"
                aria-label="X"
                className="w-10 h-10 border border-gold/20 flex items-center justify-center hover:bg-gold/10 hover:border-gold/40 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* TripAdvisor */}
              <a
                href="#"
                aria-label="TripAdvisor"
                className="w-10 h-10 border border-gold/20 flex items-center justify-center hover:bg-gold/10 hover:border-gold/40 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15a3 3 0 110-6 3 3 0 010 6zm4 0a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs font-light">
            {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/30 hover:text-gold text-xs font-light transition-colors duration-300">
              {t('footer.legal')}
            </a>
            <a href="#" className="text-cream/30 hover:text-gold text-xs font-light transition-colors duration-300">
              {t('footer.privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
