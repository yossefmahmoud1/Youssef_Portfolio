import React from "react";
import "./Navbar.css";
import Logo from "/Logo.png";

const Navbar = ({
  currentLanguage,
  currentTheme,
  isMenuOpen,
  onLanguageChange,
  onThemeToggle,
  onMenuToggle,
  onMenuClose,
}) => {
  const translations = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
      },
    },
    ar: {
      nav: {
        home: "الرئيسية",
        about: "عنّي",
        projects: "المشاريع",
        skills: "المهارات",
        contact: "تواصل معي",
      },
    },
  };

  const t = translations[currentLanguage] || translations.en;

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-brand">
          <div className="nav-logo">
            <span className="nav-logo-letter">Y</span>
            <span className="nav-logo-dot"></span>
            <span className="nav-logo-letter">M</span>
          </div>
        </div>

        <div className="nav-controls">
          {/* Language Switcher */}
          <div className="language-switcher">
            <button
              className={`lang-btn ${currentLanguage === "en" ? "active" : ""}`}
              onClick={() => onLanguageChange("en")}
            >
              EN
            </button>
            <button
              className={`lang-btn ${currentLanguage === "ar" ? "active" : ""}`}
              onClick={() => onLanguageChange("ar")}
            >
              AR
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label="Toggle theme"
          >
            <i
              className={`theme-icon ${
                currentTheme === "light" ? "sun-icon" : "moon-icon"
              }`}
            >
              {currentTheme === "light" ? "☀️" : "🌙"}
            </i>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            <span className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
        <a href="#hero" onClick={onMenuClose}>
          {t.nav.home}
        </a>
        <a href="#about" onClick={onMenuClose}>
          {t.nav.about}
        </a>
        <a href="#projects" onClick={onMenuClose}>
          {t.nav.projects}
        </a>
        <a href="#skills" onClick={onMenuClose}>
          {t.nav.skills}
        </a>
        <a href="#contact" onClick={onMenuClose}>
          {t.nav.contact}
        </a>

        {/* Mobile Language Switcher */}
        <div className="mobile-language-switcher">
          <button
            className={`mobile-lang-btn ${
              currentLanguage === "en" ? "active" : ""
            }`}
            onClick={() => onLanguageChange("en")}
          >
            English
          </button>
          <button
            className={`mobile-lang-btn ${
              currentLanguage === "ar" ? "active" : ""
            }`}
            onClick={() => onLanguageChange("ar")}
          >
            العربية
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
