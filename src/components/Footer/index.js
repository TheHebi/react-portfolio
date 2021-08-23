import React from 'react';
import './style.css';

export default function Footer() {

  return (
      <footer className="footer bg-dark fixed-bottom">
        <a href="https://github.com/TheHebi" target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
        <a href="https://www.linkedin.com/in/nathanielturcotte/" target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
        <a href="mailto: nturcotte8@live.com" target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/color/48/000000/email.png" alt="Email" className="icon"/></a>
    </footer>
  );
}