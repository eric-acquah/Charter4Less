import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const useRetrieveItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const retrieveItems = async () => {
      try {
        console.log("useEffect called");
        const itemsCollection = collection(db, "items");
        const querySnapshot = await getDocs(itemsCollection);
        const parsedItems = querySnapshot.docs.map((doc) => doc.data());
        console.log("useEffect called with data: ", parsedItems);
        setItems(parsedItems);
      } catch (err) {
        console.log("Error retrieving items: ", err);
      }
    };

    retrieveItems();
  }, []);

  return items;
};

export default useRetrieveItems;
