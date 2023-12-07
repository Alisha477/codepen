import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Signup({ show, setShow }) {


    const handleClose = () => setShow(false);


    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                       
                            <div class="row my-3">
                                <div class="col">
                                    {/* <input type="text" class="form-control" placeholder="First name"/> */}
                                    <label for="firstname">First name</label>
                            <input type="text" class="form-control" id="firstname"  />
                                </div>
                                <div class="col">
                                    {/* <input type="text" class="form-control" placeholder="Last name"/> */}
                                    <label for="lastname">Last name</label>
                            <input type="text" class="form-control" id="lastname"  />
                                </div>
                            </div>
                        
                        <div class="form-group my-3">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <div class="form-group my-3">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group my-3">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className='d-flex justify-content-center' >
                        <Button variant="primary" onClick={handleClose} >
                            Create Account
                        </Button>
                        </div>
                       
                     
                    </form>
                </Modal.Body>
                <Modal.Footer>
                
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Signup;