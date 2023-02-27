import './App.css';
import React from 'react';
import github from './image/github.png';
import linkedin from './image/linkedin.png';
import facebook from './image/facebook.png';

// create a header component
function Header() {
  return (
    <div>
      <h1>Tam Nguyen</h1>
      <h2>Full-stack Developer</h2>
      
      <div class="button">
          <a href="https://github.com/ball2004244" target="_blank" rel="noopener noreferrer">
            <button class="circle-button">
              <img src={github} alt="GitHub Logo"/>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/tam-nguyen-cs/" target="_blank" rel="noopener noreferrer">          
            <button class="circle-button">
              <img src={linkedin} alt="LinkedIn Logo"/>
            </button>
          </a>
          <a href="https://www.facebook.com/tamnmnk" target="_blank" rel="noopener noreferrer">
            <button class="circle-button">
              <img src={facebook} alt="Facebook Logo"/>
            </button>
          </a>
      </div>

      <div class="button">
        <a href="/project">
          <button class="rectangle-button">
            <p>Project</p>
          </button>
        </a>
        <a href="/resume">
          <button class="rectangle-button">
            <p>Resume</p>
          </button>
        </a>
      </div>
    </div>
  );
}
function Experience() {
  return ( 
    <div>
      <h1>Experience</h1>
      <div class="experience-box">
        <div class="experience"> 
          <h2 class="work-position">Research Assistant</h2>
          <h3 class="work-location">@USF</h3> 
          <p class="job-detail">Doing Research</p>
        </div>
        <div class="experience">
          <h2 class="work-position">Programming Instructor</h2>
          <h3 class="work-location">@BrightCHAMPS</h3>
          <p class="job-detail">Teaching kids how to code</p>
        </div>
        <div class="experience">
          <h2 class="work-position">Technical Leader</h2>
          <h3 class="work-location">@USFGDSC</h3>
          <p class="job-detail">Eboard member of GDSC</p>
        </div>
        <div class="experience">
          <h2 class="work-position">Software Engineer Intern</h2>
          <h3 class="work-location">@KIPEVietnam</h3>
          <p class="job-detail">Working on a project</p>
        </div>
      </div>
    </div>
  )
}
// create a footer component
function Footer() {
  return (
    <div id="footer">
      <p>Created by @Tam Nguyen</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
