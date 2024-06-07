import React from "react";
import "./Home.css";
import perfilphoto from "../../assets/original.jpg";
import ContentBox from "../ContentBox/ContentBox";

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
              <div>LinkedIn</div>
              <div>gitHub</div>
              <div>resume</div>
            </div>
          </div>
        </div>
      </div>
      <div className="projecs">
        <ContentBox />
        <ContentBox />
        <ContentBox />
      </div>
    </div>
  );
}

export default Home;
