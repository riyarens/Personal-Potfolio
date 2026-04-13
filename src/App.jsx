import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
      
      // Simple scroll spy logic
      const sections = ['home', 'skills', 'projects', 'services', 'contact'];
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
          {['#home', '#skills', '#projects', '#services', '#contact'].map((hash) => (
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

        {/* Projects Section */}
        <section id="projects">
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src="/project1-placeholder.png" alt="E-Commerce Interface" className="project-img" />
              <div className="project-content">
                <h3 className="project-title">Modern E-Commerce UI</h3>
                <p className="project-desc">A fully responsive, interactive e-commerce frontend built with React. Features include a shopping cart, dynamic product filtering, and an aesthetic dark-mode UI.</p>
                <div className="tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img src="/project2-placeholder.png" alt="Python Backend API" className="project-img" />
              <div className="project-content">
                <h3 className="project-title">Task Management API</h3>
                <p className="project-desc">A robust RESTful API developed with Python and Flask. Integrates token-based authentication and a relational database setup for efficient task tracking.</p>
                <div className="tech-stack">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Flask</span>
                  <span className="tech-tag">SQL</span>
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
                <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                <a href="mailto:contact@riyarens.example" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent! (Mock functionality)'); }}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Riya Rens. Built with modern web technologies.</p>
      </footer>
    </>
  );
}

export default App;
