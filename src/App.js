import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/Kopano_Vertex__1_-removebg-preview.png`} alt="Kopano_Vertex Logo" className="logo-img" />
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#market">Market</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Revolutionizing Transportation in Namibia</h1>
          <p className="hero-subtitle">
            Safe, reliable, and efficient ride-hailing and goods transportation services 
            connecting passengers with verified drivers across Namibia's growing towns.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-secondary">Get Started</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" fill="#f0f0f0"/>
              <path d="M50 100 L150 100" stroke="#0066cc" strokeWidth="4"/>
              <circle cx="50" cy="100" r="15" fill="#0066cc"/>
              <circle cx="150" cy="100" r="15" fill="#0066cc"/>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About NAMIBride</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="lead">
                NAMIBride is a Namibian-owned and operated technology company poised to 
                revolutionize the public transportation and logistics sector in the nation's 
                growing towns.
              </p>
              <p>
                Our mobile platform connects passengers with verified drivers for safe, reliable, 
                and efficient ride-hailing and goods transportation services. Our mission is to 
                address the critical gap in the market for structured, digitally-enabled transport 
                solutions.
              </p>
              <p>
                By leveraging a prepaid driver wallet system, dynamic pricing, and robust safety 
                features, including innovative AI integrations with the Gemini API, NAMIBride will 
                offer a superior experience. We integrate with DPO Pay to handle all transactions 
                securely and efficiently.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <h3>6</h3>
                  <p>Target Towns</p>
                </div>
                <div className="stat-item">
                  <h3>300K+</h3>
                  <p>Target Population</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚗</div>
              <h3>Ride-Hailing Service</h3>
              <p>
                Connect with verified drivers for safe and reliable transportation across 
                Namibia's major towns. Professional driver verification ensures your safety.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📦</div>
              <h3>Goods Transportation</h3>
              <p>
                Efficient delivery and transportation services for small businesses and 
                individuals. Get your goods where they need to be, when they need to be there.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚛</div>
              <h3>Fleet Management Portal</h3>
              <p>
                Comprehensive fleet management solution for business owners. Track, manage, 
                and optimize your vehicle fleet with our advanced portal.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Safety Features</h3>
              <p>
                Panic buttons, immutable trip histories, and professional driver verification 
                ensure your safety is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="videos">
        <div className="container">
          <h2 className="section-title">NAMIBride in Action</h2>
          <div className="videos-grid">
            <div className="video-wrapper">
              <video 
                src={`${process.env.PUBLIC_URL}/1..mp4`} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="video-player"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-wrapper">
              <video 
                src={`${process.env.PUBLIC_URL}/2.mp4`} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="video-player"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-wrapper">
              <video 
                src={`${process.env.PUBLIC_URL}/3.mp4`} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="video-player"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-wrapper">
              <video 
                src={`${process.env.PUBLIC_URL}/4.mp4`} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="video-player"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section id="market" className="market">
        <div className="container">
          <h2 className="section-title">Market Opportunity</h2>
          <div className="market-content">
            <div className="market-text">
              <h3>Target Markets</h3>
              <p>
                NAMIBride targets urban populations in six key Namibian towns: Walvis Bay, 
                Swakopmund, Oshakati, Ongwediva, Ondangwa, and Windhoek. With a combined 
                urban population of over 300,000, we're addressing a critical need for 
                structured, digitally-enabled transport solutions.
              </p>
              <h3>Customer Segments</h3>
              <ul className="segment-list">
                <li>Youth and working-class commuters</li>
                <li>Tourists exploring Namibia</li>
                <li>Small businesses requiring logistics</li>
                <li>Fleet owners seeking management solutions</li>
              </ul>
              <h3>Competitive Advantage</h3>
              <p>
                While competitors like Yango and inDrive exist, NAMIBride differentiates itself 
                through fleet management capabilities, AI-powered features, deep local market 
                understanding, and comprehensive safety measures including driver verification 
                and immutable route histories.
              </p>
            </div>
            <div className="market-visual">
              <div className="towns-grid">
                <div className="town-item">Windhoek</div>
                <div className="town-item">Walvis Bay</div>
                <div className="town-item">Swakopmund</div>
                <div className="town-item">Oshakati</div>
                <div className="town-item">Ongwediva</div>
                <div className="town-item">Ondangwa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <h2 className="section-title">Our Organization</h2>
          <div className="team-content">
            <div className="company-info">
              <h3>Kopano_Vertex Trading cc</h3>
              <p className="location">📍 Windhoek, Namibia</p>
              <p>
                NAMIBride is developed by Kopano_Vertex Trading cc, a Namibian company committed 
                to technological innovation and local empowerment.
              </p>
            </div>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">PH</div>
                <h4>Petrus Haixula</h4>
                <p className="role">Founder & CEO (80% Owner)</p>
                <p className="bio">
                  Seasoned IT professional with over 8 years of experience and advanced 
                  qualifications in technology, business, and blockchain innovation.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">WP</div>
                <h4>Wellem Paulus</h4>
                <p className="role">Co-Founder (20% Owner)</p>
                <p className="bio">
                  Strategic partner contributing to NAMIBride's vision of revolutionizing 
                  transportation in Namibia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="future">
        <div className="container">
          <h2 className="section-title">The Future</h2>
          <div className="future-content">
            <div className="future-item">
              <h3>📈 Expansion</h3>
              <p>NAMIBride aims to expand nationwide, reaching all major Namibian towns and eventually expanding into neighboring countries.</p>
            </div>
            <div className="future-item">
              <h3>⚡ Electric Vehicles</h3>
              <p>Integration of electric vehicle fleets to promote sustainable transportation solutions.</p>
            </div>
            <div className="future-item">
              <h3>🤖 AI Innovation</h3>
              <p>Introduction of AI-driven predictive transport planning to optimize routes and improve efficiency.</p>
            </div>
            <div className="future-item">
              <h3>🎯 2030 Vision</h3>
              <p>By 2030, operate in all major Namibian towns and expand into neighboring countries, becoming the leading transportation platform in Southern Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to Transform Transportation?</h3>
              <p>
                Join us in revolutionizing how Namibia moves. Whether you're a passenger, 
                driver, or business owner, NAMIBride has something for you.
              </p>
              <div className="contact-details">
                <p><strong>Company:</strong> Kopano_Vertex Trading cc</p>
                <p><strong>Location:</strong> Windhoek, Namibia</p>
                <p><strong>Email:</strong> support@kopanovertex.net</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>NAMIBride</h3>
              <p>Revolutionizing transportation in Namibia</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#market">Market</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Kopano_Vertex Trading cc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
