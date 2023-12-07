import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Signup from './Signup'
import Button from 'react-bootstrap/Button';
import Login from './Login.js';

function Navbar2() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);
    return (
        <>
            <div>
                {/* <nav class="navbar navbar-expand-lg fixed-top bg-dark "> */}
                <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"black"}}>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#" >CodePen</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                                    {/*                 
                                    <Link to='/' style={{textDecoration:"none"}}><a class="nav-link active" aria-current="page" href="#">Home</a></Link> */}
                                </li>
                                <li class="nav-item">
                                    <NavLink exact to="/about" className="nav-link" activeClassName="active">About</NavLink>
                                    {/* <Link to="/about" style={{textDecoration:"none"}}><a class="nav-link" href="#">About</a></Link> */}
                                </li>
                                <li class="nav-item">
                                    <NavLink exact to="/technews" className="nav-link" activeClassName="active">Tech News</NavLink>
                                    {/* <Link to="/about" style={{textDecoration:"none"}}><a class="nav-link" href="#">About</a></Link> */}
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Topics
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Front-end</a></li>
                                        <li><a class="dropdown-item" href="#">Back-end</a></li>
                                        <li><a class="dropdown-item" href="#">Data Analytics</a></li>
                                        <li><a class="dropdown-item" href="#">Blockchain</a></li>
                                        <li><a class="dropdown-item" href="#">Devops</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Game development</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NavLink exact to="/contactus" className="nav-link" activeClassName="active">Contact us</NavLink>
                                    {/* <Link to="/contactus" style={{textDecoration:"none"}}><a class="nav-link" href='#'>Contact us</a></Link> */}
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success " type="submit">Search</button>
                            </form>
                        
                            {/* <button className='btn btn-danger '  data-bs-toggle="modal" data-bs-target="#exampleModal">Signup</button> */}
                            {/* <!-- Button trigger modal --> */}
                            {/* <!-- Button trigger modal --> */}
                            <Button variant="danger" className='mx-2 btn-sm my-2' onClick={handleShow2}>
                                Login
                            </Button>
                            <Login show={show2} setShow={setShow2}/>

                            <Button variant="danger" className='btn-sm' onClick={handleShow1}>
                                Signup
                            </Button>
                            <Signup show={show1} setShow={setShow1}/>










                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar2