import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
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
          <div className="footer-main">
            <motion.div
              className="footer-brand"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="footer-logo">Y•M</span>
              <div className="footer-info">
                <span className="footer-name">Youssef Mahmoud</span>
                <p className="footer-tagline">Fullstack .NET React Developer</p>
              </div>
            </motion.div>
          </div>

          <div className="footer-links">
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>{t.footer.quick_links}</h4>
              <ul>
                <li>
                  <a href="#hero">
                    <FaHome className="icon" /> {t.footer.home}
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <FaUser className="icon" /> {t.footer.about}
                  </a>
                </li>
                <li>
                  <a href="#projects">
                    <FaProjectDiagram className="icon" /> {t.footer.projects}
                  </a>
                </li>
                <li>
                  <a href="#skills">
                    <FaTools className="icon" /> {t.footer.skills}
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <FaEnvelope className="icon" /> {t.footer.contact}
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="footer-section"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>{t.footer.connect}</h4>
              <ul className="contact-list">
                <li>
                  <FaPhoneAlt className="icon" />
                  <a href="tel:+201149177542">01149177542</a>
                </li>
                <li>
                  <FaEnvelope className="icon" />
                  <a href="mailto:omaryosef136@gmail.com">
                    omaryosef136@gmail.com
                  </a>
                </li>
              </ul>
              <div className="social-links">
                <a
                  href="https://github.com/yossefmahmoud1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub className="social-icon" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/youssef-mahmoud-14b0022a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="social-icon" /> LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Newsletter removed as requested */}
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 Youssef Mahmoud. {t.footer.rights}</p>
          <p className="made-with">{t.footer.made_with}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
