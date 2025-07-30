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
      technologies: ["Adobe Illustrator", "InDesign", "Photoshop", "Brand Strategy", "Figma"],
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
      slug: "altru-spa-hotels-brand-identity",
      title: "Altru Spa Hotels - Brand Identity & Website Design",
      category: "Graphic Design, UI/UX Design",
      description:
        "Academic project: Complete brand identity package including logo design, mockups, marketing materials, and website design in Figma for Altru Spa Hotels.",
      image: "images/Altru_Spa_Hotels/logo.png",
      technologies: ["Figma", "Adobe Illustrator", "Photoshop", "Brand Strategy", "UI/UX Design"],
      client: "Academic Project - Altru Spa Hotels",
      year: "2024",
      duration: "4 weeks",
      overview:
        "This comprehensive academic project involved creating a complete brand identity system for Altru Spa Hotels. The project encompassed logo design, brand guidelines, marketing materials, mockups, and a complete website design in Figma.",
      challenges:
        "Creating a brand identity that effectively communicates luxury and relaxation while maintaining professional credibility in the competitive hospitality market.",
      solution:
        "Developed a sophisticated brand identity featuring elegant typography, a refined color palette, and luxurious imagery. Created comprehensive mockups and a detailed website design that emphasizes the spa experience.",
      results:
        "Successfully created a complete brand identity that positions Altru Spa Hotels as a premium luxury destination with advanced skills in brand development and digital design.",
    },

    {
      id: 4,
      slug: "falu-car-wash-menu",
      title: "Falu Car Wash - Service Menu Design",
      category: "Graphic Design",
      description:
        "Client project: Professional service menu design for Falu Car Wash featuring comprehensive pricing list and service descriptions for car washing services.",
      image: "/images/falu_car_wash/menu.png",
      technologies: ["Adobe Illustrator", "Photoshop", "Print Design", "Layout Design"],
      client: "Falu Car Wash",
      year: "2025",
      duration: "2 weeks",
      overview:
        "This client project involved designing a professional service menu for Falu Car Wash, showcasing their complete range of car washing and detailing services with clear pricing structure.",
      challenges:
        "Creating a clear, professional menu design that effectively communicates various service levels and pricing while maintaining visual appeal and brand consistency.",
      solution:
        "Designed a comprehensive service menu with clear categorization of services, professional automotive imagery, and easy-to-read pricing structure with dynamic visual elements.",
      results:
        "Delivered a professional service menu that effectively communicates the business offerings and has been successfully implemented for customer use.",
    },

    {
      id: 5,
      slug: "co2-dataset-visualization",
      title: "CO2 Dataset - Environmental Data Visualization",
      category: "Frontend Development",
      description:
        "Academic project: Backend development and data visualization system using CO2 datasets to create statistical analysis and interactive charts of transportation emissions.",
      image: "/images/dataset/hero.png",
      technologies: ["JavaScript", "Node.js", "Data Visualization", "Chart.js", "HTML", "CSS"],
      client: "Academic Project",
      year: "2024",
      duration: "8 weeks",
      overview:
        "This academic project focused on environmental data analysis, involving the development of a backend system to process CO2 emission datasets and create comprehensive statistical visualizations.",
      challenges:
        "Processing large environmental datasets, creating meaningful statistical analysis, and developing an intuitive user interface for complex environmental data visualization.",
      solution:
        "Built a comprehensive data processing backend that analyzes CO2 emissions from different transportation types and implemented interactive visualization tools.",
      results:
        "Successfully created a functional environmental data visualization platform that provides valuable insights into transportation-related CO2 emissions.",
    },

    {
      id: 6,
      slug: "grona-tryck-complete-brand",
      title: "Gröna Tryck - Complete Brand Identity & Website Development",
      category: "Frontend Development",
      description:
        "Academic project: Comprehensive brand identity, website development, logo design, mockups, visual identity, marketing materials, packaging design, payment system, login system, and admin panel using React, CSS, Bootstrap, and HTML.",
      image: "/images/grona_tryck/logo/logo.png",
      technologies: ["React", "CSS", "Bootstrap", "HTML", "JavaScript", "Adobe Illustrator", "Brand Strategy"],
      client: "Academic Project - Gröna Tryck",
      year: "2023",
      duration: "12 weeks",
      overview:
        "This comprehensive academic project involved creating a complete brand identity and e-commerce platform for Gröna Tryck, an environmentally conscious printing company.",
      challenges:
        "Creating a cohesive brand identity that effectively communicates environmental responsibility while developing a complete e-commerce platform with modern web technologies.",
      solution:
        "Developed a complete brand ecosystem with environmental focus, built a responsive e-commerce website using React and Bootstrap, implemented secure user authentication and payment systems.",
      results:
        "Successfully delivered a complete business solution combining professional brand identity with functional e-commerce capabilities, demonstrating full-stack development skills.",
    },

    {
      id: 7,
      slug: "imasters-portfolio-website",
      title: "iMasters - IT Services Portfolio Website",
      category: "Frontend Development",
      description:
        "Client project: Complete portfolio website and logo design for iMasters IT services company, built with React, CSS, HTML, and Bootstrap for professional IT consultancy presentation.",
      image: "/images/imasters/logo.png",
      technologies: ["React", "CSS", "HTML", "Bootstrap", "JavaScript", "Logo Design"],
      client: "iMasters IT Services",
      year: "2023",
      duration: "4 weeks",
      overview:
        "This client project involved creating a complete portfolio website for iMasters, an IT services and consultancy company, including logo design and brand development.",
      challenges:
        "Creating a professional online presence that effectively communicates technical expertise while remaining accessible to non-technical clients.",
      solution:
        "Designed a clean, professional logo and built a comprehensive portfolio website using React and Bootstrap, featuring clear service descriptions and responsive design.",
      results:
        "Successfully delivered a professional website that effectively showcases iMasters' IT services and expertise, helping to establish their online presence.",
    },

    {
      id: 8,
      slug: "insightcycle-brand-identity",
      title: "InsightCycle - Brand Identity & Graphic Manual",
      category: "Graphic Design",
      description:
        "Academic project: Complete brand identity development and comprehensive graphic manual for InsightCycle, featuring logo design, color systems, and professional brand guidelines.",
      image: "/images/InsightCycle/logo01.png",
      technologies: ["Adobe Illustrator", "InDesign", "Photoshop", "Brand Strategy", "Graphic Design"],
      client: "Academic Project - InsightCycle",
      year: "2025",
      duration: "6 weeks",
      overview:
        "This academic project focused on developing a complete brand identity for InsightCycle, a technology-focused feedback and analytics platform.",
      challenges:
        "Creating a brand identity that effectively communicates technology and professionalism while developing a comprehensive graphic manual for consistent brand application.",
      solution:
        "Developed a sophisticated brand identity featuring a distinctive logo with modern typography and created a professional color palette with detailed graphic manual.",
      results:
        "Successfully created a professional brand identity system that effectively positions InsightCycle as a modern, reliable technology platform.",
    },

    {
      id: 9,
      slug: "lilla-bryggeri-complete-brand",
      title: "Lilla Bryggeri - Complete Brand Identity & Marketing",
      category: "Graphic Design",
      description:
        "Academic project: Comprehensive brand development for Lilla Bryggeri including logo design, marketing materials, packaging design, website design, and complete graphic manual.",
      image: "/images/lilla_bryggeri/logo01.png",
      technologies: ["Adobe Illustrator", "InDesign", "Photoshop", "Brand Strategy", "Packaging Design", "Web Design"],
      client: "Academic Project - Lilla Bryggeri Tällberg",
      year: "2024",
      duration: "8 weeks",
      overview:
        "This comprehensive academic project involved creating a complete brand identity for Lilla Bryggeri, a craft brewery in Tällberg, focusing on local heritage and craft brewing traditions.",
      challenges:
        "Creating a brand identity that honors local brewing traditions while appealing to modern craft beer enthusiasts across packaging, digital, and marketing applications.",
      solution:
        "Developed a distinctive hand-lettered logo reflecting craft brewing heritage, created a color palette inspired by the Dalarna region, and designed comprehensive packaging solutions.",
      results:
        "Successfully created a complete brand ecosystem that positions Lilla Bryggeri as an authentic craft brewery rooted in local tradition.",
    },

    {
      id: 10,
      slug: "pizza-mia-menu-design",
      title: "Pizza Mia - Restaurant Menu Design",
      category: "Graphic Design",
      description:
        "Client project: Professional pizza menu design for Pizza Mia restaurant featuring comprehensive food offerings, pricing, and appetizing visual presentation.",
      image: "/images/pizza/logo.png",
      technologies: ["Adobe Illustrator", "Photoshop", "Print Design", "Menu Design"],
      client: "Pizza Mia Restaurant",
      year: "2024",
      duration: "1 weeks",
      overview:
        "This client project involved designing a comprehensive menu for Pizza Mia, a local pizza restaurant, showcasing their full range of pizzas, appetizers, and beverages.",
      challenges:
        "Creating an appetizing menu design that effectively organizes a large variety of food items while maintaining visual appeal and ensuring easy readability.",
      solution:
        "Designed a comprehensive menu with clear categorization of items, appetizing food photography integration, and organized pricing structure.",
      results:
        "Delivered a professional menu design that effectively showcases Pizza Mia's offerings and has been successfully implemented in the restaurant.",
    },

    {
      id: 11,
      slug: "sweden-top-car-wordpress",
      title: "SwedenTopCar - WordPress Website & Logo",
      category: "Web Maintenance",
      description:
        "Client project: Complete WordPress website development and logo design for SwedenTopCar automotive services, featuring professional automotive branding and responsive web design.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swedentopcar_pc-8ylmGlfKCxg1IETgUDcU7bklL2D8cM.png",
      technologies: ["WordPress", "PHP", "CSS", "HTML", "Logo Design", "Automotive Design"],
      client: "SwedenTopCar",
      year: "2023",
      duration: "3 weeks",
      overview:
        "This client project involved creating a complete WordPress website and logo design for SwedenTopCar, an automotive services company.",
      challenges:
        "Creating a professional automotive website that effectively communicates expertise and reliability while ensuring easy content management for the client.",
      solution:
        "Developed a custom WordPress website with professional automotive branding, created a distinctive logo design, and implemented responsive design features.",
      results:
        "Successfully delivered a professional WordPress website that effectively represents SwedenTopCar's automotive services and provides an easy-to-manage platform.",
    },

    {
      id: 12,
      slug: "matresa-food-magazine",
      title: "Matresa - Food Magazine Design",
      category: "Graphic Design",
      description:
        "Academic project: Complete food magazine design featuring culinary content, professional food photography layout, and comprehensive editorial design for Swedish food culture publication.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/khamel_abdalai_u2-images-1.jpg-uWZrqsCj2DCjJOX9EcEUfujqAABfbu.jpeg",
      technologies: ["Adobe InDesign", "Photoshop", "Editorial Design", "Typography", "Layout Design"],
      client: "Academic Project - Matresa Magazine",
      year: "2023",
      duration: "6 weeks",
      overview:
        "This academic project involved creating a complete food magazine called 'Matresa' focusing on Swedish and international culinary traditions.",
      challenges:
        "Creating an engaging editorial design that effectively presents food content, recipes, and culinary stories while maintaining professional magazine standards.",
      solution:
        "Developed a comprehensive magazine layout with professional food photography integration, created engaging typography systems, and designed clear content organization.",
      results:
        "Successfully created a professional food magazine that demonstrates advanced editorial design skills and comprehensive understanding of publication design.",
    }
  ]

  const categories = ["All", "Frontend Development", "Graphic Design", "UI/UX Design", "Web Maintenance"]

  // Filter projects based on active filter
  //const filteredProjects =
   // activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)
  
  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category.includes(activeFilter))

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
