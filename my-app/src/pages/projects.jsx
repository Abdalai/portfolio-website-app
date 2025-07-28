"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Projects.css"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      id: 1,
      slug: "Spectral-Studios-brand-identity-design",
      title: "Spectral Studios - Brand Identity Design",
      category: "Graphic Design",
      description:
        "Academic project: Complete brand identity package including logo design, color palette, typography guidelines, and comprehensive graphic manual. Created as part of my graphic design studies at university.",
      image: "/images/spectral_studios_graphic_manual/logo.png",
      technologies:  ["Adobe Illustrator", "InDesign", "Photoshop", "Brand Strategy", "Figma"],
      client: "Spectral Studios",
      year: "2023",
      duration: "4 weeks",
      overview:
        "Developed a complete brand identity system for Spectral Studios, a company focused on delivering high-quality concerts, theater, and music experiences.",
      challenges:
        "Creating a brand identity that captures the essence of music and theater while maintaining professional credibility.",
      solution:
        "Designed a distinctive logo featuring stylized sound waves in blue and green with a prominent red 'S' cutting through the waves.",
      results:
        "The new brand identity successfully positioned Spectral Studios as a modern, professional entertainment company.",
    },
    
    {
      id: 2,
      slug: "hogskolan-dalarna-brand-identity-design",
      title: "Högskolan Dalarna - Brand Identity Design",
      category: "Graphic Design",
      description:
        "Academic project: Comprehensive brand identity manual for Dalarna University College. Created as part of my graphic design studies, including complete visual guidelines, logo system, color palette, and typography standards.",
      image: "/images/hogskolan_dalarna_graphic_manual/logo.png",
      technologies: ["Adobe Illustrator", "InDesign", "Photoshop", "Brand Strategy", "Figma"],
      client: "Academic Project - Dalarna University College",
      year: "2023",
      duration: "4 weeks",
      overview:
        "This comprehensive brand identity manual was created as an academic assignment during my graphic design studies at Dalarna University College. The project involved developing a complete visual identity system for the university, including logo variations, color systems, typography guidelines, and image standards.",
      challenges:
        "Creating a cohesive brand identity system that reflects the university's values of openness, knowledge, and cultural diversity while maintaining professional credibility and accessibility across all communication channels.",
      solution:
        "Developed a comprehensive 16-page brand manual featuring a distinctive logo with a shield symbol and planet element, a sophisticated color palette inspired by traditional Dalarna folk costumes, and detailed guidelines for consistent brand application.",
      results:
        "Successfully created a professional-level brand identity system that received high academic marks and demonstrates mastery of brand design principles and comprehensive documentation standards.",
    },

    {
      id: 3,
      slug: "altru-spa-hotels-identity-design",
      title: "Altru Spa Hotels - Identity Design",
      category: "Graphic Design",
      description:
        "Academic project: Comprehensive brand identity manual for Altru Spa Hotels. Created as part of my graphic design studies, including complete visual guidelines, logo system, color palette, and typography standards.",
      image: "/images/altru_spa_hotels_identity/logo.png",
      technologies: ["Adobe Illustrator", "InDesign", "Photoshop", "Brand Strategy", "Figma"],
      client: "Academic Project - Dalarna University College",
      year: "2023",
      duration: "4 weeks",
      overview:
        "This comprehensive brand identity manual was created as an academic assignment during my graphic design studies at Dalarna University College. The project involved developing a complete visual identity system for the university, including logo variations, color systems, typography guidelines, and image standards.",
      challenges:
        "Creating a cohesive brand identity system that reflects the university's values of openness, knowledge, and cultural diversity while maintaining professional credibility and accessibility across all communication channels.",
      solution:
        "Developed a comprehensive 16-page brand manual featuring a distinctive logo with a shield symbol and planet element, a sophisticated color palette inspired by traditional Dalarna folk costumes, and detailed guidelines for consistent brand application.",
      results:
        "Successfully created a professional-level brand identity system that received high academic marks and demonstrates mastery of brand design principles and comprehensive documentation standards.",
    },
  ]

  const categories = ["All", "Frontend Development", "Graphic Design", "UI/UX Design", "Web Maintenance"]

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  // Handle filter button click
  const handleFilterClick = (category) => {
    setActiveFilter(category)
  }

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">My Projects</h1>
              <p className="hero-subtitle">
                A showcase of my recent work in frontend development, graphic design, and UI/UX design. Each project
                represents a unique challenge and creative solution.
              </p>
            </div>
            <div className="hero-image">
              <img src="/images/projects.svg" alt="My Projects" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="projects-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? "active" : ""}`}
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <Link key={project.id} to={`/projects/${project.slug}`} className="project-card-link">
                  <div className="project-card">
                    <div className="project-image">
                      <img src={project.image || "/placeholder.svg"} alt={project.title} />
                      <div className="project-overlay">
                        <span className="project-link-text">View Project</span>
                      </div>
                    </div>

                    <div className="project-content">
                      <div className="project-category">{project.category}</div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>

                      <div className="project-technologies">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="no-projects">
                <p>No projects found for this category.</p>
              </div>
            )}
          </div>

          <div className="projects-cta">
            <h2>Interested in Working Together?</h2>
            <p>Let's discuss your project and how I can help bring your ideas to life.</p>
            <a href="/contact" className="btn btn-primary">
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
