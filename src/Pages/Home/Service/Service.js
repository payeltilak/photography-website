import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';


const Service = ({ service }) => {
    const {id, name, price, img, Description } = service;
    const navigate = useNavigate();
    const navigateToLogin = id => {
        navigate(`/service/${id}`)
    }


    return (
        <div className='container'>
            <div className='service text-white'>

                <div className='text-center '>
                    <img src={img} alt="" />
                    <h1>{name}</h1>
                    <h4>${price}</h4>
                    <p><small>{Description}</small></p>
                    <button className='btn-primary rounded' onClick={()=>navigateToLogin(id)}>Book Now</button>
                </div>
            </div>
        </div>



    );
};

export default Service;