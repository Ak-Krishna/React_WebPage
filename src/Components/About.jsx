import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="container">
        <div className="row flex-column flex-md-row align-items-center justify-content-center">
          <div className="col d-flex justify-content-center align-items-center">
            <img
              src="images/aboutUsIllustration.svg"
              className="about-img w-75 w-md-100"
            />
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h2 className="section_heading">At Glance</h2>
            <div className="glanceTable mt-2">
              <div className="point">
                <i className="fas fa-hand-point-right fa-2x"></i>
                <p className="body-text">
                  Idea Conveyor with 100% Clarity to your customer.
                </p>
              </div>
              <div className="point">
                <i className="fas fa-hand-point-right fa-2x"></i>
                <p className="body-text">
                  Dedicated team of Journalist, Freelance Journalist and Skilled
                  Content Writer.
                </p>
              </div>
              <div className="point">
                <i className="fas fa-hand-point-right fa-2x"></i>
                <p className="body-text">Budding crafters of wordstan ideas.</p>
              </div>
              <div className="point">
                <i className="fas fa-hand-point-right fa-2x"></i>
                <p className="body-text">Thorough proof readers.</p>
              </div>
              <div className="point">
                <i className="fas fa-hand-point-right fa-2x"></i>
                <p className="body-text">
                  Our written content plays an important role not only for
                  company but also for your customer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;