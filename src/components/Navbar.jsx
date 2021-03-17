import React from "react";
import "../styles/navbar.scss";

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <li>
          <a href={"#home"}>Home</a>
        </li>
        <li>
          <a href={"#projects"}>Projects</a>
        </li>
        <li>
          <a href={"#contact"}>Contact</a>
        </li>
        <li>
          <a
            href={
              "https://drive.google.com/file/d/13oARNAT3dgLFqXs54lYDqBpYprRxWNCJ/view?usp=sharing"
            }
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </nav>
    </>
  );
}
