import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion"; // eslint-disable-line no-unused-vars
import "./About.css";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}+</span>;
};

const About = ({ currentLanguage }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const translations = {
    en: {
      about: {
        title: "About Me",
        subtitle: "Get to know me better",
        description1:
          "Hi! I'm Youssef Mahmoud, a passionate Fullstack Developer specializing in .NET and React.",
        description2:
          "With expertise in both backend and frontend development, I create comprehensive web solutions that are scalable, maintainable, and user-friendly.",
        description3:
          "I love working with modern technologies and am always eager to learn new frameworks and tools.",
        description4:
          "Whether it's building robust APIs with .NET Core or creating interactive user interfaces with React, I'm committed to delivering high-quality solutions that meet business requirements.",
        years_experience: "Years Experience",
        projects_completed: "Projects Completed",
        technologies_mastered: "Technologies Mastered",
      },
    },
    ar: {
      about: {
        title: "عنّي",
        subtitle: "تعرف عليّ أكثر",
        description1:
          "مرحباً! أنا يوسف محمود، مطور Fullstack متخصص في .NET و React.",
        description2:
          "مع خبرة في تطوير الخادم والواجهة الأمامية، أنشئ حلول ويب شاملة قابلة للتوسع وقابلة للصيانة وسهلة الاستخدام.",
        description3:
          "أحب العمل مع التقنيات الحديثة وأتطلع دائماً لتعلم أطر عمل وأدوات جديدة.",
        description4:
          "سواء كان بناء APIs قوية مع .NET Core أو إنشاء واجهات مستخدم تفاعلية مع React، أنا ملتزم بتقديم حلول عالية الجودة تلبي متطلبات العمل.",
        years_experience: "سنوات خبرة",
        projects_completed: "مشروع مكتمل",
        technologies_mastered: "تقنية متقنة",
      },
    },
  };

  const t = translations[currentLanguage] || translations.en;

  return (
    <motion.section
      id="about"
      className="about"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="profile-image">
              <motion.img
                src="/Me.jpeg"
                alt="Youssef Mahmoud - Fullstack Developer"
                className="profile-photo"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {t.about.description1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {t.about.description2}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {t.about.description3}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {t.about.description4}
            </motion.p>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              role="region"
              aria-label="Professional Statistics"
            >
              <motion.div
                className="stat"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                role="article"
                aria-label={`${t.about.years_experience}: 3+`}
                tabIndex={0}
              >
                <span className="stat-number" aria-hidden="true">
                  <AnimatedCounter end={3} duration={2} />
                </span>
                <span className="stat-label">{t.about.years_experience}</span>
              </motion.div>
              <motion.div
                className="stat"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 1.3 }}
                whileHover={{ scale: 1.05 }}
                role="article"
                aria-label={`${t.about.projects_completed}: 15+`}
                tabIndex={0}
              >
                <span className="stat-number" aria-hidden="true">
                  <AnimatedCounter end={15} duration={2.5} />
                </span>
                <span className="stat-label">{t.about.projects_completed}</span>
              </motion.div>
              <motion.div
                className="stat"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                role="article"
                aria-label={`${t.about.technologies_mastered}: 8+`}
                tabIndex={0}
              >
                <span className="stat-number" aria-hidden="true">
                  <AnimatedCounter end={8} duration={2.2} />
                </span>
                <span className="stat-label">
                  {t.about.technologies_mastered}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
