import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the CSS for the carousel

const Reviews = () => {
  return (
    <>
      <div style={{ padding: "100px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: "80px",
          }}
        >
          <div style={{ width: "30%" }}>
            <h3 style={{ color: "black", fontSize: "3.5rem", margin: 0 }}>
              Create and sell custom products
            </h3>
          </div>
          <p style={{ fontSize: "1.5rem", color: "gray", width: "50%" }}>
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </p>
        </div>

        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img
              src="/assets/img1.jpg"
              alt="Slide 1"
              style={{ height: "50%", width: "50%" }}
            />
            <div style={{ padding: "20px", textAlign: "left" }}>
              <p
                className="review-text"
                style={{ fontSize: "18px", textAlign: "center" }}
              >
                "This product is amazing! It has changed my life for the
                better."
              </p>
              <p
                className="customer-name"
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  color: "#FF4E88",
                  textAlign: "center",
                }}
              >
                - John Doe
              </p>
            </div>
          </div>

          <div>
            <img
              src="/assets/img2.jpg"
              alt="Slide 2"
              style={{ height: "50%", width: "50%" }}
            />
            <div style={{ padding: "20px", textAlign: "left" }}>
              <p
                className="review-text"
                style={{ fontSize: "18px", textAlign: "center" }}
              >
                "I highly recommend this service. Excellent quality and fast
                delivery!"
              </p>
              <p
                className="customer-name"
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  color: "#FF4E88",
                  textAlign: "center",
                }}
              >
                - Jane Smith
              </p>
            </div>
          </div>

          <div>
            <img
              src="/assets/img3.jpg"
              alt="Slide 3"
              style={{ height: "50%", width: "50%" }}
            />
            <div style={{ padding: "20px", textAlign: "left" }}>
              <p
                className="review-text"
                style={{ fontSize: "18px", textAlign: "center" }}
              >
                "Best purchase I've made in a long time. Great value for the
                price."
              </p>
              <p
                className="customer-name"
                style={{
                  textAlign: "center",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  color: "#FF4E88",
                }}
              >
                - Sarah Brown
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Reviews;
