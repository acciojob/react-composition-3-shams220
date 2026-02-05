import React, { useState } from "react";
import "./tooltip.css";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
  <div>
      <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children[0]}
      {visible && <div className="tooltiptext">{text[0]}</div>}
    </div>
    <div>
       <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children[1]}
      {visible && <div className="tooltiptext">{text[1]}</div>}
    </div>
    </div>
  </div>
  );
};

export default Tooltip;
