import "./About.css"

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">About Me</h1>
              <p className="hero-subtitle">
                Passionate creator dedicated to transforming ideas into impactful digital experiences
              </p>
            </div>
            <div className="hero-image">
              <img src="/images/home-hero1.png" alt="About Abdalai Khamel" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content-grid">
            <div className="about-text">
              <h2>Hi, I'm Abdalai Khamel</h2>
              <p>
                I am a frontend developer and graphic designer. I believe in the transformative power of good design and clean code to transform ideas into impactful digital experiences.
              </p>
              <p>
                I create visually stunning and functional digital experiences that seamlessly integrate cutting-edge technology with captivating design. I am eager to collaborate with you to bring your vision to life.
              </p>
            </div>
            <div className="about-image">
              <img src="/images/about.svg" alt="Frontend Developer and Graphic Designer" />
            </div>
          </div>

          <div className="education-section">
            <h2>Education</h2>
            <div className="education-card">
              <div className="education-icon skill-icon">
                <img src="/images/university.svg" alt="Education Icon" />
              </div>
              <div className="education-details">
                <h3>Bachelor of Philosophy</h3>
                <p className="education-major">Major: Computer Science</p>
                <p className="education-school">Dalarna University College</p>
                <p className="education-date">July 2, 2025</p>
                <p className="education-program">
                  Education Program: Graphic Design and Web Development - Bachelor's Program.
                </p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <div className="education-card">
              <div className="education-icon skill-icon">
                <img src="/images/high_school.svg" alt="Education Icon" />
              </div>
              <div className="education-details">
                <h3>High School Diploma</h3>
                <p className="education-major">Major: Web Development</p>
                <p className="education-school">Mullsjö Folk High School</p>
                <p className="education-date">July 2, 2022</p>
                <p className="education-program">
                  Education Program: High school – Specialization in Web Development.
                </p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <div className="education-card">
              <div className="education-icon skill-icon">
                <img src="/images/elementary _school.svg" alt="Education Icon" />
              </div>
              <div className="education-details">
                <h3>Basic Education Certificate</h3>
                <p className="education-major">Major: Basic Education Level</p>
                <p className="education-school">Ållebergsgymnasiet</p>
                <p className="education-date">July 2, 2018</p>
                <p className="education-program">
                  Education Program: Introductory Program – Basic Education Level.
                </p>
              </div>
            </div>
          </div>

          <div className="process-section">
            <h2>My Process</h2>
            <p className="process-subtitle">A Proven Method for Delivering Exceptional Results</p>

            <div className="process-grid">
              <div className="process-step">
                <div className="process-number">1</div>
                <h3>Discovery</h3>
                <p>Understand Your Goals, Target Audience, and Project Requirements</p>
              </div>

              <div className="process-step">
                <div className="process-number">2</div>
                <h3>Design</h3>
                <p>Create Wireframes, Mockups, and Prototypes That Realize Your Vision</p>
              </div>

              <div className="process-step">
                <div className="process-number">3</div>
                <h3>Development</h3>
                <p>Build Your Project with Clean, Efficient Code and Modern Technology</p>
              </div>

              <div className="process-step">
                <div className="process-number">4</div>
                <h3>Launch</h3>
                <p>Testing, Optimization, and Deployment with Continuous Support</p>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h2>My Skills & Expertise</h2>
            <p className="skills-subtitle">Technologies and Tools I Use to Create Amazing Digital Experiences</p>

            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon">
                  <img src="/images/react.svg" alt="skill icon" />
                </div>
                <h3>React</h3>
              </div>

              <div className="skill-card">
                <div className="skill-icon">
                  <img src="/images/javascript.svg" alt="skill icon" />
                </div>
                <h3>JavaScript</h3>
              </div>

              <div className="skill-card">
                <div className="skill-icon">
                  <img src="/images/html.svg" alt="skill icon" />
                </div>
                <h3>HTML5</h3>
              </div>

              <div className="skill-card">
                <div className="skill-icon">
                  <img src="/images/css.svg" alt="skill icon" />
                </div>
                <h3>CSS3</h3>
              </div>

              <div className="skill-card">
                <div className="skill-icon">
                  <img src="/images/wordpress.svg" alt="skill icon" />
                </div>
                <h3>WordPress</h3>
              </div>

              <div className="skill-card">
                <div className="skill-icon">
                  <img src="/images/bootstrap.svg" alt="skill icon" />
                </div>
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
