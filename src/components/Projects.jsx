import React from 'react';
import '../styles/projects.scss'
import CoderFitz from '../docs/coderfitz-img.jpg'
import Portfolio from '../docs/portfolio-img.jpg'
import Terminal from '../docs/terminal-img.jpg'
import Tight20s from '../docs/tight20s-img.jpg'
import TryScorer from '../docs/tryscorer-img.jpg'
import Optimiser from '../docs/optimiser-img.jpg'

export function Projects() {

  const Hover = ({ onHover, children }) => (
    <div className="hover">
        <div className="hover__no-hover">{children}</div>
        <div className="hover__hover">{onHover}</div>
    </div>
  )

  return(
    <>
    <div className="project-placeholder-div" id="projects"></div>
    <div className="page-divs">
      <h1>Featured Projects</h1>
      <div className="project-wrapper">
        <div className="project-card">
          <Hover onHover={
          <div className="project-img-hover">
            <ul>
            <h2>Tech Stack</h2> 
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>Javascript</li>
              <li>AWS</li>   
            </ul>
          </div>}>
          <div className="project-img">
            <img src={TryScorer} alt="tryscorer-img" height="300px" width="400px"></img>
          </div>
          </Hover>
          <h3 className="project-title">Try Scorer (Sport Tech Daily)</h3>
          <p>MERN stack + AWS Web Application</p>
          <a href="https://edge.sporttechdaily.com/nrl/tryscorers">Link</a>
        </div>
        <div className="project-card">
        <Hover onHover={
          <div className="project-img-hover">
            <ul>
            <h2>Tech Stack</h2> 
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>Javascript</li>
              <li>Python (child process)</li>
              <li>AWS</li>   
            </ul>
          </div>}>
          <div className="project-img">
            <img src={Optimiser} alt="optimiser-img" height="300px" width="400px"></img>
          </div>
          </Hover>
          <h3 className="project-title">NRL Fantasy Team Optimiser (Sport Tech Daily)</h3>
          <p>MERN stack + Python + AWS Web Application</p>
          <p>Currently Private</p>
        </div>
        <div className="project-card">
        <Hover onHover={
          <div className="project-img-hover">
            <ul>
            <h2>Tech Stack</h2> 
              <li>React</li>
              <li>Ruby on Rails</li>
              <li>React-dnd</li>
              <li>Cypress</li>
              <li>Material-UI</li>
              <li>Auth0</li>
              <li>Heroku & Netlify</li>
            </ul>
          </div>}>
          <div className="project-img">
            <img src={Tight20s} alt="tight20s-img" height="300px" width="400px"></img>
          </div>
          </Hover>
          <h3 className="project-title">Tight20s</h3>
          <p>React-Rails Web Application</p>
          <a href="https://github.com/derricklai33/T3A2-Budget-Tracker">Link</a>
        </div>
        <div className="project-card">
        <Hover onHover={
          <div className="project-img-hover">
            <ul>
            <h2>Tech Stack</h2> 
              <li>Ruby on Rails</li>
              <li>Javascript</li>   
              <li>AWS S3</li>
              <li>Bootstrap</li>
              <li>Heroku</li>
            </ul>
          </div>}>
          <div className="project-img">
            <img src={CoderFitz} alt="coderfitz-img" height="300px" width="400px"></img>
          </div>
          </Hover>
          <h3 className="project-title">CoderFitz</h3>
          <p>Ruby on Rails CRUD Web Application</p>
          <a href="https://github.com/derricklai33/T3A2-Budget-Tracker">Link</a>
        </div>
        <div className="project-card">
        <Hover onHover={
          <div className="project-img-hover">
            <ul>
            <h2>Tech Stack</h2> 
              <li>Ruby</li>
              <li>CLI</li>
              <li>AWS</li>   
            </ul>
          </div>}>
          <div className="project-img">
            <img src={Terminal} alt="terminal-img" height="300px" width="400px"></img>
          </div>
          </Hover>
          <h3 className="project-title">What are we having tonight?</h3>
          <p>CLI application that generates a random choice for restaurant using Zomato API</p>
          <a href="https://github.com/derricklai33/T3A2-Budget-Tracker">Link</a>
        </div>
        <div className="project-card">
        <Hover onHover={
          <div className="project-img-hover">
            <ul>
            <h2>Tech Stack</h2> 
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>   
            </ul>
          </div>}>
          <div className="project-img">
            <img src={Portfolio} alt="portfolio-img" height="300px" width="400px"></img>
          </div>
          </Hover>
          <h3 className="project-title">Portfolio 1.0</h3>
          <p>Initial version of my portfolio</p>
          <a href="https://github.com/derricklai33/T3A2-Budget-Tracker">Link</a>
        </div>
      </div>
    </div>
    </>
  )
}