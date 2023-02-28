import React from 'react';
import resume from './material/Resume.pdf';
function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div className="resume-file">
        <embed src={resume} type="application/pdf" width="100%" height="1000px"/>
      </div>
    </div>
  );
}

export default Resume;