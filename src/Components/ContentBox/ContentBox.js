import React from "react";
import "./ContentBox.css";
import ImageVideo from "../ImageVideo/ImageVideo";

function ContentBox(props) {
  return (
    <div className="cb_mainDiv">
      <div
        className={
          "cb_wrapDev " +
          (props.gridTemplate == "text-img"
            ? "contentLeftArea"
            : "contentRightArea")
        }
      >
        <h1 className="cb_title">Olá, sou o Guilherme</h1>
        <p>asdasdads asd</p>
        <p>
          adsdasdasd adsa asd asd as ds da dassss asdasd asdadas asdsa as dsad
          as dadada adasd sdas
        </p>
      </div>
      <div
        className={
          "cd_imgDiv" +
          (props.gridTemplate == "text-img"
            ? "contentLeftArea"
            : "contentRightArea")
        }
      >
        <ImageVideo img={props.img} video={props.video} />
      </div>
    </div>
  );
}

export default ContentBox;
