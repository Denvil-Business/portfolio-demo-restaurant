const dishes = [
  {
    name: 'Symphonie de Saint-Jacques',
    desc: 'Noix de Saint-Jacques snackées, émulsion de truffe noire, céleri en trois textures et jus de volaille réduit.',
    price: '48€',
    img: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=400&q=80',
  },
  {
    name: 'Le Filet Rossini Revisité',
    desc: 'Filet de bœuf Wagyu français, foie gras poêlé, jus au madère et pommes soufflées maison.',
    price: '62€',
    img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80',
  },
  {
    name: 'Homard Bleu en Déclinaison',
    desc: 'Homard breton rôti au beurre d\'agrumes, bisque crémeuse, raviole ouverte aux herbes fines.',
    price: '56€',
    img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80',
  },
  {
    name: 'Sphère Chocolat & Or',
    desc: 'Sphère en chocolat grand cru, cœur coulant caramel au beurre salé, feuille d\'or 24 carats et sorbet passion.',
    price: '28€',
    img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80',
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-dark-light">
      <div className="max-w-5xl mx-auto">
        <div className="text-center animate-on-scroll">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Saveurs d&apos;exception</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mt-4 mb-4">
            Nos Plats Signatures
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-16" />
        </div>

        <div className="space-y-0">
          {dishes.map((dish, i) => (
            <div
              key={dish.name}
              className={`animate-on-scroll delay-${i + 1} group border-b border-gold/10 py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8`}
            >
              <div className="w-full md:w-28 h-48 md:h-28 flex-shrink-0 overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-between md:justify-start gap-4">
                  <h3 className="font-heading text-2xl md:text-3xl text-cream group-hover:text-gold transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <span className="font-heading text-xl md:text-2xl text-gold flex-shrink-0">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-3 text-cream/50 font-light text-sm md:text-base leading-relaxed max-w-xl">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll text-center mt-16">
          <p className="text-cream/40 text-sm italic font-light">
            Menu dégustation 7 services — 120€ &nbsp;|&nbsp; Accord mets & vins — 65€
          </p>
        </div>
      </div>
    </section>
  )
}
