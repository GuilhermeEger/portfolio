import React, { useState } from "react";
import "./Home.css";
import perfilphoto from "../../assets/original.jpg";
import ContentBox from "../ContentBox/ContentBox";
import foodLandingPageVideo from "../../assets/foodLandingPage.mp4";
import foodLandingPage from "../../assets/foodLandingPage.png";
import memoryGameVideo from "../../assets/memory-game.mp4";
import memoryGame from "../../assets/memory-game.png";
import ticTacToe from "../../assets/tic-tac-toe.png";
import ticTacToeVideo from "../../assets/tic-tac-toe.mp4";
import Carousel from "../Carousel/Carousel";
import PersonalLinks from "../PersonalLinks/PersonalLinks";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

function Home(props) {

  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode(){
    setDarkMode(!darkMode)
  }

  return (
    <div>
      <div className={"pageMain" + (darkMode ? " darkMode" : "")}>
        <DarkModeSwitch mode={darkMode} changeMode={() => handleDarkMode()}/>
        <div className="welcome">
          <div className="welcomeMainContent">
            <div>
              <img className="photo" src={perfilphoto} />
            </div>
            <div className="personalInfoBox">
              <div className="infoTextBox">
                <h1>Hello, my name is Guilherme!</h1>
                <p>
                  I am a front-end developer with experience in{" "}
                  <span className="highlightText">
                    React, JavaScript, CSS, HTML,
                  </span>{" "}
                  and React Native. I have spent most of my time developing for
                  a native application with a webview interface, where I was
                  responsible for the design and development of all
                  functionalities.
                </p>
                <p>
                  Additionally, I have valuable experience as a coordinator and
                  manager, where I participated in the management of the entire
                  team and their projects. This gave me a broad understanding of
                  the entire project development flow and its management.
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
          <h1 className="mainBlockTitle">Projects</h1>
          <ContentBox
            video={foodLandingPageVideo}
            img={foodLandingPage}
            title={"Landing Page about Japanese Food"}
            gridTemplate={"text-img"}
            codeLink={"https://github.com/GuilhermeEger/food-landing-page"}
            pageLink={"https://guilhermeeger.github.io/food-landing-page/"}
          >
            <p>
              The choice of theme for the site was made strategically. I wanted
              to test some of my CSS skills on a web page and decided to create
              a landing page. However, I also wanted this project to be
              something that would keep me engaged, not just a purposeless
              exercise. Therefore, I decided to focus on Japanese food, a
              passion of mine. I love cooking, and Japanese cuisine has always
              fascinated me.
            </p>
            <p>
              I developed the landing page with an artistic touch, using images
              and videos that give it a professional feel. The entire project
              was carried out by me: from researching the theme, selecting and
              editing images and videos, to designing the wireframe and coding
              the development.
            </p>
          </ContentBox>
          <ContentBox
            video={memoryGameVideo}
            img={memoryGame}
            title={"Memory Game"}
            gridTemplate={"img-text"}
            codeLink={"https://github.com/GuilhermeEger/memory-game"}
            pageLink={"https://guilhermeeger.github.io/memory-game/"}
          >
            <p>
              This was the second game I developed, following many guidelines
              from the first one to reinforce the knowledge I had acquired. It's
              a simple game, and I focused on using its simplicity to solidify
              essential concepts. The folder structure and components were
              carefully organized to adhere to best practices. Thus, even though
              it's "just a memory game," I managed to use the project well to
              expand some techniques.
            </p>
            <p>
              The game itself follows the traditional format, but I added a few
              elements I found interesting, such as difficulty levels and final
              animations. My aim is always to provide an engaging user
              experience (UX) that evokes emotions in the user. A simple, yet
              rich project.
            </p>
          </ContentBox>
          <ContentBox
            video={ticTacToeVideo}
            img={ticTacToe}
            title={"Tic-Tac-Toe"}
            gridTemplate={"text-img"}
            codeLink={"https://github.com/GuilhermeEger/tic-tac-toe"}
            pageLink={"https://guilhermeeger.github.io/tic-tac-toe/"}
          >
            <p>
              Developing the classic Tic-Tac-Toe was my first foray into the
              world of game development. I chose a simple and practical theme to
              get acquainted with React development. Although it was a quick
              project, completed in just a few hours, I spared no effort in
              researching and applying best practices.
            </p>
            <p>
              As soon as I finished, I was eager to embark on new challenges. It
              was hard to resist the temptation to add more features to the
              game. One of the ideas that excited me the most was to create a
              version to play against an artificial intelligence. Who knows,
              maybe that will become a reality in the future!
            </p>
          </ContentBox>
          <div>
            <Carousel />
          </div>
          <p>
            These are some of the screens from one of the projects I developed
            for my former company. Currently, it has over{" "}
            <span className="highlightText">50,000 downloads</span> on the Play
            Store, followed by another one I also developed, totaling over
            100,000 downloads on the Play Store alone, not counting the Apple
            Store, where the numbers were slightly higher at the time. Apple
            does not provide the current number of app downloads in their store.
          </p>
          <p>
            It was a React Native application, but I used it merely as a
            "shell," with all development done responsively via the web, through
            a webview!
          </p>
          <p>
            The strategy behind this was that we were a rapidly growing startup,
            and I needed to implement functionalities efficiently and extremely
            quickly. By keeping the entire application in React Native, we could
            potentially face delays in rolling out new versions to clients on
            the Apple/Play Store. With the use of webview, we could deploy
            updates, and within minutes, all clients would have access to the
            new frontend version!
          </p>
          <p>
            Additionally, this decision was also motivated by the learning
            curve. By focusing on{" "}
            <span className="highlightText">React.js</span>, I could potentially
            develop screens for the web/desktop system in the future, where I
            have executed some projects.
          </p>
        </div>
      </div>
      <div className="pageFooter">
        <PersonalLinks />
      </div>
    </div>
  );
}

export default Home;
