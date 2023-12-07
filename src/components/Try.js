import React from 'react'
import img1 from '../photos/img6.jpg'
import img2 from '../photos/img2.jpg';

function Try() {
  return (
    <>

      <div class="d-md-flex justify-content-center flex-md-equal w-100 ">
        <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="mt-3 py-3">
            <h6 class="display-5">Developer Conferences For 2023</h6>
            <button className='btn btn-danger m-3'><a href="https://swimm.io/blog/top-software-developer-conferences" style={{textDecoration:"none",color:"white"}} className='p-0 m-0 btn btn-danger' target="_blank">Know More!</a></button>
            <p class="lead">Explore Top 17 Of 2023</p>
          </div>
          <div class="bg-body-tertiary shadow-sm mx-auto d-flex " style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}>
            <img src={img1} class="img-fluid" style={{width:"100%"}}></img>
          </div>
        </div>
        <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3">
            <h6 class="display-5">6 Biggest Developer Conferences</h6>
            <p class="lead">Of Europe | 2024</p>
            <button className='btn btn-dark'><a href='https://www.wearedevelopers.com/magazine/best-software-developer-conferences-europe' className='btn btn-dark m-0 p-0' target="_blank">Know More!</a></button>
          </div>
          <div class="bg-dark shadow-sm mx-auto" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}>

          <img src={img2} class="img-fluid" style={{width:"100%", height:"100%"}}/>
          </div>
        </div>
      </div>


      {/* <div class="container border">
    <div class="row">
        <div class="col-lg-2 border p-4 m-2">deew</div>
        <div className='col-lg-9 border p-4 m-2'>defcedr</div>
    </div>
  </div> */}
    </>
  )
}

export default Try