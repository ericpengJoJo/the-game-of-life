import React from "react";

const CenteredContainer = ({ children }) => {
  const containerStyle = {
    display: "grid",
    placeItems: "center",
    backgroundColor: "#FDFBD4",
    width: "100vw",
    height: "100vh",
  };

  return <div style={containerStyle}>{children}</div>;
};

export default CenteredContainer;
