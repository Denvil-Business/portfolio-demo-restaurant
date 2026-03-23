import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-dark-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center animate-on-scroll">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Nous trouver</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mt-4 mb-4">
            Réservation & Contact
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-16" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <div className="animate-on-scroll delay-1 space-y-8">
            <div>
              <h3 className="font-heading text-2xl text-gold mb-3">Adresse</h3>
              <p className="text-cream/60 font-light leading-relaxed">
                42, Rue du Faubourg Saint-Honoré<br />
                75008 Paris, France
              </p>
            </div>
            <div>
              <h3 className="font-heading text-2xl text-gold mb-3">Horaires</h3>
              <p className="text-cream/60 font-light leading-relaxed">
                Mardi – Samedi : 19h00 – 23h00<br />
                Dimanche : 12h00 – 14h30 (brunch)<br />
                Lundi : Fermé
              </p>
            </div>
            <div>
              <h3 className="font-heading text-2xl text-gold mb-3">Téléphone</h3>
              <p className="text-cream/60 font-light">+33 1 42 68 93 17</p>
            </div>
            <div>
              <h3 className="font-heading text-2xl text-gold mb-3">Email</h3>
              <p className="text-cream/60 font-light">reservation@lecomptoirdore.fr</p>
            </div>
          </div>

          {/* Form */}
          <div className="animate-on-scroll delay-2">
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <span className="font-heading text-5xl text-gold">Merci</span>
                  <p className="text-cream/60 mt-4 font-light">
                    Votre demande a bien été envoyée.<br />
                    Nous vous recontacterons sous 24h.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream/50 text-xs tracking-widest uppercase mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-gold/30 text-cream py-3 px-1 font-light focus:outline-none focus:border-gold transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-cream/50 text-xs tracking-widest uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-gold/30 text-cream py-3 px-1 font-light focus:outline-none focus:border-gold transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-cream/50 text-xs tracking-widest uppercase mb-2">
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    className="w-full bg-transparent border-b border-gold/30 text-cream py-3 px-1 font-light focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-cream/50 text-xs tracking-widest uppercase mb-2">
                    Nombre de convives
                  </label>
                  <select
                    className="w-full bg-dark-light border-b border-gold/30 text-cream py-3 px-1 font-light focus:outline-none focus:border-gold transition-colors duration-300"
                  >
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5">5 personnes</option>
                    <option value="6">6 personnes</option>
                    <option value="7+">7+ personnes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-cream/50 text-xs tracking-widest uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-transparent border-b border-gold/30 text-cream py-3 px-1 font-light focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                    placeholder="Allergies, occasions spéciales..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-dark font-medium text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 mt-4"
                >
                  Envoyer la demande
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
