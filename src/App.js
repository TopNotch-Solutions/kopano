import React, { useState, useEffect } from 'react';
import './App.css';

const publicUrl = process.env.PUBLIC_URL;

const TEAM = [
  { img: '48633-removebg-preview.png', name: 'Petrus Haixula', role: 'CEO — Co Founder', bio: 'Seasoned IT professional with over 10 years of experience in technology, business, and blockchain innovation.' },
  { img: 'paulus.png', name: 'Paulus Wilhelm', role: 'Head of Technology — Co Founder', bio: 'Driving technological innovation and local empowerment across Namibia.' },
  { img: 'talo.png', name: 'Taloshili Nghiwewelekwa', role: 'Senior Software Developer', bio: 'Transforming ideas into impactful digital solutions with future-ready systems.' },
  { img: 'owen.png', name: 'Chilwalo Owen Luyando', role: 'Senior Software Developer', bio: 'Designing intelligent, scalable platforms aligned with business objectives.' },
  { img: 'saimah.png', name: 'Saima Haitembu', role: 'Business Analyst & UI/UX Designer', bio: 'Dual-role specializing in end-to-end product delivery from requirements gathering, process modeling, and wireframing to high-fidelity prototyping and design execution.' },
  { img: 'kondjee.png', name: 'Kondjee Kamutindi', role: 'Software Developer - Intern', bio: 'CS student dedicated to turning ideas into reliable, user-focused digital solutions.' },
  { img: 'shikongo.png', name: 'Jeremiah Shikongo', role: 'System Administrator', bio: 'Maintaining secure, reliable infrastructure and keeping our platforms running smoothly.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isPrivacyRoute = pathname === '/privacy';
  const isPoliciesRoute = pathname === '/policies';

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
  }, [isPrivacyRoute, isPoliciesRoute]);

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

  return (
    <div className="App">
      <a href="#main" className="skip-link">Skip to content</a>

      <header className={`navbar ${navSolid || menuOpen ? 'navbar--solid' : ''}`}>
        <div className="navbar__inner container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img
              src={`${publicUrl}/Kopano_Vertex__1_-removebg-preview.png`}
              alt=""
              className="brand__mark"
            />
            Kopano-Vertex Trading
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
            style={{ backgroundImage: `url(${publicUrl}/h1.png)` }}
            aria-hidden="true"
          />
          <div className="hero__overlay" aria-hidden="true" />
          <div className="hero__grid container">
            <div className="hero__copy">
              <p className="eyebrow">
                <span className="eyebrow__bar" />
                Digital Sovereignty
              </p>
              <h1 className="hero__title">Kopano-Vertex Trading</h1>
              <p className="hero__text">
                A Namibian technology company committed to innovation and local empowerment,
                developing cutting-edge solutions that transform industries and improve lives.
              </p>
              <div className="hero__actions">
                <a href="#health-connect" className="btn btn--accent">Our Projects</a>
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
                    Our mission is to leverage cutting-edge technology to transform traditional
                    industries, making essential services more accessible, efficient, and reliable
                    for all Namibians.
                  </p>
                </div>
                <div className="stats reveal reveal--stagger">
                  <div className="stat">
                    <span className="stat__label">Active Projects</span>
                    <span className="stat__value">2</span>
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
          </div>
        </section>

        <section id="health-connect" className="section section--tint">
          <div className="container">
            <div className="section-header reveal">
              <p className="eyebrow"><span className="eyebrow__bar" />Project 01</p>
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

        <section id="namibride" className="section section--tint">
          <div className="container">
            <div className="section-header reveal">
              <p className="eyebrow"><span className="eyebrow__bar" />Project 02</p>
              <h2 className="section-header__title">NAMIBride</h2>
              <p className="section-header__subtitle">Formalizing Transport Across Namibia</p>
            </div>
            <div className="split">
              <div className="reveal">
                <h3 className="subheading">Business Summary</h3>
                <div className="prose">
                  <p>
                    NAMIBride is a ride-hailing and logistics platform designed to formalize the public
                    transport sector in Namibia. It connects passengers with verified drivers for safe
                    transport and goods delivery across growing towns.
                  </p>
                </div>
                <div className="feature-grid feature-grid--2">
                  <div className="feature">
                    <h4>Ride-Hailing</h4>
                    <p>Verified drivers for safe, reliable transport</p>
                  </div>
                  <div className="feature">
                    <h4>Fleet Management</h4>
                    <p>Comprehensive portals for business owners</p>
                  </div>
                  <div className="feature">
                    <h4>Safety Features</h4>
                    <p>AI verification, panic buttons, trip histories</p>
                  </div>
                  <div className="feature">
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
                    <div className="member__photo">
                      <img src={`${publicUrl}/${m.img}`} alt={m.name} />
                    </div>
                    <div className="member__body">
                      <h3>{m.name}</h3>
                      <span className="member__role">{m.role}</span>
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
                  href="mailto:support@kopanovertex.net?subject=Partnership%20Inquiry"
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
    { icon: 'mail', label: 'Email', value: <a href="mailto:support@kopanovertex.net" className="contact-item__value">support@kopanovertex.net</a> },
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
            <a href="/privacy">Privacy Policy</a>
            <a href="/policies">App Store Policy</a>
          </div>
          <div className="footer__col">
            <h3>Connect</h3>
            <div className="footer__social">
              <a href="/" aria-label="Website">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a href="mailto:support@kopanovertex.net" aria-label="Email">
                <span className="material-symbols-outlined">mail</span>
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
          <img
            src={`${publicUrl}/Kopano_Vertex__1_-removebg-preview.png`}
            alt=""
            className="brand__mark"
          />
          Kopano-Vertex Trading
        </a>
      </div>
    </header>
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
              <li>Email: <a href="mailto:support@kopanovertex.org">support@kopanovertex.net</a></li>
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
