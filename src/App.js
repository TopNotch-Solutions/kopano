import React, { useState, useEffect } from 'react';
import './App.css';

const publicUrl = process.env.PUBLIC_URL;

const TEAM = [
  { img: 'team/petrus.png', name: 'Petrus Haixula', role: 'CEO — Co Founder', bio: 'Seasoned IT professional with over 10 years of experience in technology, business, and blockchain innovation.' },
  // { img: 'team/paulus.png', name: 'Paulus Wilhelm', role: 'Head of Technology — Co Founder', bio: 'Driving technological innovation and local empowerment across Namibia.' },
  { img: 'team/talo.png', name: 'Taloshili Nghiwewelekwa', role: 'Senior Software Developer', bio: 'Transforming ideas into impactful digital solutions with future-ready systems.' },
  { img: 'team/owen.png', name: 'Chilwalo Owen Luyando', role: 'Senior Software Developer', bio: 'Designing intelligent, scalable platforms aligned with business objectives.' },
  { img: 'team/saimah.png', name: 'Saima Haitembu', role: 'Business Analyst & UI/UX Designer', bio: 'Dual-role specializing in end-to-end product delivery from requirements gathering, process modeling, and wireframing to high-fidelity prototyping and design execution.' },
  { img: 'team/kondjee.png', name: 'Kondjee Kamutindi', role: 'Software Developer - Intern', bio: 'CS student dedicated to turning ideas into reliable, user-focused digital solutions.' },
  { img: 'shikongo.png', name: 'Jeremiah Shikongo', role: 'System Administrator', bio: 'Maintaining secure, reliable infrastructure and keeping our platforms running smoothly.' },
];

const IAAS_MARKUP = 1.15;

const LINUX_DISTROS = [
  'Amazon Linux (e.g. Amazon Linux 2023, built and optimized by AWS)',
  'Ubuntu (Canonical)',
  'Red Hat Enterprise Linux (RHEL)',
  'SUSE Linux Enterprise Server (SLES)',
  'Debian, CentOS, and other community or custom Linux',
];

/** Base monthly prices in NAD before 15% markup */
const IAAS_TIERS = [
  {
    name: 'Starter',
    tagline: 'For websites, staging & light workloads',
    vcpu: '1 vCPU',
    ram: '2 GB RAM',
    storage: '40 GB SSD',
    transfer: '1 TB transfer',
    baseNad: 600,
    featured: false,
  },
  {
    name: 'Growth',
    tagline: 'For growing apps & small teams',
    vcpu: '2 vCPU',
    ram: '4 GB RAM',
    storage: '80 GB SSD',
    transfer: '2 TB transfer',
    baseNad: 1150,
    featured: true,
  },
  {
    name: 'Business',
    tagline: 'For production systems & APIs',
    vcpu: '4 vCPU',
    ram: '8 GB RAM',
    storage: '160 GB SSD',
    transfer: '4 TB transfer',
    baseNad: 2220,
    featured: false,
  },
  {
    name: 'Enterprise',
    tagline: 'For high-demand & multi-service stacks',
    vcpu: '8 vCPU',
    ram: '16 GB RAM',
    storage: '320 GB SSD',
    transfer: '8 TB transfer',
    baseNad: 3800,
    featured: false,
  },
];

function formatNad(amount) {
  return `N$ ${Math.round(amount).toLocaleString('en-NA')}`;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isPrivacyRoute = pathname === '/privacy';
  const isPoliciesRoute = pathname === '/policies';
  const isTermsRoute = pathname === '/terms';
  const isHealthConnectProviderGuideRoute = pathname === '/health-connect-guide-provider';
  const isHealthConnectPatientGuideRoute = pathname === '/health-connect-guide-patient';

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal, .section-header').forEach((el) => {
        el.classList.add('is-visible');
      });
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal, .section-header').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isPrivacyRoute, isPoliciesRoute, isTermsRoute, isHealthConnectProviderGuideRoute, isHealthConnectPatientGuideRoute]);

  const closeMenu = () => {
    setMenuOpen(false);
    setProjectsOpen(false);
  };

  if (isPrivacyRoute) {
    return <PrivacyPage />;
  }

  if (isPoliciesRoute) {
    return <PoliciesPage />;
  }

  if (isTermsRoute) {
    return <TermsPage />;
  }

  if (isHealthConnectProviderGuideRoute) {
    return <HealthConnectProviderGuidePage />;
  }

  if (isHealthConnectPatientGuideRoute) {
    return <HealthConnectPatientGuidePage />;
  }

  return (
    <div className="App">
      <a href="#main" className="skip-link">Skip to content</a>

      <header className={`navbar ${navSolid || menuOpen ? 'navbar--solid' : ''}`}>
        <div className="navbar__inner container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand__mark" aria-hidden="true" />
            <span>Kopano-Vertex</span>
          </a>

          <button
            type="button"
            className="navbar__toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`menu-icon ${menuOpen ? 'open' : ''}`}>
              <span /><span /><span />
            </span>
          </button>

          {menuOpen && (
            <button type="button" className="nav__backdrop" aria-label="Close menu" onClick={closeMenu} />
          )}

          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Primary">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link" onClick={closeMenu}>Home</a>
              </li>
              <li className={`nav__item nav__item--dropdown ${projectsOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="nav__link"
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  aria-expanded={projectsOpen}
                >
                  Projects
                  <span className="material-symbols-outlined nav__chevron">keyboard_arrow_down</span>
                </button>
                <ul className="nav__submenu">
                  <li><a href="#health-connect" onClick={closeMenu}>Health Connect Namibia</a></li>
                  <li><a href="#namibride" onClick={closeMenu}>NAMIBride</a></li>
                </ul>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link" onClick={closeMenu}>About Us</a>
              </li>
              <li className="nav__item">
                <a href="#iaas" className="nav__link" onClick={closeMenu}>IaaS</a>
              </li>
              <li className="nav__item">
                <a href="#team" className="nav__link" onClick={closeMenu}>Team</a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link" onClick={closeMenu}>Contact</a>
              </li>
            </ul>
            <a href="#contact" className="btn btn--accent nav__cta" onClick={closeMenu}>Get In Touch</a>
          </nav>
        </div>
        <div className="scroll-progress" aria-hidden="true" />
      </header>

      <main id="main">
        <section id="home" className="hero">
          <div
            className="hero__bg"
            style={{ backgroundImage: `url(${publicUrl}/Designern.png)` }}
            aria-hidden="true"
          />
          <div className="hero__overlay" aria-hidden="true" />
          <div className="hero__grid container">
            <div className="hero__copy">
              <p className="hero-badge">
                <span className="hero-badge__icon" aria-hidden="true">
                  <span className="material-symbols-outlined">verified_user</span>
                </span>
                <span className="hero-badge__text">Digital Sovereignty</span>
                <span className="hero-badge__meta">
                  <span className="material-symbols-outlined">location_on</span>
                  Windhoek, Namibia
                </span>
              </p>
              <h1 className="hero__title">Kopano-Vertex Trading</h1>
              <p className="hero__text">
                A Namibian technology company committed to innovation and local empowerment,
                developing cutting-edge solutions that transform industries and improve lives.
              </p>
              <div className="hero__actions">
                <a href="#health-connect" className="btn btn--accent">
                  Our Projects
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                </a>
                <a href="#contact" className="btn btn--ghost-light">Contact Us</a>
              </div>
            </div>
          </div>
          <a href="#about" className="hero__scroll" aria-label="Scroll to about">
            <span className="material-symbols-outlined">expand_more</span>
          </a>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-header reveal">
              <p className="eyebrow"><span className="eyebrow__bar" />Who We Are</p>
              <h2 className="section-header__title">About Kopano-Vertex</h2>
            </div>
            <div className="split">
              <div className="reveal">
                <div className="prose">
                  <p>
                    Kopano-Vertex Trading cc is a Namibian-owned and operated technology company
                    headquartered in Windhoek, dedicated to creating innovative digital solutions that
                    address critical gaps in the market.
                  </p>
                  <p>
                    We leverage cutting-edge technology to transform traditional industries, making
                    essential services more accessible, efficient, and reliable for all Namibians.
                  </p>
                </div>
                <div className="stats reveal reveal--stagger">
                  <div className="stat">
                    <span className="stat__label">Active Projects</span>
                    <span className="stat__value">8</span>
                  </div>
                  <div className="stat">
                    <span className="stat__label">Namibian Owned</span>
                    <span className="stat__value">100%</span>
                  </div>
                  <div className="stat">
                    <span className="stat__label">Headquarters</span>
                    <span className="stat__value">WHK</span>
                  </div>
                </div>
              </div>
              <SpecCard
                title="Company Overview"
                rows={[
                  ['Focus', 'HealthTech & Mobility'],
                  ['Region', 'Namibia / SADC'],
                  ['Approach', 'Cloud Native'],
                  ['Values', 'Local Empowerment'],
                ]}
                cta={{ href: '#contact', label: 'Partner With Us' }}
              />
            </div>

            <div className="about-pillars reveal reveal--stagger">
              <article className="about-pillar">
                <span className="about-pillar__icon material-symbols-outlined" aria-hidden="true">flag</span>
                <h3>Mission</h3>
                <p>
                  To drive digital transformation and innovation across Africa — building intelligent,
                  future-ready platforms that modernise industries and unlock opportunity for people and
                  businesses.
                </p>
              </article>
              <article className="about-pillar">
                <span className="about-pillar__icon material-symbols-outlined" aria-hidden="true">visibility</span>
                <h3>Vision</h3>
                <p>
                  To be Southern Africa&apos;s trusted partner for digital sovereignty — building
                  world-class platforms that keep data, talent, and opportunity rooted in the region.
                </p>
              </article>
              <article className="about-pillar">
                <span className="about-pillar__icon material-symbols-outlined" aria-hidden="true">strategy</span>
                <h3>Strategy</h3>
                <p>
                  Build and scale innovative digital solutions across sectors — from healthcare and
                  mobility to infrastructure and beyond — while partnering locally and expanding proven
                  platforms across Africa with cloud-native, secure systems.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="iaas" className="section section--tint">
          <div className="container">
            <div className="section-header section-header--center reveal">
              <p className="eyebrow"><span className="eyebrow__bar" />Services</p>
              <h2 className="section-header__title">Infrastructure as a Service</h2>
              <p className="section-header__subtitle">
                Scalable Linux compute hosted for Namibian and SADC businesses — priced in Namibian Dollars
                with managed infrastructure support.
              </p>
            </div>

            <div className="iaas-intro reveal">
              <h3 className="subheading">Linux Distributions</h3>
              <ul className="iaas-distros">
                {LINUX_DISTROS.map((distro) => (
                  <li key={distro}>
                    <span className="material-symbols-outlined" aria-hidden="true">check_circle</span>
                    <span>{distro}</span>
                  </li>
                ))}
              </ul>
              <p className="iaas-pricing-note muted">
                Prices below include a 15% service markup and are billed monthly in NAD.
              </p>
            </div>

            <div className="iaas-grid reveal reveal--stagger">
              {IAAS_TIERS.map((tier) => {
                const price = tier.baseNad * IAAS_MARKUP;
                return (
                  <article
                    className={`iaas-card${tier.featured ? ' iaas-card--featured' : ''}`}
                    key={tier.name}
                  >
                    {tier.featured && <span className="iaas-card__badge">Popular</span>}
                    <h3 className="iaas-card__name">{tier.name}</h3>
                    <p className="iaas-card__tagline">{tier.tagline}</p>
                    <p className="iaas-card__price">
                      <span className="iaas-card__amount">{formatNad(price)}</span>
                      <span className="iaas-card__period">/ month</span>
                    </p>
                    <ul className="iaas-card__specs">
                      <li><span className="material-symbols-outlined">memory</span>{tier.vcpu}</li>
                      <li><span className="material-symbols-outlined">database</span>{tier.ram}</li>
                      <li><span className="material-symbols-outlined">hard_drive</span>{tier.storage}</li>
                      <li><span className="material-symbols-outlined">sync_alt</span>{tier.transfer}</li>
                    </ul>
                    <a href="#contact" className={`btn ${tier.featured ? 'btn--accent' : 'btn--primary'} btn--block`}>
                      Get Started
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="health-connect" className="section section--tint section--project">
          <span className="project-watermark" aria-hidden="true">01</span>
          <div className="container">
            <div className="section-header reveal">
              <div className="project-marker">
                <span className="project-marker__num">
                  01<span className="project-marker__total">/02</span>
                </span>
                <span className="project-marker__label">
                  <span className="project-marker__kicker">Project</span>
                  Telemedicine
                </span>
              </div>
              <h2 className="section-header__title">Health Connect Namibia</h2>
              <p className="section-header__subtitle">Decentralizing Care Across Namibia</p>
            </div>
            <div className="split">
              <div className="reveal">
                <h3 className="subheading">Business Summary</h3>
                <div className="prose">
                  <p>
                    Health Connect Namibia is a revolutionary telemedicine platform designed to decentralize
                    healthcare access across Namibia and the SADC region. By implementing a sophisticated{' '}
                    <strong>&quot;Uber-for-Healthcare&quot;</strong> model, we empower patients to connect
                    with vetted medical professionals instantly.
                  </p>
                </div>
                <div className="feature-grid feature-grid--2">
                  <div className="feature">
                    <h4>Digital Sovereignty</h4>
                    <p>Our engineering focus prioritizes security and latency, ensuring patient data remains protected while delivering a seamless experience.</p>
                  </div>
                  <div className="feature">
                    <h4>On-Demand Access</h4>
                    <p>Direct consultation, chronic care management, and emergency response triggers integrated into a unified cloud-native environment.</p>
                  </div>
                </div>
                <div className="callout">
                  <span className="material-symbols-outlined callout__icon">verified_user</span>
                  <div>
                    <h4>Standard of Excellence</h4>
                    <p>Every practitioner undergoes rigorous verification including credentials, experience, and peer reviews.</p>
                  </div>
                </div>
                <ul className="tags">
                  <li className="tag">HealthTech / Telemedicine</li>
                  <li className="tag tag--status">In Development</li>
                </ul>
                <p className="guide-link-row">
                  <a href="/health-connect-guide-provider" className="btn btn--primary">
                    <span className="material-symbols-outlined" aria-hidden="true">menu_book</span>
                    Practitioner Guide
                  </a>
                  <a href="/health-connect-guide-patient" className="btn btn--primary">
                    <span className="material-symbols-outlined" aria-hidden="true">menu_book</span>
                    Patient Guide
                  </a>
                </p>
              </div>
              <SpecCard
                title="Project Infrastructure"
                rows={[
                  ['Project Status', <span key="s" className="spec-card__pill">Launch Pending</span>],
                  ['Operating Model', 'On-Demand Telemedicine'],
                  ['Tech Stack', 'Micro-service / Cloud'],
                  ['Data Center', 'Regional Sovereignty'],
                ]}
              />
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="hc-gallery">
          <div className="container">
            <div className="section-header section-header--center reveal">
              <h2 id="hc-gallery" className="section-header__title">Health Connect Namibia in Action</h2>
            </div>
            <div className="gallery reveal reveal--stagger">
              {['h1.jpg', 'h2.jpg', 'h3.jpg', 'h4.jpg'].map((file) => (
                <div className="gallery__item" key={file}>
                  <img src={`${publicUrl}/${file}`} alt="Health Connect Namibia screenshot" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-header section-header--center reveal">
              <h2 className="section-header__title">Target Market Segmentation</h2>
              <p className="section-header__subtitle">
                Tailored digital experiences optimized for diverse user demographics and healthcare needs.
              </p>
            </div>
            <MarketGrid />
          </div>
        </section>

        <section id="partners" className="section">
          <div className="container reveal">
            <PartnerBanner />
          </div>
        </section>

        <section id="namibride" className="section section--tint section--project">
          <span className="project-watermark" aria-hidden="true">02</span>
          <div className="container">
            <div className="section-header reveal">
              <div className="project-marker">
                <span className="project-marker__num">
                  02<span className="project-marker__total">/02</span>
                </span>
                <span className="project-marker__label">
                  <span className="project-marker__kicker">Project</span>
                  Mobility &amp; Logistics
                </span>
              </div>
              <h2 className="section-header__title">NAMIBride</h2>
              <p className="section-header__subtitle">Formalizing Transport Across Namibia</p>
            </div>
            <div className="split">
              <div className="reveal">
                <div className="prose">
                  <p>
                    NAMIBride is a ride-hailing and logistics platform designed to formalize the public
                    transport sector in Namibia. It connects passengers with verified drivers for safe
                    transport and goods delivery across growing towns.
                  </p>
                </div>
                <div className="feature-grid feature-grid--2">
                  <div className="feature feature--icon">
                    <span className="feature__icon material-symbols-outlined">directions_car</span>
                    <h4>Ride-Hailing</h4>
                    <p>Verified drivers for safe, reliable transport</p>
                  </div>
                  <div className="feature feature--icon">
                    <span className="feature__icon material-symbols-outlined">local_shipping</span>
                    <h4>Fleet Management</h4>
                    <p>Comprehensive portals for business owners</p>
                  </div>
                  <div className="feature feature--icon">
                    <span className="feature__icon material-symbols-outlined">shield</span>
                    <h4>Safety Features</h4>
                    <p>AI verification, panic buttons, trip histories</p>
                  </div>
                  <div className="feature feature--icon">
                    <span className="feature__icon material-symbols-outlined">package_2</span>
                    <h4>Goods Delivery</h4>
                    <p>Efficient delivery for businesses and individuals</p>
                  </div>
                </div>
                <ul className="tags">
                  <li className="tag">Transportation</li>
                  <li className="tag tag--status">In Development</li>
                </ul>
              </div>
              <aside className="reveal">
                <div className="spec-card spec-card--markets">
                  <span className="spec-card__icon material-symbols-outlined" aria-hidden="true">map</span>
                  <h3 className="spec-card__title">Target Markets</h3>
                  <p>
                    Urban populations in Walvis Bay, Swakopmund, Oshakati, Ongwediva, Ondangwa, and
                    Windhoek — over 300,000 combined.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="videos" className="section">
          <div className="container">
            <div className="section-header section-header--center reveal">
              <h2 className="section-header__title">NAMIBride in Action</h2>
            </div>
            <VideoGrid />
          </div>
        </section>

        <section id="team" className="section section--tint">
          <div className="container">
            <div className="section-header section-header--center reveal">
              <p className="eyebrow"><span className="eyebrow__bar" />The People</p>
              <h2 className="section-header__title">Our Team</h2>
              <p className="section-header__subtitle">Kopano-Vertex Trading cc — Windhoek, Namibia.</p>
            </div>
            <ul className="team-grid reveal reveal--stagger">
              {TEAM.map((m) => (
                <li key={m.name}>
                  <article className="member">
                    <div className="member__stage">
                      <span className="member__frame" aria-hidden="true" />
                      <img src={`${publicUrl}/${m.img}`} alt={m.name} loading="lazy" />
                    </div>
                    <div className="member__body">
                      <h3 className="member__name">{m.name}</h3>
                      <p className="member__role">{m.role}</p>
                      <p className="member__bio">{m.bio}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container reveal">
            <div className="cta-band">
              <h2>Building the Future of Regional Care</h2>
              <p>
                Join us as we expand Health Connect Namibia and NAMIBride across the SADC region, bringing
                global technological standards to local needs through digital sovereignty and innovation.
              </p>
              <div className="cta-band__actions">
                <a
                  href="mailto:support@kopanovertex.org?subject=Partnership%20Inquiry"
                  className="btn btn--accent"
                >
                  Inquire for Partnership
                </a>
                <a href="#health-connect" className="btn btn--ghost-light">View All Projects</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section section--tint">
          <div className="container">
            <div className="split split--center">
              <div className="reveal">
                <div className="section-header">
                  <p className="eyebrow"><span className="eyebrow__bar" />Contact</p>
                  <h2 className="section-header__title">Get In Touch</h2>
                  <p className="section-header__subtitle">
                    Whether you&apos;re interested in our projects, partnerships, or services — we&apos;d love to hear from you.
                  </p>
                </div>
                <a href="mailto:support@kopanovertex.org" className="btn btn--primary">Email Us</a>
              </div>
              <ContactList />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <a
        href="https://wa.me/264814302536"
        className="whatsapp-fab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="whatsapp-fab__label">Chat with us</span>
      </a>
    </div>
  );
}

function SpecCard({ title, rows, cta }) {
  return (
    <aside className="reveal">
      <div className="spec-card">
        <h3 className="spec-card__title">{title}</h3>
        <dl className="spec-card__list">
          {rows.map(([dt, dd]) => (
            <div className="spec-card__row" key={dt}>
              <dt>{dt}</dt>
              <dd>{dd}</dd>
            </div>
          ))}
        </dl>
        {cta && (
          <a href={cta.href} className="btn btn--accent btn--block">{cta.label}</a>
        )}
      </div>
    </aside>
  );
}

function MarketGrid() {
  const cards = [
    { icon: 'elderly', title: 'The Elderly', text: 'Simplified UI/UX with high contrast and voice-enabled features for chronic illness management and routine check-ups from home.', tag: 'Accessibility First' },
    { icon: 'family_restroom', title: 'Busy Parents', text: '24/7 access to pediatric consultants, immunization tracking, and immediate digital triage for late-night emergencies.', tag: 'Peace of Mind' },
    { icon: 'work_history', title: 'Professionals', text: 'Scheduled video consultations that fit a high-intensity work life, with digital prescriptions and wellness reporting.', tag: 'Efficiency Driven' },
  ];
  return (
    <div className="card-grid card-grid--3 reveal reveal--stagger">
      {cards.map((c) => (
        <article className="card" key={c.title}>
          <span className="card__icon">
            <span className="material-symbols-outlined">{c.icon}</span>
          </span>
          <h3>{c.title}</h3>
          <p>{c.text}</p>
          <footer className="card__tag">{c.tag}</footer>
        </article>
      ))}
    </div>
  );
}

function PartnerBanner() {
  return (
    <div className="partner">
      <div className="partner__copy">
        <span className="partner__label">Strategic Partner</span>
        <h2>Integration with MR Ambulance</h2>
        <p className="partner__text">
          Our partnership with MR Ambulance introduces a groundbreaking Digital Triage &amp;
          Transport system. When immediate physical intervention is needed, Health Connect Namibia
          triggers a direct link to emergency dispatchers, sharing vital patient data in real-time.
        </p>
        <ul className="partner__stats">
          <li>
            <span className="partner__cap">Emergency Response</span>
            <span className="partner__num">24/7</span>
          </li>
          <li>
            <span className="partner__cap">Integrated Care</span>
            <span className="partner__num">100%</span>
          </li>
        </ul>
      </div>
      <div className="partner__media">
        <img src={`${publicUrl}/eme.png`} alt="MR Ambulance" />
      </div>
    </div>
  );
}

function VideoGrid() {
  return (
    <div className="video-grid reveal reveal--stagger">
      {['1..mp4', '2.mp4', '3.mp4', '4.mp4'].map((file) => (
        <div className="video-grid__item" key={file}>
          <video src={`${publicUrl}/${file}`} autoPlay loop muted playsInline />
        </div>
      ))}
    </div>
  );
}

function ContactList() {
  const items = [
    { icon: 'apartment', label: 'Company', value: 'Kopano-Vertex Trading CC' },
    { icon: 'location_on', label: 'Location', value: 'Windhoek, Namibia' },
    { icon: 'call', label: 'Phone', value: <a href="tel:+264818111703" className="contact-item__value">+264 81 811 1703</a> },
    { icon: 'chat', label: 'WhatsApp', value: <a href="https://wa.me/264814302536" className="contact-item__value" target="_blank" rel="noopener noreferrer">+264 81 430 2536</a> },
    { icon: 'mail', label: 'Email', value: <a href="mailto:support@kopanovertex.org" className="contact-item__value">support@kopanovertex.org</a> },
  ];
  return (
    <ul className="contact-list reveal reveal--stagger">
      {items.map((item) => (
        <li className="contact-item" key={item.label}>
          <span className="contact-item__icon">
            <span className="material-symbols-outlined">{item.icon}</span>
          </span>
          <div>
            <span className="contact-item__label">{item.label}</span>
            {typeof item.value === 'string' ? (
              <span className="contact-item__value">{item.value}</span>
            ) : (
              item.value
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h2>Kopano-Vertex</h2>
            <p>
              Digital Sovereignty via Regional Excellence. Pioneering high-tech solutions for emerging
              markets across Southern Africa.
            </p>
          </div>
          <div className="footer__col">
            <h3>Solutions</h3>
            <a href="/#iaas">Infrastructure as a Service</a>
            <a href="/#health-connect">Health Connect Namibia</a>
            <a href="/#namibride">NAMIBride</a>
          </div>
          <div className="footer__col">
            <h3>Company</h3>
            <a href="/#about">About Us</a>
            <a href="/#team">Team</a>
            <a href="/#contact">Contact</a>
          </div>
          <div className="footer__col">
            <h3>Legal</h3>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/policies">App Store Policy</a>
          </div>
          <div className="footer__col">
            <h3>Connect</h3>
            <div className="footer__social">
              <a href="/" aria-label="Website">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a href="mailto:support@kopanovertex.org" aria-label="Email">
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a href="https://wa.me/264814302536" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <span className="material-symbols-outlined">chat</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          &copy; {new Date().getFullYear()} Kopano-Vertex Trading CC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function LegalPageHeader() {
  return (
    <header className="navbar navbar--solid navbar--legal">
      <div className="navbar__inner container">
        <a href="/" className="brand">
          <span className="brand__mark" aria-hidden="true" />
          <span>Kopano-Vertex</span>
        </a>
      </div>
    </header>
  );
}

const HEALTH_CONNECT_PROVIDER_GUIDE_PDF = `${publicUrl}/Health_Connect_Practitioner_Full_Page_Portrait.pdf`;
const HEALTH_CONNECT_PATIENT_GUIDE_PDF = `${publicUrl}/Health_Connect_Namibia_Patient_Guide.pdf`;

function GuidePage({ title, description, pdfUrl, downloadName, iframeTitle }) {
  return (
    <div className="App">
      <main className="guide-page">
        <div className="container">
          <div className="guide-hero">
            <p className="eyebrow"><span className="eyebrow__bar" />Health Connect Namibia</p>
            <h1 className="guide-hero__title">{title}</h1>
            <p className="guide-hero__text">{description}</p>
            <div className="guide-hero__actions">
              <a
                href={pdfUrl}
                className="btn-download-flow"
                download={downloadName}
              >
                <span className="btn-download-flow__glow" aria-hidden="true" />
                <span className="material-symbols-outlined" aria-hidden="true">download</span>
                Download PDF
              </a>
              <a href="/" className="btn btn--primary">
                <span className="material-symbols-outlined" aria-hidden="true">home</span>
                Home
              </a>
            </div>
          </div>

          <div className="guide-preview">
            <div className="guide-preview__toolbar">
              <span className="guide-preview__label">
                <span className="material-symbols-outlined" aria-hidden="true">picture_as_pdf</span>
                Document preview
              </span>
              <a
                href={pdfUrl}
                className="guide-preview__open"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in new tab
              </a>
            </div>
            <div className="guide-preview__frame">
              <iframe
                title={iframeTitle}
                src={`${pdfUrl}#toolbar=1&navpanes=0`}
                className="guide-preview__iframe"
              />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function HealthConnectProviderGuidePage() {
  return (
    <GuidePage
      title="Practitioner Guide"
      description="Preview the full practitioner guide below, or download the PDF for offline use."
      pdfUrl={HEALTH_CONNECT_PROVIDER_GUIDE_PDF}
      downloadName="Health_Connect_Practitioner_Guide.pdf"
      iframeTitle="Health Connect Practitioner Guide preview"
    />
  );
}

function HealthConnectPatientGuidePage() {
  return (
    <GuidePage
      title="Patient Guide"
      description="Preview the full patient guide below, or download the PDF for offline use."
      pdfUrl={HEALTH_CONNECT_PATIENT_GUIDE_PDF}
      downloadName="Health_Connect_Namibia_Patient_Guide.pdf"
      iframeTitle="Health Connect Patient Guide preview"
    />
  );
}

function PoliciesPage() {
  return (
    <div className="App">
      <LegalPageHeader />
      <main className="legal">
        <div className="container">
          <article className="legal__inner">
            <h1>Privacy Policy</h1>
            <p className="legal__meta">
              Last Updated: July 27, 2026<br />
              Effective Date: July 27, 2026
            </p>
            <p>
              Welcome to Health Connect Namibia (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). Health Connect Namibia is a digital healthcare
              coordination platform designed to facilitate non-emergency medical interactions, video/in-person
              telemedicine scheduling, practitioner-patient connections, and prescription dispensing coordination
              between verified healthcare practitioners, registered community/hospital pharmacies, and users. All
              participating healthcare providers and pharmaceutical practices operate under the regulatory framework
              of the Health Professions Council of Namibia (HPCNA) and the Pharmacy Council of Namibia.
            </p>
            <p>
              We are committed to maintaining maximum transparency regarding user account management, regulatory
              compliance, and data privacy. This policy outlines how our iOS application operates in compliance with
              Apple App Store Review Guidelines (Section 5.1 &amp; 1.4) and Namibian healthcare regulations.
            </p>

            <h2>1. Important Notice: Non-Emergency Services &amp; Emergency Protocols</h2>
            <p className="policy-notice">
              Health Connect Namibia IS DESIGNED FOR NON-EMERGENCY HEALTHCARE COORDINATION, TELEMEDICINE, AND PHARMACEUTICAL
              DISPENSING.
            </p>
            <p>
              The platform is NOT a standalone automated emergency dispatch system or diagnostic tool. For critical or
              life-threatening emergencies, primary reliance must be placed on local emergency medical responders.
            </p>
            <p>
              <strong>Sustained Practitioner Support En Route (MR 24/7)</strong><br />
              In critical emergency situations requiring immediate transport, users or their companions may utilize
              Health Connect Namibia to stay connected with or sustained by a matched practitioner while en route to an
              emergency medical facility via MR 24/7 Ambulance Services.
            </p>
            <ul>
              <li>
                <strong>MR 24/7 Emergency Medical Services:</strong>
                <ul>
                  <li>Hotline / Short Code: 956 or 085 956</li>
                  <li>24/7 Control Room: +264 61 255 676 or +264 81 872 2233</li>
                </ul>
              </li>
              <li>Namibian Police / National Emergency Line: 10111 or 112</li>
              <li>MVA Fund Accident Response: 9682</li>
            </ul>

            <h2>2. Data Minimization, Administrative Tracking &amp; Health Records</h2>
            <p>
              We uphold a strict policy of Data Minimization regarding clinical content, balanced with necessary
              administrative audit logging:
            </p>
            <ul>
              <li>
                <strong>Zero Patient Clinical Records Stored In-App:</strong> Health Connect Namibia does NOT collect, process,
                or store patient clinical notes, diagnostic medical histories, or consultation findings on the app or
                cloud servers. Healthcare practitioners are required to record all clinical findings and triage notes on
                the patient&apos;s physical health cards.
              </li>
              <li>
                <strong>Administrative Attendance &amp; Dispensing Logs:</strong> For service tracking, safety verification,
                and operational accountability, the platform maintains administrative record logs of interaction events:
                <ul>
                  <li>
                    <strong>Practitioner Attendance Records:</strong> Tracking which verified HPCNA practitioner attended
                    to a specific patient, along with consultation timestamps and service delivery modes (in-person or
                    embedded video).
                  </li>
                  <li>
                    <strong>Pharmacy Dispensing Logs:</strong> Tracking which registered pharmacy and responsible pharmacist
                    processed and dispensed specific medication orders to a patient.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Embedded Telemedicine Services:</strong> Non-emergency video telemedicine interactions take place via
                secure, real-time transmissions and are never recorded or stored on our servers.
              </li>
            </ul>

            <h2>3. Accreditation, Automated Deactivation &amp; Account Control</h2>
            <p>
              To ensure absolute safety, trust, and regulatory compliance across the platform, Health Connect Namibia enforces
              strict identity, licensing, and accreditation controls for all platform entities (patients, healthcare
              practitioners, responsible pharmacists, and pharmacy establishments).
            </p>

            <h3>A. Qualification &amp; Institutional Requirements</h3>
            <ul>
              <li>
                <strong>Practitioners &amp; Pharmacists:</strong> Must provide valid proof of identity, professional
                qualifications, specialty certifications, and active registration with the Pharmacy Council of Namibia /
                HPCNA.
              </li>
              <li>
                <strong>Pharmacies:</strong> Must be legally licensed pharmaceutical practices operated under a verified
                Responsible Pharmacist in compliance with Namibian statutory regulations.
              </li>
            </ul>

            <h3>B. License Validity &amp; Automatic Account Deactivation</h3>
            <ul>
              <li>
                <strong>License Expiration:</strong> Practitioner and pharmacy accounts are tied strictly to the validity
                period of their HPCNA / Pharmacy Council licensing. Upon expiration of an official license or practice
                registration, the associated account is automatically deactivated, blocking further consultation and
                medication dispensing services on the platform.
              </li>
              <li>
                <strong>Automatic Change Locks (All Users, Pharmacies &amp; Profile Pictures):</strong> To prevent fraud,
                false representation, or unverified updates, any edit or upload made to an account including changes to
                legal names, pharmacy trading details, licensing documents, or live profile images (applicable to
                practitioners, pharmacists, patients, and pharmacy listings) will trigger an automatic account
                deactivation.
              </li>
              <li>
                <strong>Super Admin Verification Required:</strong> Once an account is locked or deactivated due to profile
                edits, media uploads, or license renewals, it requires manual inspection and verification by a Super Admin.
                The account will only be reactivated once the Super Admin confirms the authenticity and accuracy of the
                submitted credentials.
              </li>
            </ul>

            <h2>4. Information We Process and Usage Restrictions</h2>

            <h3>A. Account Identification &amp; Operational Data</h3>
            <p>
              We process minimal profile details (full name, verified contact numbers, operating locations, live profile
              photos, and administrative interaction/dispensing logs) solely for account verification, safety, pharmacy
              fulfillment tracking, and identity validation between patients, practitioners, and pharmacies.
            </p>

            <h3>B. Strict Data Use Restrictions (Apple Guidelines Compliance)</h3>
            <ul>
              <li>
                User, attendance, or pharmaceutical order data processed via Health Connect Namibia will NEVER be sold, leased,
                or rented to third-party brokers.
              </li>
              <li>
                Account, identity, and interaction history logs are NEVER used for advertising, behavioral tracking, or
                non-healthcare marketing profiles.
              </li>
            </ul>

            <h2>5. In-App Account Deletion &amp; Audit Retention (Apple Compliant)</h2>
            <p>
              In accordance with Apple Developer Guidelines (Section 5.1.1), users may initiate account deletion directly
              within the iOS App. However, due to healthcare governance and legal tracking requirements, account deletion
              operates under specific data retention policies:
            </p>

            <h3>Deletion Process &amp; Data Status</h3>
            <ol>
              <li>
                <strong>User Initiation:</strong> Users initiate account deletion via Settings / Profile &gt; Delete Account
                in the Health Connect Namibia iOS App.
              </li>
              <li>
                <strong>User Access Revocation:</strong> Upon deletion confirmation, the account is immediately deactivated
                and rendered completely inaccessible to the patient or user.
              </li>
              <li>
                <strong>Super Admin Retention for Legal Audit:</strong> In compliance with statutory healthcare log
                retention obligations, administrative tracking logs (who attended to whom, dispensing records, and
                transaction logs) are retained in a secure, archived state. These archived records are strictly
                inaccessible to standard users and are only accessible by a Super Admin in the event of an official
                medical dispute, legal request, or data audit.
              </li>
            </ol>

            <h2>6. Contact and Regulatory Inquiries</h2>
            <p>
              For questions regarding verification protocols, pharmacy onboarding, account reactivation requests, or
              privacy practices:
            </p>
            <ul>
              <li>Platform Developer / Legal Entity: Kopano_Vertex Trading CC</li>
              <li>Email: <a href="mailto:support@healthconnect.com.na">support@healthconnect.com.na</a></li>
              <li>Location: Windhoek, Namibia</li>
            </ul>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function TermsPage() {
  const sections = [
    { id: 'acceptance', num: '01', title: 'Acceptance of Terms' },
    { id: 'nature', num: '02', title: 'Nature of the Services' },
    { id: 'practitioners', num: '03', title: 'Practitioner Liability' },
    { id: 'accounts', num: '04', title: 'Accounts & Conduct' },
    { id: 'payments', num: '05', title: 'Payments & Billing' },
    { id: 'privacy', num: '06', title: 'Data Privacy' },
    { id: 'ip', num: '07', title: 'Intellectual Property' },
    { id: 'liability', num: '08', title: 'Limitation of Liability' },
    { id: 'modifications', num: '09', title: 'Modifications' },
    { id: 'governing-law', num: '10', title: 'Governing Law' },
  ];

  return (
    <div className="App">
      <LegalPageHeader />
      <main className="terms-page">
        <section className="terms-hero">
          <div className="terms-hero__glow" aria-hidden="true" />
          <div className="container terms-hero__inner">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__bar" />
              Legal Agreement
            </p>
            <h1 className="terms-hero__title">Terms of Service</h1>
            <p className="terms-hero__lede">
              The agreement governing use of Kopano-Vertex Trading CC websites, apps, and digital platforms —
              including Health Connect Namibia.
            </p>
            <div className="terms-meta">
              <div className="terms-meta__item">
                <span className="terms-meta__label">Effective</span>
                <span className="terms-meta__value">November 24, 2026</span>
              </div>
              <div className="terms-meta__item">
                <span className="terms-meta__label">Registration</span>
                <span className="terms-meta__value">CC/2025/09693</span>
              </div>
              <div className="terms-meta__item">
                <span className="terms-meta__label">Entity</span>
                <span className="terms-meta__value">Kopano-Vertex Trading CC</span>
              </div>
              <div className="terms-meta__item">
                <span className="terms-meta__label">Jurisdiction</span>
                <span className="terms-meta__value">Republic of Namibia</span>
              </div>
            </div>
          </div>
        </section>

        <div className="container terms-layout">
          <aside className="terms-toc" aria-label="Table of contents">
            <p className="terms-toc__title">Contents</p>
            <nav className="terms-toc__nav">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="terms-toc__link">
                  <span className="terms-toc__num">{section.num}</span>
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          <article className="terms-content">
            <section id="acceptance" className="terms-section">
              <header className="terms-section__head">
                <span className="terms-section__num">01</span>
                <h2>Acceptance of Terms</h2>
              </header>
              <p>
                By accessing or using any website, mobile application, or digital software service operated by
                Kopano-Vertex Trading CC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), including Health Connect
                Namibia and related enterprise platforms (collectively, the &quot;Services&quot;), you (&quot;User,&quot; &quot;Patient,&quot; or
                &quot;Service Provider&quot;) agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to
                these Terms, do not access or use the Services.
              </p>
            </section>

            <section id="nature" className="terms-section">
              <header className="terms-section__head">
                <span className="terms-section__num">02</span>
                <h2>Nature of the Services &amp; Platform Role</h2>
              </header>
              <div className="terms-points">
                <div className="terms-point">
                  <h3>Technology Facilitator Only</h3>
                  <p>
                    Kopano-Vertex Trading CC develops and operates digital software and marketplace platforms that
                    facilitate scheduling, administrative coordination, and communication between independent
                    third-party service providers and end users.
                  </p>
                </div>
                <div className="terms-point">
                  <h3>No Direct Medical or Clinical Care</h3>
                  <p>
                    Where our Services connect users with healthcare professionals, Kopano-Vertex Trading CC is
                    strictly a non-emergency technology intermediary. We do not provide medical advice, clinical
                    diagnosis, treatment, or emergency medical response.
                  </p>
                </div>
              </div>
              <div className="terms-callout" role="note">
                <span className="material-symbols-outlined" aria-hidden="true">emergency</span>
                <div>
                  <strong>Emergency Disclaimer</strong>
                  <p>
                    Do not use our platforms for life-threatening or medical emergencies. In an emergency, contact
                    local emergency medical services or visit the nearest hospital immediately.
                  </p>
                </div>
              </div>
            </section>

            <section id="practitioners" className="terms-section">
              <header className="terms-section__head">
                <span className="terms-section__num">03</span>
                <h2>Independent Contractor Status &amp; Practitioner Liability</h2>
              </header>
              <div className="terms-points">
                <div className="terms-point">
                  <h3>Independent Practitioners</h3>
                  <p>
                    All healthcare practitioners, consultants, and third-party specialists accessible through our
                    Services operate as independent contractors and are not employees, agents, or partners of
                    Kopano-Vertex Trading CC.
                  </p>
                </div>
                <div className="terms-point">
                  <h3>Regulatory Compliance &amp; Liability</h3>
                  <p>
                    Healthcare practitioners using the platform warrant that they hold active, valid registration with
                    the Health Professions Councils of Namibia (HPCNA) and any other applicable statutory bodies. Each
                    practitioner assumes full personal, clinical, and professional liability for all consultations,
                    diagnoses, prescriptions, and treatments rendered, and indemnifies Kopano-Vertex Trading CC against
                    any claims, damages, or losses arising from their professional practice.
                  </p>
                </div>
              </div>
            </section>

            <section id="accounts" className="terms-section">
              <header className="terms-section__head">
                <span className="terms-section__num">04</span>
                <h2>User Accounts, Conduct &amp; Account Deletion</h2>
              </header>
              <div className="terms-points">
                <div className="terms-point">
                  <h3>Registration &amp; Accuracy</h3>
                  <p>
                    You must provide accurate, current, and complete information when creating an account and keep
                    your login credentials secure.
                  </p>
                </div>
                <div className="terms-point">
                  <h3>Prohibited Conduct</h3>
                  <p>
                    You agree not to copy, reverse-engineer, decompile, scrape, resell, or exploit any part of our
                    software, source code, or APIs, nor use the Services for unlawful, fraudulent, or abusive purposes.
                  </p>
                </div>
                <div className="terms-point">
                  <h3>Account Termination &amp; Deletion</h3>
                  <p>
                    You may request deletion of your account and associated personal profile data at any time through
                    the in-app account settings or by emailing our support team at{' '}
                    <a href="mailto:support@kopanovertex.org">support@kopanovertex.org</a>. We reserve the right to
                    suspend or terminate accounts that violate these Terms or applicable Namibian law.
                  </p>
                </div>
              </div>
            </section>

            <section id="payments" className="terms-section">
              <header className="terms-section__head">
                <span className="terms-section__num">05</span>
                <h2>Payments, Subscriptions &amp; Billing</h2>
              </header>
              <div className="terms-points">
                <div className="terms-point">
                  <h3>No Custodial Wallets</h3>
                  <p>
                    Kopano-Vertex Trading CC does not operate custodial user wallets or hold user funds in escrow.
                  </p>
                </div>
                <div className="terms-point">
                  <h3>Payment Processing</h3>
                  <p>
                    Platform subscription fees, prepaid practitioner credit packages, and approved third-party payment
                    integrations are processed securely through authorized payment gateways (such as PayGate/Payfast,
                    DPO, or direct institutional clearing). Any commercial fees, refunds, or medical aid claims (such as
                    NAMAF-coded billing workflows) are subject to the specific service tier selected at checkout and
                    applicable Namibian consumer protection rules.
                  </p>
                </div>
              </div>
            </section>

            <section id="privacy" className="terms-section">
              <header className="terms-section__head">
                <span className="terms-section__num">06</span>
                <h2>Data Privacy &amp; Record Retention</h2>
              </header>
              <div className="terms-points">
                <div className="terms-point">
                  <h3>Minimal Data Architecture</h3>
                  <p>
                    In accordance with our privacy-by-design standards, we do not store patient clinical records or
                    health cards on our consumer marketplace servers. Platform logs are restricted to administrative
                    attendance, booking timestamps, and audit trails required for operational integrity and statutory
                    compliance.
                  </p>
                </div>
                <div className="terms-point">
                  <h3>Data Protection</h3>
                  <p>
                    Personal information is processed in accordance with our{' '}
                    <a href="/privacy">Privacy Policy</a> and applicable data protection laws of the Republic of Namibia.
                  </p>
                </div>
              </div>
            </section>

            <section id="ip" className="terms-section">
              <header className="terms-section__head">
                <span className="terms-section__num">07</span>
                <h2>Intellectual Property Rights</h2>
              </header>
              <p>
                All software, source code, user interfaces, trademarks, logos, databases, and content associated with
                Kopano-Vertex Trading CC and its platforms are the exclusive intellectual property of Kopano-Vertex
                Trading CC and are protected under Namibian and international copyright and intellectual property laws.
              </p>
            </section>

            <section id="liability" className="terms-section">
              <header className="terms-section__head">
                <span className="terms-section__num">08</span>
                <h2>Limitation of Liability &amp; Service Availability</h2>
              </header>
              <div className="terms-points">
                <div className="terms-point">
                  <h3>As-Is Basis</h3>
                  <p>
                    The Services are provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. While we strive for high
                    availability, we do not warrant uninterrupted access and are not liable for network outages, mobile
                    data charges, or third-party service disruptions.
                  </p>
                </div>
                <div className="terms-point">
                  <h3>Limitation of Damages</h3>
                  <p>
                    To the maximum extent permitted by Namibian law, Kopano-Vertex Trading CC shall not be liable for any
                    indirect, incidental, special, or consequential damages arising out of your use of—or inability to
                    use—the Services, or from interactions with independent third-party service providers.
                  </p>
                </div>
                <div className="terms-point">
                  <h3>Statutory Rights</h3>
                  <p>
                    Nothing in these Terms excludes or limits any mandatory statutory consumer rights you may have under
                    applicable law.
                  </p>
                </div>
              </div>
            </section>

            <section id="modifications" className="terms-section">
              <header className="terms-section__head">
                <span className="terms-section__num">09</span>
                <h2>Modifications to Terms</h2>
              </header>
              <p>
                We may update these Terms from time to time to reflect operational, legal, or regulatory changes.
                Updated Terms will be posted with a revised Effective Date. Continued use of the Services after changes
                are posted constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section id="governing-law" className="terms-section">
              <header className="terms-section__head">
                <span className="terms-section__num">10</span>
                <h2>Governing Law &amp; Contact Information</h2>
              </header>
              <p>
                These Terms are governed by and construed in accordance with the laws of the Republic of Namibia, and
                any disputes shall be subject to the exclusive jurisdiction of the courts of Namibia.
              </p>

              <div className="terms-contact">
                <div className="terms-contact__intro">
                  <h3>Official Entity &amp; Support</h3>
                  <p>Reach the registered entity for questions about these Terms.</p>
                </div>
                <dl className="terms-contact__grid">
                  <div>
                    <dt>Registered Entity</dt>
                    <dd>Kopano-Vertex Trading CC (CC/2025/09693)</dd>
                  </div>
                  <div>
                    <dt>Registered Location</dt>
                    <dd>Windhoek, Republic of Namibia</dd>
                  </div>
                  <div>
                    <dt>Support Email</dt>
                    <dd>
                      <a href="mailto:support@kopanovertex.org">support@kopanovertex.org</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Support Telephone</dt>
                    <dd>
                      <a href="tel:+264814302536">+264 81 430 2536</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="App">
      <LegalPageHeader />
      <main className="legal">
        <div className="container">
          <article className="legal__inner">
            <h1>Health Connect Namibia Privacy Policy</h1>
            <p>
              This Privacy Policy explains how Kopano-Vertex Trading cc (&quot;Kopano-Vertex&quot;, &quot;we,&quot; &quot;us&quot; or
              &quot;our&quot;) collects, uses, stores and protects personal information when you use the Health Connect Namibia
              platform. This policy applies specifically to Health Connect Namibia and related digital services.
            </p>

            <h2>1. Information We Collect</h2>
            <ul>
              <li>Identification information such as your name, contact details and demographic data.</li>
              <li>Health-related information that you voluntarily provide to healthcare professionals via Health Connect Namibia.</li>
              <li>Technical information such as device identifiers, approximate location (if enabled) and usage logs.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To provide and maintain telemedicine consultations and related Health Connect Namibia services.</li>
              <li>To improve service quality, security, and reliability of the Health Connect Namibia platform.</li>
              <li>To comply with applicable legal, regulatory and clinical record-keeping obligations.</li>
            </ul>

            <h2>3. Data Sharing and Storage</h2>
            <ul>
              <li>Your health information is shared only with authorised healthcare professionals and trusted partners where necessary for care delivery.</li>
              <li>Data is stored using secure, access-controlled systems with regional data sovereignty as a design priority.</li>
              <li>We do not sell your personal or health information to third parties.</li>
            </ul>

            <h2>4. Your Rights</h2>
            <ul>
              <li>You may request access to your personal information held within Health Connect Namibia.</li>
              <li>You may request correction of inaccurate personal information.</li>
              <li>You may contact us to inquire about data retention, security or consent withdrawal where applicable.</li>
            </ul>

            <h2>5. Contact</h2>
            <p>
              For questions about this Privacy Policy or how your data is handled in Health Connect Namibia, please contact:
            </p>
            <ul>
              <li>Kopano-Vertex Trading cc, Windhoek, Namibia</li>
              <li>Phone: <a href="tel:+264818111703">+264 81 811 1703</a></li>
              <li>Email: <a href="mailto:support@kopanovertex.org">support@kopanovertex.org</a></li>
            </ul>

            <p className="legal__meta" style={{ marginTop: 24 }}>
              Last updated: 2026. This page is provided for informational purposes during the Health Connect Namibia development phase.
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
