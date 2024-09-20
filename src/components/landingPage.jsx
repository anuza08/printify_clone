import React from "react";
import { landingPageStyle } from "../styles/styles";

const LandingPage = () => {
  const styles = landingPageStyle();

  return (
    <div style={styles.container}>
      <div style={{ flex: 1.5 }}>
        <h3 style={{ color: "black", fontSize: "3.5rem", margin: 0 }}>
          Create and sell custom products
        </h3>
        <div style={styles.mainTxt}>
          <ul style={{ color: "gray" }}>
            <li>100% Free to use</li>
            <li>900+ High-Quality Products</li>
            <li>Largest global print network</li>
          </ul>
        </div>
        <div style={{ gap: "5px" }}>
          <button style={styles.btn}>Start for free</button>
          <button style={styles.btn2}>How it works</button>
        </div>
        <p style={styles.subTxt}>Trusted by over 8M sellers around the world</p>
      </div>
      <img
        src="/assets/gif1.gif"
        alt="Custom Products"
        style={styles.gifStyle}
      />
    </div>
  );
};

export default LandingPage;
