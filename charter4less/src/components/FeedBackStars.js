import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as Rastar } from "@fortawesome/free-regular-svg-icons";
import { RatingContext } from "../context/RatingContext";

import "./FeedBackStars.css";


const FeedBackStars = () => {
  const { starCount, handleStarClick } = useContext(RatingContext);

  console.log("count in feedback stars", starCount)
  // handleStarCount(count);

  return (
    <div className="rate-stars-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesomeIcon className="rate-stars"
            key={star}
            icon={Rastar}
            onClick={() => handleStarClick(star)}
            style={{ color: star <= starCount ? "gold" : "gray", cursor: "pointer" }}
          />
        ))}
      </div>
  );
};

export default FeedBackStars;