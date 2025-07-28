import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Abdalai Khamel</span>
              </h1>
              <p className="hero-subtitle">
                I combine code and creativity to design and develop digital experiences that are both visually striking and technically smart. Let’s collaborate to bring your vision to life.
              </p>
              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/home-hero1.png"
                alt="Frontend Developer and Graphic Designer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-content">
            <h2>Passionate Creator</h2>
            <p>
              I am a frontend developer and graphic designer who believes in the power of good design and clean code to
              transform ideas into impactful digital experiences.
            </p>
            <Link to="/about" className="btn btn-primary">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="grid grid-2">

            <div className="service-card">
              <div className="service-icon">
                <img src="/images/frontend.svg" alt="service icon" />
              </div>
              <h3>Frontend Development</h3>
              <p>
                Building responsive, interactive web applications with modern technologies
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/images/graphic_design.svg" alt="service icon" />
              </div>
              <h3>Graphic Design</h3>
              <p>
                Creating visual identities and designs that communicate your brand message
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/images/ux&ui_design.svg" alt="service icon" />
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Designing user-centered interfaces that provide exceptional user experiences
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/images/web_maintenance.svg" alt="service icon" />
              </div>
              <h3>Web Maintenance</h3>
              <p>
                Keeping your website updated, secure, and performing at its best
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="section skills-preview">
        <div className="container">
          <h2 className="section-title">Technologies I Use</h2>
        </div>

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
      </section>
    </div>
  );
};

export default Home;
