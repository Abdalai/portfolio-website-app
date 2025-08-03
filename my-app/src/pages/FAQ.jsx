"use client"

import { useState } from "react"
import "./FAQ.css"
import { Link } from "react-router-dom"


const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I offer comprehensive digital services including Frontend Development, Graphic Design, UI/UX Design, and Web Maintenance. Each service is tailored to meet your specific needs and business goals.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is your design process?",
      answer:
        "My process follows four key stages: Discovery (understanding your goals and requirements), Design (creating wireframes and prototypes), Development (building with clean code), and Launch (testing and deployment with ongoing support).",
    },
    {
      question: "Do you work with clients remotely?",
      answer:
        "Yes, I work with clients both locally in Sweden and internationally. I use modern communication tools and project management systems to ensure smooth collaboration regardless of location.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "I specialize in modern web technologies including React, JavaScript, HTML5, CSS3, and various design tools. I also work with WordPress, Bootstrap, and other frameworks depending on project requirements.",
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer:
        "Yes, I offer comprehensive web maintenance services including regular updates, security monitoring, performance optimization, bug fixes, and technical support to keep your website running smoothly.",
    },
    {
      question: "How do you handle project communication?",
      answer:
        "I believe in transparent communication throughout the project. I provide regular updates, use project management tools, and am available via email and phone. You'll always know the status of your project.",
    },
    {
      question: "What are your rates?",
      answer:
        "My rates vary depending on the project scope, complexity, and timeline. I offer competitive pricing and provide detailed quotes after understanding your specific requirements. Contact me for a personalized estimate.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Yes, I include a reasonable number of revisions in all my projects. The exact number depends on the project scope, but I work closely with clients to ensure the final result meets their expectations.",
    },
    {
      question: "Can you help with existing websites?",
      answer:
        "I can help improve existing websites through redesigns, performance optimization, adding new features, or providing ongoing maintenance. I work with various platforms and technologies.",
    },
    {
      question: "Do you provide hosting services?",
      answer:
        "While I don't provide hosting directly, I can recommend reliable hosting providers and help with the setup and deployment process. I also assist with domain registration and DNS configuration.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy! Simply contact me through the contact form, email, or phone. We'll schedule a consultation to discuss your project goals, timeline, and budget.",
    },
  ]

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Frequently Asked Questions</h1>
              <p className="hero-subtitle">
                Find answers to common questions about my services, process, and how we can work together. Don't see
                your question? Feel free to contact me directly.
              </p>
            </div>
            <div className="hero-image">
              <img src="/images/FAQ.svg" alt="FAQ" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openItems[index] ? "faq-item-open" : ""}`}>
                  <button className="faq-question" onClick={() => toggleItem(index)}>
                    <span>{faq.question}</span>
                    <span className="faq-icon">{openItems[index] ? "−" : "+"}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="faq-sidebar">
              <div className="faq-contact-card">
                <h3>Still Have Questions?</h3>
                <p>
                  I'm here to help! If you don't find the answer you're looking for, don't hesitate to reach out
                  directly.
                </p>
                <Link to="/contact" className="btn btn-primary">Contact Me</Link>
              </div>

              <div className="faq-services-card">
                <h3>Ready to Start?</h3>
                <p>Explore my services and see how I can help bring your project to life.</p>
                <Link to="/services" className="btn btn-secondary">View Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
