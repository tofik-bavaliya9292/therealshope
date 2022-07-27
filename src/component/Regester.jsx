import React from 'react'
import { Looter } from '../Product';

const Regester = () => {
    return (
        <div>

            <div className="rege">
                <h1 className='re'>Sign up form</h1><hr />
                <form className="row g-3">
                    <div className="col-md-4">
                        <label for="validationServer01" className="form-label">First name</label>
                        <input type="text" className="form-control is-invalid" id="validationServer01" required />

                    </div>
                    <div className="col-md-4">
                        <label for="validationServer02" className="form-label">Last name</label>
                        <input type="text" className="form-control is-invalid" id="validationServer02" required />
                        <div className="valid-feedback">

                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationServerUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend3">@</span>
                            <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                            <div id="validationServerUsernameFeedback" className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label for="validationServer03" className="form-label">City</label>
                        <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                        <div id="validationServer03Feedback" className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label for="validationServer04" className="form-label">State</label>
                        <input className="form-control is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required />
                          

                        <div id="validationServer04Feedback" className="invalid-feedback">
                            Please select a valid state.
                        </div>

                    </div>
                    <div className="col-md-3">
                        <label for="validationServer05" className="form-label">Pin</label>
                        <input type="number" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" maxLength='6' required />
                        <div id="validationServer05Feedback" className="invalid-feedback">
                            Please provide a valid pin.
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                            <label className="form-check-label" for="invalidCheck3">
                                Agree to terms and conditions
                            </label>
                            <div id="invalidCheck3Feedback" className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>
            <Looter />
        </div>

      
    )
}

export default Regester;