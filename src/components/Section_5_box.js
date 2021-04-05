import React from "react";

function Section_5_box(props) {
  return (
    <div className="col-sm-4 col-12">
      <img src={props.imgSrc} alt="Section 5 icon" />
      <h1>{props.s5_heading}</h1>
      <p>{props.s5_text}</p>
    </div>
  );
}

export default Section_5_box;
