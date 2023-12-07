// import React from 'react'
// import Navbar from './Navbar'
// import Aboutfurther from './Aboutfurther';

// function About() {
//   return (
//     <>
//     <div >
//         <Navbar/>
       
         
//         <Aboutfurther/>
   
//         </div>
//     </>
//   )
// }

// export default About
import React from 'react';
import Navbar from './Navbar';
import Aboutfurther from './Aboutfurther';
import Footer from './Footer';

function About() {
  return (
    <div className="bg-dark"> {/* Add the bg-dark class to the wrapping div */}
      <Navbar />
      <div className="container-fluid"> {/* Use a container or container-fluid for content */}
        <div className="row">
          <div className="col">
            <Aboutfurther /> {/* Apply margin directly to Aboutfurther */}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
