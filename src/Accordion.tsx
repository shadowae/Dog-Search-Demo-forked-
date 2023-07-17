import React, { useState } from "react";
import "./Accordion.css";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="accordion-title-text">{title}</div>
        <div className="accordion-title-icon">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
