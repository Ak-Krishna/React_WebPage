import React from 'react'

const Experts=()=>{
 return (
   <div className="container my-5">
     <div className="container m-auto">
       <div className="container my-5 p-3">
         <h1 className="section_heading text-center">
           How does it feels to use our services
         </h1>
         <p className="body-text text-center w-100 w-md-50 m-auto">
           These are just a few example of the success stories that they
           achieved working with us.
         </p>
       </div>
       <div className="container d-flex flex-column align-item-center justify-content-center">
         <div className="cards m-auto p-3 w-75">
           <div className="testiProfileSection d-flex align-item-center justify-content-start">
             <img src="images/testi2.jpg" />
             <div className="testiNameSection ">
               <h2 className="testimonialName">Kishan Aher</h2>
               <p className="testimonialCompany">Microsoft</p>
             </div>
           </div>
           <div className="testiFeedback my-2">
             <p className="body-text-testimonial text-wrap">
               It was a great experience working with Wordsmiths The support
               team is very nice and they provided us the to the point solution.
               Looking forward to work more with them.
             </p>
           </div>
         </div>

         <div className="cards m-auto p-3 w-75">
           <div className="testiProfileSection d-flex align-item-center justify-content-start">
             <img src="images/testi.jpg" />
             <div className="testiNameSection ">
               <h2 className="testimonialName">Vishal Barbaile</h2>
               <p className="testimonialCompany">TCS</p>
             </div>
           </div>
           <div className="testiFeedback my-2">
             <p className="body-text-testimonial text-wrap">
               It was a great experience working with Wordsmiths The support
               team is very nice and they provided us the to the point solution.
               Looking forward to work more with them.
             </p>
           </div>
         </div>
         <div className="cards m-auto p-3 w-75">
           <div className="testiProfileSection d-flex align-item-center justify-content-start">
             <img src="images/testi.jpg" />
             <div className="testiNameSection ">
               <h2 className="testimonialName">Yashawant Mangate</h2>
               <p className="testimonialCompany">Amazon</p>
             </div>
           </div>
           <div className="testiFeedback my-2">
             <p className="body-text-testimonial text-wrap">
               It was a great experience working with Wordsmiths The support
               team is very nice and they provided us the to the point solution.
               Looking forward to work more with them.
             </p>
           </div>
         </div>
         <div className="cards m-auto p-3 w-75">
           <div className="testiProfileSection d-flex align-item-center justify-content-start">
             <img src="images/testi.jpg" />
             <div className="testiNameSection ">
               <h2 className="testimonialName">Swapnil Awad</h2>
               <p className="testimonialCompany">Google</p>
             </div>
           </div>
           <div className="testiFeedback my-2">
             <p className="body-text-testimonial text-wrap">
               It was a great experience working with Wordsmiths The support
               team is very nice and they provided us the to the point solution.
               Looking forward to work more with them.
             </p>
           </div>
         </div>

         <div className="container my-5">
           <a
             href="#"
             className="btn btn-warning d-block fs-3 m-auto"
             style={{width: '18rem'}}
           >
             Read More
           </a>
         </div>
       </div>
     </div>
   </div>
 );
}

export default Experts