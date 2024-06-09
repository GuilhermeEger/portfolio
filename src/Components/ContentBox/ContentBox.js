import React from "react";
import "./ContentBox.css";
import ImageVideo from "../ImageVideo/ImageVideo";
import { PiCodeBold } from "react-icons/pi";
import { PiArrowSquareInBold } from "react-icons/pi";

function ContentBox(props) {
  return (
    <div>
      <div
        className={
          "cb_wrapDev " +
          (props.gridTemplate == "text-img"
            ? "contentLeftArea "
            : "contentRightArea")
        }
      >
        <h1 className="cb_title">{props.title}</h1>
        <div>{props.children}</div>
        <div className="mainWrapLinkText">
          <div className="cb_wrapTextLink">
            <PiCodeBold className="cb_icon"/>
            <a target="_blank" href={props.codeLink}>
              Code
            </a>
          </div>
          <div className="cb_wrapTextLink">
            <PiArrowSquareInBold className="cb_icon"/>
            <a target="_blank" href={props.pageLink}>
              Try it!
            </a>
          </div>
        </div>
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
