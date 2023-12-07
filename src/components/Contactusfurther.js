import React from 'react'

function Contactusfurther() {
    return (
        <>
        <div className='d-flex justify-content-center align-items-center mb-5' style={{borderRadius:"140px"}} >
            <div className='container mx-md-5 px-md-5 bg-light py-3 ' style={{ marginTop: "8rem", maxWidth:"800px", borderRadius:"60px"}} >
                <form>
                    <div className='d-flex justify-content-center'><h1>Contact Us!</h1></div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className='mb-3'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select your query</option>
                            <option value="1">Front-end</option>
                            <option value="2">Back-end</option>
                            <option value="3">Data Analytics</option>
                            <option value="3">Blockchain</option>
                            <option value="3">Devops</option>
                        </select>
                    </div>
                    <div className='mb-3 form-check'>

                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Are you a member?
                        </label>


                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Elaborate your concern</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div className='d-flex justify-content-center'><button type="submit" class="btn btn-primary">Submit</button></div>
                </form>
            </div>
</div>

        </>
    )
}

export default Contactusfurther