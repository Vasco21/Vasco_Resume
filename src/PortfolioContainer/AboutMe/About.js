

import React from 'react';
import './About.css';
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import Footerog from '../Footerpg/Footerpg'
import Header from '../Home/Header/Header'
import Portfolio from '../../assets/Home/me.jpg';

export default function About() {
  return (
    <div>
    <div className="about-main">
      <Header/>
    <div className="about">
      <div className="about-me">
       <h1>About Me</h1>
       <p>Why Choose Me?</p>
       <div className="underline"></div>
      </div>
        <div className="about-container">
            <div className="about-img"> 
              <img src={Portfolio} alt="" />
            </div> 
            <div className="flex">
            <p>I am a hard-working recent college graduate (Certificates) from Project Codex and Google Developer. 
                During the course of my academic career, I also managed to accrue nearly 2 years of 
                work experience in Full Stack Software Developer. 
                I had the privilege of working for Institute of Mine Seismology in a seismic waves 
                ,control and conduct seismic tests to find and record sound waves from energy sources under 
                the earth's surface role, for 7 years.
                I learned valuable professional skills such as agile full stack developer and full stack software developer.
                In both my academic and professional life, I have been consistently praised as quality-oriented by my professors and peers. 
                Whether working on academic, extracurricular, or professional projects, 
                I apply proven communication, creative thinking and language skills.
              </p>
              <h3>Here are a Few and highlights</h3>
              <p>2+ year and 6 months exprience in Web Developement</p>
              <p>JavaScript Developer</p>
              <p>React js Developer</p>
              <p>Building Rest API</p>
              <p>Angular.js Developer</p>
            </div> 
        </div>
    </div>
    <div className="flexCalend">
      <div className="project-heading">
      <h1>
        Days I <strong className="orange">Code</strong>
      </h1>
      </div>
    <Row  className="project-heading" style={{ justifyContent: "center", paddingBottom: "10px"}}>
      <GitHubCalendar
        username="Vasco21"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </Row>
    </div>
  </div>
    <Footerog/>
  </div>
  )
}