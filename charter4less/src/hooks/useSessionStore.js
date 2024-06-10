import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


const useSessionStore = () => {
  const [session, setSession] = useState(null);
  const [sessionEmpty, setSessionEmpty] = useState(false); /*Keeps track of sessionStorage*/


  
  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem("session"));
    if (sessionData) {
      setSession(sessionData);
    } else {
      // Retrieve items from firestore
      const retrieveItems = async () => {
        try {
          console.log("useEffect called");
          const itemsCollection = collection(db, "items");
          const querySnapshot = await getDocs(itemsCollection);
          const parsedItems = querySnapshot.docs.map((doc) => doc.data());
          console.log("useEffect called with data: ", parsedItems);
          sessionStorage.setItem("session", JSON.stringify(parsedItems));
        } catch (err) {
          console.log("Error retrieving items: ", err);
        }
      };
  
      retrieveItems();
    }
  }, [sessionEmpty]); /*Triggers useEffect to re-render component whenever sessionStorage is null*/

  // Set session data
  const setSessionData = (data) => {
    setSession(data);
    sessionStorage.setItem("session", JSON.stringify(data));
    if (session === null) { 
      setSessionEmpty(true);
    }
  };


  return { session, setSessionData };
}

export default useSessionStore;