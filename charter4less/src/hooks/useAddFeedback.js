import { useCallback, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";


const useAddFeedback = ({reset, handleStarClick, setFeedbackData}) => {
  const [isSubmitted, setIsSubmitted] = useState(false); //
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addFeedback = useCallback(async (feedbackData) => {
    setLoading(true);
    setError(null);

    try {
      // Create a new document in the "feedback" collectiond 
      await addDoc(collection(db, "feedback"), feedbackData);
      // await setDoc(docRef, feedbackData);

      setLoading(false);
      reset();
      handleStarClick(0);
      setFeedbackData(null);
      setIsSubmitted(true)
    } catch (err) {
      console.log(err);
      setError(err);
      setLoading(false);
    }
  }, [reset, handleStarClick, setFeedbackData]);

  return { loading, error, addFeedback, isSubmitted, setIsSubmitted };
};

export default useAddFeedback;