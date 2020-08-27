import React from 'react';
import './App.css';

import { NavLink } from 'react-router-dom';

function Common(props) {
    return (
        <section id="header" className="d-flex justify-content-center flex-column">

            <div className="container-fluid">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-containt-center flex-column">
                                <h1>
                                    Grow business with <strong className= "brand-name"> Leading.. </strong>
                                </h1>
                                <h2>
                                
                                    {props.name}
                                </h2>
                                <div className='mt-3'>
                                    <NavLink to={props.visit} className="btn-outline-success">{props.btname}</NavLink>
                                </div>
                            </div>

                            <div className="col-lg-6 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid animated" alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Common;