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
            <li><a href="#projects">Projects</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Kopano_Vertex Trading</h1>
          <p className="hero-subtitle">
            A Namibian technology company committed to innovation and local empowerment, 
            developing cutting-edge solutions that transform industries and improve lives.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Our Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
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

      {/* About Company Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Kopano_Vertex Trading</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="lead">
                Kopano_Vertex Trading cc is a Namibian-owned and operated technology company 
                headquartered in Windhoek, Namibia, dedicated to creating innovative digital 
                solutions that address critical gaps in the market.
              </p>
              <p>
                Our mission is to leverage cutting-edge technology to transform traditional 
                industries, making essential services more accessible, efficient, and reliable 
                for all Namibians. We are committed to technological innovation, local empowerment, 
                and building solutions that truly serve our community.
              </p>
              <p>
                Currently, we are developing and operating two flagship projects: Health_Connect, 
                a revolutionary telemedicine platform, and NAMIBride, a comprehensive ride-hailing 
                and logistics solution. Both projects exemplify our commitment to using technology 
                to solve real-world problems and improve the quality of life for Namibians.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <h3>2</h3>
                  <p>Active Projects</p>
                </div>
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>Namibian Owned</p>
                </div>
                <div className="stat-item">
                  <h3>Windhoek</h3>
                  <p>Headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Our Projects</h2>
          
          {/* Health_Connect Project */}
          <div className="project-card">
            <div className="project-header">
              <div className="project-title-section">
                <h3>Health_Connect</h3>
                <div className="project-badges">
                  <span className="badge badge-industry">HealthTech / Telemedicine</span>
                  <span className="badge badge-status">In Development (Launch Pending)</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h4>Business Summary</h4>
              <p>
                Health_Connect is a mobile and web-based application designed to bridge the gap 
                between patients and healthcare professionals in Namibia. It operates on an 
                "Uber-for-Healthcare" model where patients request on-demand home visits from 
                qualified nurses and doctors.
              </p>
              <p>
                The platform targets elderly patients, parents, and professionals requiring 
                convenient non-emergency care. By bringing healthcare services directly to 
                patients' homes, Health_Connect eliminates barriers to access and provides 
                a seamless, user-friendly experience.
              </p>
              <h4>Integration Requirements</h4>
              <p>
                <strong>Collections & Disbursements:</strong> We require a "Closed-Loop Digital 
                Wallet" integration. The gateway must facilitate the movement of fiat currency 
                into and out of our custodial bank account to fund user wallets within the app.
              </p>
            </div>
          </div>

          {/* Health_Connect in Action */}
          <section className="health-images">
            <div className="container">
              <h2 className="section-title">Health_Connect in Action</h2>
              <div className="images-grid">
                <div className="image-wrapper">
                  <img 
                    src={`${process.env.PUBLIC_URL}/h1.JPG`} 
                    alt="Health_Connect Screenshot 1" 
                    className="project-image"
                  />
                </div>
                <div className="image-wrapper">
                  <img 
                    src={`${process.env.PUBLIC_URL}/h2.JPG`} 
                    alt="Health_Connect Screenshot 2" 
                    className="project-image"
                  />
                </div>
                <div className="image-wrapper">
                  <img 
                    src={`${process.env.PUBLIC_URL}/h3.PNG`} 
                    alt="Health_Connect Screenshot 3" 
                    className="project-image"
                  />
                </div>
                <div className="image-wrapper">
                  <img 
                    src={`${process.env.PUBLIC_URL}/h4.PNG`} 
                    alt="Health_Connect Screenshot 4" 
                    className="project-image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* NAMIBride Project */}
          <div className="project-card">
            <div className="project-header">
              <div className="project-title-section">
                <h3>NAMIBride</h3>
                <div className="project-badges">
                  <span className="badge badge-industry">Transportation / Ride-Hailing</span>
                  <span className="badge badge-active">Operating</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h4>Business Summary</h4>
              <p>
                NAMIBride is a ride-hailing and logistics platform designed to formalize the 
                public transport sector in Namibia. It connects passengers with verified drivers 
                for safe transport and goods delivery across Namibia's growing towns.
              </p>
              <p>
                The platform features AI-integrated safety verification (Gemini API) and 
                comprehensive fleet management portals. NAMIBride addresses the critical gap 
                in the market for structured, digitally-enabled transport solutions, offering 
                safe, reliable, and efficient services.
              </p>
              <h4>Key Features</h4>
              <div className="features-grid">
                <div className="feature-item">
                  <h5>Ride-Hailing Service</h5>
                  <p>Connect with verified drivers for safe and reliable transportation</p>
                </div>
                <div className="feature-item">
                  <h5>Goods Transportation</h5>
                  <p>Efficient delivery services for businesses and individuals</p>
                </div>
                <div className="feature-item">
                  <h5>Fleet Management</h5>
                  <p>Comprehensive portal for business owners to manage their fleets</p>
                </div>
                <div className="feature-item">
                  <h5>Safety Features</h5>
                  <p>AI-powered verification, panic buttons, and trip histories</p>
                </div>
              </div>
              <h4>Target Markets</h4>
              <p>
                NAMIBride targets urban populations in six key Namibian towns: Walvis Bay, 
                Swakopmund, Oshakati, Ongwediva, Ondangwa, and Windhoek, with a combined 
                urban population of over 300,000.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section - NAMIBride */}
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

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-content">
            <div className="company-info">
              <h3>Kopano_Vertex Trading cc</h3>
              <p className="location">📍 Windhoek, Namibia</p>
              <p>
                Led by experienced professionals with deep expertise in technology, business, 
                and innovation, our team is dedicated to building solutions that make a difference.
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
                  Strategic partner contributing to Kopano_Vertex Trading's vision of 
                  technological innovation and local empowerment in Namibia.
                </p>
              </div>
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
              <h3>Ready to Connect?</h3>
              <p>
                Whether you're interested in our projects, potential partnerships, or have 
                questions about our services, we'd love to hear from you.
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
              <h3>Kopano_Vertex Trading</h3>
              <p>Innovative technology solutions for Namibia</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#team">Team</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
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
