import React from "react";
import "./PersonalLinks.css"
import { PiLinkedinLogoFill } from "react-icons/pi";
import { PiGithubLogoFill } from "react-icons/pi";
import { PiFolderUserFill } from "react-icons/pi";


function PersonalLinks(props) {
  return (
    <div className="personalLinksBox">
      <div className="linksImgText">
        <PiLinkedinLogoFill className="icon" />
        <a target="_blank" href="https://www.linkedin.com/in/guilhermeeger">
          LinkedIn
        </a>
      </div>
      <div className="linksImgText">
        <PiGithubLogoFill className="icon" />
        <a target="_blank" href="https://github.com/GuilhermeEger">
          GitHub
        </a>
      </div>
      <div className="linksImgText">
        <PiFolderUserFill className="icon" />
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1tKC9157r5Qsear3S1Wo_7Gp2g8csAsID/view?usp=sharing"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default PersonalLinks;
