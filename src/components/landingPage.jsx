import React, { useState, useEffect } from "react";
import { landingPageStyle } from "../styles/styles";

const LandingPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = landingPageStyle(screenWidth);

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h3 style={styles.heading}>Create and sell custom products</h3>
        <div style={styles.mainTxt}>
          <ul style={styles.ulStyle}>
            <li style={styles.liTxt}>100% Free to use</li>
            <li style={styles.liTxt}>900+ High-Quality Products</li>
            <li style={styles.liTxt}>Largest global print network</li>
          </ul>
        </div>
        <div style={styles.btnContainer}>
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
