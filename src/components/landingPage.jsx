import React from "react";

const LandingPage = () => {
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5vh 3%",
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div style={{ flex: 1.5 }}>
        <h3 style={{ color: "black", fontSize: "3.5rem", margin: 0 }}>
          Create and sell custom products
        </h3>
        <div style={{ marginTop: "50px", fontSize: "1.5rem" }}>
          <ul style={{ color: "gray" }}>
            <li>100% Free to use</li>
            <li>900+ High-Quality Products</li>
            <li>Largest global print network</li>
          </ul>
          
        </div>
        <div style={{ gap: "5px" }}>
          <button
            style={{
              margin: "10px",
              backgroundColor: "#FF4E88",
              color: "white",
              height: "5vh",
              border: "none",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            Start for free
          </button>
          <button
            style={{
              margin: "10px",
              backgroundColor: "white",
              color: "#FF4E88",
              height: "5vh",
              border: "2px solid #FF4E88",
              borderColor: "#FF4E88",
              borderRadius: "5px",
              fontWeight: "bold",
              transition: "background-color 0.3s, color 0.3s",
              cursor: "pointer",
            }}
          >
            How it works
          </button>
        </div>
        <p style={{ fontWeight: "bold", color: "#FF4E88", fontSize: "18px" }}>
          Trusted by over 8M sellers around the world
        </p>
      </div>
      <img
        src="/assets/gif1.gif"
        alt="Custom Products"
        style={{ width: "40%", height: "auto", margin: "5px" }}
      />
    </div>
  );
};

export default LandingPage;
