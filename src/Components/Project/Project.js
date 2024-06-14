import React from "react";
import "./Project.css";
import ContentBox from "../ContentBox/ContentBox";

function Project(props) {
  return (
    <>
      <ContentBox
        video={props.video}
        img={props.img}
        title={props.title}
        gridTemplate={props.gridTemplate}
        codeLink={props.codeLink}
        pageLink={props.pageLink}
      >
        <div className="techsMap">
          {props.techs?.map((tech) => {
            return <strong className="techItem">{tech}</strong>;
          })}
        </div>
        {props.projectDescription?.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
      </ContentBox>
    </>
  );
}

export default Project;
