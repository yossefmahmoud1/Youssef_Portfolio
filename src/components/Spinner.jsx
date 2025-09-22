import React from "react";
import "./Spinner.css";

const Spinner = ({
  size = 40,
  color = "var(--primary)",
  thickness = 3,
  fullScreen = false,
  label = "Loading...",
  className = "",
}) => {
  const circleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderWidth: `${thickness}px`,
    borderTopColor: color,
  };

  const content = (
    <div
      className={`spinner ${className}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="spinner-circle" style={circleStyle} />
      {label ? (
        <span className="spinner-label" aria-label={label}>
          {label}
        </span>
      ) : null}
    </div>
  );

  if (fullScreen) {
    return <div className="spinner-overlay">{content}</div>;
  }

  return content;
};

export default Spinner;
