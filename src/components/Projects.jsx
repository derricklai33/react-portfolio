import React from 'react';
import '../styles/projects.scss'

export function Projects() {
  return(
    <div className="page-divs" id="projects">
      <h1>Featured Projects</h1>
      <div className="project-wrapper">
        <div className="project-card">
          <h3>Tight20s</h3>
          <p>React-Rails Web Application</p>
        </div>
        <div className="project-card">
          <h3>CoderFitz</h3>
          <p>Ruby on Rails CRUD Web Application</p>
        </div>
        <div className="project-card">
          <h3>What are we having tonight?</h3>
          <p>Ruby CLI Application</p>
        </div>
      </div>
    </div>
  )
}