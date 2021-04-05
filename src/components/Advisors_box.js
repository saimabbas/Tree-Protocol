import React from 'react'

function Advisors_box(props) {
    return (
      <div className="col-sm-3">
        <img src={props.imgSrc} alt="saim" />
        <h1>{props.head}</h1>
        <p>{props.text}</p>
      </div>
    );
}

export default Advisors_box
