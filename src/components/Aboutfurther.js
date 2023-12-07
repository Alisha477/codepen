import React from 'react'
import img1 from '../photos/about1.jpg';
import img2 from '../photos/about2.jpeg';
import img3 from '../photos/about3.webp';
import img4 from '../photos/about4.jpg';
import img5 from '../photos/about5.jpg';

function Aboutfurther() {
    return (
        <>
       
            <div  className='container  bg-dark' style={{marginTop:"8rem"}} >
                <div class="card mb-5 m-md-5" >
                    <div class="row g-0">
                        <div class="col-md-4 ">
                            <img src={img1} class="img-fluid rounded-start" alt="..." style={{height:"100%"}} />
                        </div>
                        <div class="col-md-8 ">
                            <div class="card-body">
                                <h5 class="card-title">Our Mission</h5>
                                <p class="card-text">At Codepen, we understand that the world of programming and technology is vast, diverse, and ever-evolving. That's why we've made it our mission to simplify your learning journey by providing a personalized curation service that delivers the most relevant and engaging content straight to your fingertips.</p>
                                {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-5 m-md-5" >
                    <div class="row g-0">       
                        
                        <div class="col-md-4 order-md-2 ">
                            <img src={img2} class="img-fluid rounded-start" alt="..." style={{height:"100%"}}/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Your Programming Universe, Curated</h5>
                                <p class="card-text">
Our cutting-edge platform doesn't just offer articles; it offers an experience tailored exclusively for you.
How?<br/> Through our sophisticated AI algorithms and user-driven preferences, we curate a diverse range of programming topics, languages, and frameworks, ensuring that the content you encounter aligns perfectly with your interests and expertise level.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-5 m-md-5">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={img3} class="img-fluid rounded-start" alt="..." style={{height:"100%"}}/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Discover, Learn, and Grow</h5>
                                <p class="card-text">
Gone are the days of aimless browsing through endless articles! With our personalized curation service, you'll explore a universe of programming resources that speak directly to your needs. Whether you're delving into the depths of JavaScript frameworks, exploring the intricacies of data science, or mastering the art of mobile app development, our platform ensures you're always on the right path to knowledge acquisition and skill enhancement.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-5 m-md-5">
                    <div class="row g-0">
                        <div class="col-md-4 order-md-2">
                            <img src={img4} class="img-fluid rounded-start" alt="..." style={{height:"100%"}} />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Empowering Your Learning Journey</h5>
                                <p class="card-text">
                                Our commitment to delivering top-notch, curated content isn't just about providing information—it's about empowering you on your learning journey. Dive into articles that have been meticulously vetted by industry experts, engage in discussions with fellow developers, and bookmark your favorites for easy access, creating a customized library of knowledge that evolves with you.
</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mx-md-5 mt-md-5" style={{marginBottom:"8rem"}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={img5} class="img-fluid rounded-start" alt="..." style={{height:"100%"}} />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">At Codepen,<br/> We're not just a blogging website;<br/> We're your personalized gateway to a world of programming excellence. <br/>Join us on this adventure, where your learning experience is at the heart of everything we do.</h5>
                                <p class="card-text"></p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
         
        </>
    )
}

export default Aboutfurther