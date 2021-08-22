import React from "react";
import "./style.css";

export default function Resume() {
  return (
    <div className="resume">
        <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div className="mt-5">
          <h2 className="top-title">Nathaniel Turcotte</h2>
          <ul>
            <li>
              Core competencies in full-stack web development, data management, and data integrations.
            </li>
          </ul>

          <a
            href="https://drive.google.com/file/d/1e60riNU5kRTHItjVVWq3uIcI1eL2ww1T/view?usp=sharing" 
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            Javascript, Node.js, Express.js, Sequelize, MYSQL, APIs, React.js
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}