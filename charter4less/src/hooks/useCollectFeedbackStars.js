import React, { useState, useEffect } from "react";


const useCollectFeedbackStars = ({count}) => {
  const [starCount, setStarCount] = useState(count);

  const handleStarCount = (star) => {
    setStarCount(star);
  };

  useEffect(() => {
    handleStarCount(count);
  }, [count]);

  console.log("count in collector: ", starCount);

  return {starCount, handleStarCount};
}

export default useCollectFeedbackStars;