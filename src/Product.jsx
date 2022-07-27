import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Skeleton from "@material-ui/lab/Skeleton";

export const Product = () => {

    const [data, setdata] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loadind, setloading] = useState(false);
    let componentMountend = true;

    useEffect(() => {

        const getproducts = async () => {
            setloading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMountend) {
                setdata(await response.clone().json());
                setfilter(await response.json());
                setloading(false);
                console.log(filter)
            }

            return () => {

                componentMountend = false;
            };

        }

        getproducts();
    }, []);

    const Load = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>

                {/* <h1 className='text-center display-5 fw-200'>Loading....</h1> */}
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setfilter(updatedList);
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="buutons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2 " onClick={() => setfilter(data)} >All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothings</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothings</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jwerely</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title}
                                        height='250px' />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>

            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6fe-bolder text-center'>Latest Product</h1><hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    {loadind ? <Load /> : <ShowProduct />}
                </div>

            </div>

        </div>
    )
}


export const Looter = () => {
    const design = {
        backgroundColor: '#3b5998'
    }

    return (
        <>

            <footer className="bg-light text-center text-white">

                <div className="container p-4 pb-0">

                    <section className="mb-4">

                        <a
                            className="btn btn-primary btn-floating m-1"
                            href='https://www.facebook.com/Tofik Bavaliya'
                
                            style={design}
                        ><i className="fa fa-facebook-f"></i
                        ></a>


                       

                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: '#dd4b39' }}
                            href="https://www.google.com"
                            role="button"
                        ><i className="fa fa-google"></i
                        ></a>


                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: '#ac2bac' }}
                            href="https://www.instagram.com/tofik_bavaliya"
                            role="button"
                        ><i className="fa fa-instagram"></i
                        ></a>


                        <a
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: '#0082ca' }}
                            href="#!"
                            role="button"
                        ><i className="fa fa-linkedin"></i
                        ></a>

                       
                    </section>

                </div>



                <div className="text-center p-3 text-decoration-none" style={{ backgroundColor: 'black'}}>
                    © 2022 Copyright &nbsp;
                    <a className="text-white text-decoration-none" href="https://mdbootstrap.com/">TheRealShope.com</a>
                </div>

            </footer>

        </>
    )
}

<Looter />