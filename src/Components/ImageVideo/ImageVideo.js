import React, { useState } from "react";
import "./ImageVideo.css";
import { PiPlayFill } from "react-icons/pi";
import { PiPauseFill } from "react-icons/pi";


function ImageVideo(props) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="iv_mainDiv">
      {showVideo ? (
        <video
          className="iv_video fadeInVideo"
          src={props.video}
          autoPlay
          loop
        />
      ) : (
        <img className="iv_img" src={props.img} />
      )}
      {showVideo ? <PiPauseFill className="iv_icon" onClick={() => setShowVideo(false)}/> : <PiPlayFill className="iv_icon" onClick={() => setShowVideo(true)}/>}
    </div>
  );
}

export default ImageVideo;
