import React from "react";
import "./style.css";

export default function Portfolio(props) {
  return (
    <div className="projectCardard">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <p className="card-title">{props.name}</p>
        <p class="proj-icons-container">
          <a href={props.github}>
            <img
              class="project-icon"
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="GitHub Repo"
            />
          </a>
          <a href={props.deploy}>
            <img
              class="project-icon"
              src="https://img.icons8.com/fluent/48/000000/domain.png"
              alt="Live Application"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
