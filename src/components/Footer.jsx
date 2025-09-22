import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = ({ currentLanguage }) => {
  const translations = {
    en: {
      footer: {
        rights: "All rights reserved.",
        made_with: "Made with ❤️ using React & .NET",
        quick_links: "Quick Links",
        connect: "Connect",
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        email: "Email",
      },
    },
    ar: {
      footer: {
        rights: "جميع الحقوق محفوظة.",
        made_with: "صُنع بـ ❤️ باستخدام React و .NET",
        quick_links: "روابط سريعة",
        connect: "تواصل معي",
        home: "الرئيسية",
        about: "عنّي",
        projects: "المشاريع",
        skills: "المهارات",
        contact: "تواصل معي",
        email: "البريد الإلكتروني",
      },
    },
  };

  const t = translations[currentLanguage] || translations.en;

  return (
    <footer
      className="footer"
      dir={currentLanguage === "ar" ? "rtl" : "ltr"}
      data-dir={currentLanguage === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Footer Grid */}
          <div className="footer-grid">
            {/* Brand Section */}
            <motion.div
              className="footer-brand-section"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="brand-name gradient-text">
                {[
                  "Y",
                  "o",
                  "u",
                  "s",
                  "s",
                  "e",
                  "f",
                  " ",
                  "M",
                  "a",
                  "h",
                  "m",
                  "o",
                  "u",
                  "d",
                ].map((letter, index) => (
                  <motion.span
                    key={index}
                    className={`animated-letter ${
                      letter === " " ? "space-letter" : ""
                    }`}
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.2,
                      textShadow: "0 0 15px currentColor",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h3>
              <p className="brand-description">
                Youssef Mahmoud — Full-Stack .NET & React Developer | Crafting
                scalable apps with modern tech.
              </p>
            </motion.div>

            {/* Quick Links Section */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="section-title">{t.footer.quick_links}</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#hero">{t.footer.home}</a>
                </li>
                <li>
                  <a href="#about">{t.footer.about}</a>
                </li>
                <li>
                  <a href="#skills">{t.footer.skills}</a>
                </li>
                <li>
                  <a href="#projects">{t.footer.projects}</a>
                </li>
                <li>
                  <a href="#contact">{t.footer.contact}</a>
                </li>
              </ul>
            </motion.div>

            {/* Connect Section */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="section-title">{t.footer.connect}</h4>
              <div className="social-icons">
                <a
                  href="https://github.com/yossefmahmoud1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/youssef-mahmoud-14b0022a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:omaryosef136@gmail.com"
                  className="social-icon-link"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">&copy; 2025 Youssef. {t.footer.rights}</p>
            <p className="built-with">Built with React & Tailwind CSS</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
