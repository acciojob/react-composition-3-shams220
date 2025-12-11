import React, { useState } from "react";
import "./tooltip.css";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <span className={`tooltiptext ${visible ? "show" : ""}`}>
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
