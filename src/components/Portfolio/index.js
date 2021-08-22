import React from "react";
import "./style.css";
import ProjectCard from "../ProjectCard";
import portfolio from "../../portfolio.json";



export default function Portfolio() {
  
  function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
  }
  return (
    <div className="portfolio container">
      <div className="project">
        <h2 className="top-title">Bootcamp Portfolio</h2>
        <hr></hr>
      </div>

      <Wrapper id="card-data">
        {portfolio.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            name={project.name}
            github={project.github}
            deploy={project.deploy}
            description={project.description}
          />
        ))}
      </Wrapper>
    </div>
  );
}
