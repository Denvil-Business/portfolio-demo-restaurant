import { useLanguage } from '../i18n'

const AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const { t } = useLanguage()
  const reviews = t('reviews.items').map((r, i) => ({ ...r, avatar: AVATARS[i], stars: 5 }))

  return (
    <section id="avis" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center animate-on-scroll">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">{t('reviews.label')}</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mt-4 mb-4">
            {t('reviews.title')}
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-16" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`animate-scale-in delay-${i + 1} bg-dark-lighter border border-gold/10 p-8 md:p-10 hover:border-gold/30 transition-colors duration-500`}
            >
              <Stars count={r.stars} />
              <p className="text-cream/60 font-light text-sm leading-relaxed mb-6 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-10 h-10 rounded-full object-cover border border-gold/30"
                />
                <span className="text-cream/80 text-sm tracking-wider">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
