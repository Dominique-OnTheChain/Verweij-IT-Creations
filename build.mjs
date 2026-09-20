import { mkdir, writeFile } from 'node:fs/promises'

const origin = 'https://www.itcreations.nl'
const email = 'verweij@itcreations.nl'
const year = new Date().getUTCFullYear()

const copy = {
  nl: {
    nav: { home: 'Home', ideas: 'Ideeën', privacy: 'Privacy' },
    emailLabel: 'Mail ons',
    footer: 'Een plek voor nieuwe ideeën in software en AI.',
    home: {
      title: 'Verweij IT Creations — software en AI verkennen',
      description: 'Verweij IT Creations verkent nieuwe manieren om software en AI samen te brengen.',
      eyebrow: 'Verweij IT Creations',
      heading: 'Een nieuwe grens voor <em>software en AI.</em>',
      lead: 'We verkennen nieuwe manieren om software en AI samen te brengen. Het is een nieuwe grens vol mogelijkheden — en we laten binnenkort zien welke ideeën daaruit ontstaan.',
      primary: 'Ontdek onze ideeën',
      secondary: 'Neem contact op',
      noteLabel: 'Binnenkort',
      noteHeading: 'Ideeën in ontwikkeling',
      noteText: 'Van slimmere werkprocessen tot creativiteit met AI: we bouwen, testen en leren. Onze eerste verkenningen hebben al een gezicht gekregen.',
      founderLabel: 'Persoonlijk',
      founderHeading: 'De mens achter de ideeën.',
      founderText: 'Ik ben Dominique Verweij. Vanuit Verweij IT Creations verken ik hoe software en AI elkaar kunnen versterken. Nieuwsgierigheid en praktische experimenten vormen daarbij het vertrekpunt.',
      founderAlt: 'Portret van Dominique Verweij'
    },
    ideas: {
      title: 'Onze ideeën — Verweij IT Creations',
      description: 'Maak kennis met Puck, Theseus en Feste: ideeën die wij ontwikkelen op het snijvlak van software en AI.',
      eyebrow: 'Onze verkenningen',
      heading: 'Ideeën met een <em>eigen karakter.</em>',
      lead: 'Drie projecten waarmee we ontdekken wat software en AI samen kunnen betekenen. Ze zijn in ontwikkeling; binnenkort laten we meer zien.',
      status: 'In ontwikkeling',
      projects: [
        { name: 'Puck', image: 'puck.png', accent: 'green', alt: 'Puck, een kleine robot met groene ogen en een lichtbol', description: 'Een verkenning van hoe werk rondom softwareontwikkeling en teams slimmer kan worden gecoördineerd.' },
        { name: 'Theseus', image: 'theseus.png', accent: 'blue', alt: 'Theseus, een kleine robot in blauw en gouden harnas', description: 'Een verkenning van gestructureerd testen en het valideren van software met hulp van AI.' },
        { name: 'Feste', image: 'feste.png', accent: 'violet', alt: 'Feste, een kleine robot in paars en goud met een trompet', description: 'Een verkenning van creatieve content, ondersteund door AI en voorbereid voor sociale media.' }
      ],
      endHeading: 'Meer volgt binnenkort.',
      endText: 'We delen onze ideeën zodra ze klaar zijn om getoond te worden.'
    },
    privacy: {
      title: 'Privacyverklaring — Verweij IT Creations',
      description: 'Lees hoe Verweij IT Creations persoonsgegevens verwerkt op deze website en in Feste.',
      eyebrow: 'Privacy',
      heading: 'Uw gegevens, <em>helder uitgelegd.</em>',
      lead: 'Deze verklaring beschrijft de openbare website en Feste, onze toepassing voor het maken en publiceren van content.',
      updated: 'Laatst bijgewerkt: 20 september 2026',
      sections: [
        ['Wie verantwoordelijk is', `Verweij IT Creations Beheer B.V. is verantwoordelijk voor de verwerking die hier wordt beschreven. Voor vragen of verzoeken kunt u mailen naar <a href="mailto:${email}">${email}</a>.`],
        ['Deze website', 'Deze website bevat openbare informatie. Wij gebruiken hier geen account, contactformulier, advertentietrackers of analysepixels. Als u ons mailt, gebruiken wij uw naam, e-mailadres en bericht om uw vraag te beantwoorden. GitHub Pages host de website en kan IP-adressen van bezoekers vastleggen voor beveiliging.'],
        ['Feste-accounts en content', 'Voor een Feste-account bewaren wij uw e-mailadres, weergavenaam, wachtwoordhash en gegevens die nodig zijn voor tweestapsverificatie en sessies. Feste bewaart gesprekken met de contentmaker, concepten, geüploade foto’s en video’s, en de historie van publicaties. Deze gegevens gebruiken wij om u aan te melden, content te maken en uw gekozen publicaties uit te voeren.'],
        ['Sociale accounts', 'Wanneer u een sociaal account koppelt, ontvangen wij accountgegevens en toegestane rechten van het platform. Toegangstokens worden apart van de applicatiedatabase in een beveiligde geheimenopslag bewaard. Feste gebruikt ze om de accounts te tonen die u kunt beheren en om berichten naar door u gekozen bestemmingen te publiceren. Het verwijderen van een koppeling in Feste trekt de toestemming bij het sociale platform niet automatisch in.'],
        ['AI en externe diensten', 'Als u de AI-functies van Feste gebruikt, wordt de inhoud die nodig is voor uw verzoek verzonden naar de gekozen AI-aanbieder, OpenAI of Anthropic. Bij publicatie wordt uw gekozen bericht en eventuele media verzonden naar het geselecteerde sociale platform. GitHub Pages host deze website. Deze externe diensten verwerken gegevens onder hun eigen voorwaarden en privacyverklaringen.'],
        ['Bewaren en verwijderen', 'Wij bewaren accountgegevens en content zolang ze nodig zijn om de gevraagde dienst te leveren of om aan toepasselijke verplichtingen te voldoen. U kunt in Feste gekoppelde accounts, media, gesprekken en concepten verwijderen. Een al op een sociaal platform gepubliceerd bericht blijft daar staan totdat u het bij dat platform verwijdert. Voor andere verwijderingsverzoeken kunt u ons mailen. Sessies verlopen automatisch; technische back-ups kunnen tijdelijk langer bestaan.'],
        ['Uw rechten', `U kunt vragen om inzage, correctie, verwijdering, beperking of overdracht van uw gegevens, of bezwaar maken tegen een verwerking. Mail daarvoor naar <a href="mailto:${email}">${email}</a>. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.`]
      ]
    }
  },
  en: {
    nav: { home: 'Home', ideas: 'Ideas', privacy: 'Privacy' },
    emailLabel: 'Email us',
    footer: 'A home for new ideas in software and AI.',
    home: {
      title: 'Verweij IT Creations — exploring software and AI',
      description: 'Verweij IT Creations explores new ways to bring software and AI together.',
      eyebrow: 'Verweij IT Creations',
      heading: 'A new frontier for <em>software and AI.</em>',
      lead: 'We explore new ways to bring software and AI together. It is a new frontier full of possibilities — and we will soon showcase the ideas taking shape along the way.',
      primary: 'Explore our ideas',
      secondary: 'Get in touch',
      noteLabel: 'Coming soon',
      noteHeading: 'Ideas in the making',
      noteText: 'From smarter workflows to creativity with AI, we build, test, and learn. Our first explorations already have a character of their own.',
      founderLabel: 'A personal note',
      founderHeading: 'The person behind the ideas.',
      founderText: 'I am Dominique Verweij. Through Verweij IT Creations, I explore how software and AI can strengthen one another. Curiosity and practical experiments are where it all begins.',
      founderAlt: 'Portrait of Dominique Verweij'
    },
    ideas: {
      title: 'Our ideas — Verweij IT Creations',
      description: 'Meet Puck, Theseus, and Feste: ideas we are developing where software and AI meet.',
      eyebrow: 'Our explorations',
      heading: 'Ideas with a <em>character of their own.</em>',
      lead: 'Three projects that help us explore what software and AI can do together. They are works in progress; we will share more soon.',
      status: 'In development',
      projects: [
        { name: 'Puck', image: 'puck.png', accent: 'green', alt: 'Puck, a small robot with green eyes and a glowing orb', description: 'An exploration of smarter ways to coordinate software development work and team handoffs.' },
        { name: 'Theseus', image: 'theseus.png', accent: 'blue', alt: 'Theseus, a small robot in blue and gold armor', description: 'An exploration of structured software testing and validation with help from AI.' },
        { name: 'Feste', image: 'feste.png', accent: 'violet', alt: 'Feste, a small robot in purple and gold with a trumpet', description: 'An exploration of creative content assisted by AI and prepared for social publishing.' }
      ],
      endHeading: 'More to come soon.',
      endText: 'We will share our ideas as soon as they are ready to be seen.'
    },
    privacy: {
      title: 'Privacy notice — Verweij IT Creations',
      description: 'How Verweij IT Creations handles personal data on this website and in Feste.',
      eyebrow: 'Privacy',
      heading: 'Your data, <em>explained clearly.</em>',
      lead: 'This notice covers the public website and Feste, our application for creating and publishing content.',
      updated: 'Last updated: 20 September 2026',
      sections: [
        ['Who is responsible', `Verweij IT Creations Beheer B.V. is responsible for the processing described here. For questions or requests, email <a href="mailto:${email}">${email}</a>.`],
        ['This website', 'This website presents public information. We do not use accounts, contact forms, advertising trackers, or analytics pixels here. If you email us, we use your name, email address, and message to reply. GitHub Pages hosts this website and may log visitor IP addresses for security.'],
        ['Feste accounts and content', 'For a Feste account, we store your email address, display name, password hash, and information needed for two-factor authentication and sessions. Feste stores content creator conversations, drafts, uploaded photos and videos, and publication history. We use this information to sign you in, create content, and carry out the publications you choose.'],
        ['Social accounts', 'When you connect a social account, we receive account details and permissions granted by the platform. Access tokens are kept in a protected secrets store separate from the application database. Feste uses them to show the accounts you can manage and to publish posts to destinations you select. Removing a connection in Feste does not automatically revoke the platform’s authorization.'],
        ['AI and external services', 'When you use Feste’s AI features, the content needed for your request is sent to the selected AI provider, OpenAI or Anthropic. When you publish, your chosen post and any media are sent to the selected social platform. GitHub Pages hosts this website. These external services process information under their own terms and privacy notices.'],
        ['Retention and deletion', 'We keep account information and content for as long as needed to provide the requested service or meet applicable obligations. In Feste, you can remove connected accounts, media, conversations, and drafts. A post already published to a social platform remains there until you remove it on that platform. Email us for other deletion requests. Sessions expire automatically; technical backups may remain for a limited time.'],
        ['Your rights', `You may request access, correction, deletion, restriction, or portability of your data, or object to processing. Email <a href="mailto:${email}">${email}</a> to make a request. You may also complain to the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).`]
      ]
    }
  }
}

const fileName = page => page === 'home' ? '' : `${page}.html`

function layout(lang, page, body) {
  const c = copy[lang]
  const current = c[page]
  const assetRoot = lang === 'en' ? '../assets/' : 'assets/'
  const languageHref = target => target === lang
    ? (fileName(page) || './')
    : (lang === 'nl' ? `en/${fileName(page)}` : `../${fileName(page)}`)
  const canonicalPath = `${lang === 'en' ? '/en' : ''}/${fileName(page)}`
  const alternatePath = `${lang === 'nl' ? '/en' : ''}/${fileName(page)}`
  const nav = key => `<a href="${fileName(key) || './'}"${page === key ? ' aria-current="page"' : ''}>${c.nav[key]}</a>`

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0a1031">
  <meta name="description" content="${current.description}">
  <title>${current.title}</title>
  <link rel="icon" type="image/jpeg" href="${assetRoot}images/Icon.jpg">
  <link rel="canonical" href="${origin}${canonicalPath}">
  <link rel="alternate" hreflang="${lang === 'nl' ? 'en' : 'nl'}" href="${origin}${alternatePath}">
  <link rel="stylesheet" href="${assetRoot}site.css">
</head>
<body>
  <div class="site-shell">
    <header class="site-header">
      <div class="header-left">
        <nav class="language-switch" aria-label="Language / Taal">
          <a href="${languageHref('nl')}" lang="nl" hreflang="nl"${lang === 'nl' ? ' aria-current="true"' : ''}><span aria-hidden="true">🇳🇱</span><span>NL</span></a>
          <a href="${languageHref('en')}" lang="en" hreflang="en"${lang === 'en' ? ' aria-current="true"' : ''}><span aria-hidden="true">🇬🇧</span><span>EN</span></a>
        </nav>
        <a class="wordmark" href="./" aria-label="Verweij IT Creations — ${c.nav.home}"><img src="${assetRoot}images/logo.png" alt="Verweij IT Creations" width="220" height="44"></a>
      </div>
      <nav class="primary-nav" aria-label="${lang === 'nl' ? 'Hoofdnavigatie' : 'Main navigation'}">${nav('home')}${nav('ideas')}</nav>
    </header>
    <main id="main-content">${body}</main>
    <footer class="site-footer">
      <div><span class="footer-brand">Verweij IT Creations</span><p>${c.footer}</p><small>© ${year} Verweij IT Creations Beheer B.V.</small></div>
      <div class="footer-links"><a href="mailto:${email}">${email}</a><a href="privacy.html">${c.nav.privacy}</a></div>
    </footer>
  </div>
</body>
</html>
`
}

function home(lang) {
  const c = copy[lang].home
  return `<section class="hero" aria-labelledby="hero-title">
    <div class="hero-orbit hero-orbit-one" aria-hidden="true"></div><div class="hero-orbit hero-orbit-two" aria-hidden="true"></div>
    <div class="hero-content"><p class="eyebrow"><span class="eyebrow-line"></span>${c.eyebrow}</p>
      <h1 id="hero-title">${c.heading}</h1><p class="hero-lead">${c.lead}</p>
      <div class="hero-actions"><a class="button button-primary" href="ideas.html">${c.primary}<span aria-hidden="true">↗</span></a><a class="button button-quiet" href="mailto:${email}">${c.secondary}</a></div>
    </div>
    <div class="hero-index" aria-hidden="true"><span>01 / 03</span><span>${lang === 'nl' ? 'IDEEËN IN BEWEGING' : 'IDEAS IN MOTION'}</span></div>
  </section>
  <section class="intro-panel" aria-labelledby="intro-title"><div><p class="section-kicker">${c.noteLabel}</p><h2 id="intro-title">${c.noteHeading}</h2></div><p>${c.noteText}</p></section>
  <section class="founder-panel" aria-labelledby="founder-title"><div class="founder-copy"><p class="section-kicker">${c.founderLabel}</p><h2 id="founder-title">${c.founderHeading}</h2><p>${c.founderText}</p><a href="mailto:${email}">${c.secondary} <span aria-hidden="true">↗</span></a></div><div class="founder-image"><img src="${lang === 'en' ? '../' : ''}assets/images/DSC_1056.jpg" alt="${c.founderAlt}" width="1200" height="1800" loading="lazy"></div></section>`
}

function ideas(lang) {
  const c = copy[lang].ideas
  const assetRoot = lang === 'en' ? '../assets/' : 'assets/'
  const cards = c.projects.map((item, index) => `<article class="idea-card idea-card-${item.accent}">
    <div class="idea-image"><img src="${assetRoot}images/${item.image}" alt="${item.alt}" width="600" height="600" loading="${index === 0 ? 'eager' : 'lazy'}"></div>
    <div class="idea-copy"><div class="idea-topline"><span>${String(index + 1).padStart(2, '0')} / 03</span><span class="status"><span class="status-dot" aria-hidden="true"></span>${c.status}</span></div><h2>${item.name}</h2><p>${item.description}</p></div>
  </article>`).join('')
  return `<section class="page-intro" aria-labelledby="ideas-title"><p class="eyebrow"><span class="eyebrow-line"></span>${c.eyebrow}</p><h1 id="ideas-title">${c.heading}</h1><p>${c.lead}</p></section>
    <section class="ideas-grid" aria-label="${c.eyebrow}">${cards}</section>
    <section class="closing-note"><span class="closing-symbol" aria-hidden="true">✦</span><h2>${c.endHeading}</h2><p>${c.endText}</p></section>`
}

function privacy(lang) {
  const c = copy[lang].privacy
  const sections = c.sections.map(([heading, text]) => `<section class="policy-section"><h2>${heading}</h2><p>${text}</p></section>`).join('')
  return `<section class="page-intro policy-intro"><p class="eyebrow"><span class="eyebrow-line"></span>${c.eyebrow}</p><h1>${c.heading}</h1><p>${c.lead}</p><span class="updated">${c.updated}</span></section><div class="policy-content">${sections}</div>`
}

const pages = { home, ideas, privacy }
await mkdir('en', { recursive: true })
for (const lang of ['nl', 'en']) {
  for (const [page, render] of Object.entries(pages)) {
    const filename = page === 'home' ? 'index.html' : `${page}.html`
    const path = lang === 'en' ? `en/${filename}` : filename
    await writeFile(path, layout(lang, page, render(lang)))
  }
}
