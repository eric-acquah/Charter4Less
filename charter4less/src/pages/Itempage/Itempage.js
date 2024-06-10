import React from "react";
import ItemPageSection from "./ItemPageSection";
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/FooterComponent";

export default function Itempage() {
  const cardData = JSON.parse(sessionStorage.getItem("itemData"));

  console.log("Parent Item Data => ", cardData);

  return (
    <>
      <Header />
      <ItemPageSection itemData={cardData} />
      <Footer />
    </>
  );
}
