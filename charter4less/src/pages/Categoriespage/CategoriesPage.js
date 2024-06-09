import React from "react";
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/FooterComponent";
import CategoriesMain from "./CategoriesMain";

import ImgPlaceholder from "../../assets/images/explore-image.jpeg";
import ImgPlaceholder1 from "../../assets/images/thumbnail-1.jpg";
// import ItemCardComponent from "../../components/ui/ItemCardComponent";

// import useRetrieveItems from "../../hooks/useRetrieveItems";
import useSessionStore from "../../hooks/useSessionStore";

// const cardData1 = [
//   {ownerFirstName: "Kwame", ownerRating: 14, type: "tools", title: "Something X900 Pro-Max | Dark Gray", location: "Kumasi", price: 20, imgList: [ImgPlaceholder, ImgPlaceholder1]},
//   {ownerFirstName: "Kofi", ownerRating: 12, type: "tools", title: "Otherthing 200 Pro-Max", location: "Kumasi", price: 10, imgList: [ImgPlaceholder]},
//   {ownerFirstName: "Adjoa", ownerRating: 8, type: "tools", title: "Thing", location: "Accra", price: 15, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Kojo", ownerRating: 140, type: "equipment", title: "Xtra Super Maximum Thing XX MAX GREEN | BLACK | WHITE", location: "Tema", price: 700, imgList: [ImgPlaceholder1, ImgPlaceholder, ImgPlaceholder1, ImgPlaceholder1, ImgPlaceholder]},
//   {ownerFirstName: "Fifi", ownerRating: 2, type: "equipment", title: "Simple Thing X", location: "Accra", price: 1, imgList: [ImgPlaceholder1, ImgPlaceholder1]},
//   {ownerFirstName: "Kwame", ownerRating: 14, type: "utensils", title: "Something X900 Pro-Max | Dark Gray", location: "Kumasi", price: 20, imgList: [ImgPlaceholder, ImgPlaceholder1]},
//   {ownerFirstName: "Kofi", ownerRating: 12, type: "vehicles", title: "Otherthing 200 Pro-Max", location: "Kumasi", price: 10, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Adjoa", ownerRating: 8, type: "utensils", title: "Thing", location: "Accra", price: 15, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Kojo", ownerRating: 140, type: "vehicles", title: "Xtra Super Maximum Thing XX MAX GREEN | BLACK | WHITE", location: "Tema", price: 700, imgList: [ImgPlaceholder1, ImgPlaceholder, ImgPlaceholder1, ImgPlaceholder1, ImgPlaceholder]},
//   {ownerFirstName: "Fifi", ownerRating: 2, type: "spaces", title: "Simple Thing X", location: "Accra", price: 1, imgList: [ImgPlaceholder1, ImgPlaceholder1]},
//   {ownerFirstName: "Kwame", ownerRating: 14, type: "vehicles", title: "Something X900 Pro-Max | Dark Gray", location: "Kumasi", price: 20, imgList: [ImgPlaceholder, ImgPlaceholder1]},
//   {ownerFirstName: "Kofi", ownerRating: 12, type: "spaces", title: "Otherthing 200 Pro-Max", location: "Kumasi", price: 10, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Adjoa", ownerRating: 8, type: "electronics", title: "Thing", location: "Accra", price: 15, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Kojo", ownerRating: 140, type: "electronics", title: "Xtra Super Maximum Thing XX MAX GREEN | BLACK | WHITE", location: "Tema", price: 700, imgList: [ImgPlaceholder1, ImgPlaceholder, ImgPlaceholder1, ImgPlaceholder1, ImgPlaceholder]},
//   {ownerFirstName: "Fifi", ownerRating: 2, type: "electronics", title: "Simple Thing X", location: "Accra", price: 1, imgList: [ImgPlaceholder1, ImgPlaceholder1]},
//   {ownerFirstName: "Kwame", ownerRating: 14, type: "apparel & accessories", title: "Something X900 Pro-Max | Dark Gray", location: "Kumasi", price: 20, imgList: [ImgPlaceholder, ImgPlaceholder1]},
//   {ownerFirstName: "Kofi", ownerRating: 12, type: "apparel & accessories", title: "Otherthing 200 Pro-Max", location: "Kumasi", price: 10, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Adjoa", ownerRating: 8, type: "apparel & accessories", title: "Thing", location: "Accra", price: 15, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Kojo", ownerRating: 140, type: "apparel & accessories", title: "Xtra Super Maximum Thing XX MAX GREEN | BLACK | WHITE", location: "Tema", price: 700, imgList: [ImgPlaceholder1, ImgPlaceholder, ImgPlaceholder1, ImgPlaceholder1, ImgPlaceholder]},
//   {ownerFirstName: "Fifi", ownerRating: 2, type: "event & party supplies", title: "Simple Thing X", location: "Accra", price: 1, imgList: [ImgPlaceholder, ImgPlaceholder1]},
//   {ownerFirstName: "Kwame", ownerRating: 14, type: "tools", title: "Something X900 Pro-Max | Dark Gray", location: "Kumasi", price: 20, imgList: [ImgPlaceholder, ImgPlaceholder1]},
//   {ownerFirstName: "Kofi", ownerRating: 12, type: "tools", title: "Otherthing 200 Pro-Max", location: "Kumasi", price: 10, imgList: [ImgPlaceholder]},
//   {ownerFirstName: "Adjoa", ownerRating: 8, type: "tools", title: "Thing", location: "Accra", price: 15, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Kojo", ownerRating: 140, type: "equipment", title: "Xtra Super Maximum Thing XX MAX GREEN | BLACK | WHITE", location: "Tema", price: 700, imgList: [ImgPlaceholder1, ImgPlaceholder, ImgPlaceholder1, ImgPlaceholder1, ImgPlaceholder]},
//   {ownerFirstName: "Fifi", ownerRating: 2, type: "equipment", title: "Simple Thing X", location: "Accra", price: 1, imgList: [ImgPlaceholder1, ImgPlaceholder1]},
//   {ownerFirstName: "Kwame", ownerRating: 14, type: "utensils", title: "Something X900 Pro-Max | Dark Gray", location: "Kumasi", price: 20, imgList: [ImgPlaceholder, ImgPlaceholder1]},
//   {ownerFirstName: "Kofi", ownerRating: 12, type: "vehicles", title: "Otherthing 200 Pro-Max", location: "Kumasi", price: 10, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Adjoa", ownerRating: 8, type: "utensils", title: "Thing", location: "Accra", price: 15, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Kojo", ownerRating: 140, type: "vehicles", title: "Xtra Super Maximum Thing XX MAX GREEN | BLACK | WHITE", location: "Tema", price: 700, imgList: [ImgPlaceholder1, ImgPlaceholder, ImgPlaceholder1, ImgPlaceholder1, ImgPlaceholder]},
//   {ownerFirstName: "Fifi", ownerRating: 2, type: "spaces", title: "Simple Thing X", location: "Accra", price: 1, imgList: [ImgPlaceholder1, ImgPlaceholder1]},
//   {ownerFirstName: "Kwame", ownerRating: 14, type: "vehicles", title: "Something X900 Pro-Max | Dark Gray", location: "Kumasi", price: 20, imgList: [ImgPlaceholder, ImgPlaceholder1]},
//   {ownerFirstName: "Kofi", ownerRating: 12, type: "spaces", title: "Otherthing 200 Pro-Max", location: "Kumasi", price: 10, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Adjoa", ownerRating: 8, type: "electronics", title: "Thing", location: "Accra", price: 15, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Kojo", ownerRating: 140, type: "electronics", title: "Xtra Super Maximum Thing XX MAX GREEN | BLACK | WHITE", location: "Tema", price: 700, imgList: [ImgPlaceholder1, ImgPlaceholder, ImgPlaceholder1, ImgPlaceholder1, ImgPlaceholder]},
//   {ownerFirstName: "Fifi", ownerRating: 2, type: "electronics", title: "Simple Thing X", location: "Accra", price: 1, imgList: [ImgPlaceholder1, ImgPlaceholder1]},
//   {ownerFirstName: "Kwame", ownerRating: 14, type: "apparel & accessories", title: "Something X900 Pro-Max | Dark Gray", location: "Kumasi", price: 20, imgList: [ImgPlaceholder, ImgPlaceholder1]},
//   {ownerFirstName: "Kofi", ownerRating: 12, type: "apparel & accessories", title: "Otherthing 200 Pro-Max", location: "Kumasi", price: 10, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Adjoa", ownerRating: 8, type: "apparel & accessories", title: "Thing", location: "Accra", price: 15, imgList: [ImgPlaceholder1]},
//   {ownerFirstName: "Kojo", ownerRating: 140, type: "apparel & accessories", title: "Xtra Super Maximum Thing XX MAX GREEN | BLACK | WHITE", location: "Tema", price: 700, imgList: [ImgPlaceholder1, ImgPlaceholder, ImgPlaceholder1, ImgPlaceholder1, ImgPlaceholder]},
//   {ownerFirstName: "Fifi", ownerRating: 2, type: "event & party supplies", title: "Simple Thing X", location: "Accra", price: 1, imgList: [ImgPlaceholder, ImgPlaceholder1]},
// ]


export default function CategoriesPage() {

  const {session} = useSessionStore(); /*Retrieve data from sessionStorage*/

  return (
    <>
      <Header />
      <CategoriesMain cardData={session} />
      <Footer />
    </>
  )
}