import { useState, createContext } from "react";


const RatingContext = createContext();

const RatingProvider = ({ children }) => {
  const [count, setCount] = useState(0);


  const handleStarClick = (starCount) => {
    setCount(starCount);
  }

  const value = { starCount: count, handleStarClick: handleStarClick };

  return (
    <RatingContext.Provider value={value}>
      {children}
    </RatingContext.Provider>
  );
}

export { RatingProvider, RatingContext };