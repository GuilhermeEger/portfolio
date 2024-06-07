import React from "react";
import foodLandingPage from "../../assets/foodLandingPage.png";
import "./ContentBox.css";

function ContentBox(props) {
  return (
    <div className="cb_mainDiv">
      <div className="cb_wrapDev">
        <h1 className="cb_title">Olá, sou o Guilherme</h1>
        <p>asdasdads asd</p>
        <p>
          adsdasdasd adsa asd asd as ds da dassss asdasd asdadas asdsa as dsad
          as dadada adasd sdas
        </p>
      </div>
      <div className="cd_imgDiv">
        <img className="cd_img" src={foodLandingPage} />
      </div>
    </div>
  );
}

export default ContentBox;
