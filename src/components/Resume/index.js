import React from "react";
import "./style.css";

export default function Resume() {
  return (
    <div className="resume">
        <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Nathaniel Turcotte</h2>
          <ul>
            <li>
              Core competencies in enterpirse content management, full-stack web
              development, data architecture, and managing integrations.
            </li>
          </ul>

          <a
            href="https://drive.google.com/file/d/1e60riNU5kRTHItjVVWq3uIcI1eL2ww1T/view?usp=sharing" target="_blank"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
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