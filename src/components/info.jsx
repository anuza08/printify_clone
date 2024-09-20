import React from "react";

const Info = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        padding: "6vh 6%",
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
        margin: 0,
        backgroundColor: "#F5F5F5",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
          width: "30%",
        }}
      >
        <img
          src="/assets/higher-profits.svg"
          alt="Robust Scaling"
          style={{ width: "100px", height: "auto", gap: "20px" }}
        />
        <div>
          <h4
            style={{
              margin: 0,
              color: "#FF4E88",
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Higher Profits
          </h4>
          <p style={{ margin: 0, textAlign: "center", color: "gray" }}>
            Easily handle peak holiday seasons, with our wide network of
            partners and automatic routing functionality.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
          width: "30%",
        }}
      >
        <img
          src="/assets/best-selection.svg"
          alt="Robust Scaling"
          style={{ width: "100px", height: "auto", gap: "20px" }}
        />
        <div>
          <h4
            style={{
              margin: 0,
              color: "#FF4E88",
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Robust Scaling
          </h4>
          <p style={{ margin: 0, textAlign: "center", color: "gray" }}>
            Easily handle peak holiday seasons, with our wide network of
            partners and automatic routing functionality.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
          width: "30%",
        }}
      >
        <img
          src="/assets/robust-scaling.svg"
          alt="Best Selection"
          style={{ width: "100px", height: "auto" }}
        />
        <div>
          <h4
            style={{
              margin: 0,
              color: "#FF4E88",
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Best Selection
          </h4>
          <p style={{ margin: 0, textAlign: "center", color: "gray" }}>
            With 900+ products and top quality brands, you can choose the best
            products for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
