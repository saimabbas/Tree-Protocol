import React from "react";

function Section_11_box(props) {
  return (
    <div className="col-sm-4 col-12">
      <img src={props.imgSrc} alt="Section 11 image" />
      <h1>{props.boxHeading}</h1>
      <p>{props.boxText}</p>
      <span>COMING SOON</span>
    </div>
  );
}

export default Section_11_box;
