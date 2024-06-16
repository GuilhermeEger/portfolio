import React, { useState } from "react";
import "./Home.css";
import perfilphoto from "../../assets/original.jpg";
import ContentBox from "../ContentBox/ContentBox";
import foodLandingPageVideo from "../../assets/foodLandingPage.mp4";
import foodLandingPage from "../../assets/foodLandingPage.png";
import memoryGameVideo from "../../assets/memory-game.mp4";
import memoryGame from "../../assets/memory-game.png";
import ticTacToe from "../../assets/tic-tac-toe.png";
import spotifyLayout from "../../assets/spotifyLayout.png";
import ticTacToeVideo from "../../assets/tic-tac-toe.mp4";
import Carousel from "../Carousel/Carousel";
import PersonalLinks from "../PersonalLinks/PersonalLinks";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import Project from "../Project/Project";
import projectDescriptionMap from "../../utils/ProjectDescriptionMap.js";

function Home(props) {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div>
      <div className={"pageMain" + (darkMode ? " darkMode" : "")}>
        <DarkModeSwitch mode={darkMode} changeMode={() => handleDarkMode()} />
        <div className="welcome">
          <div className="welcomeMainContent">
            <div className="divPerfilPhoto">
              <img className="photo" src={perfilphoto} />
            </div>
            <div className="personalInfoBox">
              <div className="infoTextBox">
                <h1>Hello, my name is Guilherme!</h1>
                <p>
                  I am a front-end developer with experience in{" "}
                  <span className="highlightText">
                    React, JavaScript, CSS, HTML.
                  </span>{" "}
                  I also have knowledge of{" "}
                  <span className="underLineText">
                    Node, TypeScript, React Native
                  </span>{" "}
                  and tools like Xcode, Android Studio, Figma among others. I've
                  worked mainly with mobile front-end (webview), but I've also
                  been involved in full-stack web projects.
                </p>
                <p>
                  Additionally, I have valuable experience as a coordinator and
                  manager, where I participated in managing of the entire team
                  and their projects. This gave me a broad understanding of the
                  entire project development flow and its management.
                </p>
                <p>
                  Feel free to learn more about my work through this page
                  featuring some of my projects, as well as on my LinkedIn and
                  resume!
                </p>
              </div>
              <PersonalLinks />
            </div>
          </div>
        </div>
        <div className="projects">
          <div>
            <Carousel />
          </div>
          <div className="techsMap">
            {[
              "React",
              "Javascript",
              "CSS",
              "HTML",
              "Node",
              "React Native",
              "Xcode",
              "Android Studio",
            ].map((tech) => {
              return <strong className="techItem">{tech}</strong>;
            })}
          </div>
          <p>
            These are screens from a project I spearheaded at my former company,
            which has collectively garnered over{" "}
            <span className="highlightText">100,000 downloads</span> on the Play
            Store and Apple Store. The application, developed primarily using
            React Native, leveraged web technologies through a responsive
            webview approach.
          </p>
          <p>
            The decision to utilize React Native as a foundational "shell"
            allowed for rapid feature implementation amidst our startup's
            exponential growth. By seamlessly integrating web technologies via
            webview, updates were deployed swiftly, ensuring all users had
            immediate access to new frontend iterations.
          </p>
          <p>
            This strategy not only expedited development cycles but also
            facilitated my proficiency in{" "}
            <span className="highlightText">React.js</span>, paving the way for
            future web and desktop projects I've successfully executed.
          </p>
          <Project
            img={spotifyLayout}
            techs={["React", "Next", "Typescript", "CSS", "Versel"]}
            title={"Spotify Layout"}
            gridTemplate={"img-text"}
            codeLink={"https://github.com/GuilhermeEger/spotify"}
            pageLink={"https://spotify-pi-lac.vercel.app/"}
            projectDescription={projectDescriptionMap["foodLandingPage"]}
          />
          <Project
            techs={["React", "Javascript", "CSS", "HTML"]}
            video={foodLandingPageVideo}
            img={foodLandingPage}
            title={"Landing Page about Japanese Food"}
            gridTemplate={"text-img"}
            codeLink={"https://github.com/GuilhermeEger/food-landing-page"}
            pageLink={"https://guilhermeeger.github.io/food-landing-page/"}
            projectDescription={projectDescriptionMap["foodLandingPage"]}
          />
          <Project
            techs={["React", "Javascript", "Lottie", "CSS", "HTML"]}
            video={memoryGameVideo}
            img={memoryGame}
            title={"Memory Game"}
            gridTemplate={"text-img"}
            codeLink={"https://github.com/GuilhermeEger/memory-game"}
            pageLink={"https://guilhermeeger.github.io/memory-game/"}
            projectDescription={projectDescriptionMap["memoryGame"]}
          />
          <Project
            techs={["React", "Javascript", "CSS", "HTML", "Lottie"]}
            video={ticTacToeVideo}
            img={ticTacToe}
            title={"Tic-Tac-Toe"}
            gridTemplate={"img-text"}
            codeLink={"https://github.com/GuilhermeEger/tic-tac-toe"}
            pageLink={"https://guilhermeeger.github.io/tic-tac-toe/"}
            projectDescription={projectDescriptionMap["ticTacToe"]}
          />
        </div>
      </div>
      <div className="pageFooter">
        <PersonalLinks />
      </div>
    </div>
  );
}

export default Home;
