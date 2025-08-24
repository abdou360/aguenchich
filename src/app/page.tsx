export default function Home() {
  return (
    <>
      <style jsx global>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #0066ff;
            --secondary: #00d4ff;
            --accent: #ff6b6b;
            --dark: #0a0f1c;
            --darker: #060b14;
            --light: #ffffff;
            --gray: #8892b0;
            --glass: rgba(255, 255, 255, 0.1);
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--dark);
            color: var(--light);
            overflow-x: hidden;
            line-height: 1.6;
        }

        /* Animated Background */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: linear-gradient(45deg, var(--dark), var(--darker));
        }

        .bg-animation::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 20% 50%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%);
            animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 1rem 2rem;
            background: rgba(10, 15, 28, 0.9);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            color: var(--gray);
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a:hover {
            color: var(--secondary);
            transform: translateY(-2px);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px;
            left: 0;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0 2rem;
            position: relative;
        }

        .hero-content {
            max-width: 800px;
            animation: fadeInUp 1s ease-out;
        }

        .hero-title {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 700;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--light), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero-subtitle {
            font-size: clamp(1.2rem, 3vw, 1.8rem);
            margin-bottom: 2rem;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero-description {
            font-size: 1.2rem;
            color: var(--gray);
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn {
            padding: 1rem 2rem;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            cursor: pointer;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
        }

        .btn-outline {
            background: transparent;
            color: var(--secondary);
            border: 2px solid var(--secondary);
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 102, 255, 0.3);
        }

        /* Skills Section */
        .section {
            padding: 5rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 3rem;
            background: linear-gradient(135deg, var(--light), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .skill-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 2rem;
            transition: all 0.3s ease;
            position: relative;
        }

        .skill-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 102, 255, 0.2);
            border-color: var(--secondary);
        }

        .skill-card h3 {
            color: var(--secondary);
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }

        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }

        .tech-tag {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        /* Experience Timeline */
        .timeline {
            position: relative;
            padding-left: 2rem;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 2px;
            background: linear-gradient(to bottom, var(--primary), var(--secondary));
        }

        .timeline-item {
            position: relative;
            margin-bottom: 3rem;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 2rem;
            margin-left: 2rem;
            transition: all 0.3s ease;
        }

        .timeline-item:hover {
            transform: translateX(10px);
            border-color: var(--secondary);
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -3rem;
            top: 2rem;
            width: 12px;
            height: 12px;
            background: var(--secondary);
            border-radius: 50%;
            box-shadow: 0 0 20px var(--secondary);
        }

        .timeline-date {
            color: var(--secondary);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .timeline-company {
            color: var(--accent);
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }

        /* Projects Grid */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .project-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 2rem;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
            transition: left 0.6s ease;
        }

        .project-card:hover::before {
            left: 100%;
        }

        .project-card:hover {
            transform: translateY(-15px);
            border-color: var(--secondary);
            box-shadow: 0 25px 50px rgba(0, 102, 255, 0.3);
        }

        .project-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
        }

        /* Contact Section */
        .contact {
            background: rgba(255, 255, 255, 0.02);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            text-align: center;
        }

        .contact-item {
            padding: 2rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            transition: all 0.3s ease;
        }

        .contact-item:hover {
            transform: translateY(-5px);
            background: rgba(0, 102, 255, 0.1);
        }

        .contact-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: var(--secondary);
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Floating Elements */
        .floating-element {
            position: absolute;
            pointer-events: none;
            opacity: 0.1;
            animation: floatingMove 15s ease-in-out infinite;
        }

        @keyframes floatingMove {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(100px, -100px) rotate(90deg); }
            50% { transform: translate(-50px, -200px) rotate(180deg); }
            75% { transform: translate(-100px, -50px) rotate(270deg); }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero {
                padding: 0 1rem;
            }
            
            .section {
                padding: 3rem 1rem;
            }
            
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: var(--darker);
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, var(--primary), var(--secondary));
            border-radius: 4px;
        }

        /* Glowing effects */
        .glow {
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }

        .text-glow {
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        @keyframes fadeOut {
            to {
                opacity: 0;
                transform: scale(0);
            }
        }
      `}</style>

      {/* Animated Background */}
      <div className="bg-animation"></div>
      
      {/* Floating Elements */}
      <div className="floating-element" style={{top: '10%', left: '10%', fontSize: '3rem'}}>⚡</div>
      <div className="floating-element" style={{top: '20%', right: '10%', fontSize: '2rem'}}>🚀</div>
      <div className="floating-element" style={{bottom: '30%', left: '15%', fontSize: '2.5rem'}}>💡</div>

      {/* Navigation */}
      <nav id="navbar">
          <div className="nav-container">
              <div className="logo">AA</div>
              <ul className="nav-links">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
          <div className="hero-content">
              <h1 className="hero-title">Abdelaziz Aguenchich</h1>
              <p className="hero-subtitle">Full-Stack Engineer & Digital Banking Innovator</p>
              <p className="hero-description">
                  Crafting next-generation digital banking solutions with cutting-edge technologies. 
                  Passionate about microservices, AI integration, and creating seamless user experiences 
                  that transform the financial technology landscape.
              </p>
              <div className="cta-buttons">
                  <a href="#projects" className="btn btn-primary">View My Work</a>
                  <a href="#contact" className="btn btn-outline">Get In Touch</a>
              </div>
          </div>
      </section>

      {/* About Section */}
      <section id="about" className="section fade-in">
          <h2 className="section-title">About Me</h2>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
              <p style={{fontSize: '1.1rem', color: 'var(--gray)', marginBottom: '2rem'}}>
                  With a degree in Software and Information Systems from Cadi Ayyad University, Ive evolved from 
                  a passionate student into a seasoned full-stack engineer specializing in digital banking solutions. 
                  My journey spans from academic projects in AI and augmented reality to enterprise-level banking 
                  applications serving thousands of users.
              </p>
              <p style={{fontSize: '1.1rem', color: 'var(--gray)'}}>
                  Currently at Adria Business and Technology, I architect and develop scalable microservices 
                  that power Moroccos digital banking infrastructure. Im particularly excited about integrating 
                  AI capabilities into financial systems and creating innovative solutions that enhance user experience 
                  while maintaining the highest security standards.
              </p>
          </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section fade-in">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
              <div className="skill-card">
                  <h3>🏦 Digital Banking & FinTech</h3>
                  <p>Specialized in developing secure, scalable banking applications with microservices architecture, payment processing, and regulatory compliance.</p>
                  <div className="tech-tags">
                      <span className="tech-tag">Microservices</span>
                      <span className="tech-tag">Payment Systems</span>
                      <span className="tech-tag">Security</span>
                      <span className="tech-tag">Compliance</span>
                  </div>
              </div>
              
              <div className="skill-card">
                  <h3>⚡ Backend Development</h3>
                  <p>Expert in Java ecosystem with Spring Boot, building robust APIs and enterprise-level backend systems with optimal performance.</p>
                  <div className="tech-tags">
                      <span className="tech-tag">Java</span>
                      <span className="tech-tag">Spring Boot</span>
                      <span className="tech-tag">Hibernate</span>
                      <span className="tech-tag">ASP.NET Core</span>
                  </div>
              </div>
              
              <div className="skill-card">
                  <h3>🎨 Frontend Innovation</h3>
                  <p>Creating intuitive, responsive user interfaces with modern frameworks, focusing on user experience and performance optimization.</p>
                  <div className="tech-tags">
                      <span className="tech-tag">Angular</span>
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">TypeScript</span>
                      <span className="tech-tag">JavaScript</span>
                  </div>
              </div>
              
              <div className="skill-card">
                  <h3>🗄️ Database Architecture</h3>
                  <p>Designing and optimizing database systems for high-volume financial transactions with Oracle and PostgreSQL expertise.</p>
                  <div className="tech-tags">
                      <span className="tech-tag">Oracle</span>
                      <span className="tech-tag">PostgreSQL</span>
                      <span className="tech-tag">MySQL</span>
                      <span className="tech-tag">MongoDB</span>
                  </div>
              </div>
              
              <div className="skill-card">
                  <h3>☁️ Cloud & DevOps</h3>
                  <p>Deploying and managing applications on cloud platforms with containerization and CI/CD best practices.</p>
                  <div className="tech-tags">
                      <span className="tech-tag">Azure</span>
                      <span className="tech-tag">AWS</span>
                      <span className="tech-tag">Docker</span>
                      <span className="tech-tag">Git</span>
                  </div>
              </div>
              
              <div className="skill-card">
                  <h3>🤖 AI & Innovation</h3>
                  <p>Passionate about integrating artificial intelligence into business solutions, with experience in machine learning and data analysis.</p>
                  <div className="tech-tags">
                      <span className="tech-tag">Machine Learning</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Data Analysis</span>
                      <span className="tech-tag">CNN</span>
                  </div>
              </div>
          </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section fade-in">
          <h2 className="section-title">Professional Journey</h2>
          <div className="timeline">
              <div className="timeline-item">
                  <div className="timeline-date">December 2023 - Present</div>
                  <div className="timeline-company">Adria Business and Technology, Casablanca</div>
                  <h3 style={{color: 'var(--secondary)', marginBottom: '1rem'}}>Ingénieur Études et Développement</h3>
                  <p style={{color: 'var(--gray)', marginBottom: '1rem'}}>
                      Leading full-stack development in the digital banking industry, architecting microservices solutions 
                      that serve thousands of banking customers across Morocco.
                  </p>
                  <ul style={{color: 'var(--gray)', marginLeft: '1rem'}}>
                      <li>Developing scalable banking applications using Angular and Java ecosystem</li>
                      <li>Implementing microservices architecture for enhanced system reliability</li>
                      <li>Managing Oracle and PostgreSQL databases for financial data processing</li>
                      <li>Collaborating on AI-driven features to improve customer experience</li>
                      <li>Ensuring compliance with banking regulations and security standards</li>
                  </ul>
              </div>
              
              <div className="timeline-item">
                  <div className="timeline-date">February 2023 - July 2023</div>
                  <div className="timeline-company">AliDantek, Marrakech</div>
                  <h3 style={{color: 'var(--secondary)', marginBottom: '1rem'}}>End-of-Studies Internship: BlueSky Project</h3>
                  <p style={{color: 'var(--gray)', marginBottom: '1rem'}}>
                      Developed a comprehensive diagnostic and financial analysis platform using modern full-stack technologies.
                  </p>
                  <ul style={{color: 'var(--gray)', marginLeft: '1rem'}}>
                      <li>Built RESTful APIs with ASP.NET Core Web API</li>
                      <li>Created intuitive React frontend with advanced data visualization</li>
                      <li>Deployed and hosted on Microsoft Azure cloud platform</li>
                      <li>Participated in agile development processes</li>
                  </ul>
              </div>

              <div className="timeline-item">
                  <div className="timeline-date">July 2022 - September 2022</div>
                  <div className="timeline-company">Neoxia, Casablanca</div>
                  <h3 style={{color: 'var(--secondary)', marginBottom: '1rem'}}>Data Governance System Implementation</h3>
                  <p style={{color: 'var(--gray)', marginBottom: '1rem'}}>
                      Implemented enterprise data governance solutions using cutting-edge technologies.
                  </p>
                  <ul style={{color: 'var(--gray)', marginLeft: '1rem'}}>
                      <li>Utilized Semarchy xDM for data management and governance</li>
                      <li>Developed Angular frontend for data governance workflows</li>
                      <li>Integrated systems using Docker containerization</li>
                  </ul>
              </div>
          </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section fade-in">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
              <div className="project-card">
                  <div className="project-icon">🏦</div>
                  <h3 style={{color: 'var(--secondary)', marginBottom: '1rem'}}>Digital Banking Platform</h3>
                  <p style={{color: 'var(--gray)', marginBottom: '1rem'}}>
                      Enterprise-level banking application built with microservices architecture, 
                      serving thousands of customers with real-time transaction processing.
                  </p>
                  <div className="tech-tags">
                      <span className="tech-tag">Angular</span>
                      <span className="tech-tag">Java</span>
                      <span className="tech-tag">Microservices</span>
                      <span className="tech-tag">Oracle</span>
                  </div>
              </div>

              <div className="project-card">
                  <div className="project-icon">📊</div>
                  <h3 style={{color: 'var(--secondary)', marginBottom: '1rem'}}>BlueSky Financial Analysis</h3>
                  <p style={{color: 'var(--gray)', marginBottom: '1rem'}}>
                      Comprehensive financial analysis platform with advanced diagnostics, 
                      data visualization, and predictive analytics capabilities.
                  </p>
                  <div className="tech-tags">
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">ASP.NET Core</span>
                      <span className="tech-tag">Azure</span>
                      <span className="tech-tag">Machine Learning</span>
                  </div>
              </div>

              <div className="project-card">
                  <div className="project-icon">🤖</div>
                  <h3 style={{color: 'var(--secondary)', marginBottom: '1rem'}}>AI Fruit & Vegetable Recognition</h3>
                  <p style={{color: 'var(--gray)', marginBottom: '1rem'}}>
                      CNN-based recognition system improving accessibility for visually impaired users, 
                      with real-time image processing and voice feedback.
                  </p>
                  <div className="tech-tags">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">CNN</span>
                      <span className="tech-tag">Deep Learning</span>
                      <span className="tech-tag">Accessibility</span>
                  </div>
              </div>

              <div className="project-card">
                  <div className="project-icon">🏛️</div>
                  <h3 style={{color: 'var(--secondary)', marginBottom: '1rem'}}>Data Governance System</h3>
                  <p style={{color: 'var(--gray)', marginBottom: '1rem'}}>
                      Enterprise data management solution with automated workflows, 
                      quality analysis, and compliance monitoring.
                  </p>
                  <div className="tech-tags">
                      <span className="tech-tag">Angular</span>
                      <span className="tech-tag">Semarchy xDM</span>
                      <span className="tech-tag">Docker</span>
                      <span className="tech-tag">Data Quality</span>
                  </div>
              </div>

              <div className="project-card">
                  <div className="project-icon">🎯</div>
                  <h3 style={{color: 'var(--secondary)', marginBottom: '1rem'}}>Smart Stroller IoT</h3>
                  <p style={{color: 'var(--gray)', marginBottom: '1rem'}}>
                      IoT-enabled smart stroller with voice control interface, 
                      Arduino integration, and mobile app connectivity.
                  </p>
                  <div className="tech-tags">
                      <span className="tech-tag">Arduino</span>
                      <span className="tech-tag">Voice Recognition</span>
                      <span className="tech-tag">Mobile Development</span>
                      <span className="tech-tag">IoT</span>
                  </div>
              </div>

              <div className="project-card">
                  <div className="project-icon">📱</div>
                  <h3 style={{color: 'var(--secondary)', marginBottom: '1rem'}}>AR Education Platform</h3>
                  <p style={{color: 'var(--gray)', marginBottom: '1rem'}}>
                      Immersive educational application combining augmented reality, 
                      3D elements, and OCR technology for enhanced learning experiences.
                  </p>
                  <div className="tech-tags">
                      <span className="tech-tag">Flutter</span>
                      <span className="tech-tag">Unity</span>
                      <span className="tech-tag">AR</span>
                      <span className="tech-tag">OCR</span>
                  </div>
              </div>
          </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact fade-in">
          <h2 className="section-title">Lets Connect</h2>
          <div className="contact-grid">
              <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <h3 style={{color: 'var(--secondary)'}}>Email</h3>
                  <p style={{color: 'var(--gray)'}}>aguenchich.ma@gmail.com</p>
              </div>
              
              <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <h3 style={{color: 'var(--secondary)'}}>Phone</h3>
                  <p style={{color: 'var(--gray)'}}>+212 652897546</p>
              </div>
              
              <div className="contact-item">
                  <div className="contact-icon">💼</div>
                  <h3 style={{color: 'var(--secondary)'}}>LinkedIn</h3>
                  <p style={{color: 'var(--gray)'}}>abdelaziz-aguenchich</p>
              </div>
              
              <div className="contact-item">
                  <div className="contact-icon">🚀</div>
                  <h3 style={{color: 'var(--secondary)'}}>GitHub</h3>
                  <p style={{color: 'var(--gray)'}}>abdou360</p>
              </div>
              
              <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <h3 style={{color: 'var(--secondary)'}}>Location</h3>
                  <p style={{color: 'var(--gray)'}}>Casablanca, Morocco</p>
              </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
              <p style={{color: 'var(--gray)', fontSize: '1.1rem'}}>
                  Ready to discuss your next project? Lets build something amazing together!
              </p>
          </div>
      </section>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Smooth scrolling
          function scrollToSection(sectionId) {
              document.getElementById(sectionId).scrollIntoView({
                  behavior: 'smooth'
              });
          }

          // Intersection Observer for animations
          const observerOptions = {
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px'
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                  }
              });
          }, observerOptions);

          // Initialize everything when DOM is loaded
          document.addEventListener('DOMContentLoaded', () => {
              const fadeElements = document.querySelectorAll('.fade-in');
              fadeElements.forEach(el => observer.observe(el));

              // Add interactive hover effects
              const cards = document.querySelectorAll('.skill-card, .project-card, .timeline-item');
              cards.forEach(card => {
                  card.addEventListener('mouseenter', function() {
                      this.style.transform = this.classList.contains('timeline-item') ? 
                          'translateX(15px)' : 'translateY(-15px)';
                  });
                  
                  card.addEventListener('mouseleave', function() {
                      this.style.transform = this.classList.contains('timeline-item') ? 
                          'translateX(0)' : 'translateY(0)';
                  });
              });

              // Navbar scroll effect
              window.addEventListener('scroll', () => {
                  const navbar = document.getElementById('navbar');
                  if (window.scrollY > 100) {
                      navbar.style.background = 'rgba(6, 11, 20, 0.95)';
                      navbar.style.borderBottom = '1px solid rgba(0, 212, 255, 0.3)';
                  } else {
                      navbar.style.background = 'rgba(10, 15, 28, 0.9)';
                      navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
                  }
              });

              // Typing effect for hero title
              const heroTitle = document.querySelector('.hero-title');
              const originalText = heroTitle.textContent;
              heroTitle.textContent = '';
              
              let i = 0;
              const typeWriter = () => {
                  if (i < originalText.length) {
                      heroTitle.textContent += originalText.charAt(i);
                      i++;
                      setTimeout(typeWriter, 100);
                  } else {
                      heroTitle.classList.add('glow');
                  }
              };
              
              setTimeout(typeWriter, 1000);

              // Parallax effect for floating elements
              window.addEventListener('scroll', () => {
                  const scrolled = window.pageYOffset;
                  const parallax = document.querySelectorAll('.floating-element');
                  
                  parallax.forEach((element, index) => {
                      const speed = 0.5 + (index * 0.2);
                      element.style.transform = \`translateY(\${scrolled * speed}px)\`;
                  });
              });

              // Interactive skill cards with dynamic colors
              const skillCards = document.querySelectorAll('.skill-card');
              skillCards.forEach((card, index) => {
                  card.addEventListener('mouseenter', function() {
                      const colors = ['#0066ff', '#00d4ff', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
                      this.style.borderColor = colors[index % colors.length];
                      this.style.boxShadow = \`0 20px 40px \${colors[index % colors.length]}30\`;
                  });
              });

              // Project cards click effect
              const projectCards = document.querySelectorAll('.project-card');
              projectCards.forEach(card => {
                  card.addEventListener('click', function() {
                      this.style.transform = 'scale(0.95)';
                      setTimeout(() => {
                          this.style.transform = 'translateY(-15px)';
                      }, 150);
                  });
              });

              // Add glowing cursor trail effect
              document.addEventListener('mousemove', (e) => {
                  const trail = document.createElement('div');
                  trail.style.position = 'fixed';
                  trail.style.left = e.clientX + 'px';
                  trail.style.top = e.clientY + 'px';
                  trail.style.width = '4px';
                  trail.style.height = '4px';
                  trail.style.background = 'rgba(0, 212, 255, 0.6)';
                  trail.style.borderRadius = '50%';
                  trail.style.pointerEvents = 'none';
                  trail.style.zIndex = '9999';
                  trail.style.animation = 'fadeOut 1s ease-out forwards';
                  
                  document.body.appendChild(trail);
                  
                  setTimeout(() => {
                      trail.remove();
                  }, 1000);
              });

              // Add tech stack showcase with animated icons
              const techShowcase = document.createElement('div');
              techShowcase.innerHTML = \`
                  <div style="position: fixed; bottom: 2rem; right: 2rem; z-index: 1000;">
                      <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(20px); 
                                 border-radius: 15px; padding: 1rem; border: 1px solid rgba(255, 255, 255, 0.1);">
                          <div style="font-size: 0.8rem; color: var(--secondary); margin-bottom: 0.5rem; text-align: center;">Tech Stack</div>
                          <div style="display: flex; gap: 0.5rem; align-items: center;">
                              <span style="font-size: 1.2rem;" title="Java">☕</span>
                              <span style="font-size: 1.2rem;" title="Angular">🅰️</span>
                              <span style="font-size: 1.2rem;" title="React">⚛️</span>
                              <span style="font-size: 1.2rem;" title="Database">🗄️</span>
                              <span style="font-size: 1.2rem;" title="Cloud">☁️</span>
                              <span style="font-size: 1.2rem;" title="AI">🤖</span>
                          </div>
                      </div>
                  </div>
              \`;
              document.body.appendChild(techShowcase);
          });
        `
      }} />
    </>
  );
}