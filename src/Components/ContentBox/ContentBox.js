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
        <h1 className="cb_title">{props.title}</h1>
        <div>{props.children}</div>
        <a target="_blank" href={props.codeLink}>
            Code
          </a>
          <a target="_blank" href={props.pageLink}>
            Try it!
          </a>

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
