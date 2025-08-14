import React from "react";

const CommonTitle = ({ first, second, position }) => {
  return (
    <div style={{textAlign: position}}>
      <h1 className="common-title">
        {first} <span>{second}</span>
      </h1>
    </div>
  );
};

export default CommonTitle;
