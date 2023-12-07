import React from 'react'
import Reactjs from '../photos/Reactjs.webp'
import Expressjs from '../photos/Express-JS.png';
import Nodejs from '../photos/nodejs.webp';
import Mongodb from '../photos/mongodb.svg';
import Nextjs from '../photos/nextjs.png';
import Python from '../photos/python.jpg';
import './codepen.css';

function Techtoolcarousel() {
    return (
        <>
            <div id="carouselExampleAutoplaying" class=" bg-dark carousel slide " data-bs-ride="carousel" style={{ marginTop: '8rem', marginBottom: "8rem" }} >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">

                            <div class="col">
                                <div class="card mx-4">
                                    <img src={Expressjs} class="card-img-top img-fluid" alt="..." style={{ height: "28vh" }} />
                                    <div class="card-body d-flex justify-content-center flex-column align-items-center">
                                        <h5 class="card-title"><button className='btn btn-secondary'><a href="https://expressjs.com/" target="_blank" className="btn btn-secondary p-0 m-0">Click to know more</a></button></h5>

                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card mx-4">
                                    <img src={Reactjs} class="card-img-top img-fluid" alt="..." style={{ height: "28vh" }} />
                                    <div class="card-body d-flex justify-content-center flex-column align-items-center">
                                        <h5 class="card-title"><button className='btn btn-secondary'><a href='https://react.dev/' target='_blank' className='btn m-0 p-0 btn-secondary'>Click to know more</a></button></h5>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">

                        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">

                            <div class="col">
                                <div class="card mx-4">
                                    <img src={Nodejs} class="card-img-top img-fluid" alt="..." style={{ height: "28vh" }} />
                                    <div class="card-body d-flex justify-content-center flex-column align-items-center">
                                        <h5 class="card-title"><button className='btn btn-secondary' > <a href='https://nodejs.org/en' target="_blank" className='btn p-0 m-0 btn-secondary'> Click to know more</a></button></h5>

                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card mx-4">
                                    <img src={Mongodb} class="card-img-top img-fluid" alt="..." style={{ height: "28vh" }} />
                                    <div class="card-body d-flex justify-content-center flex-column align-items-center">
                                        <h5 class="card-title"><button className='btn btn-secondary'><a href="https://www.mongodb.com/" className="btn btn-secondary m-0 p-0" target="_blank">Click to know more</a></button></h5>

                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>
                    <div class="carousel-item">
                        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">

                            <div class="col">
                                <div class="card mx-4">
                                    <img src={Nextjs} class="card-img-top img-fluid" alt="..." style={{ height: "28vh" }} />
                                    <div class="card-body d-flex justify-content-center flex-column align-items-center">
                                        <h5 class="card-title"><button className='btn btn-secondary'><a href="https://nextjs.org/" className="btn btn-secondary m-0 p-0" target="_blank">Click to know more</a></button></h5>

                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card mx-4">
                                    <img src={Python} class="card-img-top img-fluid" alt="..." style={{ height: "28vh" }} />
                                    <div class="card-body d-flex justify-content-center flex-column align-items-center">
                                        <h5 class="card-title"><button className='btn btn-secondary'><a href="https://www.python.org/" className="btn btn-secondary m-0 p-0" target="_blank">Click to know more</a></button></h5>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Techtoolcarousel