"use client"

import { useParams, Link } from "react-router-dom"
import ImageGallery from "../components/ImageGallery"
import "./ProjectDetail.css"

const ProjectDetail = () => {
  const { slug } = useParams()

  // Project data 
  const projects = {
    "Spectral-Studios-brand-identity-design": {
      id: 1,
      title: "Spectral Studios - Brand Identity Design",
      category: "Graphic Design",
      description:
        "Academic project: Complete brand identity package including logo design, color palette, typography guidelines, and comprehensive graphic manual. Created as part of my graphic design studies at university.",
      image: "/images/spectral_studios_graphic_manual/page-1.jpg",
      technologies: ["Adobe Illustrator", "InDesign", "Photoshop", "Brand Strategy", "Figma"],
      client: "Spectral Studios",
      year: "2023",
      duration: "4 weeks",
      overview:
         "This was an academic assignment completed during my graphic design studies at Dalarna University College. The project involved developing a complete brand identity system for Spectral Studios, a company focused on delivering high-quality concerts, theater, and music experiences. The assignment challenged me to create a cohesive visual identity that would effectively communicate the company's mission and values.",
      overview_image: "/images/spectral_studios_graphic_manual/logo_brand.png",
      challenges:
        "As a student project, the main challenge was creating a professional-level brand identity that captures the essence of music and theater while maintaining credibility. I needed to demonstrate my understanding of design principles, color theory, and brand consistency across multiple touchpoints.",
      solution:
        "I designed a distinctive logo featuring stylized sound waves in blue and green with a prominent red 'S' cutting through the waves. The design symbolizes the dynamic nature of live performances while maintaining a professional appearance. I developed comprehensive brand guidelines including color palettes, typography systems, and usage rules.",
      results:
        "The project received high marks and successfully demonstrated my ability to create a complete brand identity system. The comprehensive graphic manual showcases professional-level design work and attention to detail expected in the industry.",
      features: [
        "Complete logo design with multiple variations",
        "Comprehensive color palette and usage guidelines",
        "Typography system with primary and secondary fonts",
        "Brand application examples across various media",
        "Detailed graphic manual with usage instructions",
        "Professional presentation and documentation",
      ],
      gallery: [
        "/images/spectral_studios_graphic_manual/logotyp.webp",
        "/images/spectral_studios_graphic_manual/colors.png",
        "/images/spectral_studios_graphic_manual/font.png",
      ],
      designImages: [
        "/images/spectral_studios_graphic_manual/page-1.jpg",
        "/images/spectral_studios_graphic_manual/page-2.jpg",
        "/images/spectral_studios_graphic_manual/page-3.jpg",
        "/images/spectral_studios_graphic_manual/page-4.jpg",
        "/images/spectral_studios_graphic_manual/page-5.jpg",
        "/images/spectral_studios_graphic_manual/page-6.jpg",
        "/images/spectral_studios_graphic_manual/page-7.jpg",
        "/images/spectral_studios_graphic_manual/page-8.jpg",
        "/images/spectral_studios_graphic_manual/page-9.jpg",
        "/images/spectral_studios_graphic_manual/page-10.jpg",
        "/images/spectral_studios_graphic_manual/page-11.jpg",
        "/images/spectral_studios_graphic_manual/page-12.jpg",
        "/images/spectral_studios_graphic_manual/page-13.jpg",
        "/images/spectral_studios_graphic_manual/page-14.jpg",
      ],
      designTitle: "Spectral Studios - Graphic Manual and Guidelines",
    },

    "hogskolan-dalarna-brand-identity-design": {
      id: 2,
      title: "Högskolan Dalarna - Brand Identity Design",
      category: "Graphic Design",
      description:
        "Academic project: Complete brand identity package including logo design, color palette, typography guidelines, and comprehensive graphic manual. Created as part of my graphic design studies at university.",
      image: "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-0.jpg",
      technologies: ["Adobe Illustrator", "InDesign", "Photoshop", "Brand Strategy", "Figma"],
      client: "Academic Project - Dalarna University College",
      year: "2023",
      duration: "4 weeks",
      overview:
        "This was an academic assignment completed during my graphic design studies at Dalarna University College. The project involved developing a complete brand identity system for the university, covering everything from logo design and color systems to typography and image guidelines. The comprehensive manual demonstrates professional-level brand documentation and strategic thinking about visual communication.",
      overview_image: [
        "/images/hogskolan_dalarna_graphic_manual/logo_brand.png",
        "/images/hogskolan_dalarna_graphic_manual/stylescape.jpg",
      ],
      challenges:
        "The main challenge was creating a brand identity system that would reflect the university's core values of openness, accessibility, and cultural diversity while maintaining professional credibility. I needed to develop guidelines that would work across multiple communication channels and be easily implemented by various departments within the university.",
      solution:
        "I developed a sophisticated brand system featuring a distinctive logo with a shield symbol representing creativity and wisdom, combined with a planet element symbolizing distance learning and global reach. The color palette draws inspiration from traditional Dalarna folk costumes, using purple and light brown as base colors with seven identity colors for flexibility.",
      results:
        "The project received excellent academic evaluation and successfully demonstrates mastery of professional brand design principles. The comprehensive manual showcases advanced skills in visual identity development, strategic brand thinking, and professional documentation standards expected in the design industry.",
      features: [
        "Complete logo system with multiple variations and usage guidelines",
        "Sophisticated color palette with base and identity colors",
        "Comprehensive typography system for different communication needs",
        "Detailed image guidelines emphasizing diversity and authenticity",
        "Professional brand manual with detailed specifications",
        "Strategic brand positioning reflecting university values and mission",
      ],
      gallery: [
        "/images/hogskolan_dalarna_graphic_manual/logo.png",
        "/images/hogskolan_dalarna_graphic_manual/colors.png",
        "/images/hogskolan_dalarna_graphic_manual/font.png",
      ],
      designImages: [
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-0.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-1.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-2.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-3.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-4.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-5.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-6.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-7.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-8.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-9.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-10.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-11.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-12.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-13.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-14.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-15.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-16.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-17.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-18.jpg",
        "/images/hogskolan_dalarna_graphic_manual/logotyp_profile-images-19.jpg",
      ],
      designTitle: "Högskolan Dalarna - Graphic Manual and Guidelines",
    },
    
  }

  const project = projects[slug]

  if (!project) {
    return (
      <div className="project-not-found">
        <div className="container">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <div className="project-hero-content">
            <div className="project-breadcrumb">
              <Link to="/projects">Projects</Link>
              <span>/</span>
              <span>{project.title}</span>
            </div>

            <div className="project-hero-info">
              <div className="project-hero-text">
                <div className="project-category-badge">{project.category}</div>
                <h1 className="project-hero-title">{project.title}</h1>
                <p className="project-hero-description">{project.description}</p>

                <div className="project-meta">
                  <div className="project-meta-item">
                    <strong>Client:</strong> {project.client}
                  </div>
                  <div className="project-meta-item">
                    <strong>Year:</strong> {project.year}
                  </div>
                  <div className="project-meta-item">
                    <strong>Duration:</strong> {project.duration}
                  </div>
                </div>
              </div>

              <div className="project-hero-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="section">
        <div className="container">
          <div className="project-content">
            {/* Overview */}
            <div className="project-section">
              <h2>Project Overview</h2>
              <p>{project.overview}</p>  
            </div>

            {/* Overview Image(s) - Handle both single image and multiple images */}
            {project.overview_image && (
              <div className="project-hero-image image_space">
                {Array.isArray(project.overview_image) ? (
                  <div className="overview-images-grid">
                    {project.overview_image.map((img, index) => (
                      <img key={index} src={img || "/placeholder.svg"} alt={`${project.title} overview ${index + 1}`} />
                    ))}
                  </div>
                ) : (
                  <img src={project.overview_image || "/placeholder.svg"} alt={`${project.title} overview`} />
                )}
              </div>
            )}
            

            {/* Design Images Gallery - Show if project has design images */}
            {project.designImages && (
              <div className="project-section">
                <h2>Design Documentation</h2>
                <ImageGallery
                  images={project.designImages}
                  title={project.designTitle || `${project.title} - Design Documentation`}
                />
              </div>
            )}

            {/* Technologies */}
            <div className="project-section">
              <h2>Technologies Used</h2>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag-large">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Solution */}
            <div className="project-section-grid">
              <div className="project-section">
                <h2>Challenges</h2>
                <p>{project.challenges}</p>
              </div>

              <div className="project-section">
                <h2>Solution</h2>
                <p>{project.solution}</p>
              </div>
            </div>

            {/* Features */}
            <div className="project-section">
              <h2>Key Features</h2>
              <ul className="project-features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            <div className="project-section">
              <h2>Project Gallery</h2>
              <div className="project-gallery">
                {project.gallery.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img src={image || "/placeholder.svg"} alt={`${project.title} screenshot ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="project-section">
              <h2>Results & Impact</h2>
              <p>{project.results}</p>
            </div>

            {/* CTA */}
            <div className="project-cta">
              <h2>Interested in Similar Work?</h2>
              <p>
                Let's discuss how I can help bring your project to life with the same attention to detail and
                results-driven approach.
              </p>
              <div className="project-cta-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Start Your Project
                </Link>
                <Link to="/projects" className="btn btn-secondary">
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
