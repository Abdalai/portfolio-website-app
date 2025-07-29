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
    "altru-spa-hotels-brand-identity": {
      id: 3,
      title: "Altru Spa Hotels - Brand Identity & Website Design",
      category: "Graphic Design, UI/UX Design",
      description: "Academic project: Complete brand identity package including logo design, mockups, marketing materials, and website design in Figma for Altru Spa Hotels.",
      image: "/images/Altru_Spa_Hotels/Desktop.png",
      technologies: ["Figma", "Adobe Illustrator", "Photoshop", "Brand Strategy", "UI/UX Design"],
      client: "Academic Project - Altru Spa Hotels",
      year: "2024",
      duration: "4 weeks",
      overview:
        "This comprehensive academic project involved creating a complete brand identity system for Altru Spa Hotels. The project encompassed logo design, brand guidelines, marketing materials, mockups, and a complete website design in Figma, focusing on conveying luxury, relaxation, and premium hospitality services.",
      overview_image:
        ["/images/Altru_Spa_Hotels/altru_stylescape.jpg",
        "/images/Altru_Spa_Hotels/desktop&iphone.png",
      ],
      challenges:
        "Creating a brand identity that effectively communicates luxury and relaxation while maintaining professional credibility in the competitive hospitality market. The challenge was to develop a cohesive visual system that works across all touchpoints from digital to physical applications.",
      solution:
        "Developed a sophisticated brand identity featuring elegant typography, a refined color palette, and luxurious imagery. Created comprehensive mockups and a detailed website design that emphasizes the spa experience and premium accommodations.",
      results:
        "Successfully created a complete brand ecosystem that positions Altru Spa Hotels as a premium luxury destination. The project demonstrated advanced skills in brand development, digital design, and comprehensive visual identity systems.",
      features: [
        "Complete logo design and brand identity system",
        "Luxury-focused visual identity and color palette",
        "Comprehensive marketing materials and mockups",
        "Full website design and user experience in Figma",
        "Brand guidelines and usage documentation",
        "Premium hospitality-focused design approach",
      ],
      gallery: [
        "/images/Altru_Spa_Hotels/font.png",
        "/images/Altru_Spa_Hotels/Altru_Spa_Hotels.webp",
        "/images/Altru_Spa_Hotels/colors.png",
      ],
      designTitle: "Altru Spa Hotels - Brand Identity & Digital Design",
    },

    "falu-car-wash-menu": {
      id: 4,
      title: "Falu Car Wash - Service Menu Design",
      category: "Graphic Design",
      description:
        "Client project: Professional service menu design for Falu Car Wash featuring comprehensive pricing list and service descriptions for car washing services.",
      image: "/images/falu_car_wash/framsidan.png",
      technologies: ["Adobe Illustrator", "Photoshop", "Print Design", "Layout Design"],
      client: "Falu Car Wash",
      year: "2025",
      duration: "2 weeks",
      overview:
        "This client project involved designing a professional service menu for Falu Car Wash, showcasing their complete range of car washing and detailing services. The design needed to be both informative and visually appealing while maintaining clear pricing structure and service descriptions.",
      overview_image:
        "/images/falu_car_wash/menu.png",
      challenges:
        "Creating a clear, professional menu design that effectively communicates various service levels and pricing while maintaining visual appeal and brand consistency for a local car wash business.",
      solution:
        "Designed a comprehensive service menu with clear categorization of services (Economy, Classic, and Premium washing), professional automotive imagery, and easy-to-read pricing structure. Used dynamic visual elements and professional color scheme.",
      results:
        "Delivered a professional service menu that effectively communicates the business offerings and has been successfully implemented for customer use, helping to streamline the ordering process and enhance the professional image of the business.",
      features: [
        "Clear service categorization and pricing structure",
        "Professional automotive imagery and graphics",
        "Easy-to-read layout with contact information",
        "Multiple service tiers clearly differentiated",
        "Professional branding and visual identity",
        "Print-ready design specifications",
      ],
      gallery: [
        "/images/falu_car_wash/framsidan.png",
        "/images/falu_car_wash/backsidan.png",
      ],
      designTitle: "Falu Car Wash - Professional Service Menu",
    },

    "co2-dataset-visualization": {
      id: 5,
      title: "CO2 Dataset - Environmental Data Visualization",
      category: "Frontend Development",
      description:
        "Academic project: Backend development and data visualization system using CO2 datasets to create statistical analysis and interactive charts of transportation emissions.",
      image: "/images/dataset/start_page01.png",
      technologies: ["JavaScript", "Node.js", "Data Visualization", "Chart.js", "HTML", "CSS"],
      client: "Academic Project",
      year: "2024",
      duration: "8 weeks",
      overview:
        "This academic project focused on environmental data analysis, involving the development of a backend system to process CO2 emission datasets and create comprehensive statistical visualizations. The project analyzed emissions from various transportation methods and presented the data through interactive web-based charts and graphs.",
      overview_image:
        "/images/dataset/hero.png",
      challenges:
        "Processing large environmental datasets, creating meaningful statistical analysis, and developing an intuitive user interface for complex environmental data visualization while ensuring data accuracy and accessibility.",
      solution:
        "Built a comprehensive data processing backend that analyzes CO2 emissions from different transportation types, implemented interactive visualization tools, and created a user-friendly interface for exploring environmental impact data.",
      results:
        "Successfully created a functional environmental data visualization platform that provides valuable insights into transportation-related CO2 emissions, demonstrating proficiency in data analysis, backend development, and environmental awareness.",
      features: [
        "Comprehensive CO2 dataset processing and analysis",
        "Interactive data visualization and charts",
        "Transportation emission comparison tools",
        "Statistical analysis and reporting features",
        "Responsive web interface design",
        "Environmental impact assessment tools",
      ],
      gallery: [
        "/images/dataset/overview.png",
      ],
      
      designTitle: "CO2 Dataset - Environmental Data Platform",
    },

    "grona-tryck-complete-brand": {
      id: 6,
      title: "Gröna Tryck - Complete Brand Identity & Website Development",
      category: "Frontend Development",
      description:
        "Academic project: Comprehensive brand identity, website development, logo design, mockups, visual identity, marketing materials, packaging design, payment system, login system, and admin panel using React, CSS, Bootstrap, and HTML.",
      image: "/images/grona_tryck/mockup/gronatryck_cap_mockup.png",
      technologies: ["React", "CSS", "Bootstrap", "HTML", "JavaScript", "Adobe Illustrator", "Brand Strategy"],
      client: "Academic Project - Gröna Tryck",
      year: "2025",
      duration: "8 weeks",
      overview:
        "This comprehensive academic project involved creating a complete brand identity and e-commerce platform for Gröna Tryck (Green Print), an environmentally conscious printing company. The project encompassed everything from logo design and brand guidelines to a fully functional website with payment processing, user authentication, and administrative features.",
      overview_image: [
        "/images/grona_tryck/gronatryck_visual_identity.jpg",
        "/images/grona_tryck/patterns/gronatryck_tape_pattern.png",
        "/images/grona_tryck/mockup/overview.png",
      ],
      challenges:
        "Creating a cohesive brand identity that effectively communicates environmental responsibility while developing a complete e-commerce platform with modern web technologies, including secure payment processing and comprehensive admin functionality.",
      solution:
        "Developed a complete brand ecosystem with environmental focus, built a responsive e-commerce website using React and Bootstrap, implemented secure user authentication and payment systems, and created comprehensive admin tools for business management.",
      results:
        "Successfully delivered a complete business solution combining professional brand identity with functional e-commerce capabilities, demonstrating full-stack development skills and comprehensive understanding of digital business requirements.",
      features: [
        "Complete brand identity system and graphic manual",
        "Responsive e-commerce website built with React",
        "Secure user authentication and login system",
        "Integrated payment processing system",
        "Comprehensive admin panel for business management",
        "Professional packaging and marketing material design",
        "Environmental sustainability-focused branding",
        "Mobile-responsive design with Bootstrap",
      ],
      gallery: [
        "/images/grona_tryck/logo/logo.png",
        "/images/grona_tryck/logo/logo_icon.png",
        "/images/grona_tryck/mockup/gronatryck_card_mockup.png",
        "/images/grona_tryck/mockup/gronatryck_tshirt_mockup.png",
        "/images/grona_tryck/mockup/gronatryck_packaging_mockup.png",
        "/images/grona_tryck/marketing/gronatryck_youtubethumbnail.png",
      ],
      designImages: [
        "/images/grona_tryck/gronatryck_graphicmanual-images-0.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-1.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-2.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-3.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-4.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-5.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-6.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-7.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-8.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-9.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-10.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-11.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-12.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-13.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-14.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-15.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-16.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-17.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-18.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-19.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-20.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-21.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-22.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-23.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-24.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-25.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-26.jpg",
        "/images/grona_tryck/gronatryck_graphicmanual-images-27.jpg",
      ],
      designTitle: "Gröna Tryck - Complete Brand & E-commerce Solution",
    },

    "imasters-portfolio-website": {
      id: 7,
      title: "iMasters - IT Services Portfolio Website",
      category: "Frontend Development",
      description:
        "Client project: Complete portfolio website and logo design for iMasters IT services company, built with React, CSS, HTML, and Bootstrap for professional IT consultancy presentation.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imasters_iPhone-h4VWtIuzZjFgGwckFJR8jAeqWB60kn.png",
      technologies: ["React", "CSS", "HTML", "Bootstrap", "JavaScript", "Logo Design"],
      client: "iMasters IT Services",
      year: "2023",
      duration: "4 weeks",
      overview:
        "This client project involved creating a complete portfolio website for iMasters, an IT services and consultancy company. The project included logo design, brand development, and a fully responsive website showcasing their IT support services, business solutions, and professional expertise.",
      overview_image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imasters_iPhone-h4VWtIuzZjFgGwckFJR8jAeqWB60kn.png",
      challenges:
        "Creating a professional online presence that effectively communicates technical expertise while remaining accessible to non-technical clients, and developing a responsive design that works across all devices and platforms.",
      solution:
        "Designed a clean, professional logo and built a comprehensive portfolio website using React and Bootstrap, featuring clear service descriptions, professional imagery, and responsive design optimized for both desktop and mobile users.",
      results:
        "Successfully delivered a professional website that effectively showcases iMasters' IT services and expertise, helping to establish their online presence and attract new business clients in the competitive IT services market.",
      features: [
        "Professional logo design and brand identity",
        "Responsive portfolio website built with React",
        "Comprehensive IT services presentation",
        "Mobile-optimized design with Bootstrap",
        "Professional business-focused content structure",
        "Clean, modern user interface design",
      ],
      gallery: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imasters_iPhone-h4VWtIuzZjFgGwckFJR8jAeqWB60kn.png",
      ],
      designImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imasters_iPhone-h4VWtIuzZjFgGwckFJR8jAeqWB60kn.png",
      ],
      designTitle: "iMasters - IT Services Portfolio Platform",
    },

    "insightcycle-brand-identity": {
      id: 8,
      title: "InsightCycle - Brand Identity & Graphic Manual",
      category: "Graphic Design",
      description:
        "Academic project: Complete brand identity development and comprehensive graphic manual for InsightCycle, featuring logo design, color systems, and professional brand guidelines.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/InsightCycles_Grafisk_manual-images-1.jpg-QWvCKk3utnzpEtcz1XAgMXACBPsbr8.jpeg",
      technologies: ["Adobe Illustrator", "InDesign", "Photoshop", "Brand Strategy", "Graphic Design"],
      client: "Academic Project - InsightCycle",
      year: "2023",
      duration: "5 weeks",
      overview:
        "This academic project focused on developing a complete brand identity for InsightCycle, a technology-focused feedback and analytics platform. The project involved creating a distinctive logo, comprehensive color system, and detailed graphic manual to ensure consistent brand application across all communications.",
      overview_image: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/InsightCycles_Grafisk_manual-images-1.jpg-QWvCKk3utnzpEtcz1XAgMXACBPsbr8.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/InsightCycles_Grafisk_manual-images-2.jpg-AVpr5nYoFkrmNEvceEf6rUeMaf0RRA.jpeg",
      ],
      challenges:
        "Creating a brand identity that effectively communicates technology and professionalism while developing a comprehensive graphic manual that ensures consistent brand application across various media and platforms.",
      solution:
        "Developed a sophisticated brand identity featuring a distinctive logo with modern typography, created a professional color palette with light beige, deep blue, gold, and dark blue tones, and produced a detailed graphic manual with clear usage guidelines.",
      results:
        "Successfully created a professional brand identity system that effectively positions InsightCycle as a modern, reliable technology platform, with comprehensive documentation ensuring consistent brand implementation.",
      features: [
        "Distinctive logo design with modern aesthetic",
        "Comprehensive color palette and usage guidelines",
        "Professional graphic manual with detailed specifications",
        "Technology-focused brand positioning",
        "Consistent visual identity system",
        "Professional documentation and brand standards",
      ],
      gallery: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/InsightCycles_Grafisk_manual-images-1.jpg-QWvCKk3utnzpEtcz1XAgMXACBPsbr8.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/InsightCycles_Grafisk_manual-images-2.jpg-AVpr5nYoFkrmNEvceEf6rUeMaf0RRA.jpeg",
      ],
      designImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/InsightCycles_Grafisk_manual-images-1.jpg-QWvCKk3utnzpEtcz1XAgMXACBPsbr8.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/InsightCycles_Grafisk_manual-images-2.jpg-AVpr5nYoFkrmNEvceEf6rUeMaf0RRA.jpeg",
      ],
      designTitle: "InsightCycle - Brand Identity & Graphic Manual",
    },

    "lilla-bryggeri-complete-brand": {
      id: 9,
      title: "Lilla Bryggeri - Complete Brand Identity & Marketing",
      category: "Graphic Design",
      description:
        "Academic project: Comprehensive brand development for Lilla Bryggeri including logo design, marketing materials, packaging design, website design, and complete graphic manual.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ZVQKzjVwEFEbFOSjttXoYj2Hb5b75u.png",
      technologies: ["Adobe Illustrator", "InDesign", "Photoshop", "Brand Strategy", "Packaging Design", "Web Design"],
      client: "Academic Project - Lilla Bryggeri Tällberg",
      year: "2023",
      duration: "8 weeks",
      overview:
        "This comprehensive academic project involved creating a complete brand identity for Lilla Bryggeri, a craft brewery in Tällberg. The project encompassed logo design, marketing materials, packaging design, website development, and a complete graphic manual, focusing on local heritage and craft brewing traditions.",
      overview_image: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ZVQKzjVwEFEbFOSjttXoYj2Hb5b75u.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fa%CC%88rger%20-%20fa%CC%88rgpalett-D9O2tbn4wCUuBU8jjU4jhx6tZiL6wn.png",
      ],
      challenges:
        "Creating a brand identity that honors local brewing traditions while appealing to modern craft beer enthusiasts, and developing a comprehensive brand system that works across packaging, digital, and marketing applications.",
      solution:
        "Developed a distinctive hand-lettered logo reflecting craft brewing heritage, created a color palette inspired by the Dalarna region, designed comprehensive packaging solutions, and produced marketing materials that celebrate local brewing traditions.",
      results:
        "Successfully created a complete brand ecosystem that positions Lilla Bryggeri as an authentic craft brewery rooted in local tradition, with comprehensive brand guidelines ensuring consistent application across all touchpoints.",
      features: [
        "Hand-lettered logo design reflecting craft brewing heritage",
        "Regional color palette inspired by Dalarna traditions",
        "Comprehensive packaging design for various beer products",
        "Complete marketing materials and promotional design",
        "Website design and digital brand applications",
        "Detailed graphic manual with brand guidelines",
        "Local heritage-focused brand positioning",
      ],
      gallery: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ZVQKzjVwEFEbFOSjttXoYj2Hb5b75u.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fa%CC%88rger%20-%20fa%CC%88rgpalett-D9O2tbn4wCUuBU8jjU4jhx6tZiL6wn.png",
      ],
      designImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ZVQKzjVwEFEbFOSjttXoYj2Hb5b75u.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fa%CC%88rger%20-%20fa%CC%88rgpalett-D9O2tbn4wCUuBU8jjU4jhx6tZiL6wn.png",
      ],
      designTitle: "Lilla Bryggeri - Complete Brand Identity System",
    },

    "pizza-mia-menu-design": {
      id: 10,
      title: "Pizza Mia - Restaurant Menu Design",
      category: "Graphic Design",
      description:
        "Client project: Professional pizza menu design for Pizza Mia restaurant featuring comprehensive food offerings, pricing, and appetizing visual presentation.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIZZA%20MIA-VzRaBFUqZvSFmKTuLtI3bYbahGX7eE.png",
      technologies: ["Adobe Illustrator", "Photoshop", "Print Design", "Menu Design"],
      client: "Pizza Mia Restaurant",
      year: "2023",
      duration: "2 weeks",
      overview:
        "This client project involved designing a comprehensive menu for Pizza Mia, a local pizza restaurant. The design needed to showcase their full range of pizzas, appetizers, and beverages while maintaining an appetizing visual appeal and clear pricing structure for easy customer navigation.",
      overview_image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIZZA%20MIA-VzRaBFUqZvSFmKTuLtI3bYbahGX7eE.png",
      challenges:
        "Creating an appetizing menu design that effectively organizes a large variety of food items while maintaining visual appeal and ensuring easy readability for customers in a restaurant setting.",
      solution:
        "Designed a comprehensive menu with clear categorization of items, appetizing food photography integration, professional typography, and organized pricing structure that enhances the dining experience.",
      results:
        "Delivered a professional menu design that effectively showcases Pizza Mia's offerings and has been successfully implemented in the restaurant, helping to improve customer experience and streamline ordering processes.",
      features: [
        "Comprehensive pizza and food item categorization",
        "Professional food photography integration",
        "Clear pricing structure and item descriptions",
        "Appetizing visual design and layout",
        "Easy-to-read typography and organization",
        "Print-ready restaurant menu specifications",
      ],
      gallery: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIZZA%20MIA-VzRaBFUqZvSFmKTuLtI3bYbahGX7eE.png"],
      designImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIZZA%20MIA-VzRaBFUqZvSFmKTuLtI3bYbahGX7eE.png",
      ],
      designTitle: "Pizza Mia - Professional Restaurant Menu",
    },

    "sweden-top-car-wordpress": {
      id: 11,
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
        "This client project involved creating a complete WordPress website and logo design for SwedenTopCar, an automotive services company. The project required developing a professional online presence that effectively showcases their automotive expertise and services while maintaining easy content management capabilities.",
      overview_image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-T0z6Dty6EkpdIsW8Sf2D8PvW6i5uZ9.png",
      challenges:
        "Creating a professional automotive website that effectively communicates expertise and reliability while ensuring easy content management for the client and optimal performance across all devices.",
      solution:
        "Developed a custom WordPress website with professional automotive branding, created a distinctive logo design, and implemented responsive design features that work seamlessly across desktop and mobile platforms.",
      results:
        "Successfully delivered a professional WordPress website that effectively represents SwedenTopCar's automotive services and provides an easy-to-manage platform for ongoing content updates and business growth.",
      features: [
        "Custom WordPress website development",
        "Professional automotive logo design",
        "Responsive design for all devices",
        "Easy content management system",
        "Professional automotive branding",
        "SEO-optimized website structure",
      ],
      gallery: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swedentopcar_pc-8ylmGlfKCxg1IETgUDcU7bklL2D8cM.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-T0z6Dty6EkpdIsW8Sf2D8PvW6i5uZ9.png",
      ],
      designImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swedentopcar_pc-8ylmGlfKCxg1IETgUDcU7bklL2D8cM.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-T0z6Dty6EkpdIsW8Sf2D8PvW6i5uZ9.png",
      ],
      designTitle: "SwedenTopCar - WordPress Website & Branding",
    },

    "matresa-food-magazine": {
      id: 12,
      title: "Matresa - Food Magazine Design",
      category: "Graphic Design",
      description:
        "Academic project: Complete food magazine design featuring culinary content, professional food photography layout, and comprehensive editorial design for Swedish food culture publication.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/khamel_abdalai_u2-images-1.jpg-uWZrqsCj2DCjJOX9EcEUfujqAABfbu.jpeg",
      technologies: ["Adobe InDesign", "Photoshop", "Editorial Design", "Typography", "Layout Design"],
      client: "Academic Project - Matresa Magazine",
      year: "2023",
      duration: "6 weeks",
      overview:
        "This academic project involved creating a complete food magazine called 'Matresa' focusing on Swedish and international culinary traditions. The project required developing editorial design skills, professional layout techniques, and creating engaging visual presentations of food content and recipes.",
      overview_image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/khamel_abdalai_u2-images-1.jpg-uWZrqsCj2DCjJOX9EcEUfujqAABfbu.jpeg",
      challenges:
        "Creating an engaging editorial design that effectively presents food content, recipes, and culinary stories while maintaining professional magazine standards and visual appeal throughout multiple pages and sections.",
      solution:
        "Developed a comprehensive magazine layout with professional food photography integration, created engaging typography systems, and designed clear content organization that enhances the reading experience and showcases culinary content effectively.",
      results:
        "Successfully created a professional food magazine that demonstrates advanced editorial design skills and comprehensive understanding of publication design, layout principles, and food content presentation.",
      features: [
        "Professional editorial design and layout",
        "Comprehensive food photography integration",
        "Engaging typography and content organization",
        "Multi-page magazine design and structure",
        "Swedish culinary content focus",
        "Professional publication design standards",
      ],
      gallery: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/khamel_abdalai_u2-images-1.jpg-uWZrqsCj2DCjJOX9EcEUfujqAABfbu.jpeg",
      ],
      designImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/khamel_abdalai_u2-images-1.jpg-uWZrqsCj2DCjJOX9EcEUfujqAABfbu.jpeg",
      ],
      designTitle: "Matresa - Swedish Food Magazine Design",
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
