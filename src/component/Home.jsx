import React from 'react'
import { Looter, Product } from '../Product'


export const Home = () => {
    return (
        <div>

            <div className="hero">
                <div className="card text-bg-dark border-0">
                    <img src='newbg.jpg' className="card-img" alt="bg images"
                        height='550px' />
                    <div className="card-img-overlay d-flex flex-column justify-content-center text-light">
                        <div className="container">
                           
                            <h5 className="card-title display-3 text-uppercase fw-bolder mb-0">new session arrivals</h5>
                            <p className="card-text lead fs-2 fw-700">
                                CHECK OUT ALL THE TRENDS
                            </p>
                        </div>


                    </div>
                </div>
            </div>
<Product />
<Looter />
        </div>
    )
}
