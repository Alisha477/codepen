import React from 'react'
import Navbar from './Navbar'
import Contactusfurther from './Contactusfurther'
import Footer from './Footer'

function Contactus() {
  return (
    <>
    <div className="bg-dark" style={{minHeight:"100vh"}}> {/* Add the bg-dark class to the wrapping div */}
      <Navbar />
      <div className="container-fluid"> {/* Use a container or container-fluid for content */}
        <div className="row">
          <div className="col">
            <Contactusfurther /> {/* Apply margin directly to Aboutfurther */}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
      
    </>
  )
}

export default Contactus