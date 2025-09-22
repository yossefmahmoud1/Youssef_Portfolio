import React from "react";
import "./Hero.css";

const Hero = ({ currentLanguage }) => {
  const translations = {
    en: {
      hero: {
        greeting: "Hi, I'm Youssef –",
        tagline: "Fullstack .NET React Developer",
        subtitle:
          "Building modern web applications with .NET backend and React frontend expertise.",
        download_cv: "Download My CV",
        get_in_touch: "Get In Touch",
      },
    },
    ar: {
      hero: {
        greeting: "مرحباً، أنا يوسف –",
        tagline: "مطور Fullstack .NET React",
        subtitle:
          "أبني تطبيقات ويب حديثة بخبرة في .NET للخادم و React للواجهة الأمامية.",
        download_cv: "تحميل السيرة الذاتية",
        get_in_touch: "تواصل معي",
      },
    },
  };

  const t = translations[currentLanguage] || translations.en;

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">{t.hero.greeting}</span>
            <span className="gradient-text">{t.hero.tagline}</span>
          </h1>

          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <div className="hero-actions">
            <a
              href="/CV.pdf"
              download="Youssef_Mahmoud_CV.pdf"
              className="btn btn-primary"
            >
              {t.hero.download_cv}
            </a>
            <a href="#contact" className="btn btn-secondary">
              {t.hero.get_in_touch}
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-container">
            <div className="profile-image-wrapper">
              <img
                src="/Me.jpeg"
                alt="Youssef Mahmoud"
                className="hero-profile-image"
              />
              <div className="image-glow"></div>
            </div>
            <div className="code-visualization">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control close"></span>
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                  </div>
                  <div className="window-title">portfolio.js</div>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="line-number">1</span>
                    <span className="code-text">
                      <span className="keyword">const</span>
                      <span className="variable"> developer</span>
                      <span className="operator"> = </span>
                      <span className="operator">{"{"}</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">2</span>
                    <span className="code-text">
                      &nbsp;&nbsp;<span className="property">name</span>
                      <span className="operator">:</span>
                      <span className="string">"Youssef Mahmoud"</span>
                      <span className="operator">,</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">3</span>
                    <span className="code-text">
                      &nbsp;&nbsp;<span className="property">role</span>
                      <span className="operator">:</span>
                      <span className="string">"Fullstack Developer"</span>
                      <span className="operator">,</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">4</span>
                    <span className="code-text">
                      &nbsp;&nbsp;<span className="property">stack</span>
                      <span className="operator">:</span>
                      <span className="string">".NET & React"</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">5</span>
                    <span className="code-text">
                      <span className="operator">{"}"}</span>;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
