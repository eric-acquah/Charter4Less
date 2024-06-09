import React, { useEffect, useCallback, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import {v4 as uuidv4} from 'uuid';


export default function useAddItem({reset}) {

  const [itemData, setItemData] = useState({});
  const [imgIsUploaded, setImageIsUploaded] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [docAdded, setDocAdded] = useState(false);

  const uniq = uuidv4();


  // init();

  const uploadImages = useCallback(
    async (files) => {
      const imgPromises = [];
  
      files.forEach((img) => {
        const storageRef = ref(storage, `itemImages/${uniq}/${img.name}`);
        const uploadTask = uploadBytesResumable(storageRef, img);
        imgPromises.push(uploadTask);
      });
  
      try {
        console.log("Images uploading...");
        const snapshots = await Promise.all(imgPromises);
        const urlPromises = snapshots.map((snapshot) => getDownloadURL(snapshot.ref));
        console.log("Images uploaded");
        const imgUrls = await Promise.all(urlPromises);
        return imgUrls;
      } catch (error) {
        console.error("Error uploading images: ", error);
      }
  
    }, [uniq]
  )

  const uploadImage = useCallback(
    async (file) => {
      const storageRef = ref(storage, `itemImages/${uniq}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      try {
        const snapshot = await uploadTask; 
        console.log("Image uploading...");
        const url = await getDownloadURL(snapshot.ref)
        // setImageIsUploaded(true);
        console.log("Image uploaded");
        return url;
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }, [uniq]
  )

  const handleUpload = useCallback(
    async (data) => {
      console.log("Handle uploads called");
      setItemData(data);
      if (data.itemImage.length > 1) {
        const Imgfiles = Array.from(data.itemImage);
         const imgurls = await uploadImages(Imgfiles);
         setItemData(prevData => ({...prevData, itemImage: imgurls}))
        } else {
          console.log("Image upload started");
        const imgUrl = await uploadImage(data.itemImage[0]);      
        setItemData(prevData => ({...prevData, itemImage: [imgUrl]}))         
        }
  }, [uploadImages, uploadImage]
  )

  // Save data to Firestore
  useEffect(() => {
    if(formSubmitted && imgIsUploaded){
        (async () => {
          try {
            console.log("item data update: ", itemData);
            await setDoc(doc(db, "items", `${itemData.itemName}-${uniq.slice(0, 13)}`), itemData);
          } catch (error) {
            console.error("Error adding document: ", error);
          }
        })();

        console.log("Data saved to Firestore");
        setFormSubmitted(false);
        setImageIsUploaded(false);
        reset();
        setDocAdded(true);
    }

  }, [itemData, formSubmitted, imgIsUploaded, uniq, reset])

  return {formSubmitted, setFormSubmitted, setImageIsUploaded, docAdded, handleUpload, setItemData};
}