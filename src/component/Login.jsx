import React from 'react'
import { Looter } from '../Product';


export const Login = () => {

    
        const my = () => {
                let x = document.getElementById("put");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }
    
    
    return (
        <div>

            <h1 className='lheding'>login with real shope</h1>
            {/* <div className="login"> */}

                <form className='boots'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label " >Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="put" required />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={my} />
                            <label class="form-check-label" for="exampleCheck1">Show password</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <Looter />
            </div>
        // </div>
    )
}
