import "./Services.css"
import React from "react"
import { Link } from "react-router-dom"

const Services = () => {
  const services = [
    {
      icon: <img className="service-icon" src="/images/frontend.svg" alt="Frontend Development" />,
      title: "Frontend Development",
      description:
        "Building responsive, interactive web applications with modern technologies like React, JavaScript, and CSS3.",
      features: [
        "Responsive Web Design",
        "Single Page Applications",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "Modern JavaScript (ES6+)",
        "React Development",
      ],
    },
    {
      icon: <img className="service-icon" src="/images/graphic_design.svg" alt="Graphic Design" />,
      title: "Graphic Design",
      description: "Creating visual identities and designs that communicate your brand message effectively.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Print Design",
        "Digital Graphics",
        "Marketing Materials",
        "Visual Branding",
      ],
    },
    {
      icon: <img className="service-icon" src="/images/ux&ui_design.svg" alt="UI/UX Design" />,
      title: "UI/UX Design",
      description: "Designing user-centered interfaces that provide exceptional user experiences.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "User Interface Design",
        "User Experience Design",
        "Usability Testing",
      ],
    },
    {
      icon: <img className="service-icon" src="/images/web_maintenance.svg" alt="Web Maintenance" />,
      title: "Web Maintenance",
      description: "Keeping your website updated, secure, and performing at its best.",
      features: [
        "Regular Updates",
        "Security Monitoring",
        "Performance Optimization",
        "Bug Fixes",
        "Content Updates",
        "Technical Support",
      ],
    },
  ]

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">My Services</h1>
              <p className="hero-subtitle">
                Digital Solutions That Work - From concept to launch, I provide comprehensive digital services that help
                your business grow and succeed online.
              </p>
            </div>
            <div className="hero-image">
              <img src="/images/services.svg" alt="Digital Services" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card-detailed">
                <div className="service-header">
                  <div className="service-icon-large">{service.icon}</div>
                  <h2>{service.title}</h2>
                </div>

                <p className="service-description">{service.description}</p>

                <div className="service-features">
                  <h3>What's Included:</h3>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <div className="cta-card">
              <h2>Ready to Start Your Project?</h2>
              <p>
                Let's discuss how I can help bring your vision to life with professional design and development
                services.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
                <Link to="/projects" className="btn btn-secondary">
                  View My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
