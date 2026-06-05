import { useEffect, useMemo, useRef, useState } from 'react'
import helixMotifSrc from '../assets/images/genyxz-first-helix-photo-preserved.svg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {
  IconArrow,
  IconArrowUpRight,
  IconCheck,
  IconHeartUsers,
  IconInstagram,
  IconMentor,
  IconNetwork,
  IconPulseCore,
  IconShield,
  IconSpark,
} from '../components/Icons'

const ambassadorLandingUrl = '/postani-ambasador'

const homeWhy = [
  'Tehnologija in znanost napredujeta hitreje kot kadarkoli.',
  'Rešitve za boljše zdravje že obstajajo, a jih večina ljudi še ne pozna ali ne razume.',
  'GenYXZ povezuje znanje, ljudi in prakso na način, ki je razumljiv vsakomur.',
]

const workCards = [
  'Širimo znanje o sodobnih pristopih k zdravju.',
  'Organiziramo pogovore, predstavitve in manjše dogodke.',
  'Povezujemo ljudi z relevantnimi informacijami.',
  'Gradimo skupnosti v lokalnem okolju.',
]

const practiceItems = [
  {
    body: 'Ljudem na razumljiv način predstavimo nove možnosti na področju preventive, zdravja in dolgoročne zaščite.',
    title: 'Približujemo sodobne pristope k zdravju',
  },
  {
    body: 'Spodbujamo razmišljanje o tem, kako lahko vsak posameznik že danes naredi več za svojo zdravstveno zaščito.',
    title: 'Odpiramo pomembne pogovore',
  },
  {
    body: 'Pomagamo posameznikom poiskati preverjene informacije ter jih usmerjamo do vsebin in rešitev, ki jim lahko koristijo.',
    title: 'Povezujemo ljudi z informacijami in rešitvami',
  },
  {
    body: 'Povezujemo ljudi s podobnimi interesi ter ustvarjamo okolje za izmenjavo izkušenj, znanja in dobrih praks.',
    title: 'Gradimo skupnosti zaupanja',
  },
  {
    body: 'Ljudem pomagamo razumeti različne možnosti, ki so na voljo, kar jim omogoča, da sprejemajo boljše odločitve glede zaščite svojega zdravja.',
    title: 'Pomagamo pri boljših odločitvah',
  },
  {
    body: 'Smo del generacije, ki povezuje ljudi, znanje in sodobne pristope k zdravju ter pomagamo graditi bolj informirano družbo.',
    title: 'Soustvarjamo prihodnost zdravja',
  },
]

const workPillars = [
  {
    body: 'Znanje, ki bi moralo biti vsakdanje, a pogosto ostaja skrito za strokovnim jezikom. Ambasadorji ga prevajajo v razumljive pogovore.',
    heading: 'Širimo znanje o sodobnih pristopih k zdravju',
    icon: <IconSpark />,
    id: 'one',
    number: '01',
  },
  {
    body: 'Od preventivnih rešitev do sodobnih zdravstvenih storitev. Ambasador usmerja, ne prodaja.',
    heading: 'Povezujemo ljudi z relevantnimi informacijami',
    icon: <IconNetwork />,
    id: 'two',
    number: '02',
  },
  {
    body: 'Majhni dogodki, predstavitve, neformalna srečanja. Kjer se ljudje lahko vprašajo, ne da bi se počutili neumno.',
    heading: 'Organiziramo pogovore in dogodke',
    icon: <IconHeartUsers />,
    id: 'three',
    number: '03',
  },
  {
    body: 'Sodobna medicina ponuja izjemne možnosti - a le, če ljudje vedo, da obstajajo. Mi poskrbimo, da izvedo.',
    heading: 'Gradimo mostove med stroko in vsakdanom',
    icon: <IconShield />,
    id: 'four',
    number: '04',
  },
]

const workScenarios = [
  {
    body: 'Ambasador organizira neformalno srečanje v svojem okolju - lahko je to predavanje, pogovorni večer ali interni dogodek. Tema: kako sodobne rešitve vplivajo na zdravje in dobro počutje. Format: sproščen, dostopen, brez pritiska.',
    id: 'one',
    title: 'Manjši dogodek ali predstavitev',
  },
  {
    body: 'Nekdo iz ambasadorjeve mreže postavi vprašanje o preventivi ali sodobnih zdravstvenih pristopih. Ambasador se pogovori, razloži, usmeri. Ne prodaja - povezuje z relevantnimi informacijami in partnerji.',
    id: 'two',
    title: 'Pogovor z nekom, ki ga tema zanima',
  },
  {
    body: 'Nekdo, ki je z ambasadorjevo pomočjo našel rešitev, želi svojo izkušnjo deliti naprej. Ambasador mu pomaga zgodbo oblikovati in jo ponese v širši krog - tako znanje potuje.',
    id: 'three',
    title: 'Zgodba stranke, ki želi deliti izkušnjo',
  },
]

const ambassadorTypes = [
  'Študenti',
  'Mladi profesionalci',
  'Posamezniki z ambicijo',
  'Družine in ljudje, ki to razumejo kot poslanstvo',
  'Ljudje, ki želijo več kot samo opazovati',
]

const gains = [
  'Komunikacijske veščine',
  'Samozavest v realnih situacijah',
  'Izkušnje z ljudmi in projekti',
  'Mentorsko podporo',
  'Mrežo ambicioznih posameznikov',
  'Dostop do znanja in trendov prihodnosti',
]

const partners = [
  { logo: '/locales/sl/images/Dr Best.svg', name: 'Dr Best', tone: 'brand-blue' },
  { logo: '/locales/sl/images/Abi.svg', name: 'Abi Health' },
  { logo: '/locales/sl/images/Further.svg', name: 'Further' },
  { logo: '/locales/sl/images/Teladoc Health.svg', name: 'Teladoc Health' },
  { logo: '/locales/sl/images/GenePlanet.svg', name: 'GenePlanet' },
  { logo: '/locales/sl/images/Axeria.svg', name: 'Axeria', tone: 'dark' },
]

const partnerSlides = [
  {
    description: 'Napredne genetske analize, ki posamezniku pomagajo bolje razumeti svoje telo, potencialna tveganja in možnosti za bolj informirane odločitve.',
    logo: '/locales/sl/images/GenePlanet.svg',
    name: 'GenePlanet',
    subtitle: 'Preventiva in genetika',
  },
  {
    description: 'Hiter dostop do zdravstvenega pogovora s slovenskimi zdravniki in strokovne podpore - 24/7.',
    logo: '/locales/sl/images/Abi.svg',
    name: 'Abi Global Health',
    subtitle: 'Digitalni dostop do zdravnika',
  },
  {
    description: 'Dostop do vodilnih medicinskih strokovnjakov in neodvisnega drugega mnenja in načrta zdravljenja pri zahtevnejših zdravstvenih primerih.',
    logo: '/locales/sl/images/Teladoc Health.svg',
    name: 'Teladoc Health - Best Doctors',
    subtitle: 'Ekspertno drugo mnenje',
  },
  {
    description: 'Podpora pri iskanju najboljših možnosti zdravljenja v mednarodnem okolju in dostop do centrov odličnosti. Dostop do najnovejših kliničnih študij. S popolno organizacijsko in finančno podporo.',
    logo: '/locales/sl/images/Further.svg',
    name: 'Further',
    subtitle: 'Organizacija zdravljenja v tujini',
  },
  {
    description: 'Finančna zaščita posameznika in družine v primeru resnih zdravstvenih dogodkov. Mednarodna zavarovalna in pozavarovalna podpora, ki zagotavlja stabilnost in dolgoročno vzdržnost zdravstvenih rešitev.',
    logo: '/locales/sl/images/Axeria.svg',
    logoTone: 'axeria',
    name: 'Axeria IARD & Arch Reinsurance',
    subtitle: 'Zavarovalna zaščita',
  },
]

function PageHero({ actionHref, actionLabel, eyebrow, title, text }) {
  return (
    <section className="main-hero main-page-hero">
      <img alt="" aria-hidden="true" className="dna-helix main-hero-helix" src={helixMotifSrc} />
      <div className="site-container main-hero-grid">
        <div className="main-hero-copy">
          {eyebrow ? <p className="main-eyebrow" data-reveal data-reveal-style="clip">{eyebrow}</p> : null}
          <h1 data-reveal data-reveal-style="up" data-reveal-delay="80">{title}</h1>
          <p className="main-lead" data-reveal data-reveal-style="up" data-reveal-delay="180">{text}</p>
          {actionHref && actionLabel ? (
            <div className="main-actions" data-reveal data-reveal-style="up" data-reveal-delay="280">
              <a className="btn-premium main-btn-primary" href={actionHref}>
                {actionLabel} <IconArrowUpRight />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

function Card({ children, icon }) {
  return (
    <article className="main-card" data-reveal data-reveal-style="up">
      <span className="main-card-icon">{icon}</span>
      <p>{children}</p>
    </article>
  )
}

function HomePage() {
  return (
    <>
      <section id="home" className="main-hero">
        <img alt="" aria-hidden="true" className="dna-helix main-hero-helix" src={helixMotifSrc} />
        <div className="site-container main-hero-grid">
          <div className="main-hero-copy">
            <h1 data-reveal data-reveal-style="up">
              Nova generacija,<br />
              ki razume prihodnost zdravja.
            </h1>
            <p className="main-lead" data-reveal data-reveal-style="up" data-reveal-delay="150">
              Povezujemo znanje, ljudi in sodobne rešitve, ki spreminjajo način, kako razumemo zdravje.
            </p>
            <div className="main-actions" data-reveal data-reveal-style="up" data-reveal-delay="300">
              <a className="btn-premium main-btn-primary" href="/o-nas">Preberi več <IconArrow /></a>
              <a className="main-btn-secondary" href="/kaj-delamo">Kaj delamo</a>
            </div>
          </div>
        </div>
      </section>

      <section className="main-section main-section-soft">
        <div className="site-container home-why-layout">
          <h2 className="main-section-title home-why-title" data-reveal data-reveal-style="up">Živimo v času, ko se zdravje spreminja hitreje kot naše navade.</h2>
          <div className="main-card-grid main-card-grid-three home-why-card-grid">
            {homeWhy.map((item, index) => (
              <Card icon={[<IconPulseCore />, <IconShield />, <IconNetwork />][index]} key={item}>{item}</Card>
            ))}
          </div>
        </div>
      </section>

      <section className="main-section main-about-helix-section">
        <img alt="" aria-hidden="true" className="main-about-helix-bg" src={helixMotifSrc} />
        <div className="site-container main-about-helix-copy">
          <p className="main-eyebrow" data-reveal data-reveal-style="clip">Kaj je GenYXZ</p>
          <p className="main-rich-text" data-reveal data-reveal-style="up"><span className="brand-gradient-text">GenYXZ</span> je skupnost ljudi, ki razumejo, da prihodnost zdravja ne temelji samo na zdravljenju bolezni, ampak na razumevanju telesa, preventive in pravih odločitev ob pravem času.</p>
          <p className="main-rich-text" data-reveal data-reveal-style="up" data-reveal-delay="100">Naš cilj je preprost: povezati ljudi z znanjem in rešitvami, ki že obstajajo - a jih večina še ne pozna.</p>
        </div>
      </section>

      <section className="main-section main-section-soft" id="kaj-delamo">
        <div className="site-container">
          <h2 className="main-section-title" data-reveal data-reveal-style="up">Znanje približamo ljudem.</h2>
          <div className="main-card-grid">
            {workCards.map((item, index) => (
              <Card icon={[<IconSpark />, <IconHeartUsers />, <IconNetwork />, <IconMentor />][index]} key={item}>{item}</Card>
            ))}
          </div>
          <p className="main-closing-line" data-reveal data-reveal-style="up">Ne gre za klasično promocijo. Gre za razumevanje in prenos znanja.</p>
        </div>
      </section>

      <section className="main-section">
        <div className="site-container main-timeline-wrap">
          <h2 className="main-section-title" data-reveal data-reveal-style="up">Kako GenYXZ ambasadorji pomagamo ljudem</h2>
          <ol className="main-timeline">
            {practiceItems.map((item) => (
              <li data-reveal data-reveal-style="up" key={item.title}>
                <span>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="main-section main-ambassador-band home-ambassador-section">
        <div className="site-container main-centered">
          <h2 data-reveal data-reveal-style="up">Ambasadorji so ljudje, ki želijo razumeti več.</h2>
          <p className="main-lead" data-reveal data-reveal-style="up" data-reveal-delay="100">Naši ambasadorji so študenti, mladi profesionalci, posamezniki in družine z ambicijo. To so ljudje, ki radi delajo z ljudmi, želijo aktivno vplivati na okolje in vidijo zdravje kot področje prihodnosti.</p>
          <a className="btn-premium main-btn-primary home-ambassador-cta" href={ambassadorLandingUrl} data-reveal data-reveal-style="up" data-reveal-delay="180">Postani ambasador <IconArrowUpRight /></a>
        </div>
      </section>

      <section className="main-section">
        <div className="site-container main-centered main-final">
          <p data-reveal data-reveal-style="up">GenYXZ ni samo projekt.<br />Je platforma za ljudi, ki želijo razumeti prihodnost zdravja in jo približati drugim.</p>
          <div className="main-actions" data-reveal data-reveal-style="up" data-reveal-delay="120">
            <a className="main-btn-secondary" href="/o-nas">O nas</a>
            <a className="main-btn-secondary" href="/kaj-delamo">Kaj delamo</a>
          </div>
        </div>
      </section>
    </>
  )
}

function PartnerShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPartnerMenuOpen, setIsPartnerMenuOpen] = useState(false)
  const detailRef = useRef(null)
  const activePartner = partnerSlides[activeIndex]

  const selectPartner = (index) => {
    setActiveIndex(index)

    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
      window.setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    }
  }

  const selectPartnerFromDropdown = (index) => {
    setActiveIndex(index)
    setIsPartnerMenuOpen(false)
  }

  return (
    <section className="partnerji-showcase" id="partnerji">
      <div className="site-container partnerji-panel">
        <div className="partnerji-list-pane" data-reveal data-reveal-style="up">
          <p className="main-eyebrow">Partnerji</p>
          <h2 className="partnerji-list-title">Področja rešitev Dr<span className="brand-title-dot" aria-hidden="true" /> Best</h2>
          <div className={`partnerji-mobile-select ${isPartnerMenuOpen ? 'partnerji-mobile-select-open' : ''}`}>
            <span>Izberi področje</span>
            <button
              aria-controls="partnerji-mobile-options partnerji-detail"
              aria-expanded={isPartnerMenuOpen}
              className="partnerji-mobile-select-trigger"
              onClick={() => setIsPartnerMenuOpen((current) => !current)}
              type="button"
            >
              <span>{activePartner.name}</span>
            </button>
            <div
              className={`partnerji-mobile-options ${isPartnerMenuOpen ? 'partnerji-mobile-options-open' : ''}`}
              id="partnerji-mobile-options"
              role="listbox"
            >
              {partnerSlides.map((partner, index) => (
                <button
                  aria-selected={index === activeIndex}
                  className={index === activeIndex ? 'partnerji-mobile-option is-active' : 'partnerji-mobile-option'}
                  key={partner.name}
                  onClick={() => selectPartnerFromDropdown(index)}
                  role="option"
                  type="button"
                >
                  {partner.name}
                </button>
              ))}
            </div>
          </div>
          <div className="partnerji-list" role="tablist" aria-label="Partnerji">
            {partnerSlides.map((partner, index) => (
              <button
                aria-controls="partnerji-detail"
                aria-selected={index === activeIndex}
                className={index === activeIndex ? 'partnerji-list-item is-active' : 'partnerji-list-item'}
                key={partner.name}
                onClick={() => selectPartner(index)}
                role="tab"
                type="button"
              >
                <span>{partner.name}</span>
              </button>
            ))}
          </div>
        </div>

        <article
          className="partnerji-detail-pane"
          id="partnerji-detail"
          key={activePartner.name}
          ref={detailRef}
          role="tabpanel"
        >
          <img
            alt={activePartner.name}
            className={`partnerji-detail-logo ${activePartner.logoTone ? `partnerji-logo-${activePartner.logoTone}` : ''}`}
            src={activePartner.logo}
          />
          <h3>{activePartner.subtitle}</h3>
          <p>{activePartner.description}</p>
        </article>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <>
      <PageHero title="Gradimo razumevanje prihodnosti zdravja." text="GenYXZ povezuje ljudi, znanje in sodobne zdravstvene rešitve, ki spreminjajo način, kako skrbimo za svoje zdravje. Verjamemo, da prihodnost zdravja ne temelji le na zdravljenju bolezni, temveč predvsem na preventivi, zgodnjem ukrepanju, dostopu do pravih informacij in boljših odločitvah. Naš cilj je, da to znanje približamo ljudem na razumljiv, praktičen in dostopen način." />
      <section className="main-section">
        <div className="site-container main-split">
          <div>
            <h2 data-reveal data-reveal-style="up">Naša <span className="brand-gradient-text">vizija</span></h2>
            <div className="main-rich-text" data-reveal data-reveal-style="up" data-reveal-delay="80">
              <p>Gradimo skupnost ljudi, ki:</p>
              <ul className="main-text-list main-vision-list">
                <li><IconCheck />razume prihodnost zdravja,</li>
                <li><IconCheck />zna kompleksne teme razložiti preprosto,</li>
                <li><IconCheck />povezuje znanje, ljudi in prakso,</li>
                <li><IconCheck />ustvarja pozitiven vpliv v svojem okolju.</li>
              </ul>
              <p>Razvijamo ambasadorje znanja, zaupanja in odgovornega odnosa do zdravja.</p>
            </div>
          </div>
          <div>
            <h2 data-reveal data-reveal-style="up">Zakaj GenYXZ obstaja</h2>
            <div className="main-rich-text" data-reveal data-reveal-style="up" data-reveal-delay="80">
              <p>Živimo v času hitrega razvoja tehnologije, genetike, umetne inteligence in sodobne medicine.</p>
              <p>Danes obstajajo rešitve, ki lahko pomagajo pri zgodnejšem odkrivanju tveganj, hitrejšem dostopu do zdravniškega mnenja, organizaciji zdravljenja v tujini in boljši zdravstveni zaščiti.</p>
              <p>Problem ni več, ali rešitve obstajajo. Problem je, da jih večina ljudi ne pozna, ne razume ali ne ve, kako jih uporabiti.</p>
              <p>GenYXZ ambasadorji znajo povezovati znanje, prakso in rešitve.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="main-section main-section-soft about-ecosystem-section">
        <div className="site-container about-ecosystem-inner">
          <h2 className="main-section-title about-ecosystem-title" data-reveal data-reveal-style="up">Ekosistem partnerjev, ki oblikujejo prihodnost zdravja</h2>
          <p className="about-ecosystem-subtitle" data-reveal data-reveal-style="up" data-reveal-delay="80">Prihodnost zdravja ne gradi eno podjetje. Gradi jo <span className="brand-gradient-text">ekosistem</span>.</p>
          <div className="main-rich-text about-ecosystem-text" data-reveal data-reveal-style="up" data-reveal-delay="140">
            <p>Blagovna znamka Dr Best povezuje vodilne mednarodne partnerje s področja genetike, digitalnega zdravstva, ekspertnega drugega mnenja, precizne in personalizirane medicine in globalne zdravstvene zaščite.</p>
            <p>Skupaj ustvarjajo celovit zdravstveni ekosistem, ki posamezniku omogoča dostop do vrhunskih rešitev skozi vsa življenjska obdobja - od preventive do zdravljenja in dolgoročne zaščite.</p>
            <p>GenYXZ pomaga to prihodnost zdravja približati ljudem.</p>
          </div>
        </div>
      </section>
      <PartnerShowcase />
      <section className="main-section">
        <div className="site-container">
          <h2 className="main-section-title" data-reveal data-reveal-style="up">Kje je v tej zgodbi GenYXZ?</h2>
          <div className="main-rich-text main-section-intro" data-reveal data-reveal-style="up">
            <p>GenYXZ je skupnost ambasadorjev, ki pomaga ljudem razumeti prihodnost zdravja. Povezujemo posameznike z znanjem, informacijami in vrhunskimi globalnimi rešitvami, ki so bile še pred nekaj leti dostopne le redkim.</p>
            <p>Skozi pogovore, dogodke in skupnost gradijo most med sodobnimi zdravstvenimi možnostmi in ljudmi, ki jih lahko uporabijo za boljše odločitve, večjo varnost in boljšo kakovost življenja.</p>
            <p>Prihodnost zdravja ni odvisna samo od tehnologije, odvisna je tudi od ljudi, ki jo znajo približati drugim.</p>
          </div>
          <div className="partner-marquee" data-reveal data-reveal-style="up">
            <div className="partner-track">
              {[...partners, ...partners].map((partner, index) => (
                <span className={partner.tone ? `partner-logo-tile-${partner.tone}` : undefined} key={`${partner.name}-${index}`}>
                  <img alt={partner.name} src={partner.logo} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function WorkPage() {
  const quadrantRef = useRef(null)
  const [quadrantsVisible, setQuadrantsVisible] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ))

  useEffect(() => {
    const element = quadrantRef.current

    if (!element || quadrantsVisible) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setQuadrantsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [quadrantsVisible])

  return (
    <>
      <PageHero title="Sodobne rešitve približamo ljudem." text="GenYXZ pomaga povezati znanje, prakso in ljudi, da prihodnost zdravja postane razumljiva in dostopna." />
      <section className="main-section main-section-soft kajdelamo-delamo">
        <div className="site-container kajdelamo-delamo-header">
          <p className="kajdelamo-delamo-label">NAŠE DELO</p>
          <h2 className="kajdelamo-section-title">Štirje stebri našega dela.</h2>
          <div aria-hidden="true" className="kajdelamo-delamo-divider" data-reveal data-reveal-delay="170" />
        </div>
        <div className="kajdelamo-quadrant-shell">
          <div className="kajdelamo-quadrant-grid" ref={quadrantRef}>
            {workPillars.map((pillar) => (
              <article className={`kajdelamo-quadrant-cell kajdelamo-quadrant-cell-${pillar.id}${quadrantsVisible ? ' visible' : ''}`} key={pillar.id}>
                <div className="kajdelamo-quadrant-content">
                  <span aria-hidden="true" className="kajdelamo-quadrant-icon-wrap">
                    <span className="kajdelamo-quadrant-icon">{pillar.icon}</span>
                  </span>
                  <p aria-hidden="true" className="kajdelamo-quadrant-number">{pillar.number}</p>
                  <h3 className="kajdelamo-quadrant-heading">{pillar.heading}</h3>
                  <p className="kajdelamo-quadrant-body">{pillar.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="main-section kajdelamo-praksa">
        <div aria-hidden="true" className="kajdelamo-praksa-glow" />
        <div className="site-container kajdelamo-praksa-inner">
          <h2 className="kajdelamo-section-title kajdelamo-section-title-light kajdelamo-praksa-title">Ambasadorjevo delo ni abstraktno.</h2>
          <div className="kajdelamo-praksa-list">
            {workScenarios.map((scenario, index) => (
              <article className="kajdelamo-praksa-item" data-reveal data-reveal-delay={150 + index * 90} key={scenario.id}>
                <h3 className="kajdelamo-praksa-item-title">{scenario.title}</h3>
                <p className="kajdelamo-praksa-item-body">{scenario.body}</p>
              </article>
            ))}
          </div>
          <div className="kajdelamo-praksa-closer-wrap" data-reveal data-reveal-delay="450">
            <div aria-hidden="true" className="kajdelamo-praksa-closer-line" />
            <p className="kajdelamo-praksa-closer">Znanje vedno povezujemo s prakso.</p>
          </div>
        </div>
      </section>
      <section className="main-section main-section-soft kajdelamo-prehod">
        <div className="site-container kajdelamo-prehod-inner">
          <p className="kajdelamo-prehod-label">PREHOD V PRAKSO</p>
          <h2 className="kajdelamo-prehod-heading">Kjer se srečata znanje in okolje.</h2>
          <div aria-hidden="true" className="kajdelamo-prehod-heading-divider" />
          <p className="kajdelamo-prehod-body">Delujemo v okolju, kjer se stikajo preventiva, sodobna medicina in dolgoročna zaščita. Sodelujemo z organizacijami, ki oblikujejo prihodnost zdravja - in to znanje približujemo ljudem.</p>
          <p className="kajdelamo-prehod-statement">Naši partnerji so v svetovnem vrhu preventivnih in zdravstvenih rešitev.</p>
          <p><a className="kajdelamo-prehod-link" href="/o-nas#partnerji">Spoznaj okolje partnerjev →</a></p>
          <div aria-hidden="true" className="kajdelamo-prehod-divider" />
        </div>
      </section>
    </>
  )
}

function AmbassadorsPage() {
  return (
    <>
      <PageHero
        actionHref={ambassadorLandingUrl}
        actionLabel="Postani ambasador"
        title="Ambasador je človek, ki zna idejo približati drugim."
        text="Ni pomembno, ali prihajaš iz sveta športa, študija, dela z ljudmi ali osebnega razvoja. Pomembno je, da te zanima prihodnost zdravja in da želiš znanje deliti naprej."
      />
      <section className="main-section">
        <div className="site-container">
          <h2 className="main-section-title" data-reveal data-reveal-style="up">Kdo so naši ambasadorji</h2>
          <ul className="main-check-list">
            {ambassadorTypes.map((item) => <li data-reveal data-reveal-style="up" key={item}><IconCheck />{item}</li>)}
          </ul>
        </div>
      </section>
      <section className="main-section main-section-soft">
        <div className="site-container main-card-grid main-card-grid-two">
          <Card icon={<IconHeartUsers />}>
            <strong>Community Ambassador</strong>
            <span>Delo z ljudmi, pogovori, gradnja zaupanja in povezovanje lokalnega okolja.</span>
          </Card>
          <Card icon={<IconPulseCore />}>
            <strong>Lifestyle Ambassador</strong>
            <span>Šport, zdravje, aktivno okolje in povezovanje lifestyle pristopa s preventivo.</span>
          </Card>
        </div>
      </section>
      <section className="main-section">
        <div className="site-container">
          <h2 className="main-section-title" data-reveal data-reveal-style="up">Kaj pridobiš</h2>
          <ul className="main-check-list main-check-grid">
            {gains.map((item) => <li data-reveal data-reveal-style="up" key={item}><IconCheck />{item}</li>)}
          </ul>
        </div>
      </section>
      <section className="main-section main-ambassador-band ambassador-final-cta">
        <div className="site-container main-centered">
          <p className="main-lead" data-reveal data-reveal-style="up">Če čutiš, da je to zate, naredi prvi korak.</p>
          <a className="btn-premium main-btn-primary ambassador-final-cta-button" href={ambassadorLandingUrl} data-reveal data-reveal-style="up" data-reveal-delay="120">Postani ambasador <IconArrowUpRight /></a>
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  const [form, setForm] = useState({ email: '', message: '', name: '' })

  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }))

  return (
    <section className="main-section contact-section">
      <div className="site-container contact-grid">
        <div className="contact-copy" data-reveal data-reveal-style="up">
          <h1>Stopi v stik</h1>
          <p>Za vprašanja, sodelovanja ali več informacij nam lahko pišeš neposredno.</p>
        </div>
        <img alt="" aria-hidden="true" className="dna-helix contact-hero-helix" src={helixMotifSrc} />
        <form className="contact-form" onSubmit={(event) => event.preventDefault()} data-reveal data-reveal-style="up" data-reveal-delay="120">
          <div className="contact-form-header">
            <a className="contact-email" href="mailto:info@genyxz.si">info@genyxz.si</a>
            <div className="contact-socials" aria-label="Družbena omrežja">
              <a href="#instagram" aria-label="Instagram"><IconInstagram /></a>
            </div>
          </div>
          <label>Ime<input onChange={update('name')} type="text" value={form.name} /></label>
          <label>Email<input onChange={update('email')} type="email" value={form.email} /></label>
          <label>Sporočilo<textarea onChange={update('message')} rows={5} value={form.message} /></label>
          <button className="btn-premium main-btn-primary" type="submit">Pošlji</button>
        </form>
      </div>
    </section>
  )
}

export default function MainSite() {
  const page = useMemo(() => {
    if (typeof window === 'undefined') {
      return '/'
    }

    return window.location.pathname
  }, [])

  const content = {
    '/': <HomePage />,
    '/ambasadorji': <AmbassadorsPage />,
    '/kaj-delamo': <WorkPage />,
    '/kontakt': <ContactPage />,
    '/o-nas': <AboutPage />,
  }[page] || <HomePage />

  return (
    <div className="site-shell main-site-shell">
      <Navbar />
      <main>{content}</main>
      <Footer />
    </div>
  )
}
