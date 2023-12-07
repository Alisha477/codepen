import React from 'react';
import Navbar from './Navbar';
import Technewsfurther from './Technewsfurther';
import Footer from './Footer';
import Trytech from './Trytech';

function Technews() {
        return(
        <>
            <Navbar/>
            <Technewsfurther/>
            <Footer/>
        </>
        )
}
 
{/* <div className="" style={{minHeight:"100vh"}}> 
 Add the bg-dark class to the wrapping div
<Navbar />
<div className="container-fluid"> Use a container or container-fluid for content
  <div className="row">
    <div className="col">
      <Technewsfurther /> Apply margin directly to Aboutfurther
    </div>
  </div>
</div>
<Footer/>
</div> */}

export default Technews;
