import React from 'react';
import './App.css';
import {NavLink } from 'react-router-dom' ;

function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                    <img src={props.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.text}</p>
                        <NavLink to ={props.link} class="btn btn-primary">Go there</NavLink>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Card;