import "./App.css";
import github from "./image/github.png";
import linkedin from "./image/linkedin.png";
import facebook from "./image/facebook.png";

export default function Footer() {
  return (
    <div className="App-footer">
      <p>Created by @Tam Nguyen</p>
      {/* <div class="button">
        <a
          href="https://github.com/ball2004244"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="circle-button">
            <img src={github} alt="GitHub Logo" />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/tam-nguyen-cs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="circle-button">
            <img src={linkedin} alt="LinkedIn Logo" />
          </button>
        </a>
        <a
          href="https://www.facebook.com/tamnmnk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="circle-button">
            <img src={facebook} alt="Facebook Logo" />
          </button>
        </a>
      </div> */}
    </div>
  );
}
