import React, { useState, useEffect } from 'react';
import './App.css';

const publicUrl = process.env.PUBLIC_URL;

const TEAM = [
  { img: '48633-removebg-preview.png', name: 'Petrus Haixula', role: 'CEO — Co Founder', bio: 'Seasoned IT professional with over 10 years of experience in technology, business, and blockchain innovation.' },
  { img: 'paulus.png', name: 'Paulus Wilhelm', role: 'Head of Technology — Co Founder', bio: 'Driving technological innovation and local empowerment across Namibia.' },
  { img: 'talo.png', name: 'Taloshili Nghiwewelekwa', role: 'Senior Software Developer', bio: 'Transforming ideas into impactful digital solutions with future-ready systems.' },
  { img: 'owen.png', name: 'Chilwalo Owen Luyando', role: 'Senior Software Developer', bio: 'Designing intelligent, scalable platforms aligned with business objectives.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isPrivacyRoute = pathname === '/privacy';
  const isPoliciesRoute = pathname === '/policies';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
      <header className="top-bar">
        <div className="top-bar-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img src={`${publicUrl}/Kopano_Vertex__1_-removebg-preview.png`} alt="" className="brand-logo" />
            <span className="brand-name font-headline-md">Kopano-Vertex</span>
          </a>

          <button
            type="button"
            className="menu-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`menu-icon ${menuOpen ? 'open' : ''}`}>
              <span /><span /><span />
            </span>
          </button>

          <nav className={`top-nav ${menuOpen ? 'open' : ''}`}>
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
            <div className={`nav-dropdown ${projectsOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="nav-link nav-link-active nav-dropdown-btn"
                onClick={() => setProjectsOpen(!projectsOpen)}
                aria-expanded={projectsOpen}
              >
                Projects
                <span className="material-symbols-outlined">keyboard_arrow_down</span>
              </button>
              <div className="nav-dropdown-menu">
                <a href="#health-connect" onClick={closeMenu}>Health_Connect</a>
                <a href="#namibride" onClick={closeMenu}>NAMIBride</a>
              </div>
            </div>
            <a href="#about" className="nav-link" onClick={closeMenu}>About Us</a>
            <a href="#team" className="nav-link" onClick={closeMenu}>Team</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </nav>

          <div className="top-bar-actions">
            <a href="#contact" className="btn-login font-label-sm" onClick={closeMenu}>Get In Touch</a>
          </div>
        </div>
      </header>

      {menuOpen && (
        <button type="button" className="nav-overlay" aria-label="Close menu" onClick={closeMenu} />
      )}

      <main className="main-content">
        <section id="home" className="hero-banner">
          <img className="hero-banner-img" src={`${publicUrl}/h1.png`} alt="Healthcare technology" />
          <div className="hero-banner-inner page-wrap">
            <p className="hero-eyebrow font-label-md">
              <span className="hero-eyebrow-line" />
              Digital Sovereignty
            </p>
            <h1 className="hero-heading font-display-lg">Kopano-Vertex Trading</h1>
            <p className="hero-lead font-body-lg">
              A Namibian technology company committed to innovation and local empowerment,
              developing cutting-edge solutions that transform industries and improve lives.
            </p>
            <div className="hero-actions">
              <a href="#health-connect" className="btn btn-cyan font-label-md">Our Projects</a>
              <a href="#contact" className="btn btn-outline font-label-md">Contact Us</a>
            </div>
          </div>
          <div className="hero-banner-fade" />
        </section>

        <section id="about" className="section page-wrap reveal">
          <div className="summary-grid">
            <div className="summary-main">
              <SectionHeading title="About Kopano-Vertex" />
              <p className="font-body-md summary-text">
                Kopano-Vertex Trading cc is a Namibian-owned and operated technology company
                headquartered in Windhoek, dedicated to creating innovative digital solutions that
                address critical gaps in the market.
              </p>
              <p className="font-body-md summary-text muted">
                Our mission is to leverage cutting-edge technology to transform traditional
                industries, making essential services more accessible, efficient, and reliable
                for all Namibians.
              </p>
              <div className="stats-row">
                <Stat value="2" label="Active Projects" />
                <Stat value="100%" label="Namibian Owned" />
                <Stat value="WHK" label="Headquarters" />
              </div>
            </div>
            <InfraSidebar
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
        </section>

        <section id="health-connect" className="section page-wrap reveal">
          <ProjectHeader title="Health_Connect" subtitle="Decentralizing Care Across Namibia" />
          <div className="summary-grid">
            <div className="summary-main">
              <SectionHeading title="Business Summary" as="h3" />
              <p className="font-body-md summary-text">
                Health_Connect is a revolutionary telemedicine platform designed to decentralize
                healthcare access across Namibia and the SADC region. By implementing a sophisticated{' '}
                <strong>&quot;Uber-for-Healthcare&quot;</strong> model, we empower patients to connect
                with vetted medical professionals instantly.
              </p>
              <div className="two-col-features">
                <FeatureBlock title="Digital Sovereignty" text="Our engineering focus prioritizes security and latency, ensuring patient data remains protected while delivering a seamless experience." />
                <FeatureBlock title="On-Demand Access" text="Direct consultation, chronic care management, and emergency response triggers integrated into a unified cloud-native environment." />
              </div>
              <HighlightBox />
              <div className="badge-row">
                <span className="badge badge-industry font-label-sm">HealthTech / Telemedicine</span>
                <span className="badge badge-status font-label-sm">In Development</span>
              </div>
            </div>
            <InfraSidebar
              title="Project Infrastructure"
              rows={[
                ['Project Status', <span key="s" className="status-pill font-label-sm">Launch Pending</span>],
                ['Operating Model', 'On-Demand Telemedicine'],
                ['Tech Stack', 'Micro-service / Cloud'],
                ['Data Center', 'Regional Sovereignty'],
              ]}
            />
          </div>
        </section>

        <section className="section section-muted page-wrap reveal">
          <h2 className="section-title-center font-headline-lg">Health_Connect in Action</h2>
          <MediaGrid files={['h2.png', 'h6.png', 'h5.png', 'h1.png']} />
        </section>

        <section className="section section-muted page-wrap reveal">
          <div className="section-intro-center">
            <h2 className="font-headline-lg">Target Market Segmentation</h2>
            <p className="font-body-md muted">Tailored digital experiences optimized for diverse user demographics and healthcare needs.</p>
          </div>
          <MarketGrid />
        </section>

        <section id="partners" className="section page-wrap reveal">
          <PartnerBanner />
        </section>

        <section id="namibride" className="section page-wrap reveal">
          <ProjectHeader title="NAMIBride" subtitle="Formalizing Transport Across Namibia" />
          <div className="summary-grid">
            <div className="summary-main">
              <SectionHeading title="Business Summary" as="h3" />
              <p className="font-body-md summary-text">
                NAMIBride is a ride-hailing and logistics platform designed to formalize the public
                transport sector in Namibia. It connects passengers with verified drivers for safe
                transport and goods delivery across growing towns.
              </p>
              <div className="feature-pills">
                <FeaturePill title="Ride-Hailing" text="Verified drivers for safe, reliable transport" />
                <FeaturePill title="Fleet Management" text="Comprehensive portals for business owners" />
                <FeaturePill title="Safety Features" text="AI verification, panic buttons, trip histories" />
                <FeaturePill title="Goods Delivery" text="Efficient delivery for businesses and individuals" />
              </div>
              <div className="badge-row">
                <span className="badge badge-industry font-label-sm">Transportation</span>
                <span className="badge badge-status font-label-sm">In Development</span>
              </div>
            </div>
            <aside className="summary-sidebar">
              <div className="infra-card">
                <h3 className="infra-title font-label-md">Target Markets</h3>
                <p className="font-body-sm muted infra-desc">
                  Urban populations in Walvis Bay, Swakopmund, Oshakati, Ongwediva, Ondangwa, and
                  Windhoek — over 300,000 combined.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="videos" className="section section-muted page-wrap reveal">
          <h2 className="section-title-center font-headline-lg">NAMIBride in Action</h2>
          <VideoGrid />
        </section>

        <section id="team" className="section page-wrap reveal">
          <div className="section-intro-center">
            <h2 className="font-headline-lg">Our Team</h2>
            <p className="font-body-md muted">Kopano-Vertex Trading cc — Windhoek, Namibia.</p>
          </div>
          <div className="team-grid">
            {TEAM.map((m) => (
              <article className="team-card glass-panel" key={m.name}>
                <img src={`${publicUrl}/${m.img}`} alt={m.name} className="team-avatar" />
                <h3 className="font-headline-md">{m.name}</h3>
                <p className="team-role font-label-sm">{m.role}</p>
                <p className="font-body-sm muted">{m.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-cta page-wrap reveal">
          <div className="cta-block">
            <span className="cta-bar" />
            <h2 className="font-headline-lg">Building the Future of Regional Care</h2>
            <p className="font-body-lg muted">
              Join us as we expand Health_Connect and NAMIBride across the SADC region, bringing
              global technological standards to local needs through digital sovereignty and innovation.
            </p>
            <div className="cta-actions">
              <a href="#contact" className="btn btn-navy font-label-md">Inquire for Partnership</a>
              <a href="#health-connect" className="btn btn-outline-dark font-label-md">View All Projects</a>
            </div>
          </div>
        </section>

        <section id="contact" className="section page-wrap reveal">
          <div className="summary-main summary-main-full">
            <SectionHeading title="Get In Touch" />
            <p className="font-body-md summary-text muted">
              Whether you&apos;re interested in our projects, partnerships, or services — we&apos;d love to hear from you.
            </p>
            <ContactGrid />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function SectionHeading({ title, as: Tag = 'h2' }) {
  return (
    <div className="section-heading-row">
      <span className="section-accent-bar" />
      <Tag className="font-headline-lg">{title}</Tag>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat-box">
      <span className="stat-value font-headline-lg">{value}</span>
      <span className="stat-label font-label-sm">{label}</span>
    </div>
  );
}

function InfraSidebar({ title, rows, cta }) {
  return (
    <aside className="summary-sidebar">
      <div className="infra-card">
        <h3 className="infra-title font-label-md">{title}</h3>
        <dl className="infra-list">
          {rows.map(([dt, dd]) => (
            <div className="infra-row" key={dt}>
              <dt className="font-label-sm">{dt}</dt>
              <dd className="font-label-sm">{dd}</dd>
            </div>
          ))}
        </dl>
        {cta && (
          <a href={cta.href} className="btn btn-navy btn-block font-label-md">{cta.label}</a>
        )}
      </div>
    </aside>
  );
}

function ProjectHeader({ title, subtitle }) {
  return (
    <div className="project-hero-mini">
      <p className="hero-eyebrow font-label-md">
        <span className="hero-eyebrow-line dark" />
        Project Showcase
      </p>
      <h2 className="font-display-lg project-hero-title">{title}</h2>
      <p className="font-body-lg muted">{subtitle}</p>
    </div>
  );
}

function FeatureBlock({ title, text }) {
  return (
    <div>
      <h4 className="feature-label font-label-md">{title}</h4>
      <p className="font-body-sm muted">{text}</p>
    </div>
  );
}

function HighlightBox() {
  return (
    <div className="highlight-box">
      <span className="material-symbols-outlined highlight-icon">verified_user</span>
      <div>
        <h4 className="font-label-md">Standard of Excellence</h4>
        <p className="font-body-sm muted">
          Every practitioner undergoes rigorous verification including credentials,
          experience, and peer reviews.
        </p>
      </div>
    </div>
  );
}

function FeaturePill({ title, text }) {
  return (
    <div className="feature-pill glass-panel">
      <h4 className="font-label-md">{title}</h4>
      <p className="font-body-sm muted">{text}</p>
    </div>
  );
}

function MediaGrid({ files }) {
  return (
    <div className="media-grid">
      {files.map((file) => (
        <div className="media-card" key={file}>
          <img src={`${publicUrl}/${file}`} alt="Health_Connect screenshot" />
        </div>
      ))}
    </div>
  );
}

function MarketGrid() {
  const cards = [
    { icon: 'elderly', title: 'The Elderly', text: 'Simplified UI/UX with high contrast and voice-enabled features for chronic illness management and routine check-ups from home.', tag: 'Accessibility First' },
    { icon: 'family_restroom', title: 'Busy Parents', text: '24/7 access to pediatric consultants, immunization tracking, and immediate digital triage for late-night emergencies.', tag: 'Peace of Mind' },
    { icon: 'work_history', title: 'Professionals', text: 'Scheduled video consultations that fit a high-intensity work life, with digital prescriptions and wellness reporting.', tag: 'Efficiency Driven' },
  ];
  return (
    <div className="market-grid">
      {cards.map((c) => (
        <article className="market-card glass-panel" key={c.title}>
          <span className="material-symbols-outlined market-icon">{c.icon}</span>
          <h3 className="font-headline-md">{c.title}</h3>
          <p className="font-body-sm muted">{c.text}</p>
          <footer className="market-card-footer font-label-sm">{c.tag}</footer>
        </article>
      ))}
    </div>
  );
}

function PartnerBanner() {
  return (
    <div className="partner-banner">
      <div className="partner-banner-content">
        <div className="partner-tag-row">
          <span className="partner-tag font-label-sm">Strategic Partner</span>
          <span className="partner-tag-line" />
        </div>
        <h2 className="font-headline-lg partner-title">Integration with MR Ambulance</h2>
        <p className="font-body-md partner-text">
          Our partnership with MR Ambulance introduces a groundbreaking Digital Triage &amp;
          Transport system. When immediate physical intervention is needed, Health_Connect
          triggers a direct link to emergency dispatchers, sharing vital patient data in real-time.
        </p>
        <div className="partner-stats">
          <div>
            <span className="partner-stat-num font-display-lg">24/7</span>
            <span className="font-label-sm muted">Emergency Response</span>
          </div>
          <div>
            <span className="partner-stat-num font-display-lg">100%</span>
            <span className="font-label-sm muted">Integrated Care</span>
          </div>
        </div>
      </div>
      <div className="partner-banner-media">
        <img src={`${publicUrl}/eme.png`} alt="MR Ambulance" />
      </div>
    </div>
  );
}

function VideoGrid() {
  return (
    <div className="video-grid">
      {['1..mp4', '2.mp4', '3.mp4', '4.mp4'].map((file) => (
        <div className="video-card" key={file}>
          <video src={`${publicUrl}/${file}`} autoPlay loop muted playsInline />
        </div>
      ))}
    </div>
  );
}

function ContactGrid() {
  const items = [
    { label: 'Company', value: 'Kopano-Vertex Trading cc' },
    { label: 'Location', value: 'Windhoek, Namibia' },
    { label: 'Phone', value: <a href="tel:+264818111703">+264 81 811 1703</a> },
    { label: 'Email', value: <a href="mailto:support@kopanovertex.net">support@kopanovertex.net</a> },
  ];
  return (
    <div className="contact-grid">
      {items.map((item) => (
        <div className="contact-card glass-panel" key={item.label}>
          <span className="font-label-sm muted">{item.label}</span>
          <p className="font-body-md">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner page-wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="font-headline-md">Kopano-Vertex</h2>
            <p className="font-body-sm muted">
              Digital Sovereignty via Regional Excellence. Pioneering high-tech solutions for emerging
              markets across Southern Africa.
            </p>
          </div>
          <div className="footer-col">
            <h4 className="font-label-sm">Solutions</h4>
            <a href="#health-connect" className="font-label-sm footer-link-accent">Health_Connect</a>
            <a href="#namibride" className="font-label-sm muted-link">NAMIBride</a>
          </div>
          <div className="footer-col">
            <h4 className="font-label-sm">Company</h4>
            <a href="#about" className="font-label-sm muted-link">About Us</a>
            <a href="#team" className="font-label-sm muted-link">Team</a>
            <a href="#contact" className="font-label-sm muted-link">Contact</a>
          </div>
          <div className="footer-col">
            <h4 className="font-label-sm">Connect</h4>
            <div className="footer-social">
              <span className="material-symbols-outlined">public</span>
              <a href="mailto:support@kopanovertex.net" className="material-symbols-outlined" aria-label="Email">mail</a>
              <span className="material-symbols-outlined">share</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="font-label-sm muted">&copy; 2025 Kopano-Vertex Trading cc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

function LegalPageHeader() {
  return (
    <header className="top-bar">
      <div className="top-bar-inner">
        <a href="/" className="brand">
          <img src={`${publicUrl}/Kopano_Vertex__1_-removebg-preview.png`} alt="" className="brand-logo" />
          <span className="brand-name font-headline-md">Kopano-Vertex</span>
        </a>
      </div>
    </header>
  );
}

function PoliciesPage() {
  return (
    <div className="App privacy-page">
      <LegalPageHeader />

      <main className="main-content page-wrap">
        <section className="section privacy-content">
          <div className="section-heading-row">
            <span className="section-accent-bar" />
            <h1 className="font-display-lg">Privacy Policy</h1>
          </div>
          <p className="font-body-sm muted">
            Last Updated: July 27, 2026<br />
            Effective Date: July 27, 2026
          </p>
          <p className="font-body-md muted">
            Welcome to Health_Connect (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). Health_Connect is a digital healthcare
            coordination platform designed to facilitate non-emergency medical interactions, video/in-person
            telemedicine scheduling, practitioner-patient connections, and prescription dispensing coordination
            between verified healthcare practitioners, registered community/hospital pharmacies, and users. All
            participating healthcare providers and pharmaceutical practices operate under the regulatory framework
            of the Health Professions Council of Namibia (HPCNA) and the Pharmacy Council of Namibia.
          </p>
          <p className="font-body-md muted">
            We are committed to maintaining maximum transparency regarding user account management, regulatory
            compliance, and data privacy. This policy outlines how our iOS application operates in compliance with
            Apple App Store Review Guidelines (Section 5.1 &amp; 1.4) and Namibian healthcare regulations.
          </p>

          <h2 className="font-headline-lg">1. Important Notice: Non-Emergency Services &amp; Emergency Protocols</h2>
          <p className="font-body-md muted policy-notice">
            Health_Connect IS DESIGNED FOR NON-EMERGENCY HEALTHCARE COORDINATION, TELEMEDICINE, AND PHARMACEUTICAL
            DISPENSING.
          </p>
          <p className="font-body-md muted">
            The platform is NOT a standalone automated emergency dispatch system or diagnostic tool. For critical or
            life-threatening emergencies, primary reliance must be placed on local emergency medical responders.
          </p>
          <p className="font-body-md muted">
            <strong>Sustained Practitioner Support En Route (MR 24/7)</strong><br />
            In critical emergency situations requiring immediate transport, users or their companions may utilize
            Health_Connect to stay connected with or sustained by a matched practitioner while en route to an
            emergency medical facility via MR 24/7 Ambulance Services.
          </p>
          <ul className="font-body-md muted">
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

          <h2 className="font-headline-lg">2. Data Minimization, Administrative Tracking &amp; Health Records</h2>
          <p className="font-body-md muted">
            We uphold a strict policy of Data Minimization regarding clinical content, balanced with necessary
            administrative audit logging:
          </p>
          <ul className="font-body-md muted">
            <li>
              <strong>Zero Patient Clinical Records Stored In-App:</strong> Health_Connect does NOT collect, process,
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

          <h2 className="font-headline-lg">3. Accreditation, Automated Deactivation &amp; Account Control</h2>
          <p className="font-body-md muted">
            To ensure absolute safety, trust, and regulatory compliance across the platform, Health_Connect enforces
            strict identity, licensing, and accreditation controls for all platform entities (patients, healthcare
            practitioners, responsible pharmacists, and pharmacy establishments).
          </p>

          <h3 className="font-headline-md">A. Qualification &amp; Institutional Requirements</h3>
          <ul className="font-body-md muted">
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

          <h3 className="font-headline-md">B. License Validity &amp; Automatic Account Deactivation</h3>
          <ul className="font-body-md muted">
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

          <h2 className="font-headline-lg">4. Information We Process and Usage Restrictions</h2>

          <h3 className="font-headline-md">A. Account Identification &amp; Operational Data</h3>
          <p className="font-body-md muted">
            We process minimal profile details (full name, verified contact numbers, operating locations, live profile
            photos, and administrative interaction/dispensing logs) solely for account verification, safety, pharmacy
            fulfillment tracking, and identity validation between patients, practitioners, and pharmacies.
          </p>

          <h3 className="font-headline-md">B. Strict Data Use Restrictions (Apple Guidelines Compliance)</h3>
          <ul className="font-body-md muted">
            <li>
              User, attendance, or pharmaceutical order data processed via Health_Connect will NEVER be sold, leased,
              or rented to third-party brokers.
            </li>
            <li>
              Account, identity, and interaction history logs are NEVER used for advertising, behavioral tracking, or
              non-healthcare marketing profiles.
            </li>
          </ul>

          <h2 className="font-headline-lg">5. In-App Account Deletion &amp; Audit Retention (Apple Compliant)</h2>
          <p className="font-body-md muted">
            In accordance with Apple Developer Guidelines (Section 5.1.1), users may initiate account deletion directly
            within the iOS App. However, due to healthcare governance and legal tracking requirements, account deletion
            operates under specific data retention policies:
          </p>

          <h3 className="font-headline-md">Deletion Process &amp; Data Status</h3>
          <ol className="font-body-md muted">
            <li>
              <strong>User Initiation:</strong> Users initiate account deletion via Settings / Profile &gt; Delete Account
              in the Health_Connect iOS App.
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

          <h2 className="font-headline-lg">6. Contact and Regulatory Inquiries</h2>
          <p className="font-body-md muted">
            For questions regarding verification protocols, pharmacy onboarding, account reactivation requests, or
            privacy practices:
          </p>
          <ul className="font-body-md muted">
            <li>Platform Developer / Legal Entity: Kopano_Vertex Trading CC</li>
            <li>Email: <a href="mailto:support@healthconnect.com.na">support@healthconnect.com.na</a></li>
            <li>Location: Windhoek, Namibia</li>
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="App privacy-page">
      <LegalPageHeader />

      <main className="main-content page-wrap">
        <section className="section privacy-content">
          <div className="section-heading-row">
            <span className="section-accent-bar" />
            <h1 className="font-display-lg">Health_Connect Privacy Policy</h1>
          </div>
          <p className="font-body-md muted">
            This Privacy Policy explains how Kopano-Vertex Trading cc (&quot;Kopano-Vertex&quot;, &quot;we&quot;, &quot;us&quot; or
            &quot;our&quot;) collects, uses, stores and protects personal information when you use the Health_Connect
            platform. This policy applies specifically to Health_Connect and related digital services.
          </p>

          <h2 className="font-headline-lg">1. Information We Collect</h2>
          <ul className="font-body-md muted">
            <li>Identification information such as your name, contact details and demographic data.</li>
            <li>Health-related information that you voluntarily provide to healthcare professionals via Health_Connect.</li>
            <li>Technical information such as device identifiers, approximate location (if enabled) and usage logs.</li>
          </ul>

          <h2 className="font-headline-lg">2. How We Use Your Information</h2>
          <ul className="font-body-md muted">
            <li>To provide and maintain telemedicine consultations and related Health_Connect services.</li>
            <li>To improve service quality, security, and reliability of the Health_Connect platform.</li>
            <li>To comply with applicable legal, regulatory and clinical record-keeping obligations.</li>
          </ul>

          <h2 className="font-headline-lg">3. Data Sharing and Storage</h2>
          <ul className="font-body-md muted">
            <li>Your health information is shared only with authorised healthcare professionals and trusted partners where necessary for care delivery.</li>
            <li>Data is stored using secure, access-controlled systems with regional data sovereignty as a design priority.</li>
            <li>We do not sell your personal or health information to third parties.</li>
          </ul>

          <h2 className="font-headline-lg">4. Your Rights</h2>
          <ul className="font-body-md muted">
            <li>You may request access to your personal information held within Health_Connect.</li>
            <li>You may request correction of inaccurate personal information.</li>
            <li>You may contact us to inquire about data retention, security or consent withdrawal where applicable.</li>
          </ul>

          <h2 className="font-headline-lg">5. Contact</h2>
          <p className="font-body-md muted">
            For questions about this Privacy Policy or how your data is handled in Health_Connect, please contact:
          </p>
          <ul className="font-body-md muted">
            <li>Kopano-Vertex Trading cc, Windhoek, Namibia</li>
            <li>Phone: <a href="tel:+264818111703">+264 81 811 1703</a></li>
            <li>Email: <a href="mailto:support@kopanovertex.net">support@kopanovertex.net</a></li>
          </ul>

          <p className="font-body-sm muted">
            Last updated: 2026. This page is provided for informational purposes during the Health_Connect development phase.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
