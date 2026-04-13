import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
      
      // Simple scroll spy logic
      const sections = ['home', 'skills', 'experience', 'projects', 'services', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveHash('#' + section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setActiveHash(hash);
    const target = document.getElementById(hash.substring(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="bg-gradient-spot1"></div>
      <div className="bg-gradient-spot2"></div>

      <nav id="navbar" className={navScrolled ? 'nav-scrolled' : ''}>
        <div className="brand">Riya Rens</div>
        <ul className="nav-links">
          {['#home', '#skills', '#experience', '#projects', '#services', '#contact'].map((hash) => (
            <li key={hash}>
              <a 
                href={hash} 
                className={activeHash === hash ? 'active' : ''}
                onClick={(e) => handleNavClick(e, hash)}
              >
                {hash.substring(1).charAt(0).toUpperCase() + hash.substring(2)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <span className="greeting">Hello World!</span>
            <h1>I'm Riya Rens</h1>
            <p>An aspiring <strong>Software Developer</strong> and final-year Computer Science Engineering student. I specialize in building dynamic web applications using React and Python, continuously pushing myself to solve complex problems and create aesthetic, functional software.</p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#projects')}>View My Work</a>
              <a href="#contact" className="btn btn-outline" onClick={(e) => handleNavClick(e, '#contact')}>Contact Me</a>
              <a href="https://drive.google.com/drive/folders/10W1Rig0VeAMPVETy0raf1N4wJ_kq06-B?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Resume</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-img-container">
              <img src="/profile-placeholder.png" alt="Riya Rens" className="profile-img" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="section-title">My <span>Skills</span> & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <i className="fa-brands fa-react skill-icon"></i>
              <p>React.js</p>
            </div>
            <div className="skill-card">
              <i className="fa-brands fa-python skill-icon"></i>
              <p>Python</p>
            </div>
            <div className="skill-card">
              <i className="fa-brands fa-js skill-icon"></i>
              <p>JavaScript</p>
            </div>
            <div className="skill-card">
              <i className="fa-brands fa-html5 skill-icon"></i>
              <p>HTML5</p>
            </div>
            <div className="skill-card">
              <i className="fa-brands fa-css3-alt skill-icon"></i>
              <p>CSS3 / UI</p>
            </div>
            <div className="skill-card">
              <i className="fa-solid fa-brain skill-icon"></i>
              <p>Problem Solving</p>
            </div>
            <div className="skill-card">
              <i className="fa-brands fa-git-alt skill-icon"></i>
              <p>Git</p>
            </div>
            <div className="skill-card">
              <i className="fa-solid fa-database skill-icon"></i>
              <p>Databases</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="section-title">My <span>Experience</span></h2>
          <div className="experience-container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div className="experience-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1rem', padding: '2rem', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Open Source Contributor</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: '600' }}>Open Source Quest (OSQ)</span>
                <span>•</span>
                <span>Feb 2026 – Mar 2026</span>
              </div>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-primary)', opacity: '0.9', lineHeight: '1.8' }}>
                <li>Actively contributed to open-source software by resolving issues and implementing new features utilizing modern Git workflows.</li>
                <li>Collaborated seamlessly with diverse global developers, significantly advancing technical problem-solving and software delivery skills.</li>
              </ul>
            </div>

            <div className="experience-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1rem', padding: '2rem', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Android App Development Intern</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: '600' }}>ICT Academy of Kerala</span>
                <span>•</span>
                <span>Jul – Aug 2024</span>
                <span>•</span>
                <span>Hybrid</span>
              </div>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-primary)', opacity: '0.9', lineHeight: '1.8' }}>
                <li>Delivered app features using Android Studio; achieved Grade A completion.</li>
                <li>Collaborated with cross-functional teams on UI layouts, navigation, and core functionality.</li>
              </ul>
            </div>

            <div className="experience-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1rem', padding: '2rem', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>AI & Robotics Intern</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: '600' }}>AccelMove Dynamics / STEM Robotics</span>
                <span>•</span>
                <span>Jan 2024</span>
              </div>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-primary)', opacity: '0.9', lineHeight: '1.8' }}>
                <li>Contributed to team-based AI & robotics projects, demonstrating adaptability in a fast-paced tech environment.</li>
              </ul>
            </div>

            <div className="experience-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1rem', padding: '2rem', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>NEC 2024 Finalist – Advance Track</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: '600' }}>E-Cell, IIT Bombay</span>
                <span>•</span>
                <span>2024</span>
              </div>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-primary)', opacity: '0.9', lineHeight: '1.8' }}>
                <li>Secured 9th place nationally; developed and pitched business strategies over a 6-month innovation program.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src="/project2-placeholder.png" alt="Borrow-box" className="project-img" />
              <div className="project-content">
                <h3 className="project-title">Borrow-box</h3>
                <p className="project-desc">A platform application to facilitate borrowing and sharing, built seamlessly using JavaScript.</p>
                <div className="tech-stack">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">React</span>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <a href="https://github.com/riyarens/Borrow-box" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Repo</a>
                  <a href="https://borrow-box-jade.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Live Demo</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img src="/project1-placeholder.png" alt="Expenso" className="project-img" />
              <div className="project-content">
                <h3 className="project-title">Expenso</h3>
                <p className="project-desc">A modern interactive web application built with JavaScript for expense tracking.</p>
                <div className="tech-stack">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Web App</span>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <a href="https://github.com/riyarens/Expenso" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Repo</a>
                  <a href="https://expenso-khaki.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Live Demo</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img src="/project2-placeholder.png" alt="Thinkathon Trail Mix" className="project-img" />
              <div className="project-content">
                <h3 className="project-title">Thinkathon Trail Mix</h3>
                <p className="project-desc">Interactive application and interactive environment built with TypeScript and deployed on Vercel/Lovable.</p>
                <div className="tech-stack">
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Web App</span>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <a href="https://github.com/riyarens/Thinkathon-Trail-Mix" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Repo</a>
                  <a href="https://sparkedmind.lovable.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services">
          <h2 className="section-title">What I <span>Offer</span></h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fa-solid fa-code service-icon"></i>
              <h3>Web Development</h3>
              <p>Building responsive, fast, and highly aesthetic web applications utilizing modern frameworks like React.</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-server service-icon"></i>
              <h3>Backend Solutions</h3>
              <p>Creating scalable and secure APIs and backend systems using Python to power demanding frontend applications.</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-lightbulb service-icon"></i>
              <h3>Problem Solving</h3>
              <p>Leveraging strong analytical skills from a Computer Science Engineering background to tackle complex technical challenges.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>I am currently open for entry-level Software Developer roles or freelance opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
              <div className="social-links">
                <a href="https://github.com/riyarens" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/riya-rens-913889281/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                <a href="mailto:contact@riyarens.example" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
              </div>
            </div>
            <iframe name="hidden_iframe" id="hidden_iframe" style={{display: 'none'}}></iframe>
            <form 
              className="contact-form" 
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScUreZ-moyf9cCsFeJgbDNrBfpIdNPyaYdixr4loUKWmUK5JQ/formResponse" 
              method="POST" 
              target="hidden_iframe"
              onSubmit={() => setFormSubmitted(true)}
            >
              <div className="form-group">
                <input type="text" name="entry.281178604" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="entry.1136000407" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="entry.1823248003" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {formSubmitted && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(5px)' }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '3rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', textAlign: 'center', maxWidth: '400px', margin: '0 20px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' }}>
            <i className="fa-solid fa-circle-check" style={{ fontSize: '4.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', textShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}></i>
            <h2 style={{ marginBottom: '1rem', fontFamily: 'Outfit' }}>Message Sent!</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Thank you for reaching out! I'll quickly review your message and get back to you as soon as possible.</p>
            <button className="btn btn-primary" onClick={() => setFormSubmitted(false)} style={{ width: '100%' }}>Awesome, thanks!</button>
          </div>
        </div>
      )}

      <footer>
        <p>&copy; 2026 Riya Rens. Built with modern web technologies.</p>
      </footer>
    </>
  );
}

export default App;
