import React from "react";
import "./style.css";
import javaScript from "./icons/javascript.png"
import github from "./icons/github.png"
import mongodb from "./icons/mongodb.png"
import mysql from "./icons/mysql.png"
import nodejs from "./icons/node-js.png"
import npm from "./icons/npm.png"
import react from "./icons/react.png"
import sequelize from "./icons/sequelize.png"
import vscode from "./icons/vscode.png"

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
            href="https://docs.google.com/document/d/1MXrsMslngyBgMnJ4di7mb5vPUq_RmxF8pUVntZRNrvw/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            View My Resume
          </a>
        </div>
      </div>

      <div className="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            <img className="icon" alt="js icon"src={javaScript}/>
            <img className="icon" alt="mongodb icon"src={mongodb}/>
            <img className="icon" alt="mysql icon"src={mysql}/>
            <img className="icon" alt="nodejs icon"src={nodejs}/>
            <img className="icon" alt="npm icon"src={npm}/>
            <img className="icon" alt="react icon"src={react}/>
            <img className="icon" alt="sequelize icon"src={sequelize}/>
            <img className="icon" alt="github icon"src={github}/>
            <img className="icon" alt="vscode icon"src={vscode}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}