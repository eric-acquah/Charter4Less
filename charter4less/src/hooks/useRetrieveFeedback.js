import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


const useRetrieveFeedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const feedbackCollection = JSON.parse(sessionStorage.getItem("feedback"));

    if(feedbackCollection) {
      setFeedback(feedbackCollection);
    } else {
      const fetchFeedback = async () => {
        const feedbackCollection = collection(db, "feedback");
        const feedbackSnapshot = await getDocs(feedbackCollection);
        const feedbackData = feedbackSnapshot.docs.map((doc) => doc.data());
        setFeedback(feedbackData);
        sessionStorage.setItem("feedback", JSON.stringify(feedbackData));
      };

      fetchFeedback();
    }
  }, [isEmpty]);


  const setFeedbackData = (data) => {
    sessionStorage.setItem("feedback", JSON.stringify(data));
    const feedbackInStore = sessionStorage.getItem("feedback");
    if (feedbackInStore === null) {
      setIsEmpty(true);
    }
  };

  return {feedback, setFeedbackData};
};

export default useRetrieveFeedback;