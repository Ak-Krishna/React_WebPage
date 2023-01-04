import React from 'react'

const Hero=(props)=>{
  // console.log(props.MainTheme)
return (
  <div className="container my-5 p-2 hero-section d-flex justify-content-center align-items-center" style={props.MainTheme}>
    <div className="container w-100">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-6 p-3  ">
          <p className="tagline">Consult your content with</p>
          <h1 className="branding">wordsmith</h1>
          <p className="body-text context-text">
            We Strive hard to provide you content that enhances your credibility
            and conveys your idea with clarity to your targeted audience.
          </p>
          <a className="button d-block m-auto m-md-0">Contact Us</a>
        </div>
        <div className="col-12 col-md-8 col-lg-6  ">
          <img
            src={props.img}
            className="w-100 hero-image"
            alt="hero image"
          />
        </div>
      </div>
    </div>
  </div>
);
}

export default Hero;