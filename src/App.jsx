import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = ['home', 'skills', 'experience', 'projects', 'education', 'certifications', 'services', 'contact'];
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
          {['#home', '#skills', '#experience', '#projects', '#education', '#certifications', '#services', '#contact'].map((hash) => (
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
            <p>Fourth-year <strong>Computer Science Engineering student</strong> with hands-on experience in mobile and full-stack application development using React, React Native, TypeScript, JavaScript, Flutter, Node.js, and Firebase. Experienced in building AI-powered applications integrating machine learning, OCR, APIs, and cloud services, with a strong foundation in software development and problem-solving.</p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#projects')}>View My Work</a>
              <a href="#contact" className="btn btn-outline" onClick={(e) => handleNavClick(e, '#contact')}>Contact Me</a>
              <a href="/Riya_Rens_Resume.pdf" download="Riya_Rens_Resume.pdf" className="btn btn-outline">Download Resume</a>
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
          <div className="skills-categories-grid">
            
            {/* 1. Programming */}
            <div className="skills-category-card">
              <div className="category-header">
                <i className="fa-solid fa-code category-icon"></i>
                <h3>Programming</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-card">
                  <i className="fa-brands fa-python skill-icon"></i>
                  <p>Python</p>
                </div>
                <div className="skill-card">
                  <i className="fa-brands fa-java skill-icon"></i>
                  <p>Java</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-c skill-icon"></i>
                  <p>C</p>
                </div>
                <div className="skill-card">
                  <i className="fa-brands fa-js skill-icon"></i>
                  <p>JavaScript</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-file-code skill-icon"></i>
                  <p>TypeScript</p>
                </div>
              </div>
            </div>

            {/* 2. Web & Software Development */}
            <div className="skills-category-card">
              <div className="category-header">
                <i className="fa-solid fa-laptop-code category-icon"></i>
                <h3>Web & Software Development</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-card">
                  <i className="fa-brands fa-react skill-icon"></i>
                  <p>React</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-mobile-screen-button skill-icon"></i>
                  <p>React Native</p>
                </div>
                <div className="skill-card">
                  <i className="fa-brands fa-node-js skill-icon"></i>
                  <p>Node.js</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-layer-group skill-icon"></i>
                  <p>Flutter</p>
                </div>
                <div className="skill-card">
                  <i className="fa-brands fa-html5 skill-icon"></i>
                  <p>HTML</p>
                </div>
                <div className="skill-card">
                  <i className="fa-brands fa-css3-alt skill-icon"></i>
                  <p>CSS</p>
                </div>
              </div>
            </div>

            {/* 3. Databases */}
            <div className="skills-category-card">
              <div className="category-header">
                <i className="fa-solid fa-database category-icon"></i>
                <h3>Databases</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-card">
                  <i className="fa-solid fa-server skill-icon"></i>
                  <p>SQL</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-leaf skill-icon"></i>
                  <p>MongoDB</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-fire skill-icon"></i>
                  <p>Firebase</p>
                </div>
              </div>
            </div>

            {/* 4. AI/ML */}
            <div className="skills-category-card">
              <div className="category-header">
                <i className="fa-solid fa-brain category-icon"></i>
                <h3>AI/ML</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-card">
                  <i className="fa-solid fa-microchip skill-icon"></i>
                  <p>Machine Learning</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-robot skill-icon"></i>
                  <p>Artificial Intelligence</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-chart-diagram skill-icon"></i>
                  <p>Scikit-learn</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-wand-magic-sparkles skill-icon"></i>
                  <p>Google Gemini API</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-eye skill-icon"></i>
                  <p>OCR</p>
                </div>
              </div>
            </div>

            {/* 5. Cloud & Tools */}
            <div className="skills-category-card">
              <div className="category-header">
                <i className="fa-solid fa-cloud category-icon"></i>
                <h3>Cloud & Tools</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-card">
                  <i className="fa-brands fa-aws skill-icon"></i>
                  <p>AWS</p>
                </div>
                <div className="skill-card">
                  <i className="fa-brands fa-microsoft skill-icon"></i>
                  <p>Azure</p>
                </div>
                <div className="skill-card">
                  <i className="fa-brands fa-git-alt skill-icon"></i>
                  <p>Git</p>
                </div>
                <div className="skill-card">
                  <i className="fa-brands fa-github skill-icon"></i>
                  <p>GitHub</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-code skill-icon"></i>
                  <p>VS Code</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-paper-plane skill-icon"></i>
                  <p>Postman</p>
                </div>
                <div className="skill-card">
                  <i className="fa-brands fa-android skill-icon"></i>
                  <p>Android Studio</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-book-open skill-icon"></i>
                  <p>Jupyter Notebook</p>
                </div>
              </div>
            </div>

            {/* 6. Testing */}
            <div className="skills-category-card">
              <div className="category-header">
                <i className="fa-solid fa-vial-circle-check category-icon"></i>
                <h3>Testing</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-card">
                  <i className="fa-solid fa-clipboard-check skill-icon"></i>
                  <p>Manual Testing</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-gears skill-icon"></i>
                  <p>Functional Testing</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-rotate-left skill-icon"></i>
                  <p>Regression Testing</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-display skill-icon"></i>
                  <p>UI/UX Testing</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-bug skill-icon"></i>
                  <p>Bug Reporting</p>
                </div>
              </div>
            </div>

            {/* 7. Languages */}
            <div className="skills-category-card">
              <div className="category-header">
                <i className="fa-solid fa-language category-icon"></i>
                <h3>Languages</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-card">
                  <i className="fa-solid fa-comments skill-icon"></i>
                  <p>English</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-comment-dots skill-icon"></i>
                  <p>Malayalam</p>
                </div>
                <div className="skill-card">
                  <i className="fa-solid fa-comment skill-icon"></i>
                  <p>Hindi</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="section-title">My <span>Experience</span></h2>
          <div className="experience-container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <div className="experience-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1rem', padding: '2rem', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>QA Testing Intern</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: '600' }}>Docwo</span>
                <span>•</span>
                <span>May 2026 – June 2026</span>
              </div>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-primary)', opacity: '0.9', lineHeight: '1.8' }}>
                <li>Performed manual, functional, UI/UX, validation and regression testing for web and mobile applications.</li>
                <li>Reported defects with detailed reproduction steps and collaborated with developers to verify fixes.</li>
              </ul>
            </div>

            <div className="experience-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1rem', padding: '2rem', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Open Source Contributor</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: '600' }}>Open Source Quest (OSQ)</span>
                <span>•</span>
                <span>Feb 2026 – Mar 2026</span>
              </div>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-primary)', opacity: '0.9', lineHeight: '1.8' }}>
                <li>Contributed features and fixes using Git workflows while collaborating with open-source developers.</li>
              </ul>
            </div>

            <div className="experience-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1rem', padding: '2rem', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Android App Development Intern</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: '600' }}>ICT Academy of Kerala</span>
                <span>•</span>
                <span>Jul – Aug 2024</span>
              </div>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-primary)', opacity: '0.9', lineHeight: '1.8' }}>
                <li>Developed Android application features using Android Studio and completed the internship with Grade A.</li>
              </ul>
            </div>

            <div className="experience-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1rem', padding: '2rem', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>AI & Robotics Intern</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: '600' }}>AccelMove Dynamics</span>
                <span>•</span>
                <span>Jan 2024</span>
              </div>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-primary)', opacity: '0.9', lineHeight: '1.8' }}>
                <li>Completed an internship in AI and Robotics, gaining introductory exposure to AI concepts, robotics applications, and technology-driven problem-solving.</li>
              </ul>
            </div>

            <div className="experience-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1rem', padding: '2rem', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>NEC 2024 Finalist – Advance Track</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: '600' }}>E-Cell, IIT Bombay</span>
                <span>•</span>
                <span>Aug 2024 – Feb 2025</span>
              </div>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-primary)', opacity: '0.9', lineHeight: '1.8' }}>
                <li>Participated in a 6-month national-level entrepreneurship challenge and secured 9th place nationally in the Advance Track.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="projects-grid">

            <div className="project-card">
              <div className="project-content">
                <h3 className="project-title">SpendSense – AI-Powered Expense Tracker</h3>
                <p className="project-desc">Developed an AI-powered Flutter mobile application for automated income and expense tracking using ML-based expense categorization, OCR receipt extraction, and SMS transaction parsing. Integrated Firebase for secure data storage, spending charts, budget alerts, and AI-driven spending insights.</p>
                <div className="tech-stack">
                  <span className="tech-tag">Flutter</span>
                  <span className="tech-tag">Dart</span>
                  <span className="tech-tag">Machine Learning</span>
                  <span className="tech-tag">OCR</span>
                  <span className="tech-tag">SMS Parsing</span>
                  <span className="tech-tag">Firebase</span>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <a href="https://github.com/riyarens" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <h3 className="project-title">CosmoBot – AI Cosmetic Analyzer</h3>
                <p className="project-desc">Developed an AI-powered cosmetic ingredient analyzer using OCR and Google Gemini API to extract and analyze cosmetic ingredients. Implemented authentication and history tracking to allow users to securely access previous analyses with AI-generated insights.</p>
                <div className="tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">Google Gemini API</span>
                  <span className="tech-tag">OCR</span>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <a href="https://github.com/riyarens" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <h3 className="project-title">BorrowBox</h3>
                <p className="project-desc">Built a campus marketplace supporting borrow, buy/sell, and Lost & Found services. Developed a responsive user interface for browsing listings and managing marketplace activities with Firebase backend services.</p>
                <div className="tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <a href="https://github.com/riyarens/Borrow-box" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Repo</a>
                  <a href="https://borrow-box-jade.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Live Demo</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <h3 className="project-title">NovaStream Video Player</h3>
                <p className="project-desc">Developed an Android video player with playback and fullscreen controls. Implemented core video playback functionality using Android Studio with custom interface controls.</p>
                <div className="tech-stack">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">Android Studio</span>
                  <span className="tech-tag">XML</span>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <a href="https://github.com/riyarens" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>GitHub</a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <h2 className="section-title">My <span>Education</span></h2>
          <div className="education-container">
            <div className="education-card">
              <span className="card-badge">2023 – 2027</span>
              <h3>B.Tech in Computer Science Engineering</h3>
              <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', marginTop: '0.25rem' }}>Jyothi Engineering College, Thrissur</p>
              <p style={{ color: 'var(--text-primary)', marginTop: '0.75rem', fontWeight: '500' }}>CGPA: 8.02 / 10</p>
            </div>

            <div className="education-card">
              <span className="card-badge">2021 – 2023</span>
              <h3>Class XII (HSE)</h3>
              <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', marginTop: '0.25rem' }}>St Thomas HSS Thiroor, Kerala State Board</p>
              <p style={{ color: 'var(--text-primary)', marginTop: '0.75rem', fontWeight: '500' }}>Percentage: 99%</p>
            </div>
          </div>
        </section>

        {/* Certifications & Achievements Section */}
        <section id="certifications">
          <h2 className="section-title">Certifications & <span>Achievements</span></h2>
          
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--text-primary)' }}>Key Achievements</h3>
          <div className="achievements-grid" style={{ marginBottom: '4rem' }}>
            <div className="achievement-card">
              <i className="fa-solid fa-trophy" style={{ fontSize: '2rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}></i>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Tinkerhack 2026</h4>
              <p style={{ color: 'var(--text-secondary)' }}>College Level Winner & Top 300 Statewide in Kerala</p>
            </div>

            <div className="achievement-card">
              <i className="fa-solid fa-award" style={{ fontSize: '2rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}></i>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>THINKATHON Hackathon 2026</h4>
              <p style={{ color: 'var(--text-secondary)' }}>1st Prize Winner</p>
            </div>

            <div className="achievement-card">
              <i className="fa-solid fa-star" style={{ fontSize: '2rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}></i>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Grace Hopper Celebration India (GHCI) 2026</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Selected Attendee</p>
            </div>

            <div className="achievement-card">
              <i className="fa-solid fa-medal" style={{ fontSize: '2rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}></i>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>NEC 2024 Finalist (E-Cell IIT Bombay)</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Secured 9th Place Nationally (Advance Track)</p>
            </div>
          </div>

          <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--text-primary)' }}>Professional Certifications</h3>
          <div className="certifications-container">
            <div className="certification-card">
              <span className="card-badge">2026</span>
              <h3>AWS Cloud Practitioner Essentials</h3>
              <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', marginTop: '0.25rem' }}>AWS Training & Certification</p>
            </div>

            <div className="certification-card">
              <span className="card-badge">Cisco Academy</span>
              <h3>Cisco Networking Academy Certifications</h3>
              <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', marginTop: '0.25rem' }}>CCNA (Networks, Switching, Routing), Data Science, Modern AI, Applied AI & Python Essentials 1 & 2</p>
            </div>

            <div className="certification-card">
              <span className="card-badge">NPTEL</span>
              <h3>Introduction to Machine Learning & Industrial Automation</h3>
              <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', marginTop: '0.25rem' }}>NPTEL Certification Courses</p>
            </div>

            <div className="certification-card">
              <span className="card-badge">IBM</span>
              <h3>Prompt Engineering for Everyone</h3>
              <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', marginTop: '0.25rem' }}>IBM Certification</p>
            </div>

            <div className="certification-card">
              <span className="card-badge">Infosys</span>
              <h3>Infosys Springboard</h3>
              <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', marginTop: '0.25rem' }}>Basics of Python & Java Programming Fundamentals</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services">
          <h2 className="section-title">What I <span>Offer</span></h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fa-solid fa-code service-icon"></i>
              <h3>Full-Stack & Mobile Development</h3>
              <p>Building responsive, fast, and highly aesthetic web and mobile applications utilizing React, React Native, and Flutter.</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-brain service-icon"></i>
              <h3>AI & ML Integration</h3>
              <p>Integrating machine learning models, Google Gemini API, OCR, and cloud APIs into intelligent software applications.</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-lightbulb service-icon"></i>
              <h3>Software Quality & Testing</h3>
              <p>Ensuring application stability and high performance through functional, regression, UI/UX testing, and API verification.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>I am currently open for entry-level Software Developer roles, AI/ML engineering positions, or freelance opportunities. Whether you have a project idea or just want to say hi, feel free to reach out!</p>
              <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
                  <i className="fa-solid fa-envelope" style={{ color: 'var(--accent-primary)' }}></i>
                  <a href="mailto:riyarens808@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>riyarens808@gmail.com</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
                  <i className="fa-solid fa-phone" style={{ color: 'var(--accent-primary)' }}></i>
                  <a href="tel:+919778461045" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>+91-9778461045</a>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/riyarens" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/riya-rens-913889281/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="mailto:riyarens808@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
              </div>
            </div>
            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
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
