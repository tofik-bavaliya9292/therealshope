import React from 'react'
import { Link } from 'react-router-dom'
import { Looter } from '../Product'

const Contact = () => {
    return (
        <div>

            <h1 className='abou'>contact the real shope</h1>

            <div className="contact">
                Support. Help resolve the concerns of existing customers who are having issues with their order, want to return or exchange a product, or having trouble completing an order.
                Sales. Help potential customers make a decision, convert prospects into customers and offer a channel for bulk or warehouse orders.
                Press or PR. Help media get in touch with the right people to talk to about your story.
                Human Resources. Help potential employees apply for a job or ask questions about your company.
            </div>


                {/* <div className="newimg">
                    <img src="con4.png" alt="cpng" height={200} width={1500} style={{padding:'1rem 10rem'}}/>
                </div> */}

            <img src='con4.png' className="card-img ncc" alt="bg images"
                height='320px' />


            <footer className="text-center text-lg-start bg-light text-muted">

                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >



                </section>



                <section className="">
                    <div className="container text-center text-md-start mt-5 tr">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>The Real Shope
                                </h6>
                                <p>
                                    At the real shope, our aim is to offer you all that show you that we really care! Not only have we got the trendiest all, but we can also guarantee that they are of the finest quality.


                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4 text-decoration-none">
                                </h6>
                                <p>
                                    <Link to='/' className="text-reset text-capitalize text-decoration-none">home</Link>
                                </p>
                                <p>
                                    <Link to="/product" className="text-reset text-decoration-none">Product</Link>                           </p>
                                <p>
                                    <Link to="/about" className="text-reset text-decoration-none">About</Link>                          </p>
                                <p>
                                    <Link to="/contact" className="text-reset text-decoration-none">Contact</Link>                             </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">

                                </h6>
                                <p>
                                    <Link to="/login" className="text-reset text-decoration-none">Login</Link>
                                </p>
                                <p>
                                    <Link to="/regester" className="text-reset text-decoration-none">Regester</Link>
                                </p>
                               
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fa fa-home me-3"></i> Surendranagar, Gujarat, IN</p>
                                <p>
                                    <i className="fa fa-envelope me-3"></i>
                                    <a href="mailto:tofikbavaliya@gmail.com" className='text-decoration-none text-muted'>tofikbavaliya@gmail.com</a>
                                </p>
                                <p> <a href="tel:9106939290" className='text-decoration-none text-muted'><i className="fa fa-phone me-3"></i> + 91 9106939290</a> </p>
                                <p><a href="tel:9978631754" className='text-decoration-none text-muted'><i className="fa fa-print me-3"></i> + 91 9978631754</a></p>
                            </div>

                        </div>

                    </div>
                </section>

            </footer>
                
            <Looter />

        </div>
    )
}

export default Contact