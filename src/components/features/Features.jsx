import React from "react";
import "./feature.css";

const Features = ({ title, text }) => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">{title}</h1>
      <p>{text}</p>
    </div>
  </div>
);

export default Features;
