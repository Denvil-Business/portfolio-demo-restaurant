import { useLanguage } from '../i18n'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/70" />

      {/* Decorative gold lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="hero-sub-anim font-body text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-6">
          {t('hero.sub')}
        </p>
        <h1 className="hero-title-anim font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-semibold leading-tight">
          {t('hero.title1')}
          <span className="block text-gold italic font-medium mt-2">{t('hero.title2')}</span>
        </h1>
        <p className="hero-sub-anim mt-8 text-cream/60 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
          {t('hero.desc')}
        </p>
        <div className="hero-btn-anim mt-12">
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gold text-dark font-medium text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-btn-anim absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-cream/40 text-xs tracking-widest uppercase">{t('hero.scroll')}</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  )
}
