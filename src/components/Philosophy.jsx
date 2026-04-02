import { useLanguage } from '../i18n'

export default function Philosophy() {
  const { t } = useLanguage()

  return (
    <section id="philosophie" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center animate-on-scroll">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">{t('philosophy.label')}</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mt-4 mb-8">
            {t('philosophy.title')}
          </h2>
        </div>

        <div className="animate-on-scroll delay-1 w-16 h-px bg-gold mx-auto mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Chef image */}
          <div className="animate-on-scroll delay-1 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
              alt="The culinary art"
              className="w-full h-80 md:h-[28rem] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Text */}
          <div>
            <p className="animate-on-scroll delay-2 text-cream/70 text-base md:text-lg font-light leading-relaxed mb-8">
              {t('philosophy.p1')}
            </p>
            <p className="animate-on-scroll delay-3 text-cream/70 text-base md:text-lg font-light leading-relaxed">
              {t('philosophy.p2')}
            </p>
          </div>
        </div>

        <div className="animate-on-scroll delay-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="font-heading text-4xl text-gold">15</span>
            <p className="text-cream/50 text-sm mt-2 tracking-wider uppercase">{t('philosophy.stat1')}</p>
          </div>
          <div>
            <span className="font-heading text-4xl text-gold">2</span>
            <p className="text-cream/50 text-sm mt-2 tracking-wider uppercase">{t('philosophy.stat2')}</p>
          </div>
          <div>
            <span className="font-heading text-4xl text-gold">100%</span>
            <p className="text-cream/50 text-sm mt-2 tracking-wider uppercase">{t('philosophy.stat3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
