import React from "react";
import { getInfoStyles } from "../styles/styles";

const Info = () => {
  const styles = getInfoStyles();
  return (
    <div style={styles.container}>
      <div style={styles.imgSection}>
        <img
          src="/assets/higher-profits.svg"
          alt="Robust Scaling"
          style={styles.imgStyle}
        />
        <div>
          <h4 style={styles.txt}>Higher Profits</h4>
          <p style={styles.subTxt}>
            Easily handle peak holiday seasons, with our wide network of
            partners and automatic routing functionality.
          </p>
        </div>
      </div>

      <div style={styles.imgSection}>
        <img
          src="/assets/best-selection.svg"
          alt="Robust Scaling"
          style={styles.imgStyle}
        />
        <div>
          <h4 style={styles.txt}>Robust Scaling</h4>
          <p style={styles.subTxt}>
            Easily handle peak holiday seasons, with our wide network of
            partners and automatic routing functionality.
          </p>
        </div>
      </div>

      <div style={styles.imgSection}>
        <img
          src="/assets/robust-scaling.svg"
          alt="Best Selection"
          style={styles.imgStyle}
        />
        <div>
          <h4 style={styles.txt}>Best Selection</h4>
          <p style={styles.subTxt}>
            With 900+ products and top quality brands, you can choose the best
            products for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
