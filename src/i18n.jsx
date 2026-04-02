import { createContext, useContext, useState, useCallback } from 'react'

const translations = {
  fr: {
    nav: {
      links: ['Philosophie', 'Menu', 'Avis', 'Contact'],
      hrefs: ['#philosophie', '#menu', '#avis', '#contact'],
      cta: 'Réserver',
    },
    hero: {
      sub: 'Restaurant Gastronomique — Paris',
      title1: 'Le Comptoir',
      title2: 'Doré',
      desc: "Une expérience culinaire d'exception, où chaque plat raconte une histoire et chaque saveur éveille les sens.",
      cta: 'Réserver une table',
      scroll: 'Découvrir',
    },
    philosophy: {
      label: 'Notre histoire',
      title: 'Notre Philosophie',
      p1: "Au Comptoir Doré, nous croyons que la gastronomie est un art vivant. Notre chef, formé dans les plus grandes maisons parisiennes, compose chaque assiette comme un tableau — alliant produits d'exception, techniques ancestrales et créativité audacieuse.",
      p2: "Nos producteurs sont triés sur le volet : maraîchers d'Île-de-France, pêcheurs bretons, éleveurs du Pays basque. Chaque ingrédient a une provenance, une histoire, un sens.",
      stat1: "Années d'excellence",
      stat2: 'Étoiles Michelin',
      stat3: 'Produits français',
    },
    menu: {
      label: "Saveurs d'exception",
      title: 'Nos Plats Signatures',
      tasting: 'Menu dégustation 7 services — 120€',
      pairing: 'Accord mets & vins — 65€',
      dishes: [
        {
          name: 'Symphonie de Saint-Jacques',
          desc: 'Noix de Saint-Jacques snackées, émulsion de truffe noire, céleri en trois textures et jus de volaille réduit.',
          price: '48€',
        },
        {
          name: 'Le Filet Rossini Revisité',
          desc: "Filet de bœuf Wagyu français, foie gras poêlé, jus au madère et pommes soufflées maison.",
          price: '62€',
        },
        {
          name: 'Homard Bleu en Déclinaison',
          desc: "Homard breton rôti au beurre d'agrumes, bisque crémeuse, raviole ouverte aux herbes fines.",
          price: '56€',
        },
        {
          name: 'Sphère Chocolat & Or',
          desc: "Sphère en chocolat grand cru, cœur coulant caramel au beurre salé, feuille d'or 24 carats et sorbet passion.",
          price: '28€',
        },
      ],
    },
    reviews: {
      label: 'Témoignages',
      title: "Ce Qu'en Disent Nos Hôtes",
      items: [
        { name: 'Isabelle M.', text: "Une soirée inoubliable. Le menu dégustation est un véritable voyage gustatif. Le service est attentionné sans être intrusif. On ressent la passion dans chaque assiette." },
        { name: 'François D.', text: "Le Filet Rossini revisité est probablement le meilleur plat que j'ai dégusté à Paris. Le cadre est somptueux et l'ambiance feutrée. Une adresse à ne pas manquer." },
        { name: 'Catherine & Jean-Pierre L.', text: "Nous avons fêté nos 30 ans de mariage ici et tout était parfait. La Sphère Chocolat & Or a émerveillé toute la table. Merci pour ce moment magique." },
      ],
    },
    contact: {
      label: 'Nous trouver',
      title: 'Réservation & Contact',
      address: 'Adresse',
      hours: 'Horaires',
      hoursText: 'Mardi – Samedi : 19h00 – 23h00\nDimanche : 12h00 – 14h30 (brunch)\nLundi : Fermé',
      phone: 'Téléphone',
      email: 'Email',
      nameLabel: 'Nom',
      emailLabel: 'Email',
      dateLabel: 'Date souhaitée',
      guestsLabel: 'Nombre de convives',
      messageLabel: 'Message',
      messagePlaceholder: 'Allergies, occasions spéciales...',
      submit: 'Envoyer la demande',
      thankYou: 'Merci',
      thankYouSub: 'Votre demande a bien été envoyée.\nNous vous recontacterons sous 24h.',
      guestOptions: ['2 personnes', '3 personnes', '4 personnes', '5 personnes', '6 personnes', '7+ personnes'],
    },
    footer: {
      navTitle: 'Navigation',
      navLinks: ['Philosophie', 'Menu', 'Avis', 'Contact'],
      navHrefs: ['philosophie', 'menu', 'avis', 'contact'],
      followUs: 'Suivez-nous',
      desc: "Restaurant gastronomique au cœur de Paris. Une cuisine d'excellence depuis 2010.",
      rights: '© 2025 Le Comptoir Doré. Tous droits réservés.',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
    },
  },
  en: {
    nav: {
      links: ['Philosophy', 'Menu', 'Reviews', 'Contact'],
      hrefs: ['#philosophie', '#menu', '#avis', '#contact'],
      cta: 'Reserve',
    },
    hero: {
      sub: 'Gastronomic Restaurant — Paris',
      title1: 'Le Comptoir',
      title2: 'Doré',
      desc: "An exceptional culinary experience where every dish tells a story and every flavor awakens the senses.",
      cta: 'Reserve a table',
      scroll: 'Discover',
    },
    philosophy: {
      label: 'Our story',
      title: 'Our Philosophy',
      p1: "At Le Comptoir Doré, we believe gastronomy is a living art. Our chef, trained in Paris's finest establishments, composes each plate like a painting — combining exceptional produce, ancestral techniques and bold creativity.",
      p2: "Our producers are carefully selected: market gardeners from Île-de-France, Breton fishermen, farmers from the Basque Country. Each ingredient has a provenance, a story, a purpose.",
      stat1: 'Years of excellence',
      stat2: 'Michelin stars',
      stat3: 'French produce',
    },
    menu: {
      label: 'Exceptional flavors',
      title: 'Our Signature Dishes',
      tasting: 'Tasting menu 7 courses — €120',
      pairing: 'Wine pairing — €65',
      dishes: [
        {
          name: 'Saint-Jacques Symphony',
          desc: 'Seared scallops, black truffle emulsion, celeriac three ways and reduced poultry jus.',
          price: '€48',
        },
        {
          name: 'Rossini Filet Revisited',
          desc: 'French Wagyu beef tenderloin, pan-fried foie gras, Madeira jus and homemade soufflé potatoes.',
          price: '€62',
        },
        {
          name: 'Blue Lobster Variations',
          desc: 'Breton lobster roasted in citrus butter, creamy bisque, open herb raviole.',
          price: '€56',
        },
        {
          name: 'Chocolate & Gold Sphere',
          desc: 'Grand cru chocolate sphere, salted caramel lava center, 24-carat gold leaf and passion sorbet.',
          price: '€28',
        },
      ],
    },
    reviews: {
      label: 'Testimonials',
      title: 'What Our Guests Say',
      items: [
        { name: 'Isabelle M.', text: "An unforgettable evening. The tasting menu is a true gastronomic journey. The service is attentive without being intrusive. You can feel the passion in every dish." },
        { name: 'François D.', text: "The Rossini Filet revisited is probably the best dish I've ever tasted in Paris. The setting is sumptuous and the atmosphere intimate. A must-visit address." },
        { name: 'Catherine & Jean-Pierre L.', text: "We celebrated our 30th wedding anniversary here and everything was perfect. The Chocolate & Gold Sphere amazed the whole table. Thank you for this magical moment." },
      ],
    },
    contact: {
      label: 'Find us',
      title: 'Reservation & Contact',
      address: 'Address',
      hours: 'Opening hours',
      hoursText: 'Tuesday – Saturday: 7:00 PM – 11:00 PM\nSunday: 12:00 PM – 2:30 PM (brunch)\nMonday: Closed',
      phone: 'Phone',
      email: 'Email',
      nameLabel: 'Name',
      emailLabel: 'Email',
      dateLabel: 'Preferred date',
      guestsLabel: 'Number of guests',
      messageLabel: 'Message',
      messagePlaceholder: 'Allergies, special occasions...',
      submit: 'Send request',
      thankYou: 'Thank you',
      thankYouSub: 'Your request has been sent.\nWe will get back to you within 24h.',
      guestOptions: ['2 guests', '3 guests', '4 guests', '5 guests', '6 guests', '7+ guests'],
    },
    footer: {
      navTitle: 'Navigation',
      navLinks: ['Philosophy', 'Menu', 'Reviews', 'Contact'],
      navHrefs: ['philosophie', 'menu', 'avis', 'contact'],
      followUs: 'Follow us',
      desc: "Gastronomic restaurant in the heart of Paris. Excellence in cuisine since 2010.",
      rights: '© 2025 Le Comptoir Doré. All rights reserved.',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
    },
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => (navigator.language || navigator.userLanguage || '').startsWith('fr') ? 'fr' : 'en'
  )

  const t = useCallback((key) => {
    const keys = key.split('.')
    let val = translations[lang]
    for (const k of keys) {
      if (val == null) return key
      val = val[k]
    }
    return val ?? key
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
