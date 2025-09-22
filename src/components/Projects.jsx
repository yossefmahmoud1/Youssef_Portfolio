import React, { useEffect, useState } from "react";
import "./Projects.css";

const Projects = ({ currentLanguage }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [expandedProjects, setExpandedProjects] = useState(new Set());

  const projects = [
    // Backend projects first
    {
      id: "ecommerce-api",
      title: "E-Commerce API",
      description:
        "Production-ready ASP.NET Core API built on Onion Architecture with product catalog, shopping cart (Redis), order processing, JWT authentication, and secure payment integration.",
      category: "backend",
      image: "/BackEnd/E-CommorceApi.png",
      technologies: [
        "ASP.NET Core",
        "Onion Architecture",
        "Entity Framework Core",
        "SQL Server",
        "Redis",
        "JWT",
        "Swagger",
      ],
      github: "https://github.com/yossefmahmoud1/E-CommorceApi",
      demo: null,
    },
    {
      id: "outvedia-mvc",
      title: "Outvedia (E-Commerce MVC)",
      description:
        "ASP.NET Core MVC e-commerce web application with product management, authentication, authorization, and payment integration.",
      category: "backend",
      image: "/BackEnd/Outvedia.png",
      technologies: [
        ".NET Core MVC",
        "Entity Framework Core",
        "SQL Server",
        "Identity",
        "Bootstrap",
      ],
      github: "https://github.com/yossefmahmoud1/Outvedia",
      demo: "https://lnkd.in/p/dNHdSNsv",
    },
    // Frontend projects
    {
      id: "disney-clone",
      title: "Disney+ Clone",
      description:
        "Disney+ inspired web app built with React and TMDB API. Users can search movies, view details, add films to watchlist, register, log in, and log out with secure authentication.",
      category: "frontend",
      image: "/FrontEnd/DisneyClone.png",
      technologies: [
        "React.js",
        "TMDB API",
        "Tailwind CSS",
        "React Router",
        "Context API",
        "Authentication",
      ],
      github: "https://github.com/yossefmahmoud1/Disney-clone",
      demo: null,
    },
    {
      id: "admin-dashboard",
      title: "Admin Dashboard",
      description:
        "Interactive admin dashboard built with React for managing team data, invoices, contacts, and reports. Includes dynamic charts, recent transactions, profile forms, and a responsive design.",
      category: "frontend",
      image: "/FrontEnd/Dashboard.png",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Recharts",
        "React Router",
        "Material UI",
        "React Icons",
      ],
      github: "https://github.com/yossefmahmoud1/DashBoard",
      demo: "https://dashboard659.netlify.app/",
    },
    {
      id: "terpoo-store",
      title: "Terpoo Store",
      description:
        "Full-featured e-commerce web application with an admin dashboard for product management, filtering & sorting, and a smooth shopping experience. Built with React and integrated with a backend API for real-time data handling.",
      category: "frontend",
      image: "/FrontEnd/TerpooStore.png",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "React Router",
        "RESTful API",
        "Axios",
        "EmailJS",
        "Carousel",
      ],
      github: "https://github.com/yossefmahmoud1/TerpooStore",
      demo: null,
    },
    {
      id: "social-app",
      title: "Social Media App",
      description:
        "Full-featured social media platform built with React, TypeScript, and Supabase. Users can create posts, join communities, comment, vote, and sign in securely with Google OAuth. Includes responsive design, real-time sync, and a scalable PostgreSQL schema.",
      category: "frontend",
      image: "/FrontEnd/SocialApp.png",
      technologies: [
        "React 19",
        "Vite 6",
        "Tailwind CSS 4",
        "TypeScript",
        "React Query",
        "Redux Toolkit",
        "Zustand",
        "Supabase",
        "PostgreSQL",
        "Formik",
        "Yup",
      ],
      github: "https://github.com/yossefmahmoud1/Social-App",
      demo: "https://lnkd.in/dWM4s2M5",
    },
    // Fullstack projects
    {
      id: "task-manager",
      title: "Task Management App",
      description:
        "Full-stack task management application with real-time updates and team collaboration features",
      category: "fullstack",
      image: "/projects/task-manager.png",
      technologies: ["React", ".NET Core", "SignalR", "PostgreSQL"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://task-manager-demo.com",
    },
  ];

  const translations = {
    en: {
      projects: {
        title: "My Projects",
        subtitle: "A showcase of my recent work",
        frontend: {
          title: "Frontend Projects",
          subtitle: "React & Modern Web Applications",
        },
        backend: {
          title: "Backend Projects",
          subtitle: ".NET Core APIs & Services",
        },
        all: "All Projects",
        view_demo: "View Demo",
        view_code: "View Code",
        show_more: "Show More",
        show_less: "Show Less",
        read_more: "Read More",
        read_less: "Read Less",
      },
    },
    ar: {
      projects: {
        title: "مشاريعي",
        subtitle: "عرض لأحدث أعمالي",
        frontend: {
          title: "مشاريع الواجهة الأمامية",
          subtitle: "React وتطبيقات الويب الحديثة",
        },
        backend: {
          title: "مشاريع الخادم",
          subtitle: "APIs وخدمات .NET Core",
        },
        all: "جميع المشاريع",
        view_demo: "عرض تجريبي",
        view_code: "عرض الكود",
        show_more: "عرض المزيد",
        show_less: "عرض أقل",
        read_more: "اقرأ المزيد",
        read_less: "اقرأ أقل",
      },
    },
  };

  const t = translations[currentLanguage] || translations.en;

  const categories = [
    { key: "all", label: t.projects.all },
    { key: "frontend", label: t.projects.frontend.title },
    { key: "backend", label: t.projects.backend.title },
    { key: "fullstack", label: "Fullstack" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true;
    return project.category === selectedCategory;
  });

  // Detect mobile to set initial visible items
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handleChange = (e) => {
      setIsMobile(e.matches);
    };
    setIsMobile(mql.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  // Base visible items depends on viewport
  const baseVisible = isMobile ? 4 : 6;

  // Ensure visibleCount is at least baseVisible and resets on category change or viewport change
  useEffect(() => {
    setVisibleCount(baseVisible);
  }, [selectedCategory, baseVisible]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = filteredProjects.length > visibleCount;

  // Function to truncate description
  const truncateDescription = (description, maxLength = 120) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + "...";
  };

  // Function to toggle project description
  const toggleProjectDescription = (projectKey) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectKey)) {
      newExpanded.delete(projectKey);
    } else {
      newExpanded.add(projectKey);
    }
    setExpandedProjects(newExpanded);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>

        {/* Category Filter */}
        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${
                selectedCategory === category.key ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {displayedProjects.map((project) => {
            const projectKey = project.id || project.title;
            const isExpanded = expandedProjects.has(projectKey);
            const shouldShowReadMore = project.description.length > 120;

            return (
              <div
                key={projectKey}
                className="project-card"
                data-category={project.category}
              >
                <div className="project-image">
                  {project.image ? (
                    <>
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <span className="project-category">
                          {project.category}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="project-placeholder">
                      <div className="project-overlay">
                        <span className="project-category">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">
                    {isExpanded
                      ? project.description
                      : truncateDescription(project.description)}
                  </p>
                  {shouldShowReadMore && (
                    <button
                      className="read-more-btn"
                      onClick={() => toggleProjectDescription(projectKey)}
                    >
                      {isExpanded ? t.projects.read_less : t.projects.read_more}
                    </button>
                  )}
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="btn btn-primary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.projects.view_demo}
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="btn btn-secondary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.projects.view_code}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {hasMoreProjects && (
          <div className="show-more-container">
            <button
              className="btn btn-outline"
              onClick={() => setVisibleCount((c) => c + (isMobile ? 4 : 6))}
            >
              {t.projects.show_more}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
