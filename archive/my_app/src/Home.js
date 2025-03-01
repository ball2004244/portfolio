import "./App.css";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Intro() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const introEffect = {
    initial: { y: -100 },
    transition: { type: 'spring', duration: 1.5 },
  };

  if (inView) {
    console.log("Intro in view");
    introEffect.animate = { y: 0};
  };

  return (
    <motion.div class="intro-screen" ref={ref} {...introEffect}>
      <h1>Tam Nguyen</h1>
      <h2>Full-stack Developer</h2>

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
    </motion.div>
  );
}

function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const experienceEffect = {
    initial: { y: 100 },
    transition: { type: 'spring', duration: 1.5 },
  };

  if (inView) {
    console.log("Experience in view");
    experienceEffect.animate = { y: 0};
  };

  return (
    <motion.div class="experience-screen" ref={ref} {...experienceEffect}>
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
    </motion.div>
  );
}

function Skill() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const skillEffect = {
    initial: { y: 100 },
    transition: { type: 'spring', duration: 1.5 },
  };

  if (inView) {
    console.log("Skill in view");
    skillEffect.animate = { y: 0};
  };

  return (
    <motion.div class="skill-screen" ref={ref} {...skillEffect}>
      <h1>Skill</h1>
      <div class="skill-boxes">
        <div class="skill-box">
          <h2>Programming Language: C++, Java, Python, JavaScript</h2>
          <h2>Back-end: ExpressJS, Flask, Django, Postman</h2>
          <h2>Server: NodeJS, Apache, Socket, HTTP Server</h2>
          <h2>Database: MySQL, PostgreSQL, SQLite, MongoDB, Firebase</h2>
        </div>
      </div>
    </motion.div>
  );
}

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const contactEffect = {
    initial: { y: 100 },
    transition: { type: 'spring', duration: 1.5 },
  };

  if (inView) {
    console.log("Contact in view");
    contactEffect.animate = { y: 0 };
  };

  return (
    <motion.div class="contact-screen" ref={ref} {...contactEffect}>
      <h1>Contact</h1>
      <div class="contact-boxes">
        <div class="contact-box">
          <h2>Phone: 813-647-3229</h2>
          <h2>Email: nguyenminhtam7124@gmail.com</h2>
        </div>
      </div>
    </motion.div>
  );
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
