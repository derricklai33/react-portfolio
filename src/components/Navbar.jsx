import React from 'react';
import '../styles/navbar.scss'

export function Navbar() {
  return(
    <>
    <nav className="navbar">
        <li><a href={"#home"}>Home</a></li>
        <li><a href={"#projects"}>Projects</a></li>
        <li><a href={"#contact"}>Contact</a></li>
        <li><a href={"https://drive.google.com/file/d/1es2M0ZuzWcr_aI0JafJB5LLMdZAbG7L8/view?usp=sharing"} target="_blank" rel="noreferrer">Resume</a></li>
    </nav>
    </>
  );
}