import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { translations } from "./data/translations";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [currentTheme, setCurrentTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Load user preferences
    const savedTheme = localStorage.getItem("portfolio-theme");
    const savedLanguage = localStorage.getItem("portfolio-language");

    if (savedTheme) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setCurrentTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }

    // Get browser language
    const browserLang = navigator.language.split("-")[0];

    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    } else if (translations[browserLang]) {
      setCurrentLanguage(browserLang);
    }

    // Set RTL for Arabic
    if (savedLanguage === "ar" || browserLang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute(
        "lang",
        savedLanguage || browserLang
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };

  const changeLanguage = (language) => {
    if (!translations[language]) return;

    setCurrentLanguage(language);
    localStorage.setItem("portfolio-language", language);

    // Set RTL for Arabic
    if (language === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", language);
    }

    setIsMenuOpen(false); // Close mobile menu after language change
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onFinished={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar
            currentLanguage={currentLanguage}
            currentTheme={currentTheme}
            isMenuOpen={isMenuOpen}
            onLanguageChange={changeLanguage}
            onThemeToggle={toggleTheme}
            onMenuToggle={toggleMobileMenu}
            onMenuClose={closeMobileMenu}
          />
          <main>
            <Hero currentLanguage={currentLanguage} />
            <About currentLanguage={currentLanguage} />
            <Projects currentLanguage={currentLanguage} />
            <Skills currentLanguage={currentLanguage} />
            <Contact currentLanguage={currentLanguage} />
          </main>
          <Footer currentLanguage={currentLanguage} />
        </>
      )}
    </div>
  );
}

export default App;
