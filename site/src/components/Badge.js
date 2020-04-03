import React from "react";

const Badge = props => {
  return (
    <a
      href={props.link}
      className="badge"
      style={{
        animationDelay: `${Math.random() * 10 + 10}s`,
        animationDuration: `${Math.random() * 3 + 2}s`
      }}
    >
      <img src={props.img} alt={props.name} />
    </a>
  );
};

export default Badge;
