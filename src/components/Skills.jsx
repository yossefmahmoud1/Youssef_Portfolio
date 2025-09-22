import React from "react";
import { FaReact, FaServer, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = ({ currentLanguage }) => {
  const translations = {
    en: {
      skills: {
        title: "Skills & Technologies",
        subtitle: "Technologies I work with",
        frontend: {
          title: "Frontend Development",
          subtitle: "Modern UI/UX Technologies",
        },
        backend: {
          title: "Backend Development",
          subtitle: "Server-side Technologies",
        },
        tools: {
          title: "Tools & DevOps",
          subtitle: "Development & Deployment",
        },
      },
    },
    ar: {
      skills: {
        title: "المهارات والتقنيات",
        subtitle: "التقنيات التي أعمل بها",
        frontend: {
          title: "تطوير الواجهة الأمامية",
          subtitle: "تقنيات UI/UX الحديثة",
        },
        backend: {
          title: "تطوير الخادم",
          subtitle: "تقنيات جانب الخادم",
        },
        tools: {
          title: "الأدوات و DevOps",
          subtitle: "التطوير والنشر",
        },
      },
    },
  };

  const t = translations[currentLanguage] || translations.en;

  const skillsData = {
    frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material-UI",
      "Redux",
      "Next.js",
      "Vue.js",
      "SASS/SCSS",
      "Responsive Design",
    ],
    backend: [
      ".NET Core",
      "C#",
      "ASP.NET Web API",
      "Entity Framework",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "SignalR",
      "JWT Authentication",
      "RESTful APIs",
      "GraphQL",
    ],
    tools: [
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "Azure",
      "AWS",
      "Visual Studio",
      "VS Code",
      "Postman",
      "Swagger",
      "CI/CD",
      "Agile/Scrum",
    ],
  };

  const gridVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 22, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.22 } },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
        </div>

        <motion.div
          className="skills-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Frontend Skills */}
          <motion.div
            className="skill-category frontend"
            variants={cardVariants}
            whileHover={{ y: -6, rotateX: 1, rotateY: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="category-header">
              <div className="category-icon">
                <FaReact />
              </div>
              <h3 className="category-title">{t.skills.frontend.title}</h3>
              <p className="category-subtitle">{t.skills.frontend.subtitle}</p>
            </div>
            <div className="skills-list">
              {skillsData.frontend.map((skill, index) => (
                <motion.span
                  key={index}
                  className="skill-tag frontend-tag"
                  variants={tagVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            className="skill-category backend"
            variants={cardVariants}
            whileHover={{ y: -6, rotateX: 1, rotateY: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="category-header">
              <div className="category-icon">
                <FaServer />
              </div>
              <h3 className="category-title">{t.skills.backend.title}</h3>
              <p className="category-subtitle">{t.skills.backend.subtitle}</p>
            </div>
            <div className="skills-list">
              {skillsData.backend.map((skill, index) => (
                <motion.span
                  key={index}
                  className="skill-tag backend-tag"
                  variants={tagVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools & DevOps */}
          <motion.div
            className="skill-category tools"
            variants={cardVariants}
            whileHover={{ y: -6, rotateX: 1, rotateY: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="category-header">
              <div className="category-icon">
                <FaTools />
              </div>
              <h3 className="category-title">{t.skills.tools.title}</h3>
              <p className="category-subtitle">{t.skills.tools.subtitle}</p>
            </div>
            <div className="skills-list">
              {skillsData.tools.map((skill, index) => (
                <motion.span
                  key={index}
                  className="skill-tag tools-tag"
                  variants={tagVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
