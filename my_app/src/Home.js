import github from './image/github.png';
import linkedin from './image/linkedin.png';
import facebook from './image/facebook.png';
import './App.css';

function Intro() {
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
          <a href="#/project">
            <button class="rectangle-button">
              <p>Project</p>
            </button>
          </a>
          <a href="#/resume">
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
        <div class="experience-boxes">
          <div class="experience-box"> 
            <div class="front-job-detail">
              <h2 class="work-position">Research Assistant</h2>
              <h3 class="work-location">@USF</h3> 
            </div>
            <div class="job-detail">
              <p>Doing Research</p>
            </div>
          </div>
          <div class="experience-box">
            <div class="front-job-detail">
              <h2 class="work-position">Programming Instructor</h2>
              <h3 class="work-location">@BrightCHAMPS</h3>
            </div>
            <div class="job-detail">
              <p>Teaching kids how to code</p>
            </div>
          </div>
          <div class="experience-box">
            <div class="front-job-detail">
              <h2 class="work-position">Technical Leader</h2>
              <h3 class="work-location">@USFGDSC</h3>
            </div>
            <div class="job-detail">
              <p>Eboard member of GDSC</p>
            </div>
          </div>
          <div class="experience-box">
            <div class="front-job-detail">
              <h2 class="work-position">Software Engineer Intern</h2>
              <h3 class="work-location">@KIPEVietnam</h3>
            </div>
            <div class="job-detail">
              <p>Working on a project</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

function Skill() {
    return (
      <div>
        <h1>Skill</h1>
        <div class="skill-boxes">
          <div class="skill-box">
            <h2>Programming Language: C++, Java, Python, JavaScript</h2>
            <h2>Back-end: ExpressJS, Flask, Django, Postman</h2>
            <h2>Server: NodeJS, Apache, Socket, HTTP Server</h2>
            <h2>Database: MySQL, PostgreSQL, SQLite, MongoDB, Firebase</h2>
          </div>
        </div>
      </div>
    )
  }
  
  function Contact() {
    return (
      <div>
        <h1>Contact</h1>
        <div class="contact-boxes">
          <div class="contact-box">
            <h2>Phone: 813-647-3229</h2>
            <h2>Email: nguyenminhtam7124@gmail.com</h2>
          </div>
        </div>
      </div>
    )
  }

function Home() {
    return (
        <div>
            <Intro />
            <Experience />
            <Skill />
            <Contact />
        </div>
    );
}

export default Home;