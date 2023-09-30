import React, { useState } from "react";
import '../asset/css/Navbar.css';
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import XMlogo from '../asset/images/XMlogo.jpg';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
     <div className="Navbar">
                   <div>
                     <img src={XMlogo} alt='' />
                   </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Service</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/contact">Portfolio</a>
        <a href="/contact">Job</a>
        <Button variant='contained'>Contact</Button>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    </Container>
  );
};

export default Navbar;