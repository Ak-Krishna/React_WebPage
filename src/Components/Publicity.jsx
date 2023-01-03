import React from "react";

const Publicity = () => {
  return (
    <div id="publicity" className="container-fluid w-100 my-5 p-2">
      <div className="container m-auto">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-6">
            <div className="row my-1">
              <div className="col">
                <div className="pubBox box1">
                  <img src="images/box1.png" className="w-100" />
                </div>
              </div>
              <div className="col">
                <div className="pubBox box2">
                  <img src="images/box2.png" className="w-100" />
                </div>
              </div>
            </div>
            <div className="row my-1">
              <div className="col">
                <div className="pubBox box3">
                  <img src="images/box3.png" className="w-100" />
                </div>
              </div>
              <div className="col">
                <div className="pubBox box4">
                  <img src="images/box4.png" className="w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-5 p-md-2">
            <h1 className="section_heading">
              Make your social media and content marketing better.
            </h1>
            <p className="body-text">
              We make sure that your content publishing is well planned with
              creative ideas and we schedule it according to your customers
              analytics
            </p>
            <a href="#" className="button">
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Publicity;