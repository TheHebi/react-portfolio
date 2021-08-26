import React from 'react';
import './style.css';
import img from './headshot.png' 

export default function About() {

  return (
    <div className="about container">
        <h2 className="top-title">Nathaniel Turcotte</h2>
            <hr></hr>
            <div>
                <img className="mb-5" id="avatar" src={img} alt="nathaniel-turcotte" />

                <p>
                My name is Nathaniel Turcotte, and I am an aspiring developer learning the world of coding. 
                </p>
                <p>
                After almost a decade of working dead-end jobs, I decided it was time to take control over my trajectory in life. It was time to learn a skill I could use to make myself more valuable as an employee, so I decided to learn how to write code.
                </p>
                <p>
                I enrolled in the UW Coding Bootcamp from June 14th, 2021 to September 7, 2021.
                </p>
                <p>
                Winner of the "Best Presentation" and "People's Choice" awards for project 2 in the course.
                </p>
            </div>
    </div>
  );
}
