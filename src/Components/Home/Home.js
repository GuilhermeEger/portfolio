import React from "react";
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

function Home(props) {
  return (
    <div className="pageMain">
      <div className="welcome">
        <div className="welcomeMainContent">
          <div>
            <img className="Photo" src={perfilphoto} />
          </div>
          <div className="personalInfoBox">
            <div className="infoTextBox">
              <h1>Olá, sou o Guilherme</h1>
              <p>asdasdads asd</p>
              <p>
                adsdasdasd adsa asd asd as ds da dassss asdasd asdadas asdsa as
                dsad as dadada adasd sdas
              </p>
            </div>
            <div className="personLinksBox">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/guilhermeeger"
              >
                LinkedIn
              </a>
              <a target="_blank" href="https://github.com/GuilhermeEger">
                gitHub
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1tKC9157r5Qsear3S1Wo_7Gp2g8csAsID/view?usp=sharing"
              >
                resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projecs">
        <ContentBox
          video={foodLandingPageVideo}
          img={foodLandingPage}
          gridTemplate={"text-img"}
        />
        <ContentBox
          video={memoryGameVideo}
          img={memoryGame}
          gridTemplate={"img-text"}
        />
        <ContentBox
          video={ticTacToeVideo}
          img={ticTacToe}
          gridTemplate={"text-img"}
        />
        <div>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Home;
