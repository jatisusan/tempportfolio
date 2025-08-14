import React from "react";

const CommonTitle = ({ first, second, position, color }) => {
  return (
    <div style={{ textAlign: position }}>
      <h1 className="common-title">
        {first}{" "}
        <span style={{ color: color, borderBottom: "5px solid {color}" }}>
          {second}
        </span>
      </h1>
    </div>
  );
};

export default CommonTitle;
