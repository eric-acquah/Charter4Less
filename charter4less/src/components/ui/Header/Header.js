import React from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
import './header.css';
import Pagetitle from "../Pagetitle/Pagetitle";

export default function Header() {
  return (
    <header>
      <NavbarComponent />
      <Pagetitle />
    </header>
  );
}