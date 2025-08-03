
import React from "react"
import "./Contact.css"
import { Link } from "react-router-dom"

export default function Contact() {
  const [result, setResult] = React.useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "31dc4c5d-7696-4f5e-93fa-81ee8c4eefe2")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <div className="contact-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Get In Touch</h1>
              <p className="hero-subtitle">
                Ready to start your project? Have a question? I'd love to hear from you. Let's discuss how we can work
                together to bring your vision to life.
              </p>
            </div>
            <div className="hero-image">
              <img src="/images/contact.svg" alt="Contact Me" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>codecraftersquest@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+46763410087</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Borlänge, Sweden</p>
                </div>
              </div>
              <div className="availability">
                <h3>Availability</h3>
                <p>
                  I'm currently available for new projects and collaborations. I typically respond to messages within 24
                  hours.
                </p>
              </div>
            </div>
            <div className="contact-form-container">
              <h2>Send Me a Message</h2>
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
              <span style={{ display: "block", marginTop: "1rem", color: "var(--brand-600)" }}>{result}</span>
            </div>
          </div>
          <div className="contact-cta">
            <h2>Let's Create Something Amazing Together</h2>
            <p>
              Whether you need a new website, a brand identity, or ongoing web maintenance, I'm here to help you achieve
              your goals with professional, high-quality work.
            </p>
            <div className="cta-buttons">
              <Link to="/services" className="btn btn-secondary">
                View My Services
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
