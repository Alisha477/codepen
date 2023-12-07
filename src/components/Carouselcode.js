import React from 'react'
import { Link } from 'react-router-dom';
import Carouselimg3 from '../photos/carouselmain5.jpg';
import Carouselimg2 from '../photos/carousel4.webp';
import Carouselimg1 from '../photos/carouselmain1.jpg';




function Carouselcode() {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" style={{width:"100%", height:"100%"}} data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Carouselimg1} class="d-block w-100" alt="..." style={{height:"100vh"}} />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Welcome to CodePen</h5>
                            <p>One place to your Tech news and Development</p>
                            <button className='btn btn-primary mx-2'><Link to="/technews" style={{textDecoration:"none", color:"white"}}>Tech News</Link></button>
                            <button className='btn btn-danger mx-2'><a href="https://www.indeed.com/career-advice/career-development/what-is-software-development#:~:text=Software%20development%20is%20the%20process,technical%20specifications%20and%20user%20requirements." style={{textDecoration:"none",color:"white"}} className='btn btn-dangerm-0 p-0' target="_blank">Development</a></button>
                            <button className='btn btn-info m-2'><a href="https://explodingtopics.com/blog/software-development-trends" className='btn btn-info m-0 p-0' target="_blank">Tech Trends</a></button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Carouselimg2} class="d-block w-100" alt="..." style={{height:"100vh"}}/>
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Best Coding blog</h4>
                            <button className='btn btn-primary mx-2'><Link to="/technews" style={{textDecoration:"none", color:"white"}}>Tech News</Link></button>
                            <button className='btn btn-danger mx-2'><a href="https://www.indeed.com/career-advice/career-development/what-is-software-development#:~:text=Software%20development%20is%20the%20process,technical%20specifications%20and%20user%20requirements." style={{textDecoration:"none",color:"white"}} className='btn btn-dangerm-0 p-0' target="_blank">Development</a></button>
                            <button className='btn btn-info m-2'><a href="https://explodingtopics.com/blog/software-development-trends" className='btn btn-info m-0 p-0' target="_blank">Tech Trends</a></button>
                        
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Carouselimg3} class="d-block w-100" alt="..." style={{height:"100vh"}}/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Code and Explore</h5>
                            <button className='btn btn-primary mx-2'><Link to="/technews" style={{textDecoration:"none", color:"white"}}>Tech News</Link></button>
                            <button className='btn btn-danger mx-2'><a href="https://www.indeed.com/career-advice/career-development/what-is-software-development#:~:text=Software%20development%20is%20the%20process,technical%20specifications%20and%20user%20requirements." style={{textDecoration:"none",color:"white"}} className='btn btn-dangerm-0 p-0' target="_blank">Development</a></button>
                            <button className='btn btn-info m-2'><a href="https://explodingtopics.com/blog/software-development-trends" className='btn btn-info m-0 p-0' target="_blank">Tech Trends</a></button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carouselcode