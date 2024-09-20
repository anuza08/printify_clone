import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getReviewStyles } from "../styles/styles";
import { reviewsData } from "../constants";

const Reviews = () => {
  const styles = getReviewStyles();

  return (
    <div style={styles.ctn}>
      <div style={styles.txtContainer}>
        <h3 style={styles.mainTxt}>Create and sell custom products</h3>
        <p style={styles.subTxt}>
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
        {reviewsData.map((review, index) => (
          <div key={index}>
            <img
              src={review.img}
              alt={`Slide ${index + 1}`}
              style={styles.imgStyle}
            />
            <div style={{ padding: "20px" }}>
              <p style={styles.reviewTxt}>"{review.text}"</p>
              <p style={styles.userName}>- {review.name}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
