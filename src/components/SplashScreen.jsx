import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onFinished }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinished, 1000); // Wait for fade out animation
    }, 2000); // Show splash screen for 2 seconds

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="splash-content">
        <div className="splash-logo-container">
          <div className="splash-logo">
            <span className="logo-letter">Y</span>
            <span className="logo-dot"></span>
            <span className="logo-letter">M</span>
          </div>
          <div className="logo-subtitle">Youssef Mahmoud</div>
        </div>
        <div className="splash-text">Fullstack .NET React Developer</div>
        <div className="splash-image">
          <img src="/Me.jpeg" alt="Youssef Mahmoud" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
