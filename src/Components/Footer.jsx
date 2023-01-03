import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-warning mt-5 py-5">
      <div className="container m-auto">
        <div className="container d-flex align-item-center justify-container-center flex-column flex-sm-row">
          <div className="container p-3">
            <img src="images/logo.png" style={{ width: "12rem" }} />
          </div>
          <div className="container    -danger p-4">
            <div className="row d-flex align-item-center justify-content-center">
              <div className="col-12 w-25   mx-3">
                <h2>About</h2>
                <a href="#" className="d-block fs-3 my-2 w-25">
                  Link
                </a>
                <a href="#" className="d-block fs-3 my-2 w-25">
                  Link
                </a>
                <a href="#" className="d-block fs-3 my-2 w-25">
                  Link
                </a>
                <a href="#" className="d-block fs-3 my-2 w-25">
                  Link
                </a>
              </div>
              <div className="col-12 w-25   mx-3">
                <h2>Social</h2>
                <a href="#" className="d-block fs-3 my-2 w-25">
                  Link
                </a>
                <a href="#" className="d-block fs-3 my-2 w-25">
                  Link
                </a>
                <a href="#" className="d-block fs-3 my-2 w-25">
                  Link
                </a>
                <a href="#" className="d-block fs-3 my-2 w-25">
                  Link
                </a>
              </div>
              <div className="col-12 w-25   mx-3">
                <h2>Social</h2>
                <a href="#" className="d-block fs-3 my-2 w-25">
                  Link
                </a>
                <a href="#" className="d-block fs-3 my-2 w-25">
                  Link
                </a>
                <a href="#" className="d-block fs-3 my-2 w-25">
                  Link
                </a>
                <a href="#" className="d-block fs-3 my-2 w-25">
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;