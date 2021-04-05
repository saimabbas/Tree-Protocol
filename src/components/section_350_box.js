import React from 'react'

function section_350_box() {
    return (
      <div className="col-sm-4 col-12">
        <img src={props.imgSrc} alt="Section 11 image" />
        <h1>{props.boxHeading}</h1>
        <p>{props.boxText}</p>
        <span>COMING SOON</span>
      </div>
    );
}

export default section_350_box
