import React from 'react'

function Section_13_box(props) {
    return (
      <div className="col-sm-3 col-12">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={props.imgSrc} alt="Section 13 Image" />
              <span>
                <h1>Name</h1>
                <p>Role</p>
              </span>
            </div>
            <div className="flip-card-back">
              <div>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
              <span>
                <h1>Name</h1>
                <p>Role</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Section_13_box
